import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80";
const VALLEY_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80";

export default function Nosotros() {
  return (
    <>
      {/* Hero — valle verde */}
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
            Quiénes somos
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-crema leading-[1.05] max-w-3xl">
            Somos Anitya
          </h1>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-24 bg-crema">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-8 h-0.5 bg-tierra mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Nuestra misión</h2>
            <p className="text-neutral-700 leading-relaxed text-lg mb-6">
              Anitya es una organización chilena dedicada a la creación, desarrollo e implementación de programas y acciones para la adaptación al cambio climático, la protección del medio ambiente, y la conservación y regeneración de la naturaleza.
            </p>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Creemos que el bienestar humano y el de la naturaleza están profundamente conectados. Por eso trabajamos junto a comunidades, instituciones y territorios para construir un futuro más resiliente y sostenible.
            </p>
          </div>
          <div>
            <div className="w-8 h-0.5 bg-tierra mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Nuestra visión</h2>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Un Chile donde los ecosistemas naturales estén protegidos y en regeneración, donde las comunidades cuenten con las herramientas para adaptarse al cambio climático, y donde la educación ambiental sea parte fundamental de la vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      {/* Foto montaña + cita */}
      <section
        className="relative py-40 flex items-center"
        style={{
          backgroundImage: `url('${VALLEY_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-verde/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl md:text-5xl text-crema leading-tight">
            Facilitamos el acceso a la naturaleza y generamos experiencias que fortalecen nuestra resiliencia climática.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-tierra text-xs font-semibold tracking-[0.2em] uppercase mb-4">Lo que nos guía</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
            {[
              { titulo: "Respeto por la naturaleza", desc: "Reconocemos el valor intrínseco de todos los seres vivos y ecosistemas, rescatando el conocimiento ancestral como patrimonio cultural." },
              { titulo: "Compromiso territorial", desc: "Trabajamos en y con los territorios, escuchando a las comunidades locales y fomentando el uso consciente del entorno natural." },
              { titulo: "Ciencia y acción", desc: "Basamos nuestro trabajo en evidencia científica y lo traducimos en acción concreta para la conservación y el desarrollo sostenible." },
            ].map((v) => (
              <div key={v.titulo} className="bg-white p-10 hover:bg-verde group transition-colors duration-300 cursor-default">
                <div className="w-8 h-0.5 bg-tierra mb-8" />
                <h3 className="font-serif text-xl text-neutral-900 group-hover:text-crema mb-4 transition-colors">{v.titulo}</h3>
                <p className="text-neutral-500 group-hover:text-crema/70 leading-relaxed text-sm transition-colors">{v.desc}</p>
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
