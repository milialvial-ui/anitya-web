import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80";
const MID_IMAGE =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80";

const programas = [
  {
    numero: "01",
    titulo: "Adaptación Climática Territorial",
    descripcion:
      "Trabajamos con comunidades rurales y urbanas para desarrollar estrategias locales de adaptación ante los efectos del cambio climático, incluyendo sequías, inundaciones y olas de calor.",
    etiqueta: "Adaptación",
  },
  {
    numero: "02",
    titulo: "Restauración de Ecosistemas",
    descripcion:
      "Desarrollamos proyectos de restauración de bosques nativos, humedales y zonas costeras, recuperando la biodiversidad y los servicios ecosistémicos de los territorios intervenidos.",
    etiqueta: "Conservación",
  },
  {
    numero: "03",
    titulo: "Educación Ambiental",
    descripcion:
      "Desarrollamos y entregamos herramientas de educación, capacitación y formación que potencian la comprensión del medio ambiente y los efectos del cambio climático en comunidades, escuelas y organizaciones.",
    etiqueta: "Educación",
  },
  {
    numero: "04",
    titulo: "Monitoreo de Biodiversidad",
    descripcion:
      "Realizamos monitoreo sistemático de especies y ecosistemas para generar información científica que oriente políticas de conservación a nivel local y nacional.",
    etiqueta: "Ciencia",
  },
];

export default function Programas() {
  return (
    <>
      <header className="fixed top-0 w-full bg-verde/90 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-crema font-serif text-xl font-bold tracking-tight">
            Anitya
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/nosotros" className="text-crema/80 hover:text-crema transition-colors">Nosotros</Link></li>
            <li><Link href="/programas" className="text-crema transition-colors">Programas</Link></li>
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

      {/* Hero — bosque */}
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
            Qué hacemos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Nuestros programas
          </h1>
        </div>
      </section>

      {/* Tarjetas */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
            {programas.map((p) => (
              <div key={p.numero} className="bg-white p-10 hover:bg-verde group transition-colors duration-300 cursor-default">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-4xl text-tierra font-bold">
                    {p.numero}
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-crema/50 border border-neutral-200 group-hover:border-crema/30 px-3 py-1 rounded-full transition-colors">
                    {p.etiqueta}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-neutral-900 group-hover:text-crema mb-4 transition-colors">
                  {p.titulo}
                </h3>
                <p className="text-neutral-500 group-hover:text-crema/70 leading-relaxed text-sm transition-colors">
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto pradera + texto */}
      <section
        className="relative py-40"
        style={{
          backgroundImage: `url('${MID_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-verde/95 to-verde/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Nuestro enfoque
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-crema leading-tight mb-8">
              Promovemos, realizamos y colaboramos en actividades para la conservación y el desarrollo sostenible
            </h2>
            <p className="text-crema/70 leading-relaxed">
              Incluyendo seminarios, charlas, talleres, publicaciones, ferias, exposiciones y programas de difusión en cualquier medio y formato.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-tierra">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-crema mb-6">¿Quieres colaborar?</h2>
          <p className="text-crema/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Si eres organización, institución o comunidad interesada en trabajar con nosotros, escríbenos.
          </p>
          <Link href="/contacto" className="bg-crema text-tierra px-10 py-4 rounded-full text-base font-medium hover:bg-crema/90 transition-colors">
            Contáctanos
          </Link>
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
