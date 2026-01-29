import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-background-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Games Released</p>
            <p className="text-white tracking-tight text-4xl font-bold">12</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Players Reached</p>
            <p className="text-white tracking-tight text-4xl font-bold">2.5M+</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Years Exp.</p>
            <p className="text-white tracking-tight text-4xl font-bold">8</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-8 bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Awards Won</p>
            <p className="text-white tracking-tight text-4xl font-bold">4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
