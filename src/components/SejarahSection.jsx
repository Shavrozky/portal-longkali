// src/components/SejarahSection.jsx
import { sejarahContent } from '../data/content';

export default function SejarahSection() {
  return (
    <section id="sejarah" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
            {sejarahContent.eyebrow}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
            {sejarahContent.heading}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            {sejarahContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="font-bold text-emerald-950 text-lg mb-4">
            {sejarahContent.faktaTitle}
          </h3>
          <dl className="grid grid-cols-2 gap-4 text-left">
            {sejarahContent.fakta.map((item) => (
              <div
                key={item.label}
                className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100/50"
              >
                <dt className="text-xs text-gray-500">{item.label}</dt>
                <dd className="text-sm font-bold text-gray-900 mt-1">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
