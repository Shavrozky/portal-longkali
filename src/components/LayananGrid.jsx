// src/components/LayananGrid.jsx
import {
  Activity,
  Briefcase,
  FileText,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { layananContent, layananList } from '../data/content';

const iconMap = {
  Users,
  FileText,
  Briefcase,
  ShieldCheck,
  Activity,
};

export default function LayananGrid() {
  return (
    <section id="layanan-adminduk" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900">{layananContent.heading}</h2>
          <p className="text-sm text-gray-500 mt-2">{layananContent.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layananList.map((item) => {
            const IconComponent = iconMap[item.icon] || FileText;
            return (
              <div
                key={item.title}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
