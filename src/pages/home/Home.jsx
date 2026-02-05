import { useState, useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { useEvents } from '../../hooks/useEvents';
import { FaCalendarCheck, FaCalendarAlt, FaHistory, FaClock } from 'react-icons/fa';


export function Home () {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { getEventsByDate, events } = useEvents();
    
    const selectedDateEvents = getEventsByDate(selectedDate);

    // Calcular estadísticas
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
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
        {
            id: 1,
            title: 'Total Events',
            value: events.length,
            icon: <FaCalendarAlt />,
            color: '#137FEC'
        },
        {
            id: 2,
            title: 'Upcoming Events',
            value: upcomingEvents.length,
            icon: <FaCalendarCheck />,
            color: '#10B981'
        },
        {
            id: 3,
            title: 'Past Events',
            value: pastEvents.length,
            icon: <FaHistory />,
            color: '#6B7280'
        },
        {
            id: 4,
            title: 'Today',
            value: todayEvents.length,
            icon: <FaClock />,
            color: '#F59E0B'
        }
    ];

    // Agregar o quitar clase según si hay eventos
    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (selectedDateEvents.length > 0) {
            mainContent?.classList.add('has-events');
        } else {
            mainContent?.classList.remove('has-events');
        }
    }, [selectedDateEvents.length]);

    // Función para marcar días con eventos
    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayEvents = getEventsByDate(date);
            if (dayEvents.length > 0) {
                return <div className="event-indicator">{dayEvents.length}</div>;
            }
        }
        return null;
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

        </main>
    )
}