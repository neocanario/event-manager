import { Link } from "react-router-dom"
import { useState } from "react";
import './Sidebar.css';
import { EventModal } from "../EventModal/EventModal";
import { useEvents } from "../../hooks/useEvents";

export function Sidebar () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addEvent } = useEvents();

    const handleCreateEvent = (eventData) => {
        addEvent(eventData);
        console.log('Nuevo evento creado:', eventData);
        setIsModalOpen(false);
    };

    return (
        <>
            <aside className='sideBar'>
                <div>
                    <div className='logo-section'>
                        <h1>Event Manager</h1>
                    </div>
                    <nav className='side-nav'>
                        <ul>
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/finances">Finances</Link></li>
                        </ul>
                    </nav>
                </div>
                <button className="create-btn" onClick={() => setIsModalOpen(true)}>
                    + Create Event
                </button>
            </aside>

            <EventModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleCreateEvent}
            />
        </>
    )
}