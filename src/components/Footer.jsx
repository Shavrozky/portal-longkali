// src/components/Footer.jsx
import { Mail, MapPin, Phone } from 'lucide-react';
import { footerContent, siteIdentity } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Identitas */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-800 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-400/40">
                {siteIdentity.shortName}
              </div>
              <div>
                <span className="block font-bold text-white leading-tight">
                  {siteIdentity.name}
                </span>
                <span className="block text-[11px] font-medium text-emerald-500 tracking-wide uppercase">
                  {siteIdentity.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed">{footerContent.about}</p>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">
              {footerContent.quickLinkTitle}
            </h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">
              {footerContent.layananTitle}
            </h3>
            <ul className="space-y-2">
              {footerContent.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">
              {footerContent.contactTitle}
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                <span>{footerContent.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{footerContent.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-emerald-600" />
                <span className="break-all">{footerContent.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs">
          <p>
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
