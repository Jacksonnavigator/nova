import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/technova-logo.png.asset.json";
import { resolveAsset } from "@/lib/resolve-asset";

const logoSrc = resolveAsset(logo);

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="flex items-center justify-between gap-4 h-16 lg:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoSrc} alt="TechNova" className="h-9 w-9 rounded-lg object-cover" />
            <span className="hidden sm:block font-semibold text-slate-900 tracking-tight">
              Tech<span className="text-brand">Nova</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5 text-sm font-medium">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`px-3.5 py-2 rounded-md transition-colors ${
                      active
                        ? "text-brand bg-[#f0f5fa]"
                        : "text-slate-600 hover:text-brand hover:bg-[#f0f5fa]/60"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-sm"
            >
              Get Started
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-100">
            <ul className="grid gap-0.5 pt-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-600 hover:bg-[#f0f5fa] hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 px-3">
                <Link
                  to="/contact"
                  className="block text-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
