import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-500 bg-background text-on-background font-body-md antialiased overflow-x-hidden">
            <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background z-10"></div>
                    <img 
                        className="w-full h-full object-cover object-center" 
                        src="/hero_rally_car.jpg" 
                        alt="Cinematic rally car drifting"
                    />
                </div>
                
                <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop md:grid md:grid-cols-12 gap-gutter items-end pb-20 h-full">
                    <div className="col-span-12 md:col-span-8 flex flex-col justify-end">
                        <div className="mb-6 flex gap-4 flex-wrap">
                            <span className="bg-surface-container-low text-primary font-data-label text-data-label px-3 py-1 border border-[#252525]">
                                ASPIRING RALLY DRIVER
                            </span>
                            <span className="bg-surface-container-low text-on-surface font-data-label text-data-label px-3 py-1 border border-[#252525]">
                                WRC2 CATEGORY
                            </span>
                            <span className="bg-surface-container-low text-on-surface font-data-label text-data-label px-3 py-1 border border-[#252525] hidden md:inline-block">
                                CENTRAL EUROPE
                            </span>
                        </div>
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 leading-none">
                            BUILT FOR THE STAGE.<br/>
                            <span className="text-racing-red">DRIVEN TO COMPETE.</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link 
                                to="/sponsorship" 
                                className="bg-racing-red text-white font-data-label text-data-label uppercase px-8 py-4 text-center hover:bg-on-primary-fixed-variant transition-colors border border-transparent"
                            >
                                BECOME A PARTNER
                            </Link>
                            <Link 
                                to="/driver" 
                                className="bg-transparent text-white font-data-label text-data-label uppercase px-8 py-4 text-center border border-white hover:bg-white hover:text-background transition-colors"
                            >
                                VIEW DRIVER PROFILE
                            </Link>
                        </div>
                    </div>

                    {/* Telemetry Stats Overlay */}
                    <div className="col-span-12 md:col-span-4 mt-12 md:mt-0 flex flex-col gap-4">
                        <div className="bg-surface-container-lowest/80 backdrop-blur-md p-6 border border-[#252525] relative">
                            <span className="data-card-index">TELEMETRY_01</span>
                            <p className="font-data-label text-data-label text-outline mb-1 uppercase">Age</p>
                            <p className="font-headline-md text-headline-md text-on-surface">22</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-container-lowest/80 backdrop-blur-md p-6 border border-[#252525] relative">
                                <span className="data-card-index">T_02</span>
                                <p className="font-data-label text-data-label text-outline mb-1 uppercase">Starts</p>
                                <p className="font-headline-md text-headline-md text-on-surface">45</p>
                            </div>
                            <div className="bg-surface-container-lowest/80 backdrop-blur-md p-6 border border-racing-red border-t-2 relative">
                                <span className="data-card-index">T_03</span>
                                <p className="font-data-label text-data-label text-outline mb-1 uppercase">Podiums</p>
                                <p className="font-headline-md text-headline-md text-on-surface text-primary">12</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest/80 backdrop-blur-md p-6 border border-[#252525] relative">
                            <span className="data-card-index">T_04</span>
                            <p className="font-data-label text-data-label text-outline mb-1 uppercase">Stage Wins</p>
                            <p className="font-headline-md text-headline-md text-on-surface">28</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid-bg">
                {/* Story & Latest Result Bento */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
                    {/* Story Teaser */}
                    <div className="col-span-1 md:col-span-7 bg-surface-container-lowest p-8 border border-[#252525] relative flex flex-col justify-between min-h-[400px]">
                        <span className="data-card-index">SEC_01_NARRATIVE</span>
                        <div>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase border-b border-[#252525] pb-4 inline-block">
                                The Pursuit of Pace
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">
                                Precision engineering meets human determination. Born in the dense forests of Central Europe, the journey from karting local tracks to conquering international rally stages is paved with unwavering discipline and technical excellence. Every stage is a calculation; every corner a commitment.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link 
                                to="/driver" 
                                className="inline-flex items-center gap-2 text-primary font-data-label text-data-label hover:text-white transition-colors group"
                            >
                                READ FULL BIO <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Latest Result */}
                    <div className="col-span-1 md:col-span-5 bg-surface-container-lowest border border-[#252525] relative overflow-hidden group">
                        <span className="data-card-index z-20">SEC_02_RESULT</span>
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0">
                            <img 
                                className="w-full h-full object-cover grayscale" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWM26iW2TDuNX1JsgTLjUZitak2wkZtFfa7TtI4cRjlVOLUKpyXMrGoY5w2Agayro64GbAWuSOXA70khRkzfHzDIrV5qzOMxRrx-vWvEFONqrpnVniIzTEH4p2V1BOiwPp-BYKqM0YYUyNtDBJe-TVQplLfUK7QFA2ntkLavbQkHHBSsYOaYHH_7ujU-TXeBCxBUi5VjR1hPr3K5JfxZWUtaf9H-rzkxL0Vwubey8PDwAQAE3prQFV" 
                                alt="Rally car wheel suspension"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
                        <div className="relative z-20 h-full p-8 flex flex-col justify-end">
                            <p className="font-data-label text-data-label text-racing-red mb-2 uppercase">Latest Event // P2 Overall</p>
                            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">Rally Bohemia</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                                Tarmac stages. Unforgiving weather conditions. Securing crucial championship points.
                            </p>
                            <Link 
                                to="/results" 
                                className="inline-block bg-transparent text-white font-data-label text-data-label uppercase px-6 py-3 border border-white hover:bg-white hover:text-background transition-colors text-center w-full"
                            >
                                VIEW STAGE TIMES
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
