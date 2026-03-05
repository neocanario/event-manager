import { useState } from 'react';
import { FaRss, FaExternalLinkAlt, FaNewspaper, FaCode } from 'react-icons/fa';
import './Rss.css';

const RSS_FEEDS = [
    
    {
        id: 1,
        name: 'BizBash',
        rssUrl: 'https://www.bizbash.com/rss.xml',
        displayUrl: 'bizbash.com/rss.xml',
        description: 'Ideas y recursos para profesionales de eventos y reuniones.',
        category: 'Sector Eventos',
    },
    {
        id: 2,
        name: 'React Blog',
        rssUrl: 'https://react.dev/rss.xml',
        displayUrl: 'react.dev/rss.xml',
        description: 'Blog oficial de React con actualizaciones, versiones y buenas prácticas.',
        category: 'Tecnología',
    },
    {
        id: 3,
        name: 'Smashing Magazine',
        rssUrl: 'https://www.smashingmagazine.com/feed/',
        displayUrl: 'smashingmagazine.com/feed/',
        description: 'Artículos, tutoriales e inspiración sobre diseño y desarrollo web.',
        category: 'Tecnología',
    },
    {
        id: 4,
        name: 'CSS-Tricks',
        rssUrl: 'https://css-tricks.com/feed/',
        displayUrl: 'css-tricks.com/feed/',
        description: 'Trucos, técnicas y artículos sobre CSS y desarrollo front-end.',
        category: 'Tecnología',
    },
];

const CATEGORIES = ['Todos', 'Gestión de Eventos', 'Sector Eventos', 'Tecnología'];

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

            <div className="rss-featured">
                <div className="rss-featured-label">
                    <FaRss className="rss-featured-icon" />
                    <span>Feed RSS principal de este proyecto</span>
                </div>
                <p className="rss-featured-description">
                    Accede al fichero RSS de <strong>Eventbrite Blog</strong>, fuente principal de noticias sobre gestión de eventos:
                </p>
                <a
                    href="https://www.eventbrite.com/blog/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rss-featured-link"
                >
                    <FaCode />
                    <span>https://www.eventbrite.com/blog/feed/</span>
                    <FaExternalLinkAlt className="rss-featured-external" />
                </a>
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
                    {CATEGORIES.map(category => (
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
                    Haz clic en <strong>Abrir Feed</strong> para ver el fichero RSS en bruto (XML). Puedes pegarlo en tu lector
                    favorito como <strong>Feedly</strong>, <strong>Inoreader</strong> o <strong>NewsBlur</strong>.
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
                                    href={feed.rssUrl}
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
