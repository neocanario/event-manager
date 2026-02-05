# Event Manager 📅

A comprehensive web application for managing and organizing events with an integrated calendar, financial tracking, and event listing features.

![Event Manager](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![License](https://img.shields.io/badge/license-MIT-green)

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

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd event-proyet
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
event-proyet/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── EventModal/  # Event creation modal
│   │   ├── footer/      # Footer component
│   │   ├── header/      # Header component
│   │   └── sidebar/     # Sidebar navigation
│   ├── pages/          # Page components
│   │   ├── events/     # Events list page
│   │   ├── finances/   # Financial management page
│   │   ├── home/       # Home page with calendar
│   │   └── legal/      # Legal pages (Terms, Privacy, Cookies)
│   ├── context/        # React Context for state management
│   │   ├── EventContext.jsx
│   │   └── eventContextInstance.js
│   ├── hooks/          # Custom React hooks
│   │   └── useEvents.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✨ Features

- ✅ **Event Creation**: Create events with title, date, time, and description
- ✅ **Calendar View**: Interactive calendar with event indicators
- ✅ **Event Management**: View, filter, and delete events
- ✅ **Financial Tracking**: Manage budgets and expenses per event
- ✅ **Data Persistence**: Events saved in browser's LocalStorage
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Dark Theme**: Modern dark mode interface
- ✅ **Legal Pages**: Terms, Privacy Policy, and Cookies Policy

## 🎯 Available Pages

- **Home** (`/` or `/home`) - Calendar view and event details
- **Events** (`/events`) - Complete list of events with filters
- **Finances** (`/finances`) - Budget and expense tracking
- **Terms** (`/terms`) - Terms and Conditions
- **Privacy** (`/privacy`) - Privacy Policy
- **Cookies** (`/cookies`) - Cookies Policy

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

- **React 18.3.1** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Calendar** - Calendar component
- **React Icons** - Icon library
- **CSS3** - Styling with Flexbox and Grid
- **LocalStorage API** - Data persistence

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
