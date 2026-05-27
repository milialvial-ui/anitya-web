"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/noticias", label: "Noticias" },
  { href: "/eventos", label: "Eventos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-verde/95 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-crema font-serif text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Anitya
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-crema"
                    : "text-crema/80 hover:text-crema"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="bg-tierra text-crema px-5 py-2 rounded-full hover:bg-tierra/85 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block h-0.5 w-6 bg-crema transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-crema transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-crema transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-verde/98 border-t border-crema/10">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base transition-colors ${
                    pathname === href
                      ? "text-crema"
                      : "text-crema/70 hover:text-crema"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-tierra text-crema px-5 py-3 rounded-full hover:bg-tierra/85 transition-colors text-base"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
