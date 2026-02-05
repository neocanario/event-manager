import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';
import { Events } from './pages/events/Events';
import { Finances } from './pages/finances/Finances';
import { TermsConditions } from './pages/legal/TermsConditions';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { CookiesPolicy } from './pages/legal/CookiesPolicy';
import { Footer } from './components/footer/Footer';
import { EventProvider } from './context/EventContext';

function App() {
  

  return (
    <EventProvider>
      <BrowserRouter>
      <div className='app-wrapper'>

      
      <div className='app-container'>
        <Sidebar />

        <div className='main-content'>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
          </Routes>

        </div>
      </div>

        <Footer />
        
      </div>
      </BrowserRouter>
    </EventProvider>
  )
}

export default App
