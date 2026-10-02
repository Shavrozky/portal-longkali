// src/components/HeroSection.jsx
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { heroContent } from '../data/content';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative bg-gradient-to-b from-emerald-900 to-emerald-950 text-white py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> {heroContent.badge}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {heroContent.titleTop} <br />
          <span className="text-amber-400">{heroContent.titleHighlight}</span>
        </h1>
        <p className="max-w-2xl mx-auto text-emerald-100 text-base sm:text-lg">
          {heroContent.lead}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href={heroContent.primary.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-emerald-950 font-bold text-sm hover:bg-amber-300 transition-all shadow-lg"
          >
            {heroContent.primary.label} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={heroContent.secondary.href}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold text-sm border border-emerald-700 transition-all"
          >
            {heroContent.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
