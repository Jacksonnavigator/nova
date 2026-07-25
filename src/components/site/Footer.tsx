import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/technova-logo.png.asset.json";
import { resolveAsset } from "@/lib/resolve-asset";

const logoSrc = resolveAsset(logo);

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

const serviceLinks = [
  "IoT & Automation",
  "Smart Agriculture",
  "PCB Design",
  "Electronics Repair",
  "Cloud Dashboards",
  "Wi-Fi Solutions",
] as const;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="TechNova" className="h-10 w-10 rounded-lg" />
            <div>
              <div className="font-semibold text-white">TechNova</div>
              <div className="text-xs text-slate-400">Electronics & IoT</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
            Turning ideas into smart solutions through electronics, embedded systems, IoT, software
            and automation.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="p-2 rounded-md bg-slate-800 hover:bg-brand transition-colors"
              >
                <Icon className="h-4 w-4 text-slate-300" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {serviceLinks.map((l) => (
              <li key={l}>
                <Link to="/services" className="hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 text-slate-400">
              <Phone className="h-4 w-4 text-brand shrink-0 mt-0.5" />
              +255 682 334 222 / +255 627 182 180
            </li>
            <li className="flex gap-2.5 text-slate-400">
              <Mail className="h-4 w-4 text-brand shrink-0 mt-0.5" />
              novatech.iot@gmail.com
            </li>
            <li className="flex gap-2.5 text-slate-400">
              <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
              Arusha, Tanzania
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>Copyright {new Date().getFullYear()} TechNova Electronics & IoT. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


