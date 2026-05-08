"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-verde/95 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-crema font-serif text-xl font-bold tracking-tight">
            Anitya
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/nosotros" className="text-crema/80 hover:text-crema transition-colors">Nosotros</Link></li>
            <li><Link href="/programas" className="text-crema/80 hover:text-crema transition-colors">Programas</Link></li>
            <li><Link href="/noticias" className="text-crema/80 hover:text-crema transition-colors">Noticias</Link></li>
            <li><Link href="/eventos" className="text-crema/80 hover:text-crema transition-colors">Eventos</Link></li>
            <li>
              <Link href="/contacto" className="bg-tierra text-crema px-5 py-2 rounded-full hover:bg-tierra/85 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="min-h-[50vh] bg-verde flex items-end pb-20">
        <div className="max-w-6xl mx-auto px-6 pt-40 w-full">
          <p className="text-tierra text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Escríbenos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Contacto
          </h1>
        </div>
      </section>

      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-verde mb-6">Hablemos</h2>
            <p className="text-verde/70 leading-relaxed text-lg mb-8">
              Si tienes preguntas sobre nuestros programas, quieres colaborar con nosotros o simplemente deseas saber más sobre Anitya, escríbenos.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-verde/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="text-verde font-medium">contacto@anitya.cl</p>
              </div>
              <div>
                <p className="text-verde/40 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-verde font-medium">Chile</p>
              </div>
            </div>
          </div>

          <div>
            {enviado ? (
              <div className="bg-white rounded-2xl p-10 border border-verde/10 text-center">
                <h3 className="font-serif text-2xl text-verde mb-3">¡Mensaje enviado!</h3>
                <p className="text-verde/60">Gracias por escribirnos. Te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-verde/10 flex flex-col gap-5">
                <div>
                  <label className="text-verde/60 text-sm mb-1 block">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-verde/20 rounded-xl px-4 py-3 text-verde focus:outline-none focus:border-tierra transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-verde/60 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-verde/20 rounded-xl px-4 py-3 text-verde focus:outline-none focus:border-tierra transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-verde/60 text-sm mb-1 block">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-verde/20 rounded-xl px-4 py-3 text-verde focus:outline-none focus:border-tierra transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-tierra text-crema px-8 py-4 rounded-full font-medium hover:bg-tierra/85 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-verde py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-crema text-lg">Anitya</p>
          <p className="text-crema/40 text-sm">© 2025 · Chile · Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}
