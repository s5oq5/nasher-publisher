import { useState } from "react";

export default function MobileMenuButton({ s, active }) {
  const [open, setOpen] = useState(false);

  const links = [
    { key: "store", href: "/shop", label: s.navStore },
    { key: "editions", href: "/store", label: s.navEditions },
    { key: "services", href: "/services", label: s.navServices },
    { key: "about", href: "/about", label: s.navAbout },
  ];

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="md:hidden text-on-surface-variant hover:text-primary transition-all"
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
      </button>
      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-surface border-b border-outline-variant/30 shadow-lg z-40">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-label-caps text-base font-semibold py-3 border-b border-outline-variant/20 last:border-b-0 ${
                  active === l.key ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
