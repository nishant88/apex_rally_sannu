import { useState } from 'react';
import { Check, X, ArrowRight, Eye, Radio, Award, Film } from 'lucide-react';

const Sponsorship = () => {
    const [selectedZone, setSelectedZone] = useState({
        title: 'Select a Zone',
        desc: 'Interact with the schematic or buttons to view available branding real estate.',
        visibility: 'N/A'
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        tier: 't1'
    });

    const zones = [
        { id: 'ZN.01', name: 'Bonnet', desc: 'Primary frontal exposure. High visibility in broadcast and static photography.', vis: '90%' },
        { id: 'ZN.02', name: 'Side Doors', desc: 'Maximum lateral exposure. Ideal for title and secondary partners.', vis: '85%' },
        { id: 'ZN.03', name: 'Roof Scoop', desc: 'Aerial and overhead broadcast visibility. Essential for dynamic tracking shots.', vis: '70%' },
        { id: 'ZN.04', name: 'Rear Bumper', desc: 'Trailing visibility. High dwell time during pursuit footage.', vis: '65%' }
    ];

    const updateZone = (title, desc, visibility) => {
        setSelectedZone({ title, desc, visibility });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.companyName && formData.contactName && formData.email) {
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 5000);
            setFormData({ companyName: '', contactName: '', email: '', tier: 't1' });
        }
    };

    const metrics = [
        { id: 'MTR.01', label: 'Total Audience Reach', value: '1.2M+', progress: '85%' },
        { id: 'MTR.02', label: 'Event Attendance', value: '15k Avg.', progress: '60%' },
        { id: 'MTR.03', label: 'Engagement Rate', value: '4.2%', progress: '92%' }
    ];

    return (
        <div className="animate-in fade-in duration-500 bg-background text-on-background font-body-md pt-24 pb-section-gap">
            {/* Hero Section */}
            <section className="relative min-h-[600px] md:min-h-[700px] flex items-center px-margin-mobile md:px-margin-desktop">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                    <img 
                        className="w-full h-full object-cover object-center mix-blend-luminosity opacity-40 animate-pulse duration-1000" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6jcSpNbkM3_VfYI8DysK7_WXiRmMQp_7gOWk0Pgf1GYSAlN3fYZiCvOBpIqu79zr2G51MrCytF12vY7Jgugf4PIVLYMmZc0vW5_RoQsx3m0JcEDnQS4wdSnVWtr5pgcHxwcGdVn8LtS5OdToirzUFjMkPj19zFlmGfJm7lTE1tUje4un0IbofaLEdm07roFlp-NkJYlCPL3f9-tF_Bd0xb7UbmGM2bpvYSysweorpNs-DxHMb8ky" 
                        alt="Rally car dynamic action shot"
                    />
                </div>
                <div className="relative z-10 max-w-4xl grid gap-8">
                    <div className="flex items-center gap-4">
                        <span className="font-data-label text-data-label text-primary bg-surface-container px-3 py-1 technical-border uppercase">
                            SPONSORSHIP PLATFORM
                        </span>
                        <div className="h-px bg-[#252525] w-24"></div>
                        <span className="font-data-label text-data-label text-on-surface-variant">SYS.VOL.01</span>
                    </div>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background uppercase leading-none">
                        PUT YOUR BRAND ON <br/> 
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #e2e2e2' }}>THE JOURNEY</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l border-[#252525] pl-6 py-2">
                        Partner with us as we build the next chapter of a competitive rally career. Align your brand with technical excellence, unwavering discipline, and the raw adrenaline of professional motorsport.
                    </p>
                    <div className="flex gap-4 pt-4 flex-wrap">
                        <a 
                            href="#contact-form"
                            className="bg-racing-red text-white font-data-label text-data-label uppercase tracking-widest px-8 py-4 hover:bg-on-primary-fixed-variant transition-colors text-center"
                        >
                            START THE CONVERSATION
                        </a>
                        <button 
                            className="bg-transparent text-white font-data-label text-data-label uppercase tracking-widest px-8 py-4 border border-white hover:bg-white hover:text-black transition-colors"
                        >
                            DOWNLOAD DECK
                        </button>
                    </div>
                </div>
            </section>

            {/* ROI & Metrics Telemetry */}
            <section className="px-margin-mobile md:px-margin-desktop py-16 border-y border-[#252525] bg-surface-container-lowest">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map(metric => (
                        <div key={metric.id} className="glass-panel p-6 technical-border relative overflow-hidden group">
                            <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">{metric.id}</div>
                            <h3 className="font-data-label text-data-label text-primary mb-2 uppercase">{metric.label}</h3>
                            <div className="font-headline-md text-headline-md text-on-background mb-4">{metric.value}</div>
                            <div className="h-1 bg-[#1A1A1A] w-full">
                                <div className="h-full bg-racing-red transition-all duration-1000" style={{ width: metric.progress }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Propositions Bento Grid */}
            <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
                <div className="mb-12 flex justify-between items-end border-b border-[#252525] pb-4">
                    <h2 className="font-headline-md text-headline-md text-on-background uppercase">Partnership <br/>Value</h2>
                    <div className="font-data-label text-data-label text-on-surface-variant">PRP.VAL.IDX</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[240px]">
                    {/* Brand Visibility (Large) */}
                    <div className="md:col-span-8 md:row-span-2 technical-border bg-surface-container relative p-8 flex flex-col justify-end group overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img 
                                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 grayscale" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLhKBPFdNhBNZ2wg3Mlu7I87kCLwbubqOtNvNO_-12SPAFzsbfm-AoyBO8Qfuwbmr3OwT8AdcTt-eWxM0X22LuF4oIZ8hXgtv732E1tZDI-i1LGXtESGXvkHFF5n9rESdOho6TvfU0sEgZsYZ3gGrFKN9Bxz3tme1Ej3aIglMBV4Jk9EfOmIQ6TDotcM68aYaQYxkPdqUI-KN_tnCOoKWEMh7Iw_B5Ztz9AGxpf0yErDy4P5arPdg2" 
                                alt="Sponsor branding details on side panel"
                            />
                        </div>
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant z-10 bg-surface-container-lowest px-2 py-1 technical-border">VAL.01</div>
                        <div className="relative z-10">
                            <Eye className="text-primary mb-4 w-8 h-8" />
                            <h3 className="font-headline-md text-headline-md text-on-background mb-2">BRAND VISIBILITY</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                High-impact placement across vehicle livery, race suit, service park infrastructure, and transport fleet. Maximum exposure during WRC broadcasts and spectator stages.
                            </p>
                        </div>
                    </div>

                    {/* Digital Reach */}
                    <div className="md:col-span-4 md:row-span-1 technical-border bg-surface-container-low relative p-6 flex flex-col justify-between">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">VAL.02</div>
                        <Radio className="text-primary w-8 h-8" />
                        <div>
                            <h3 className="font-body-lg text-body-lg text-on-background font-bold mb-1 uppercase">Digital Reach</h3>
                            <p className="font-data-label text-data-label text-on-surface-variant">Targeted campaigns across owned channels.</p>
                        </div>
                    </div>

                    {/* Hospitality */}
                    <div className="md:col-span-4 md:row-span-1 technical-border bg-surface-container-low relative p-6 flex flex-col justify-between">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">VAL.03</div>
                        <Award className="text-primary w-8 h-8" />
                        <div>
                            <h3 className="font-body-lg text-body-lg text-on-background font-bold mb-1 uppercase">Hospitality</h3>
                            <p className="font-data-label text-data-label text-on-surface-variant">Exclusive VIP access at service parks.</p>
                        </div>
                    </div>

                    {/* Storytelling */}
                    <div className="md:col-span-12 md:row-span-1 technical-border bg-surface-container relative p-6 flex items-center justify-between">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">VAL.04</div>
                        <div className="flex items-center gap-6">
                            <Film className="text-primary text-4xl w-10 h-10" />
                            <div>
                                <h3 className="font-body-lg text-body-lg text-on-background font-bold mb-1 uppercase">Authentic Storytelling</h3>
                                <p className="font-data-label text-data-label text-on-surface-variant">Co-created content focusing on technical synergy and shared racing values.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branding Visualizer */}
            <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest border-y border-[#252525]">
                <div className="mb-12">
                    <h2 className="font-headline-md text-headline-md text-on-background uppercase mb-2">Livery Mapping</h2>
                    <p className="font-data-label text-data-label text-on-surface-variant uppercase">Interactive Branding Zones</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
                    <div className="order-2 lg:order-1 space-y-4">
                        <div className="p-6 technical-border bg-surface-container border-l-2 border-l-racing-red min-h-[140px] flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-body-lg text-body-lg text-on-background font-bold uppercase">{selectedZone.title}</h3>
                                {selectedZone.visibility !== 'N/A' && (
                                    <span className="font-data-label text-data-label text-primary bg-[#1A1A1A] px-2 py-1 border border-outline-variant">
                                        VISIBILITY: {selectedZone.visibility}
                                    </span>
                                )}
                            </div>
                            <p className="font-data-label text-data-label text-on-surface-variant">{selectedZone.desc}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {zones.map(zone => (
                                <div 
                                    key={zone.id} 
                                    className="p-4 technical-border bg-surface-container-low text-center cursor-pointer hover:border-racing-red transition-colors" 
                                    onClick={() => updateZone(zone.name, zone.desc, zone.vis)}
                                >
                                    <span className="font-data-label text-data-label text-primary">{zone.id}</span>
                                    <div className="font-body-md text-body-md text-on-background uppercase mt-1">{zone.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* SVG Schematic map */}
                    <div className="order-1 lg:order-2 p-8 technical-border bg-[#0A0A0A] flex justify-center items-center min-h-[400px] relative">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffffff] to-transparent bg-[length:20px_20px]"></div>
                        <svg className="w-full max-w-lg z-10" viewBox="0 0 500 250">
                            {/* Car outline */}
                            <path d="M50,150 L100,100 L250,90 L350,100 L450,130 L450,180 L50,180 Z" fill="none" stroke="#474746" strokeWidth="2"></path>
                            {/* Bonnet hot-zone */}
                            <polygon 
                                className="zone-highlight" 
                                fill="rgba(71, 71, 70, 0.2)" 
                                stroke="#474746" 
                                strokeWidth="1"
                                points="110,105 240,95 240,115 110,125" 
                                onClick={() => updateZone('Bonnet', 'Primary frontal exposure. High visibility in broadcast and static photography.', '90%')}
                            ></polygon>
                            {/* Doors hot-zone */}
                            <rect 
                                className="zone-highlight" 
                                x="250" 
                                y="110" 
                                width="90" 
                                height="40" 
                                fill="rgba(71, 71, 70, 0.2)" 
                                stroke="#474746" 
                                strokeWidth="1"
                                onClick={() => updateZone('Side Doors', 'Maximum lateral exposure. Ideal for title and secondary partners.', '85%')}
                            ></rect>
                        </svg>
                        <div className="absolute bottom-4 right-4 font-data-label text-data-label text-on-surface-variant">LIVERY.SCHEMATIC.v1</div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
                <div className="mb-12 flex justify-between items-end border-b border-[#252525] pb-4">
                    <h2 className="font-headline-md text-headline-md text-on-background uppercase">Partnership <br/>Tiers</h2>
                    <div className="font-data-label text-data-label text-on-surface-variant">LVL.DEF</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tier 1 */}
                    <div className="technical-border bg-surface-container p-8 relative flex flex-col group hover:border-primary transition-colors border-t-2 hover:border-t-primary border-t-transparent">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">T.01</div>
                        <h3 className="font-body-lg text-body-lg text-primary font-bold mb-4 uppercase">Title Partner</h3>
                        <p className="font-data-label text-data-label text-on-surface-variant mb-8 flex-grow">Highest visibility, primary vehicle branding, dedicated campaigns, and naming rights.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Primary Livery Zone (Bonnet/Doors)
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Official Team Naming
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Dedicated Content Production
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> VIP Hospitality (All Events)
                            </li>
                        </ul>
                        <a href="#contact-form" className="w-full bg-transparent text-white text-center font-data-label text-data-label uppercase tracking-widest py-3 border border-[#474746] group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all">
                            INQUIRE T.01
                        </a>
                    </div>
                    
                    {/* Tier 2 */}
                    <div className="technical-border bg-surface-container-low p-8 relative flex flex-col group hover:border-primary transition-colors border-t-2 hover:border-t-primary border-t-transparent">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">T.02</div>
                        <h3 className="font-body-lg text-body-lg text-on-background font-bold mb-4 uppercase">Team Partner</h3>
                        <p className="font-data-label text-data-label text-on-surface-variant mb-8 flex-grow">Significant vehicle branding, apparel presence, and guaranteed social media integration.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Secondary Livery Zones (Bumpers)
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Apparel Branding
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Guaranteed Social Mentions
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-[#474746]">
                                <X size={14} className="text-[#474746]" /> Naming Rights
                            </li>
                        </ul>
                        <a href="#contact-form" className="w-full bg-transparent text-white text-center font-data-label text-data-label uppercase tracking-widest py-3 border border-[#474746] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                            INQUIRE T.02
                        </a>
                    </div>

                    {/* Tier 3 */}
                    <div className="technical-border bg-surface-container-lowest p-8 relative flex flex-col group hover:border-primary transition-colors border-t-2 hover:border-t-primary border-t-transparent">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">T.03</div>
                        <h3 className="font-body-lg text-body-lg text-on-background font-bold mb-4 uppercase">Supporting</h3>
                        <p className="font-data-label text-data-label text-on-surface-variant mb-8 flex-grow">Entry-level association providing website logo placement and appreciation content.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> Website Logo Placement
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-on-background">
                                <Check size={14} className="text-primary" /> End of Season Appreciation
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-[#474746]">
                                <X size={14} className="text-[#474746]" /> Vehicle Livery
                            </li>
                            <li className="flex items-center gap-2 font-data-label text-data-label text-[#474746]">
                                <X size={14} className="text-[#474746]" /> VIP Hospitality
                            </li>
                        </ul>
                        <a href="#contact-form" className="w-full bg-transparent text-white text-center font-data-label text-data-label uppercase tracking-widest py-3 border border-[#474746] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                            INQUIRE T.03
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Form */}
            <section id="contact-form" className="px-margin-mobile md:px-margin-desktop py-section-gap relativeScroll">
                <div className="max-w-3xl mx-auto p-12 technical-border bg-surface-container relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-racing-red"></div>
                    <div className="absolute top-4 right-4 font-data-label text-data-label text-on-surface-variant">INIT.SEQ</div>
                    <h2 className="font-headline-md text-headline-md text-on-background uppercase mb-8">START THE <br/>CONVERSATION</h2>
                    
                    {formSubmitted ? (
                        <div className="bg-[#1A1A1A] p-6 border border-racing-red text-center">
                            <p className="font-data-label text-data-label text-primary uppercase mb-2">Transmission Successful</p>
                            <p className="font-body-md text-on-background">Inquiry has been recorded. Our team will establish communication shortly.</p>
                        </div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="font-data-label text-data-label text-on-surface-variant uppercase mb-2 block">Company Name</label>
                                    <input 
                                        className="w-full bg-transparent border-0 border-b border-[#474746] focus:border-white focus:ring-0 text-on-background font-body-md px-0 py-2 transition-colors placeholder-[#333535]" 
                                        placeholder="Enter entity name" 
                                        type="text"
                                        required
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    />
                                </div>
                                <div className="relative">
                                    <label className="font-data-label text-data-label text-on-surface-variant uppercase mb-2 block">Contact Name</label>
                                    <input 
                                        className="w-full bg-transparent border-0 border-b border-[#474746] focus:border-white focus:ring-0 text-on-background font-body-md px-0 py-2 transition-colors placeholder-[#333535]" 
                                        placeholder="Enter representative name" 
                                        type="text"
                                        required
                                        value={formData.contactName}
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="font-data-label text-data-label text-on-surface-variant uppercase mb-2 block">Email Address</label>
                                <input 
                                    className="w-full bg-transparent border-0 border-b border-[#474746] focus:border-white focus:ring-0 text-on-background font-body-md px-0 py-2 transition-colors placeholder-[#333535]" 
                                    placeholder="sys.contact@domain.com" 
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <label className="font-data-label text-data-label text-on-surface-variant uppercase mb-2 block">Interest Tier</label>
                                <select 
                                    className="w-full bg-transparent border-0 border-b border-[#474746] focus:border-white focus:ring-0 text-on-background font-body-md px-0 py-2 transition-colors"
                                    value={formData.tier}
                                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                                >
                                    <option className="bg-[#121414] text-on-background" value="t1">Title Partner (T.01)</option>
                                    <option className="bg-[#121414] text-on-background" value="t2">Team Partner (T.02)</option>
                                    <option className="bg-[#121414] text-on-background" value="t3">Supporting (T.03)</option>
                                    <option className="bg-[#121414] text-on-background" value="general">General Inquiry</option>
                                </select>
                            </div>
                            <button className="bg-racing-red text-white font-data-label text-data-label uppercase tracking-widest px-8 py-4 hover:bg-on-primary-fixed-variant transition-colors mt-4 inline-flex items-center gap-2">
                                TRANSMIT INQUIRY <ArrowRight size={14} />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Sponsorship;
