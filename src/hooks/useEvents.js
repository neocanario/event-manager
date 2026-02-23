import { useContext } from 'react';
import { EventContext } from '../context/event-context-instance';

export function useEvents() {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvents must be used within an EventProvider');
    }
    return context;
}
