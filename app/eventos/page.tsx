import Link from "next/link";

const eventos = [
  {
    fecha: "15 Jun 2025",
    titulo: "Taller: Plantas nativas y restauración ecológica",
    lugar: "Santiago, Región Metropolitana",
    descripcion: "Aprende sobre las especies nativas de Chile y cómo participar en proyectos de restauración ecológica en tu territorio.",
    tipo: "Taller",
  },
  {
    fecha: "28 Jun 2025",
    titulo: "Seminario: Adaptación climática en zonas rurales",
    lugar: "Chillán, Región de Ñuble",
    descripcion: "Espacio de encuentro entre investigadores, agricultores y comunidades para compartir experiencias y herramientas de adaptación climática.",
    tipo: "Seminario",
  },
  {
    fecha: "12 Jul 2025",
    titulo: "Jornada de voluntariado: Restauración de humedal",
    lugar: "Constitución, Región del Maule",
    descripcion: "Únete a nuestra jornada de voluntariado para plantar especies nativas y restaurar un humedal costero en la Región del Maule.",
    tipo: "Voluntariado",
  },
];

export default function Eventos() {
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
            <li><Link href="/eventos" className="text-crema transition-colors">Eventos</Link></li>
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
            Próximas actividades
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Eventos
          </h1>
        </div>
      </section>

      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {eventos.map((e) => (
              <div key={e.titulo} className="bg-white rounded-2xl p-8 border border-verde/10 hover:border-tierra/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-verde/40 border border-verde/20 px-3 py-1 rounded-full">
                      {e.tipo}
                    </span>
                    <span className="text-tierra font-semibold text-sm">{e.fecha}</span>
                  </div>
                  <span className="text-verde/40 text-sm">{e.lugar}</span>
                </div>
                <h3 className="font-serif text-2xl text-verde mb-3">{e.titulo}</h3>
                <p className="text-verde/55 leading-relaxed">{e.descripcion}</p>
              </div>
            ))}
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
