import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=80";

const noticias = [
  {
    fecha: "Mayo 2026",
    titulo:
      "160 millones de hectáreas quemadas y la temperatura marina en máximos: 2026 se postula como un año de calentamiento extremo",
    resumen:
      "Los datos globales del primer semestre de 2026 muestran cifras sin precedentes: más de 160 millones de hectáreas consumidas por incendios forestales y temperaturas marinas que rompen todos los récords históricos, consolidando 2026 como uno de los años más calurosos jamás registrados.",
    etiqueta: "Clima",
    url: "https://elpais.com/clima-y-medio-ambiente/2026-05-12/160-millones-de-hectareas-quemadas-y-la-temperatura-marina-en-maximos-2026-se-postula-como-un-ano-de-calentamiento-extremo.html",
  },
  {
    fecha: "Abril 2026",
    titulo:
      "Por séptima vez: Chile es el primer país de Latinoamérica en alcanzar el sobregiro ecológico en 2026",
    resumen:
      "Chile alcanzó su Día del Sobregiro Ecológico por séptima vez consecutiva, siendo nuevamente el primer país de América Latina en agotar los recursos naturales que la Tierra puede regenerar en un año, evidenciando la urgencia de un cambio profundo en los patrones de consumo y producción.",
    etiqueta: "Chile",
    url: "https://www.biobiochile.cl/noticias/ciencia-y-tecnologia/medio-ambiente-cyt/2026/05/04/por-septima-vez-chile-es-el-primer-pais-de-latinoamerica-en-alcanzar-el-sobregiro-ecologico-en-2026.shtml",
  },
  {
    fecha: "Marzo 2026",
    titulo:
      "Eventos récord de deshielo de la capa de hielo de Groenlandia bajo el clima actual y futuro",
    resumen:
      "Un nuevo estudio científico documenta eventos de deshielo sin precedentes en la capa de hielo de Groenlandia, proyectando escenarios aún más extremos bajo las trayectorias climáticas actuales, con implicancias directas para el aumento del nivel del mar a nivel global.",
    etiqueta: "Investigación",
    url: "https://web.ub.edu/es/web/actualitat/w/canvi-climatic-accelera-desgel-groenlandia",
  },
];

export default function Noticias() {
  return (
    <>
      <header className="fixed top-0 w-full bg-verde/90 backdrop-blur-sm z-50">
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

      {/* Hero — montaña */}
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
            Últimas novedades
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Noticias
          </h1>
        </div>
      </section>

      {/* Listado */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col divide-y divide-neutral-200">
            {noticias.map((n) => (
              <a
                key={n.titulo}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-10 group cursor-pointer hover:pl-4 transition-all duration-300 block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full">
                    {n.etiqueta}
                  </span>
                  <span className="text-neutral-400 text-sm">{n.fecha}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-3 group-hover:text-tierra transition-colors">
                  {n.titulo}
                </h3>
                <p className="text-neutral-500 leading-relaxed max-w-2xl">{n.resumen}</p>
              </a>
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
