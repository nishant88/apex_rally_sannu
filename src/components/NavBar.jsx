import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Driver', path: '/driver' },
        { name: 'Results', path: '/results' },
        { name: 'Rally Journey', path: '#' },
        { name: 'Media', path: '#' },
        { name: 'Sponsorship', path: '/sponsorship' },
    ];

    const isActive = (path) => {
        if (path === '#') return false;
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 w-full z-[100] bg-background/90 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
            <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1920px] mx-auto">
                <div 
                    onClick={() => navigate('/')} 
                    className="font-headline-md text-headline-md font-bold tracking-tighter text-primary cursor-pointer select-none"
                >
                    APEX RALLY
                </div>
                
                <div className="hidden lg:flex items-center gap-8 font-data-label text-data-label uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path}
                            className={`${isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 scale-95 active:scale-90`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link 
                    to="/sponsorship" 
                    className="hidden md:block bg-racing-red text-white font-data-label text-data-label uppercase px-6 py-3 hover:bg-on-primary-fixed-variant transition-colors"
                >
                    BECOME A PARTNER
                </Link>

                <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-background border-b border-outline-variant p-margin-mobile flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-data-label text-data-label uppercase tracking-widest text-on-surface-variant py-2 border-b border-[#252525]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        to="/sponsorship" 
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-racing-red text-white text-center py-4 uppercase font-data-label mt-4"
                    >
                        Become a Partner
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
