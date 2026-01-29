import React from 'react';
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0lT2RLs9yow9C-XC5q9jsjRvn-2F5B-B7_LsakFmo2mZrn3eNCxs4RvE-9jtY4Won70JqGYFCg0h2-tnP3pqvkda6EHeuixwN7IHTwJOcRmfX2HJYKc2OeY2G2FkK3fagVx_IsWIlSmXv4L5yF-maTTRNWuwg4Ac_VngYbrZ6JuDha-ARsaFubdSlkkk5f0DdIdu651KGy4ufGOnmbAjPYmQEzNDrZTJ-pVynNZU2eR2jT9tG6uH3ECwF92gE7Cvv2zM3H896Tg')"}}
        />
        <div className="absolute inset-0 hero-gradient"></div>
        {/* Subtle grid overlay for high-tech look */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px"}}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-bold tracking-[0.3em] text-sm uppercase">Available for New Projects</p>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
              ALEX VANCE — <span className="text-primary/90">GAME DEVELOPER</span> &amp; DESIGNER
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Crafting immersive worlds, high-performance game mechanics, and unforgettable interactive experiences using Unreal Engine and C++.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-primary text-white text-base font-bold px-10 py-4 rounded-xl transition-all hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(43,108,238,0.4)] flex items-center justify-center gap-2">
              <span>View My Work</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <Link
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white text-base font-bold px-10 py-4 rounded-xl transition-all hover:bg-white/10 backdrop-blur-sm text-center"
              to="/about"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <span className="material-symbols-outlined animate-bounce">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
