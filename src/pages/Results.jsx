import { useState } from 'react';

const Results = () => {
    const [hoveredPoint, setHoveredPoint] = useState(null);

    const stats = [
        { id: '001', label: 'STARTS', val: '6', progress: '60%', primary: false },
        { id: '002', label: 'PODIUMS', val: '4', progress: '66%', primary: false },
        { id: '003', label: 'WINS', val: '1', progress: '16%', primary: true },
        { id: '004', label: 'FINISH RATE', val: '92%', progress: '92%', primary: false }
    ];

    const chartPoints = [
        { label: 'MC', val: 10, x: 40, y: 164 },
        { label: 'SWE', val: 28, x: 128, y: 135.2 },
        { label: 'CRO', val: 53, x: 216, y: 95.2 },
        { label: 'POR', val: 65, x: 304, y: 76 },
        { label: 'ITA', val: 65, x: 392, y: 76 },
        { label: 'EST', val: 80, x: 480, y: 52 }
    ];

    const tableRows = [
        { name: 'Rally Estonia', date: 'JUL 20-23', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'P3', cls: 'P2', wins: '2', pts: '15' },
        { name: 'Rally Italia Sardegna', date: 'JUN 01-04', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'DNF', cls: 'DNF', wins: '0', pts: '0' },
        { name: 'Rally de Portugal', date: 'MAY 11-14', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'P4', cls: 'P3', wins: '1', pts: '12' },
        { name: 'Croatia Rally', date: 'APR 20-23', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'P1', cls: 'P1', wins: '5', pts: '25', highlight: true },
        { name: 'Rally Sweden', date: 'FEB 09-12', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'P2', cls: 'P2', wins: '3', pts: '18' },
        { name: 'Rallye Monte-Carlo', date: 'JAN 19-22', champ: 'WRC2', car: 'Skoda Fabia RS Rally2', ovr: 'P5', cls: 'P4', wins: '0', pts: '10' }
    ];

    return (
        <div className="animate-in fade-in duration-500 pt-[80px] pb-section-gap flex-grow bg-background">
            <main className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
                <header className="mb-section-gap border-b border-surface-variant pb-8 relative">
                    <div className="absolute top-0 right-0 font-data-label text-data-label text-surface-variant">SEC-01/PERF</div>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-primary uppercase">TRACKING THE PACE</h1>
                    <p className="font-body-lg text-on-surface-variant mt-4 max-w-2xl">
                        Real-time performance telemetry and season aggregate data. Technical excellence quantified.
                    </p>
                </header>

                {/* Summary Stats Grid */}
                <section className="mb-section-gap">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-surface-variant flex-grow"></div>
                        <h2 className="font-data-label text-data-label uppercase text-on-surface-variant tracking-widest">
                            2024 Season Aggregates
                        </h2>
                        <div className="h-px bg-surface-variant flex-grow"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                        {stats.map(stat => (
                            <div 
                                key={stat.id} 
                                className={`bg-[#1A1A1A] technical-border p-6 relative group ${stat.primary ? 'border-t-2 border-t-racing-red' : 'hover:border-racing-red'} transition-colors`}
                            >
                                <div className="absolute top-4 right-4 font-data-label text-data-label text-surface-variant">{stat.id}</div>
                                <div className="font-data-label text-data-label text-on-surface-variant mb-2 uppercase">{stat.label}</div>
                                <div className={`font-display-lg ${stat.primary ? 'text-primary' : 'text-on-background'}`}>{stat.val}</div>
                                <div className="w-full h-1 bg-background mt-4">
                                    <div className="h-full bg-racing-red" style={{ width: stat.progress }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Charts & Context Image */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-gap">
                    {/* SVG Line Chart Section */}
                    <div className="lg:col-span-8 technical-border p-8 bg-[#1A1A1A] relative">
                        <div className="absolute top-4 right-4 font-data-label text-data-label text-surface-variant">CHART-01/PTS</div>
                        <h3 className="font-data-label text-data-label uppercase text-on-surface-variant mb-8 tracking-widest border-b border-surface-variant pb-2 inline-block">
                            Championship Progression
                        </h3>
                        
                        <div className="relative mt-8" style={{ minHeight: '260px' }}>
                            {/* Y-Axis Labels */}
                            <div className="absolute left-0 top-0 h-[200px] w-8 flex flex-col justify-between font-data-label text-[10px] text-surface-variant z-10">
                                <span>100</span>
                                <span>75</span>
                                <span>50</span>
                                <span>25</span>
                                <span>0</span>
                            </div>

                            {/* Responsive SVG Graphic */}
                            <div className="pl-8 w-full h-[200px] relative">
                                <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    {/* Grid Lines */}
                                    <line x1="40" y1="20" x2="480" y2="20" stroke="#333535" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="40" y1="60" x2="480" y2="60" stroke="#333535" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="40" y1="100" x2="480" y2="100" stroke="#333535" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="40" y1="140" x2="480" y2="140" stroke="#333535" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="40" y1="180" x2="480" y2="180" stroke="#333535" strokeWidth="1" strokeDasharray="4 4" />

                                    {/* Progression Line Path */}
                                    <path 
                                        d="M 40 164 L 128 135.2 L 216 95.2 L 304 76 L 392 76 L 480 52" 
                                        fill="none" 
                                        stroke="#ffb4a8" 
                                        strokeWidth="2" 
                                    />

                                    {/* Interactive Dots */}
                                    {chartPoints.map((pt, i) => (
                                        <g 
                                            key={i} 
                                            onMouseEnter={() => setHoveredPoint(i)}
                                            onMouseLeave={() => setHoveredPoint(null)}
                                            className="cursor-pointer"
                                        >
                                            <circle 
                                                cx={pt.x} 
                                                cy={pt.y} 
                                                r={hoveredPoint === i ? "6" : "4"} 
                                                fill="#e60000" 
                                                stroke="#ffb4a8"
                                                strokeWidth="1"
                                                className="transition-all duration-200"
                                            />
                                        </g>
                                    ))}
                                </svg>

                                {/* Tooltip Overlay */}
                                {hoveredPoint !== null && (
                                    <div 
                                        className="absolute bg-background border border-surface-variant px-3 py-1 font-data-label text-[10px] text-primary whitespace-nowrap z-30 transition-all pointer-events-none"
                                        style={{ 
                                            left: `calc(${(chartPoints[hoveredPoint].x / 500) * 100}% - 10px)`, 
                                            top: `calc(${(chartPoints[hoveredPoint].y / 200) * 100}% - 40px)` 
                                        }}
                                    >
                                        {chartPoints[hoveredPoint].label}: {chartPoints[hoveredPoint].val} PTS
                                    </div>
                                )}
                            </div>

                            {/* X-Axis Labels */}
                            <div className="absolute bottom-0 left-8 right-0 flex justify-between font-data-label text-[10px] text-surface-variant px-4 mt-2">
                                <span>MC</span>
                                <span>SWE</span>
                                <span>CRO</span>
                                <span>POR</span>
                                <span>ITA</span>
                                <span>EST</span>
                            </div>
                        </div>
                    </div>

                    {/* Context Telemetry Image */}
                    <div className="lg:col-span-4 technical-border relative group overflow-hidden min-h-[400px]">
                        <div className="absolute top-4 left-4 z-10 bg-background/80 px-2 py-1 font-data-label text-[10px] text-primary border border-surface-variant backdrop-blur-sm">
                            TELEMETRY VISUAL
                        </div>
                        <img 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 absolute inset-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTh8U9BNBQ4dRZlamHYDyB6dRVsQleUrh2mdbxJF8m97pOUYEj7pPDymgE-Bk2-b5vzAJtpF-gw66cINRfROMpASD_wNjMnL9cgWPA-r9Cdqa2eGhUrpLYYZrUrShF2F6KRUbWZyGrVgriO55ZBxNG4IDY4XskL20IXSZoCAczgwfJdbL0SO8RMcGbDb1rLnwKRZcSkRRRfpYq5eX5h5znKwQDq-VGLewvdPIVadt_49Q_iRkSoqd9"
                            alt="Telemetry abstract graphics illustration"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="font-data-label text-data-label text-on-surface-variant mb-2">LATEST METRIC</p>
                            <p className="font-body-md text-on-background">Peak G-Force recorded at 1.8G during SS4.</p>
                        </div>
                    </div>
                </section>

                {/* Detailed Results Table */}
                <section className="mb-section-gap overflow-x-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-headline-md text-headline-md text-on-background uppercase">Detailed Telemetry</h3>
                        <div className="font-data-label text-data-label text-surface-variant px-3 py-1 border border-surface-variant">LOG-V2.4</div>
                    </div>
                    
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-surface-variant">
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Event</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Date</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Champ</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Car</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Ovr Pos</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Cls Pos</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase">Stg Wins</th>
                                <th className="py-4 px-4 font-data-label text-data-label text-on-surface-variant font-normal tracking-widest uppercase text-right">Pts</th>
                            </tr>
                        </thead>
                        <tbody className="font-body-md text-on-background">
                            {tableRows.map((row, idx) => (
                                <tr 
                                    key={idx} 
                                    className={`border-b border-surface-variant/30 hover:bg-surface-variant/10 transition-colors group ${row.highlight ? 'bg-surface-variant/5' : ''}`}
                                >
                                    <td className="py-4 px-4 flex items-center gap-3">
                                        <span className={`w-1.5 h-1.5 rounded-full bg-primary transition-opacity ${row.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                                        {row.name}
                                    </td>
                                    <td className="py-4 px-4 font-data-label text-[13px]">{row.date}</td>
                                    <td className="py-4 px-4">
                                        <span className="bg-surface-variant text-on-background px-2 py-1 text-xs font-data-label rounded-sm">{row.champ}</span>
                                    </td>
                                    <td className="py-4 px-4 text-on-surface-variant">{row.car}</td>
                                    <td className="py-4 px-4">{row.ovr}</td>
                                    <td className={`py-4 px-4 font-bold ${row.cls === 'P1' || row.cls === 'P2' ? 'text-primary' : ''}`}>{row.cls}</td>
                                    <td className="py-4 px-4">{row.wins}</td>
                                    <td className={`py-4 px-4 font-data-label text-right ${row.pts === '0' ? 'text-surface-variant' : 'text-primary'}`}>{row.pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Results;
