import { useState, useEffect, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { useEvents } from '../../hooks/useEvents';
import { NewsCard } from '../../components/news-card/NewsCard';
import { FaCalendarCheck, FaCalendarAlt, FaHistory, FaClock, FaPlus, FaTimes } from 'react-icons/fa';

const INITIAL_NEWS = [
    {
        id: 1,
        title: 'Las 10 tendencias en organización de eventos para 2026',
        summary: 'Los eventos híbridos siguen dominando el sector, combinando experiencias presenciales y virtuales para maximizar el alcance y la participación del público.',
        category: 'Tendencias',
        source: 'Eventbrite Blog',
        date: '15 Feb 2026',
    },
    {
        id: 2,
        title: 'Cómo usar la inteligencia artificial en la planificación de eventos',
        summary: 'Las herramientas de IA permiten automatizar tareas repetitivas como el envío de confirmaciones, la gestión de listas de invitados y la personalización de experiencias.',
        category: 'Tecnología',
        source: 'BizBash',
        date: '20 Feb 2026',
    },
    {
        id: 3,
        title: 'Sostenibilidad en eventos: guía práctica para reducir el impacto',
        summary: 'Cada vez más organizadores apuestan por materiales reciclados, catering de proximidad y la digitalización de materiales para hacer sus eventos más respetuosos con el medioambiente.',
        category: 'Sostenibilidad',
        source: 'Eventoplus',
        date: '22 Feb 2026',
    },
    {
        id: 4,
        title: 'React 19: novedades que debes conocer como desarrollador',
        summary: 'La nueva versión de React introduce mejoras en el rendimiento con el compilador de React, nuevos hooks y una experiencia de desarrollo más fluida.',
        category: 'Tecnología',
        source: 'React Blog',
        date: '25 Feb 2026',
    },
    {
        id: 5,
        title: 'El networking en eventos corporativos: claves para el éxito',
        summary: 'Diseñar espacios y dinámicas que faciliten la conexión entre asistentes es uno de los grandes retos de los organizadores de eventos profesionales.',
        category: 'Gestión',
        source: 'Forbes Events',
        date: '28 Feb 2026',
    },
    {
        id: 6,
        title: 'Herramientas de gestión de eventos más usadas en 2026',
        summary: 'Un repaso a las plataformas más populares del sector: desde la venta de entradas hasta la gestión integral de presupuestos y asistentes.',
        category: 'Gestión',
        source: 'Event Manager Blog',
        date: '01 Mar 2026',
    },
];

const NEWS_CATEGORIES = ['Todas', 'Tendencias', 'Tecnología', 'Sostenibilidad', 'Gestión'];

const EMPTY_ARTICLE = { title: '', summary: '', category: 'Tendencias', source: '', date: '' };

export function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { getEventsByDate, events } = useEvents();

    const [news, setNews] = useState(INITIAL_NEWS);
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

    const handleArticleSubmit = (e) => {
        e.preventDefault();
        if (isEditingArticle) {
            setNews(prev => prev.map(a => a.id === editingArticle.id ? { ...a, ...articleForm } : a));
        } else {
            setNews(prev => [...prev, { ...articleForm, id: Date.now() }]);
        }
        closeNewsForm();
    };

    const handleDeleteArticle = (id) => {
        if (window.confirm('¿Eliminar esta noticia?')) {
            setNews(prev => prev.filter(a => a.id !== id));
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
