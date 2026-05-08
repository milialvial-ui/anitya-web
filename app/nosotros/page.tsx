import Link from "next/link";

export default function Nosotros() {
  return (
    <>
      <header className="fixed top-0 w-full bg-verde/95 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-crema font-serif text-xl font-bold tracking-tight">
            Anitya
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/nosotros" className="text-crema transition-colors">Nosotros</Link></li>
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

      <section className="min-h-screen bg-verde flex items-end pb-20">
        <div className="max-w-6xl mx-auto px-6 pt-40 w-full">
          <p className="text-tierra text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Quiénes somos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Somos Anitya
          </h1>
        </div>
      </section>

      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-verde mb-6">Nuestra misión</h2>
            <p className="text-verde/70 leading-relaxed text-lg mb-6">
              Anitya es una fundación chilena dedicada a la protección y regeneración de los ecosistemas naturales de Chile, trabajando en adaptación climática, conservación de la biodiversidad y educación ambiental.
            </p>
            <p className="text-verde/70 leading-relaxed text-lg">
              Creemos que el bienestar humano y el de la naturaleza están profundamente conectados. Por eso trabajamos junto a comunidades, instituciones y territorios para construir un futuro más resiliente y sostenible.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-verde mb-6">Nuestra visión</h2>
            <p className="text-verde/70 leading-relaxed text-lg">
              Un Chile donde los ecosistemas naturales estén protegidos y en regeneración, donde las comunidades cuenten con las herramientas para adaptarse al cambio climático, y donde la educación ambiental sea parte fundamental de la vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-verde mb-12 text-center">Nuestros valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Respeto por la naturaleza", desc: "Reconocemos el valor intrínseco de todos los seres vivos y ecosistemas." },
              { titulo: "Compromiso territorial", desc: "Trabajamos en y con los territorios, escuchando a las comunidades locales." },
              { titulo: "Ciencia y acción", desc: "Basamos nuestro trabajo en evidencia científica y lo traducimos en acción concreta." },
            ].map((v) => (
              <div key={v.titulo} className="bg-crema rounded-2xl p-8 border border-verde/10">
                <h3 className="font-serif text-xl text-verde mb-3">{v.titulo}</h3>
                <p className="text-verde/55 leading-relaxed text-sm">{v.desc}</p>
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
