import Link from "next/link";

const programas = [
  {
    numero: "01",
    titulo: "Adaptación Climática Territorial",
    descripcion: "Trabajamos con comunidades rurales y urbanas para desarrollar estrategias locales de adaptación ante los efectos del cambio climático, incluyendo sequías, inundaciones y olas de calor.",
    etiqueta: "Adaptación",
  },
  {
    numero: "02",
    titulo: "Restauración de Ecosistemas",
    descripcion: "Desarrollamos proyectos de restauración de bosques nativos, humedales y zonas costeras, recuperando la biodiversidad y los servicios ecosistémicos de los territorios intervenidos.",
    etiqueta: "Conservación",
  },
  {
    numero: "03",
    titulo: "Educación Ambiental",
    descripcion: "Formamos a estudiantes, docentes y comunidades en conciencia ambiental, entregando herramientas para comprender y actuar frente a la crisis climática y ecológica.",
    etiqueta: "Educación",
  },
  {
    numero: "04",
    titulo: "Monitoreo de Biodiversidad",
    descripcion: "Realizamos monitoreo sistemático de especies y ecosistemas para generar información científica que oriente políticas de conservación a nivel local y nacional.",
    etiqueta: "Ciencia",
  },
];

export default function Programas() {
  return (
    <>
      <header className="fixed top-0 w-full bg-verde/95 backdrop-blur-sm z-50">
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

      <section className="min-h-[50vh] bg-verde flex items-end pb-20">
        <div className="max-w-6xl mx-auto px-6 pt-40 w-full">
          <p className="text-tierra text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Qué hacemos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Nuestros programas
          </h1>
        </div>
      </section>

      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programas.map((p) => (
              <div key={p.numero} className="bg-white rounded-2xl p-8 border border-verde/10 hover:border-tierra/30 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-tierra font-serif text-3xl font-bold">{p.numero}</span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-verde/40 border border-verde/20 px-3 py-1 rounded-full">
                    {p.etiqueta}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-verde mb-3">{p.titulo}</h3>
                <p className="text-verde/55 leading-relaxed text-sm">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-tierra">
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

      <footer className="bg-verde py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-crema text-lg">Anitya</p>
          <p className="text-crema/40 text-sm">© 2025 · Chile · Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}
