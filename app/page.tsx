import Link from "next/link";

const pilares = [
  {
    numero: "01",
    titulo: "Adaptación Climática",
    descripcion:
      "Desarrollamos estrategias y apoyamos a comunidades y ecosistemas para adaptarse a los efectos del cambio climático.",
  },
  {
    numero: "02",
    titulo: "Conservación",
    descripcion:
      "Protegemos y restauramos ecosistemas nativos, biodiversidad y territorios amenazados a lo largo de Chile.",
  },
  {
    numero: "03",
    titulo: "Educación Ambiental",
    descripcion:
      "Formamos conciencia ambiental en comunidades, escuelas y organizaciones para un futuro sostenible.",
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-verde/95 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-crema font-serif text-xl font-bold tracking-tight"
          >
            Anitya
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <Link
                href="/nosotros"
                className="text-crema/80 hover:text-crema transition-colors"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/programas"
                className="text-crema/80 hover:text-crema transition-colors"
              >
                Programas
              </Link>
            </li>
            <li>
              <Link
                href="/noticias"
                className="text-crema/80 hover:text-crema transition-colors"
              >
                Noticias
              </Link>
            </li>
            <li>
              <Link
                href="/eventos"
                className="text-crema/80 hover:text-crema transition-colors"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="bg-tierra text-crema px-5 py-2 rounded-full hover:bg-tierra/85 transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen bg-verde flex items-center">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <p className="text-tierra text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Chile · Fundación Ambiental
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-crema leading-[1.05] mb-8 max-w-4xl">
            Protegemos la naturaleza para las próximas generaciones
          </h1>
          <p className="text-crema/65 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Trabajamos en adaptación climática, conservación del territorio y
            educación ambiental para construir un Chile más resiliente y verde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programas"
              className="bg-tierra text-crema px-8 py-4 rounded-full text-base font-medium hover:bg-tierra/85 transition-colors text-center"
            >
              Conoce nuestros programas
            </Link>
            <Link
              href="/nosotros"
              className="border border-crema/30 text-crema px-8 py-4 rounded-full text-base hover:bg-crema/10 hover:border-crema/50 transition-colors text-center"
            >
              Quiénes somos
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-verde mb-4">
              Nuestros pilares de acción
            </h2>
            <p className="text-verde/55 text-lg max-w-xl leading-relaxed">
              Tres áreas de trabajo que guían nuestra misión de proteger y
              regenerar el territorio chileno.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar) => (
              <div
                key={pilar.numero}
                className="bg-white rounded-2xl p-8 border border-verde/10 hover:border-tierra/30 hover:shadow-sm transition-all"
              >
                <span className="text-tierra font-serif text-3xl font-bold mb-6 block">
                  {pilar.numero}
                </span>
                <h3 className="font-serif text-xl text-verde mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-verde/55 leading-relaxed text-sm">
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-tierra">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-crema mb-6">
            Súmate a nuestra misión
          </h2>
          <p className="text-crema/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Juntos podemos construir un futuro más sostenible para Chile y sus
            ecosistemas.
          </p>
          <Link
            href="/contacto"
            className="bg-crema text-tierra px-10 py-4 rounded-full text-base font-medium hover:bg-crema/90 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-verde py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-crema text-lg">Anitya</p>
          <p className="text-crema/40 text-sm">
            © 2025 · Chile · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
