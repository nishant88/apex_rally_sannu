import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DriverProfile from './pages/DriverProfile';
import Sponsorship from './pages/Sponsorship';
import Results from './pages/Results';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driver" element={<DriverProfile />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
