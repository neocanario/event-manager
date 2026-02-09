import { useState } from 'react';
import './EventModal.css';

export function EventModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        titulo: '',
        dia: '',
        descripcion: '',
        horaInicio: '',
        horaFin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Reset form
        setFormData({
            titulo: '',
            dia: '',
            descripcion: '',
            horaInicio: '',
            horaFin: ''
        });
    };

    const handleCancel = () => {
        // Reset form
        setFormData({
            titulo: '',
            dia: '',
            descripcion: '',
            horaInicio: '',
            horaFin: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Crear Nuevo Evento</h2>
                
                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-group">
                        <label htmlFor="titulo">Título *</label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                            placeholder="Nombre del evento"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dia">Día *</label>
                        <input
                            type="date"
                            id="dia"
                            name="dia"
                            value={formData.dia}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            placeholder="Describe tu evento..."
                            rows="4"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="horaInicio">Hora de Inicio *</label>
                            <input
                                type="time"
                                id="horaInicio"
                                name="horaInicio"
                                value={formData.horaInicio}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="horaFin">Hora de Fin *</label>
                            <input
                                type="time"
                                id="horaFin"
                                name="horaFin"
                                value={formData.horaFin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={handleCancel}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-confirm">
                            Crear Evento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
