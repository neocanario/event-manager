import { FaTag, FaEdit, FaTrash } from 'react-icons/fa';
import './NewsCard.css';

export function NewsCard({ article, onEdit, onDelete }) {
    return (
        <article className="news-card">
            <div className="news-card-header">
                <span className="news-category-tag">
                    <FaTag className="tag-icon" />
                    {article.category}
                </span>
                <div className="news-card-actions">
                    <button
                        className="news-action-btn news-edit-btn"
                        onClick={() => onEdit(article)}
                        aria-label="Editar noticia"
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="news-action-btn news-delete-btn"
                        onClick={() => onDelete(article.id)}
                        aria-label="Eliminar noticia"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
            <h3 className="news-card-title">{article.title}</h3>
            <p className="news-card-summary">{article.summary}</p>
            <div className="news-card-footer">
                <span className="news-card-source">{article.source}</span>
                <span className="news-card-date">{article.date}</span>
            </div>
        </article>
    );
}
