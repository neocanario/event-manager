import { useState } from 'react';
import { FaRss, FaExternalLinkAlt, FaClock, FaNewspaper } from 'react-icons/fa';
import './Rss.css';

const RSS_FEEDS = [
    {
        id: 1,
        name: 'Eventbrite Blog',
        url: 'https://www.eventbrite.com/blog/feed/',
        displayUrl: 'eventbrite.com/blog',
        description: 'Tips, trends and news about event management and planning.',
        category: 'Event Management',
    },
    {
        id: 2,
        name: 'BizBash',
        url: 'https://www.bizbash.com/rss.xml',
        displayUrl: 'bizbash.com',
        description: 'Ideas and resources for event and meeting professionals.',
        category: 'Event Industry',
    },
    {
        id: 3,
        name: 'React Blog',
        url: 'https://react.dev/blog/rss.xml',
        displayUrl: 'react.dev/blog',
        description: 'Official React blog with updates, releases and best practices.',
        category: 'Technology',
    },
    {
        id: 4,
        name: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/feed/',
        displayUrl: 'smashingmagazine.com',
        description: 'Web design and development articles, tutorials and inspiration.',
        category: 'Technology',
    },
    {
        id: 5,
        name: 'Event Manager Blog',
        url: 'https://www.eventmanagerblog.com/feed',
        displayUrl: 'eventmanagerblog.com',
        description: 'The latest news, tips and strategies for event professionals.',
        category: 'Event Management',
    },
];

const CATEGORIES = ['All', 'Event Management', 'Event Industry', 'Technology'];

export function Rss() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFeeds = RSS_FEEDS.filter(feed => {
        const matchesCategory = selectedCategory === 'All' || feed.category === selectedCategory;
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
                        <h1>RSS Feeds</h1>
                        <p className="rss-subtitle">
                            Stay up to date with the latest news in event management and web development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="rss-controls">
                <input
                    type="text"
                    className="rss-search"
                    placeholder="Search feeds..."
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
                    Click on any feed to open it in your RSS reader or browser. You can also copy the URL
                    and paste it into your favourite RSS reader like <strong>Feedly</strong>, <strong>Inoreader</strong> or <strong>NewsBlur</strong>.
                </p>
            </div>

            <div className="rss-grid">
                {filteredFeeds.length === 0 ? (
                    <div className="rss-empty">
                        <FaRss />
                        <p>No feeds found for your search.</p>
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
                                    aria-label={`Open ${feed.name} RSS feed`}
                                >
                                    <FaExternalLinkAlt />
                                    <span>Open Feed</span>
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
