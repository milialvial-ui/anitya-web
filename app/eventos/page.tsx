import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";

const eventos = [
  {
    fecha: "15 Jun 2025",
    titulo: "Taller: Plantas nativas y restauración ecológica",
    lugar: "Santiago, Región Metropolitana",
    descripcion:
      "Aprende sobre las especies nativas de Chile y cómo participar en proyectos de restauración ecológica en tu territorio.",
    tipo: "Taller",
  },
  {
    fecha: "28 Jun 2025",
    titulo: "Seminario: Adaptación climática en zonas rurales",
    lugar: "Chillán, Región de Ñuble",
    descripcion:
      "Espacio de encuentro entre investigadores, agricultores y comunidades para compartir experiencias y herramientas de adaptación climática.",
    tipo: "Seminario",
  },
  {
    fecha: "12 Jul 2025",
    titulo: "Jornada de voluntariado: Restauración de humedal",
    lugar: "Constitución, Región del Maule",
    descripcion:
      "Únete a nuestra jornada de voluntariado para plantar especies nativas y restaurar un humedal costero en la Región del Maule.",
    tipo: "Voluntariado",
  },
];

export default function Eventos() {
  return (
    <>
      {/* Hero — playa / costa */}
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
            Próximas actividades
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Eventos
          </h1>
        </div>
      </section>

      {/* Listado */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col divide-y divide-neutral-200">
            {eventos.map((e) => (
              <div
                key={e.titulo}
                className="py-10 group cursor-default hover:pl-4 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full w-fit">
                    {e.tipo}
                  </span>
                  <span className="text-tierra font-semibold text-sm">{e.fecha}</span>
                  <span className="text-neutral-400 text-sm md:ml-auto">{e.lugar}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-3 group-hover:text-tierra transition-colors">
                  {e.titulo}
                </h3>
                <p className="text-neutral-500 leading-relaxed max-w-2xl">{e.descripcion}</p>
              </div>
            ))}
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
