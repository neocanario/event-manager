import { useState } from 'react';
import { FaRss, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';
import './Rss.css';
import { RSS_FEEDS, RSS_CATEGORIES } from '../../information/rss-data';

export function Rss() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFeeds = RSS_FEEDS.filter(feed => {
        const matchesCategory = selectedCategory === 'Todos' || feed.category === selectedCategory;
        const matchesSearch = feed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            feed.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="rss-page">
            <div className="rss-header">
                <div className="rss-title-group">
                    <FaRss className="rss-main-icon" />
                    <div>
                        <h1>Feeds RSS</h1>
                        <p className="rss-subtitle">
                            Mantente al día con las últimas noticias sobre gestión de eventos y desarrollo web.
                        </p>
                    </div>
                </div>
            </div>

            <div className="rss-controls">
                <input
                    type="text"
                    className="rss-search"
                    placeholder="Buscar feeds..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="rss-categories">
                    {RSS_CATEGORIES.map(category => (
                        <button
                            key={category}
                            className={`rss-category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="rss-info-banner">
                <FaNewspaper className="banner-icon" />
                <p>
                    Haz clic en cualquier feed para abrirlo en tu lector RSS o navegador. También puedes copiar la URL
                    y pegarla en tu lector favorito como <strong>Feedly</strong>, <strong>Inoreader</strong> o <strong>NewsBlur</strong>.
                </p>
            </div>

            <div className="rss-grid">
                {filteredFeeds.length === 0 ? (
                    <div className="rss-empty">
                        <FaRss />
                        <p>No se encontraron feeds para tu búsqueda.</p>
                    </div>
                ) : (
                    filteredFeeds.map(feed => (
                        <div key={feed.id} className="rss-card">
                            <div className="rss-card-header">
                                <span className="rss-category-tag">{feed.category}</span>
                                <FaRss className="rss-card-icon" />
                            </div>
                            <h3 className="rss-card-title">{feed.name}</h3>
                            <p className="rss-card-description">{feed.description}</p>
                            <div className="rss-card-footer">
                                <span className="rss-card-url">{feed.displayUrl}</span>
                                <a
                                    href={feed.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rss-card-link"
                                    aria-label={`Abrir feed RSS de ${feed.name}`}
                                >
                                    <FaExternalLinkAlt />
                                    <span>Abrir Feed</span>
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
