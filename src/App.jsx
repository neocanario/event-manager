import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';
import { Events } from './pages/events/Events';
import { Finances } from './pages/finances/Finances';
import { Footer } from './components/footer/Footer';
import { EventProvider } from './context/EventContext';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { CookiesPolicy } from './pages/legal/CookiesPolicy';
import { TermsConditions } from './pages/legal/TermsConditions';
import { Rss } from './pages/rss/Rss';
import { ImportExport } from './pages/import-export/ImportExport';

function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/finances" element={<Finances />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/rss" element={<Rss />} />
                <Route path="/import-export" element={<ImportExport />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </EventProvider>
  );
}

export default App;
