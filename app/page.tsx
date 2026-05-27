import Link from "next/link";

const pilares = [
  {
    numero: "01",
    titulo: "Educación e Investigación",
    descripcion:
      "Entregamos un espacio de encuentro que fortalece la resiliencia climática, facilita el acceso a la naturaleza y genera experiencias que permiten comprender el medio ambiente como sistema global en permanente modificación.",
  },
  {
    numero: "02",
    titulo: "Protección del Medio Ambiente",
    descripcion:
      "Realizamos acciones para el uso consciente de energía y recursos naturales, la reducción y captura de gases de efecto invernadero, la economía circular y el control de la contaminación en todas sus formas.",
  },
  {
    numero: "03",
    titulo: "Conservación de la Naturaleza",
    descripcion:
      "Conservamos la tierra y sus ecosistemas, promovemos la preservación, restauración y regeneración de la naturaleza, y protegemos el patrimonio natural y cultural, especialmente en territorios de alto valor natural.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-verde/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Chile · Organización Ambiental
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-crema leading-[1.05] mb-8 max-w-4xl">
            Adaptación climática, protección y regeneración de la naturaleza
          </h1>
          <p className="text-crema/65 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Creamos, desarrollamos e implementamos programas y acciones para la
            adaptación al cambio climático, la protección del medio ambiente, y
            la conservación y regeneración de la naturaleza.
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
              Tres áreas que guían nuestra misión de reflexionar en conciencia
              con la naturaleza y recobrar nuestro balance interno y con el
              entorno.
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
            Promovemos y participamos en actividades de educación, investigación,
            conservación y cultura — seminarios, talleres, publicaciones y
            programas de difusión — para el desarrollo sostenible y la salud
            humana, animal y ambiental.
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
