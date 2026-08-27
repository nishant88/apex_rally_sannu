const DriverProfile = () => {
    const stats = [
        { label: 'RACECRAFT', value: '90%' },
        { label: 'PACE', value: '85%' },
        { label: 'TECHNICAL UNDERSTANDING', value: '95%' },
        { label: 'MENTAL STRENGTH', value: '88%' }
    ];

    return (
        <div className="animate-in fade-in duration-500 bg-background text-on-background font-body-md pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto w-full flex-grow">
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
                <div className="md:col-span-5 flex flex-col justify-center border-l border-outline-variant pl-gutter relative h-full min-h-[400px]">
                    <div className="absolute top-0 left-0 w-2 h-[2px] bg-primary-container"></div>
                    <div className="font-data-label text-data-label text-on-surface-variant mb-4 uppercase tracking-widest">Driver Profile</div>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 leading-tight">
                        THE STAGE<br/>IS MY<br/>OFFICE
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md border-b border-outline-variant pb-6 mb-6">
                        A powerful journey rooted in the precision of karting, evolving onto the unpredictable gravel stages. The ambition remains unwavering: a national title.
                    </p>
                    <div className="font-data-label text-data-label text-on-surface flex items-center gap-4">
                        <span className="bg-surface-container px-3 py-1 border border-outline-variant">STATUS: ACTIVE</span>
                        <span className="bg-surface-container px-3 py-1 border border-outline-variant">CLASS: RALLY2</span>
                    </div>
                </div>
                <div className="md:col-span-7 h-[600px] relative technical-border">
                    <img 
                        alt="Driver Portrait" 
                        className="w-full h-full object-cover grayscale opacity-80" 
                        src="/driver_portrait.jpg" 
                    />
                    <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-4 py-2 border border-outline-variant">
                        <span className="font-data-label text-data-label text-on-surface uppercase">Drv-001 // System Online</span>
                    </div>
                </div>
            </section>

            {/* Philosophy & Attributes Bento */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
                {/* Quote Block */}
                <div className="md:col-span-6 bg-surface-container-low technical-border p-8 relative flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4 font-data-label text-data-label text-on-surface-variant">001</div>
                    <div>
                        <span className="material-symbols-outlined text-4xl text-primary-container mb-6 opacity-50 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                            format_quote
                        </span>
                        <blockquote className="font-headline-md text-headline-md text-on-surface mb-8 border-l-2 border-primary-container pl-6 py-2">
                            "Every stage is a test of preparation, precision and courage. The goal isn't simply to finish faster. It's to continuously become a better driver."
                        </blockquote>
                    </div>
                    <div className="font-data-label text-data-label text-on-surface-variant tracking-widest uppercase">
                        // Driver Philosophy
                    </div>
                </div>

                {/* Technical Attributes */}
                <div className="md:col-span-6 bg-surface-container-lowest technical-border border-t-2 border-t-racing-red p-8 relative">
                    <div className="absolute top-0 right-0 p-4 font-data-label text-data-label text-on-surface-variant">002</div>
                    <h3 className="font-data-label text-data-label text-on-surface tracking-widest uppercase mb-10 border-b border-outline-variant pb-4">
                        Performance Telemetry
                    </h3>
                    <div className="space-y-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="flex justify-between font-data-label text-data-label text-on-surface mb-2">
                                    <span>{stat.label}</span>
                                    <span>{stat.value}</span>
                                </div>
                                <div className="h-2 w-full bg-[#1A1A1A]">
                                    <div className="h-full bg-primary-container" style={{ width: stat.value }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Identity Section (Helmet, Race Number, Signature Logo) */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
                <div className="md:col-span-12 font-data-label text-data-label text-on-surface-variant tracking-widest uppercase border-b border-outline-variant pb-4 mb-8">
                    Visual Identity Subsystem
                </div>
                <div className="md:col-span-4 h-[400px] technical-border bg-surface-container relative p-6 flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 p-4 font-data-label text-data-label text-on-surface-variant">HELMET DESIGN</div>
                    <img 
                        alt="Helmet Design" 
                        className="w-full h-full object-contain p-8" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6wdBCoDV-eKmJT8slCA0kfR-yI9Ln3Ofa7R3ng0T4jqf_3y74V1x9sqoq6gwm56uuUdher1e5xWPB3ieIheN8wBE5dQg9BYE-uts9-dD0sSCuAimdAsCq_vCMmjBHUM1AMTIkDE9hKiwn7UJm5HfbL5deNVesgleqdd92t3Shzrbm6tpJvf2lI4JEqKxKs3NzobJMRUphZl5LAfohf-76tkpcEqdwGVIqm--ppbdDtqMiX0HBsvVY"
                    />
                </div>
                <div className="md:col-span-4 h-[400px] technical-border bg-primary-container text-white relative flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 left-0 p-4 font-data-label text-data-label text-white/50">RACE NUMBER</div>
                    <div className="font-display-lg text-[180px] leading-none tracking-tighter opacity-90 select-none">#42</div>
                    <div className="absolute bottom-4 right-4 font-data-label text-data-label text-white/50 border border-white/20 px-2 py-1">OFFICIAL REGISTRATION</div>
                </div>
                <div className="md:col-span-4 h-[400px] technical-border bg-surface-container-lowest relative flex items-center justify-center p-8">
                    <div className="absolute top-0 left-0 p-4 font-data-label text-data-label text-on-surface-variant">SIGNATURE LOGO</div>
                    <div className="w-full text-center font-display-lg text-display-lg text-on-surface tracking-widest border-y border-outline-variant py-8">
                        APEX
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DriverProfile;
