import Link from "next/link";

const noticias = [
  {
    fecha: "Abril 2025",
    titulo: "Anitya lanza programa de restauración en la Región del Biobío",
    resumen: "Iniciamos nuestro primer proyecto de restauración de bosque nativo en colaboración con comunidades locales de la Región del Biobío.",
    etiqueta: "Conservación",
  },
  {
    fecha: "Marzo 2025",
    titulo: "Taller de adaptación climática para agricultores del secano",
    resumen: "Realizamos talleres de formación con más de 50 agricultores de la zona de secano costero para enfrentar los efectos de la sequía prolongada.",
    etiqueta: "Adaptación",
  },
  {
    fecha: "Febrero 2025",
    titulo: "Publicamos nuestro primer informe de biodiversidad",
    resumen: "Damos a conocer los resultados de nuestro primer monitoreo sistemático de flora y fauna nativa en territorios priorizados.",
    etiqueta: "Ciencia",
  },
];

export default function Noticias() {
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
            <li><Link href="/noticias" className="text-crema transition-colors">Noticias</Link></li>
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
            Últimas novedades
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Noticias
          </h1>
        </div>
      </section>

      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {noticias.map((n) => (
              <div key={n.titulo} className="bg-white rounded-2xl p-8 border border-verde/10 hover:border-tierra/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-verde/40 border border-verde/20 px-3 py-1 rounded-full">
                    {n.etiqueta}
                  </span>
                  <span className="text-verde/40 text-sm">{n.fecha}</span>
                </div>
                <h3 className="font-serif text-2xl text-verde mb-3">{n.titulo}</h3>
                <p className="text-verde/55 leading-relaxed">{n.resumen}</p>
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
