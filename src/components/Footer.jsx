import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-surface-container-lowest pt-section-gap pb-10 border-t border-outline-variant mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop mx-auto max-w-7xl">
                <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
                    <span className="font-headline-md text-headline-md text-primary font-bold">APEX RALLY</span>
                    <p className="font-data-label text-data-label text-on-surface-variant uppercase">
                        © 2024 APEX RALLY RACING. ALL RIGHTS RESERVED.
                    </p>
                </div>
                <div className="col-span-1 md:col-span-8 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end items-center font-data-label text-data-label text-on-surface-variant">
                    <Link to="/sponsorship" className="hover:text-on-surface transition-colors opacity-80 hover:opacity-100 uppercase">
                        START THE CONVERSATION
                    </Link>
                    <a href="#" className="hover:text-on-surface transition-colors opacity-80 hover:opacity-100 uppercase">
                        INSTAGRAM
                    </a>
                    <a href="#" className="hover:text-on-surface transition-colors opacity-80 hover:opacity-100 uppercase">
                        YOUTUBE
                    </a>
                    <a href="#" className="hover:text-on-surface transition-colors opacity-80 hover:opacity-100 uppercase">
                        PRIVACY POLICY
                    </a>
                    <a href="#" className="hover:text-on-surface transition-colors opacity-80 hover:opacity-100 uppercase">
                        TECHNICAL SPECS
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
