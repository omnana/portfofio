import React from 'react';

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-24 bg-background-dark" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h4 className="text-primary text-sm font-bold leading-normal tracking-[0.2em] uppercase mb-4">Portfolio Highlights</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">FEATURED PROJECTS</h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQVLTNwyalzOVDVo3xbLPnrblIwxhhsyTl4RpoEJ-0m_TaRxCFj2ScM6O02u0WKbHyVdfcQPZyYIvsPz8Nhe-vCzsACts__bkj_RvzdMhxaEblcivnHgJstrYEo3Rn6BiN9Q1y1Y9y6nlMtcK1EvFlzwwoGQBbSvoepdpYu0TGHtrte_rmDCxrFAXMylLbbjEQHOVQPrXR1eAoEQnRnND9tZkTKzOq0P1S3yNRuM6DHV41hk1fP9NVGIZaTFct_gn7fKxF9Bxw4Q')"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Action RPG</span>
              <h3 className="text-white text-2xl font-bold">Cyber Protocol</h3>
              <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">A high-octane neon thriller set in 2099.</p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlEGlS2KYMV587ZdhJSnqyP6azMEfckq1oNGC_cBq1h-kauzb1jk3FpuiGzQMbnZJcbRnWC3pnUbSKpfoQJZycc4brDVahTZz-ppeiL6zjcGH47fcPm8Cr3K1oOsUR8sxOoYSe0afXbBVgh6hyKDM20k5VimEswaDkZQmIpPWfXNAR3gSjcKaagLSOaIIu_pELSVgFh6JHvUn5gelhFMI-mWPEBVF9VKO299U8MeHWLoKEUBgkzSpngFcVf88SvFw17ntky-hsww')"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Simulator</span>
              <h3 className="text-white text-2xl font-bold">Nebula Drift</h3>
              <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Infinite procedural galaxy exploration.</p>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfEI2av4RL47HZW99QbQXc45KvZb467vWThV58E3cze1L76y8x1lsL9Q-F3mRiQG3rlaG1ZUbjGL5GlRUxeNoq_GWW-nzfjSqzGwEnh7PonMBJ5ForN-fWWIt_p4uHq0StGzA6k9jTXiw5n-_I-Dam2EKAh01sw3IbeTiCBRtYeivSeICxYcRGvitGQ7uUuWVsmXLeYA8BOoIXzb2WSZfw9SesVJGpbCDaYDfEhZMf0g7nPsgvmLhozzAHaOLsVG-uad4FyBEsGg')"}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Engine Tool</span>
              <h3 className="text-white text-2xl font-bold">Shadow Engine</h3>
              <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Optimized custom lighting system for URP.</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="border border-white/20 text-white font-bold py-4 px-12 rounded-xl hover:bg-white hover:text-background-dark transition-all flex items-center gap-2">
            <span>Browse All Projects</span>
            <span className="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
