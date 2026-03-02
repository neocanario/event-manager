import { useState } from 'react';
import { useEvents } from '../../hooks/useEvents';
import { EventModal } from '../../components/event-modal/EventModal';
import './Events.css';

export function Events() {
    const { events, deleteEvent, updateEvent } = useEvents();
    const [filter, setFilter] = useState('all');
    const [editingEvent, setEditingEvent] = useState(null);

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.dia);
        if (filter === 'upcoming') return eventDate >= now;
        if (filter === 'past') return eventDate < now;
        return true;
    }).sort((a, b) => new Date(a.dia) - new Date(b.dia));

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este evento?')) {
            deleteEvent(id);
        }
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
    };

    const handleUpdate = (updatedData) => {
        updateEvent(editingEvent.id, updatedData);
        setEditingEvent(null);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { 
            weekday: 'long',
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    };

    return (
        <main className="events-page">
            <div className="events-header">
                <h1>Mis Eventos</h1>
                <p className="events-count">{filteredEvents.length} evento(s)</p>
            </div>

            <div className="events-filters">
                <button 
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Todos
                </button>
                <button 
                    className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setFilter('upcoming')}
                >
                    Próximos
                </button>
                <button 
                    className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
                    onClick={() => setFilter('past')}
                >
                    Pasados
                </button>
            </div>

            <div className="events-grid">
                {filteredEvents.length === 0 ? (
                    <div className="no-events">
                        <p>No hay eventos para mostrar</p>
                        <span>Crea un nuevo evento desde el botón del sidebar</span>
                    </div>
                ) : (
                    filteredEvents.map(event => (
                        <div key={event.id} className="event-item">
                            <div className="event-item-header">
                                <h3>{event.titulo}</h3>
                                <div className="event-item-actions">
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(event)}
                                        aria-label="Editar evento"
                                    >
                                        ✏️
                                    </button>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => handleDelete(event.id)}
                                        aria-label="Eliminar evento"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                            <div className="event-item-date">
                                <span className="date-icon">📅</span>
                                <span>{formatDate(event.dia)}</span>
                            </div>
                            <div className="event-item-time">
                                <span className="time-icon">🕒</span>
                                <span>{event.horaInicio} - {event.horaFin}</span>
                            </div>
                            {event.descripcion && (
                                <p className="event-item-description">{event.descripcion}</p>
                            )}
                        </div>
                    ))
                )}
            </div>

            <EventModal
                key={editingEvent?.id ?? 'new'}
                isOpen={Boolean(editingEvent)}
                onClose={() => setEditingEvent(null)}
                onSubmit={handleUpdate}
                eventToEdit={editingEvent}
            />
        </main>
    );
}
