import { useState, useEffect } from 'react';
import { EventContext } from './eventContextInstance';

export function EventProvider({ children }) {
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem('events');
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const addEvent = (event) => {
        const newEvent = {
            ...event,
            id: Date.now(),
        };
        setEvents(prev => [...prev, newEvent]);
    };

    const deleteEvent = (id) => {
        setEvents(prev => prev.filter(event => event.id !== id));
    };

    const getEventsByDate = (date) => {
        return events.filter(event => {
            const eventDate = new Date(event.dia);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    return (
        <EventContext.Provider value={{ events, addEvent, deleteEvent, getEventsByDate }}>
            {children}
        </EventContext.Provider>
    );
}
