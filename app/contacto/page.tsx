"use client";

import Link from "next/link";
import { useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      {/* Hero — bosque iluminado */}
      <section
        className="relative min-h-[70vh] flex items-end"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-verde via-verde/45 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Escríbenos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Contacto
          </h1>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="w-8 h-0.5 bg-tierra mb-8" />
            <h2 className="font-serif text-3xl text-neutral-900 mb-6">Hablemos</h2>
            <p className="text-neutral-700 leading-relaxed text-lg mb-10">
              Si tienes preguntas sobre nuestros programas, quieres colaborar con nosotros o simplemente deseas saber más sobre Anitya, escríbenos.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="text-neutral-900 font-medium">contacto@anitya.cl</p>
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-neutral-900 font-medium">Chile</p>
              </div>
            </div>
          </div>

          <div>
            {enviado ? (
              <div className="bg-crema rounded-2xl p-10 text-center">
                <div className="w-8 h-0.5 bg-tierra mx-auto mb-8" />
                <h3 className="font-serif text-2xl text-neutral-900 mb-3">¡Mensaje enviado!</h3>
                <p className="text-neutral-500">Gracias por escribirnos. Te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-neutral-500 text-sm mb-1 block">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 bg-white focus:outline-none focus:border-tierra transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-neutral-500 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 bg-white focus:outline-none focus:border-tierra transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-neutral-500 text-sm mb-1 block">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 bg-white focus:outline-none focus:border-tierra transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-tierra text-crema px-8 py-4 rounded-full font-medium hover:bg-tierra/85 transition-colors mt-2"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-verde py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div>
              <p className="font-serif text-crema text-2xl mb-3">Anitya</p>
              <p className="text-crema/45 text-sm max-w-xs leading-relaxed">
                Organización chilena dedicada a la adaptación al cambio climático, la protección del medio ambiente y la regeneración de la naturaleza.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-crema/30 text-xs uppercase tracking-widest mb-4">Organización</p>
                <ul className="space-y-2">
                  <li><Link href="/nosotros" className="text-crema/60 text-sm hover:text-crema transition-colors">Nosotros</Link></li>
                  <li><Link href="/programas" className="text-crema/60 text-sm hover:text-crema transition-colors">Programas</Link></li>
                  <li><Link href="/noticias" className="text-crema/60 text-sm hover:text-crema transition-colors">Noticias</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-crema/30 text-xs uppercase tracking-widest mb-4">Participar</p>
                <ul className="space-y-2">
                  <li><Link href="/eventos" className="text-crema/60 text-sm hover:text-crema transition-colors">Eventos</Link></li>
                  <li><Link href="/contacto" className="text-crema/60 text-sm hover:text-crema transition-colors">Contáctanos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-crema/10 pt-6">
            <p className="text-crema/30 text-xs">© 2025 · Anitya · Chile · Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </>
  );
}
