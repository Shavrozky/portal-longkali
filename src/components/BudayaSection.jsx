// src/components/BudayaSection.jsx
import { Landmark, Music, Sparkles } from 'lucide-react';
import { budayaContent } from '../data/content';

const iconMap = {
  Music,
  Sparkles,
  Landmark,
};

export default function BudayaSection() {
  return (
    <section
      id="budaya"
      className="py-20 bg-emerald-950 text-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            {budayaContent.eyebrow}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">{budayaContent.heading}</h2>
          <p className="text-sm text-emerald-100">{budayaContent.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budayaContent.items.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-emerald-900/50 border border-emerald-800 hover:border-amber-400/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
