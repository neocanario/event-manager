# Event Manager 📅

A comprehensive web application for managing and organizing events with an integrated calendar, financial tracking, RSS feeds and event listing features.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![Firebase](https://img.shields.io/badge/Firebase-12.9.0-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌐 Live Demo

**[https://event-manager-69e90.web.app/](https://event-manager-69e90.web.app/)**

## 📋 Description

Event Manager is a modern, responsive web application designed to help users efficiently organize and manage their events. The platform provides an intuitive interface for creating, viewing, and tracking events, along with integrated financial management capabilities and a curated RSS feed section powered by Firebase Realtime Database.

## 🏠 Main Page Description

The home page features:
- **Interactive Calendar**: Visual representation of all scheduled events with date selection
- **Event Indicators**: Numbered badges showing the count of events for each day
- **Quick Stats Cards**: Dashboard cards displaying key metrics (total, upcoming, past and today's events)
- **Event Details Panel**: Displays full event information when a date is selected
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens

## 🛠️ Third-Party Components

This project uses the following third-party libraries:

- **[React Calendar](https://github.com/wojtekmaj/react-calendar)** - Interactive calendar component for date selection and event visualization
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library for UI elements (GitHub, Instagram, LinkedIn, Figma, RSS icons)
- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React applications
- **[Firebase](https://firebase.google.com/)** - Realtime Database for reading and filtering RSS feed data by category

## 📚 Tutorials and Resources

Resources used during development:

- [React Documentation](https://react.dev/) - Official React documentation
- [Vite Guide](https://vitejs.dev/guide/) - Vite build tool documentation
- [React Calendar Documentation](https://github.com/wojtekmaj/react-calendar) - Calendar component setup
- [Firebase Realtime Database Guide](https://firebase.google.com/docs/database/web/start) - Reading and writing data with Firebase
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Flexbox layout reference
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [Best README Template](https://github.com/othneildrew/Best-README-Template) - README structure inspiration

## 🎨 Design Inspiration

The design was inspired by modern event management platforms with a focus on:
- Dark mode UI for reduced eye strain
- Clean, minimalist interface
- Intuitive navigation
- Clear visual hierarchy

**[View Figma Design →](https://taps-yang-99607121.figma.site/)**

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/neocanario/event-manager.git
cd event-manager
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
event-manager/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # Reusable components
│   │   ├── event-modal/ # Event creation modal
│   │   ├── footer/     # Footer component
│   │   ├── header/     # Header component
│   │   └── sidebar/    # Sidebar navigation
│   ├── context/        # React Context for state management
│   │   ├── EventContext.jsx
│   │   └── event-context-instance.js
│   ├── hooks/          # Custom React hooks
│   │   ├── useEvents.js
│   │   └── useRssFeeds.js
│   ├── pages/          # Page components
│   │   ├── events/     # Events list page
│   │   ├── finances/   # Financial management page
│   │   ├── home/       # Home page with calendar
│   │   ├── legal/      # Legal pages (Privacy, Cookies, Terms)
│   │   └── rss/        # RSS feeds page (Firebase Realtime Database)
│   ├── services/
│   │   └── firebase.js # Firebase configuration
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── index.css       # Root styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ✨ Features

- ✅ **Event Creation**: Create events with title, date, time and description
- ✅ **Calendar View**: Interactive calendar with event indicators showing event count per day
- ✅ **Event Management**: View, filter and delete events with ease
- ✅ **Financial Tracking**: Manage budgets and expenses per event
- ✅ **RSS Feeds**: Curated RSS feed directory loaded from Firebase Realtime Database with category filtering
- ✅ **Legal Pages**: Privacy Policy, Cookies Policy and Terms & Conditions
- ✅ **Data Persistence**: Events automatically saved in browser's LocalStorage
- ✅ **Responsive Design**: Fully responsive — works seamlessly on mobile, tablet, and desktop
- ✅ **Dark Theme**: Modern dark mode interface for comfortable viewing

## 🎯 Available Pages

- **Home** (`/` or `/home`) - Interactive calendar view with event details and quick stats
- **Events** (`/events`) - Complete list of all events with filter capabilities
- **Finances** (`/finances`) - Budget and expense tracking for all events
- **RSS Feeds** (`/rss`) - Curated RSS feeds loaded from Firebase, filterable by category
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page
- **Cookies Policy** (`/cookies-policy`) - Cookies policy page
- **Terms & Conditions** (`/terms-conditions`) - Terms and conditions page

## 🎨 Color Palette

```css
--bg-primary: #101922    /* Main background */
--bg-secondary: #0F172A  /* Cards and containers */
--accent: #137FEC        /* Buttons and highlights */
--text-primary: #F0F0DB  /* Main text color */
--rss-accent: #FF6B35    /* RSS section accent */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px – 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **React Router DOM 7.13.0** - Declarative client-side routing
- **React Calendar 6.0.0** - Interactive calendar component
- **React Icons 5.5.0** - Comprehensive icon library
- **Firebase 12.9.0** - Realtime Database for RSS feed data
- **CSS3** - Modern styling with Flexbox and Grid layouts
- **LocalStorage API** - Persistent data storage in browser

## 🌿 Branch Strategy

| Branch | Description |
|--------|-------------|
| `main` | Latest stable version (Segunda Entrega) |
| `SegundaEntrega` | Second delivery snapshot |
| `develop` | Development branch |
| `PrimeraEntrega` | First delivery snapshot |

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Joel Sanchez**
- GitHub: [@neocanario](https://github.com/neocanario)
- Instagram: [@joelchdz24](https://www.instagram.com/joelchdz24/)
- LinkedIn: [joel-sanchez-dev](https://www.linkedin.com/in/joel-sanchez-dev/)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing fast build tool
- React Calendar contributors
- Firebase team for the Realtime Database
- All open-source contributors

---

⭐ If you find this project useful, please consider giving it a star on GitHub!


## 📋 Description

Event Manager is a modern, responsive web application designed to help users efficiently organize and manage their events. The platform provides an intuitive interface for creating, viewing, and tracking events, along with integrated financial management capabilities.

## 🏠 Main Page Description

The home page features:
- **Interactive Calendar**: Visual representation of all scheduled events with date selection
- **Event Indicators**: Numbered badges showing the count of events for each day
- **Quick Stats Cards**: Dashboard cards displaying key metrics
- **Event Details Panel**: Displays full event information when a date is selected
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens

## 🛠️ Third-Party Components

This project uses the following third-party libraries:

- **[React Calendar](https://github.com/wojtekmaj/react-calendar)** - Interactive calendar component for date selection and event visualization
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library for UI elements (GitHub, Instagram, LinkedIn, Figma icons)
- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React applications

## 📚 Tutorials and Resources

Resources used during development:

- [React Documentation](https://react.dev/) - Official React documentation
- [Vite Guide](https://vitejs.dev/guide/) - Vite build tool documentation
- [React Calendar Documentation](https://github.com/wojtekmaj/react-calendar) - Calendar component setup
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Flexbox layout reference
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference

## 🎨 Design Inspiration

The design was inspired by modern event management platforms with a focus on:
- Dark mode UI for reduced eye strain
- Clean, minimalist interface
- Intuitive navigation
- Clear visual hierarchy

**[View Figma Design →](https://taps-yang-99607121.figma.site/)**

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/neocanario/event-manager.git
cd event-manager
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
event-manager/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # Reusable components
│   │   ├── event-modal/ # Event creation modal
│   │   ├── footer/     # Footer component
│   │   ├── header/     # Header component
│   │   └── sidebar/    # Sidebar navigation
│   ├── pages/          # Page components
│   │   ├── events/     # Events list page
│   │   ├── finances/   # Financial management page
│   │   └── home/       # Home page with calendar
│   ├── context/        # React Context for state management
│   │   ├── EventContext.jsx
│   │   └── eventContextInstance.js
│   ├── hooks/          # Custom React hooks
│   │   └── useEvents.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── index.css       # Root styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ✨ Features

- ✅ **Event Creation**: Create events with title, date, time, location, and description
- ✅ **Calendar View**: Interactive calendar with event indicators showing event count per day
- ✅ **Event Management**: View, filter, and delete events with ease
- ✅ **Financial Tracking**: Manage budgets and expenses per event
- ✅ **Data Persistence**: Events automatically saved in browser's LocalStorage
- ✅ **Responsive Design**: Fully responsive - works seamlessly on mobile, tablet, and desktop
- ✅ **Dark Theme**: Modern dark mode interface for comfortable viewing
- ✅ **Real-time Updates**: Instant synchronization across all views

## 🎯 Available Pages

- **Home** (`/` or `/home`) - Interactive calendar view with event details and quick stats
- **Events** (`/events`) - Complete list of all events with search and filter capabilities
- **Finances** (`/finances`) - Budget and expense tracking for all events

## 🎨 Color Palette

```css
--bg-primary: #101922    /* Main background */
--bg-secondary: #0F172A  /* Cards and containers */
--accent: #137FEC        /* Buttons and highlights */
--text-primary: #F0F0DB  /* Main text color */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **React Router DOM 7.13.0** - Declarative client-side routing
- **React Calendar 6.0.0** - Interactive calendar component
- **React Icons 5.5.0** - Comprehensive icon library
- **CSS3** - Modern styling with Flexbox and Grid layouts
- **LocalStorage API** - Persistent data storage in browser

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Joel Sanchez**
- GitHub: [@neocanario](https://github.com/neocanario)
- Instagram: [@joelchdz24](https://www.instagram.com/joelchdz24/)
- LinkedIn: [joel-sanchez-dev](https://www.linkedin.com/in/joel-sanchez-dev/)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing fast build tool
- React Calendar contributors
- All open-source contributors

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
