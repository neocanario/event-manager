import { useState } from 'react';
import { useEvents } from '../../hooks/useEvents';
import './Finances.css';

export function Finances() {
    const { events } = useEvents();
    const [budget, setBudget] = useState({});
    const [expenses, setExpenses] = useState({});

    // Calcular totales
    const calculateTotals = () => {
        const totalBudget = Object.values(budget).reduce((sum, value) => sum + (parseFloat(value) || 0), 0);
        const totalExpenses = Object.values(expenses).reduce((sum, value) => sum + (parseFloat(value) || 0), 0);
        const balance = totalBudget - totalExpenses;
        return { totalBudget, totalExpenses, balance };
    };

    const { totalBudget, totalExpenses, balance } = calculateTotals();

    const handleBudgetChange = (eventId, value) => {
        setBudget(prev => ({ ...prev, [eventId]: value }));
    };

    const handleExpenseChange = (eventId, value) => {
        setExpenses(prev => ({ ...prev, [eventId]: value }));
    };

    const getBalanceClass = (eventBudget, eventExpense) => {
        const diff = (parseFloat(eventBudget) || 0) - (parseFloat(eventExpense) || 0);
        if (diff > 0) return 'positive';
        if (diff < 0) return 'negative';
        return 'neutral';
    };

    return (
        <main className="finances-page">
            <div className="finances-header">
                <h1>Finanzas</h1>
                <p className="finances-subtitle">Gestiona el presupuesto de tus eventos</p>
            </div>

            {/* Resumen General */}
            <div className="finances-summary">
                <div className="summary-card">
                    <h3>Presupuesto Total</h3>
                    <p className="amount positive">€{totalBudget.toFixed(2)}</p>
                </div>
                <div className="summary-card">
                    <h3>Gastos Totales</h3>
                    <p className="amount negative">€{totalExpenses.toFixed(2)}</p>
                </div>
                <div className="summary-card">
                    <h3>Balance</h3>
                    <p className={`amount ${balance >= 0 ? 'positive' : 'negative'}`}>
                        €{balance.toFixed(2)}
                    </p>
                </div>
            </div>

            {/* Lista de Eventos con Finanzas */}
            <div className="finances-list">
                <h2>Eventos</h2>
                {events.length === 0 ? (
                    <div className="no-finances">
                        <p>No hay eventos registrados</p>
                        <span>Crea un evento para comenzar a gestionar tus finanzas</span>
                    </div>
                ) : (
                    <div className="finances-grid">
                        {events.map(event => {
                            const eventBudget = budget[event.id] || '';
                            const eventExpense = expenses[event.id] || '';
                            const eventBalance = (parseFloat(eventBudget) || 0) - (parseFloat(eventExpense) || 0);

                            return (
                                <div key={event.id} className="finance-card">
                                    <div className="finance-card-header">
                                        <h3>{event.titulo}</h3>
                                        <span className="event-date">
                                            {new Date(event.dia).toLocaleDateString('es-ES', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <div className="finance-inputs">
                                        <div className="input-group">
                                            <label htmlFor={`budget-${event.id}`}>Presupuesto (€)</label>
                                            <input
                                                type="number"
                                                id={`budget-${event.id}`}
                                                value={eventBudget}
                                                onChange={(e) => handleBudgetChange(event.id, e.target.value)}
                                                placeholder="0.00"
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor={`expense-${event.id}`}>Gastos (€)</label>
                                            <input
                                                type="number"
                                                id={`expense-${event.id}`}
                                                value={eventExpense}
                                                onChange={(e) => handleExpenseChange(event.id, e.target.value)}
                                                placeholder="0.00"
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>
                                    </div>

                                    <div className={`finance-balance ${getBalanceClass(eventBudget, eventExpense)}`}>
                                        <span>Balance:</span>
                                        <strong>€{eventBalance.toFixed(2)}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}
