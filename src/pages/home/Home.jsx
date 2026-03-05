import { useState, useEffect, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { useEvents } from '../../hooks/useEvents';
import { NewsCard } from '../../components/news-card/NewsCard';
import { FaCalendarCheck, FaCalendarAlt, FaHistory, FaClock, FaPlus, FaTimes, FaCheck, FaTrash } from 'react-icons/fa';
import { INITIAL_NEWS, NEWS_CATEGORIES, EMPTY_ARTICLE } from '../../information/news-data';
import { db } from '../../fireabse';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { getEventsByDate, events } = useEvents();

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const [news, setNews] = useState([]);
    const [newsCategory, setNewsCategory] = useState('Todas');
    const [newsSearch, setNewsSearch] = useState('');
    const [isNewsFormOpen, setIsNewsFormOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState(null);
    const [articleForm, setArticleForm] = useState(EMPTY_ARTICLE);

    const isEditingArticle = Boolean(editingArticle);

    const selectedDateEvents = getEventsByDate(selectedDate);

    const today = useMemo(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }, []);

    const upcomingEvents = events.filter(event => {
        const eventDate = new Date(event.dia);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
    });

    const pastEvents = events.filter(event => {
        const eventDate = new Date(event.dia);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate < today;
    });

    const todayEvents = getEventsByDate(today);

    const stats = [
        { id: 1, title: 'Total Events',    value: events.length,         icon: <FaCalendarAlt />,   color: '#137FEC' },
        { id: 2, title: 'Upcoming Events', value: upcomingEvents.length, icon: <FaCalendarCheck />, color: '#10B981' },
        { id: 3, title: 'Past Events',     value: pastEvents.length,     icon: <FaHistory />,       color: '#6B7280' },
        { id: 4, title: 'Today',           value: todayEvents.length,    icon: <FaClock />,         color: '#F59E0B' },
    ];

    useEffect(() => {
        const tasksCollection = collection(db, 'tasks');
        const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
            const tasksData = snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id }));
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, []);

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!taskInput.trim()) return;
        await addDoc(collection(db, 'tasks'), { text: taskInput.trim(), done: false });
        setTaskInput('');
    };

    const handleToggleTask = async (task) => {
        await updateDoc(doc(db, 'tasks', task.id), { done: !task.done });
    };

    const handleDeleteTask = async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
    };

    useEffect(() => {
        const newsCollection = collection(db, 'news');
        const unsubscribe = onSnapshot(newsCollection, async (snapshot) => {
            if (snapshot.empty) {
                for (const article of INITIAL_NEWS) {
                    const { id, ...articleData } = article;
                    await addDoc(newsCollection, articleData);
                }
            } else {
                const newsData = snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id }));
                setNews(newsData);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (selectedDateEvents.length > 0) {
            mainContent?.classList.add('has-events');
        } else {
            mainContent?.classList.remove('has-events');
        }
    }, [selectedDateEvents.length]);

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayEvents = getEventsByDate(date);
            if (dayEvents.length > 0) {
                return <div className="event-indicator">{dayEvents.length}</div>;
            }
        }
        return null;
    };

    const filteredNews = news.filter(article => {
        const matchesCategory = newsCategory === 'Todas' || article.category === newsCategory;
        const matchesSearch =
            article.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
            article.summary.toLowerCase().includes(newsSearch.toLowerCase()) ||
            article.source.toLowerCase().includes(newsSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openNewArticleForm = () => {
        setEditingArticle(null);
        setArticleForm(EMPTY_ARTICLE);
        setIsNewsFormOpen(true);
    };

    const openEditArticleForm = (article) => {
        setEditingArticle(article);
        setArticleForm({ title: article.title, summary: article.summary, category: article.category, source: article.source, date: article.date });
        setIsNewsFormOpen(true);
    };

    const closeNewsForm = () => {
        setIsNewsFormOpen(false);
        setEditingArticle(null);
        setArticleForm(EMPTY_ARTICLE);
    };

    const handleArticleFormChange = (e) => {
        const { name, value } = e.target;
        setArticleForm(prev => ({ ...prev, [name]: value }));
    };

    const handleArticleSubmit = async (e) => {
        e.preventDefault();
        if (isEditingArticle) {
            await updateDoc(doc(db, 'news', editingArticle.id), articleForm);
        } else {
            await addDoc(collection(db, 'news'), articleForm);
        }
        closeNewsForm();
    };

    const handleDeleteArticle = async (id) => {
        if (window.confirm('¿Eliminar esta noticia?')) {
            await deleteDoc(doc(db, 'news', id));
        }
    };

    return (
        <main>
            {/* Stats Section */}
            <section className='stats-section'>
                <div className='stats-grid'>
                    {stats.map(stat => (
                        <div key={stat.id} className='stat-card'>
                            <div className='stat-icon' style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className='stat-info'>
                                <p className='stat-title'>{stat.title}</p>
                                <p className='stat-value'>{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='calendar-section'>
                <div className='calendar-content'>
                    <h2>Calendar</h2>
                </div>
                
                <Calendar 
                    className='Calendar'
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileContent={tileContent}
                />

                {selectedDateEvents.length > 0 && (
                    <div className='events-list'>
                        <h3>Eventos del {selectedDate.toLocaleDateString('es-ES', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                        })}</h3>
                        {selectedDateEvents.map(event => (
                            <div key={event.id} className='event-card'>
                                <h4>{event.titulo}</h4>
                                <p className='event-time'>
                                    {event.horaInicio} - {event.horaFin}
                                </p>
                                {event.descripcion && (
                                    <p className='event-description'>{event.descripcion}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Tasks Section */}
            <section className='tasks-section'>
                <div className='tasks-header'>
                    <div>
                        <h2 className='tasks-title'>Tareas rápidas</h2>
                        <p className='tasks-subtitle'>Anota pendientes y márcalos como completados</p>
                    </div>
                </div>

                <form className='task-form' onSubmit={handleAddTask}>
                    <input
                        type='text'
                        className='task-input'
                        placeholder='Nueva tarea...'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button type='submit' className='task-add-btn'>
                        <FaPlus />
                        <span>Añadir</span>
                    </button>
                </form>

                {tasks.length === 0 ? (
                    <div className='tasks-empty'>
                        <p>No hay tareas. ¡Añade una!</p>
                    </div>
                ) : (
                    <ul className='tasks-list'>
                        {tasks.map(task => (
                            <li key={task.id} className={`task-item ${task.done ? 'task-done' : ''}`}>
                                <button
                                    className={`task-check-btn ${task.done ? 'checked' : ''}`}
                                    onClick={() => handleToggleTask(task)}
                                    aria-label='Completar tarea'
                                >
                                    {task.done && <FaCheck />}
                                </button>
                                <span className='task-text'>{task.text}</span>
                                <button
                                    className='task-delete-btn'
                                    onClick={() => handleDeleteTask(task.id)}
                                    aria-label='Eliminar tarea'
                                >
                                    <FaTrash />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* News Section */}
            <section className='news-section'>
                <div className='news-section-header'>
                    <div>
                        <h2 className='news-section-title'>Noticias del Sector</h2>
                        <p className='news-section-subtitle'>Artículos sobre eventos, tecnología y tendencias</p>
                    </div>
                    <button className='news-add-btn' onClick={openNewArticleForm}>
                        <FaPlus />
                        <span>Añadir noticia</span>
                    </button>
                </div>

                <div className='news-controls'>
                    <input
                        type='text'
                        className='news-search'
                        placeholder='Buscar noticias...'
                        value={newsSearch}
                        onChange={(e) => setNewsSearch(e.target.value)}
                    />
                    <div className='news-categories'>
                        {NEWS_CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`news-category-btn ${newsCategory === cat ? 'active' : ''}`}
                                onClick={() => setNewsCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {isNewsFormOpen && (
                    <div className='news-form-overlay' onClick={closeNewsForm}>
                        <div className='news-form-modal' onClick={(e) => e.stopPropagation()}>
                            <div className='news-form-modal-header'>
                                <h3>{isEditingArticle ? 'Editar noticia' : 'Nueva noticia'}</h3>
                                <button className='news-form-close-btn' onClick={closeNewsForm} aria-label='Cerrar'>
                                    <FaTimes />
                                </button>
                            </div>
                            <form className='news-form' onSubmit={handleArticleSubmit}>
                                <div className='news-form-group'>
                                    <label htmlFor='news-title'>Título *</label>
                                    <input
                                        id='news-title'
                                        type='text'
                                        name='title'
                                        value={articleForm.title}
                                        onChange={handleArticleFormChange}
                                        placeholder='Título del artículo'
                                        required
                                    />
                                </div>
                                <div className='news-form-group'>
                                    <label htmlFor='news-summary'>Resumen *</label>
                                    <textarea
                                        id='news-summary'
                                        name='summary'
                                        value={articleForm.summary}
                                        onChange={handleArticleFormChange}
                                        placeholder='Breve descripción del artículo'
                                        rows='3'
                                        required
                                    />
                                </div>
                                <div className='news-form-row'>
                                    <div className='news-form-group'>
                                        <label htmlFor='news-category'>Categoría *</label>
                                        <select
                                            id='news-category'
                                            name='category'
                                            value={articleForm.category}
                                            onChange={handleArticleFormChange}
                                        >
                                            {NEWS_CATEGORIES.filter(c => c !== 'Todas').map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='news-form-group'>
                                        <label htmlFor='news-source'>Fuente *</label>
                                        <input
                                            id='news-source'
                                            type='text'
                                            name='source'
                                            value={articleForm.source}
                                            onChange={handleArticleFormChange}
                                            placeholder='Nombre de la fuente'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='news-form-group'>
                                    <label htmlFor='news-date'>Fecha *</label>
                                    <input
                                        id='news-date'
                                        type='date'
                                        name='date'
                                        value={articleForm.date}
                                        onChange={handleArticleFormChange}
                                        required
                                    />
                                </div>
                                <div className='news-form-actions'>
                                    <button type='button' className='news-form-cancel-btn' onClick={closeNewsForm}>
                                        Cancelar
                                    </button>
                                    <button type='submit' className='news-form-submit-btn'>
                                        {isEditingArticle ? 'Guardar cambios' : 'Añadir noticia'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {filteredNews.length === 0 ? (
                    <div className='news-empty'>
                        <p>No se encontraron noticias para tu búsqueda.</p>
                    </div>
                ) : (
                    <div className='news-grid'>
                        {filteredNews.map(article => (
                            <NewsCard
                                key={article.id}
                                article={article}
                                onEdit={openEditArticleForm}
                                onDelete={handleDeleteArticle}
                            />
                        ))}
                    </div>
                )}
            </section>

        </main>
    )
}
