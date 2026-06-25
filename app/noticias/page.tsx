import Link from "next/link";
import Parser from "rss-parser";

export const revalidate = 86400; // Actualiza las noticias cada día

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=80";

type Noticia = {
  titulo: string;
  resumen: string;
  url: string;
  fecha: string;
  fuente: string;
};

async function obtenerNoticias(): Promise<Noticia[]> {
  const parser = new Parser();
  const feedUrl =
    "https://news.google.com/rss/search?q=cambio+climatico+medio+ambiente+chile&hl=es-419&gl=CL&ceid=CL:es-419";

  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items.slice(0, 4).map((item) => {
      // Google News incluye "Título - Fuente" en el campo title
      const partes = (item.title || "").split(" - ");
      const fuente = partes.length > 1 ? partes.pop()! : "";
      const titulo = partes.join(" - ");

      const fecha = item.pubDate
        ? new Date(item.pubDate).toLocaleDateString("es-CL", {
            month: "long",
            year: "numeric",
          })
        : "";

      return {
        titulo,
        resumen: item.contentSnippet || "",
        url: item.link || "",
        fecha,
        fuente,
      };
    });
  } catch (err) {
    console.error("Error al obtener noticias RSS:", err);
    return [];
  }
}

export default async function Noticias() {
  const noticias = await obtenerNoticias();

  return (
    <>
      {/* Hero */}
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
          {noticias.length === 0 ? (
            <p className="text-neutral-400 text-center py-20">
              No se pudieron cargar las noticias. Intenta más tarde.
            </p>
          ) : (
            <div className="flex flex-col divide-y divide-neutral-200">
              {noticias.map((n) => (
                <a
                  key={n.url}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-10 group cursor-pointer hover:pl-4 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {n.fuente && (
                      <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full">
                        {n.fuente}
                      </span>
                    )}
                    <span className="text-neutral-400 text-sm">{n.fecha}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-3 group-hover:text-tierra transition-colors">
                    {n.titulo}
                  </h3>
                  {n.resumen && (
                    <p className="text-neutral-500 leading-relaxed max-w-2xl">
                      {n.resumen}
                    </p>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-verde py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div>
              <p className="font-serif text-crema text-2xl mb-3">Anitya</p>
              <p className="text-crema/45 text-sm max-w-xs leading-relaxed">
                Organización chilena dedicada a la adaptación al cambio
                climático, la protección del medio ambiente y la regeneración de
                la naturaleza.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-crema/30 text-xs uppercase tracking-widest mb-4">
                  Organización
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/nosotros"
                      className="text-crema/60 text-sm hover:text-crema transition-colors"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programas"
                      className="text-crema/60 text-sm hover:text-crema transition-colors"
                    >
                      Programas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/noticias"
                      className="text-crema/60 text-sm hover:text-crema transition-colors"
                    >
                      Noticias
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-crema/30 text-xs uppercase tracking-widest mb-4">
                  Participar
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/eventos"
                      className="text-crema/60 text-sm hover:text-crema transition-colors"
                    >
                      Eventos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="text-crema/60 text-sm hover:text-crema transition-colors"
                    >
                      Contáctanos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-crema/10 pt-6">
            <p className="text-crema/30 text-xs">
              © 2025 · Anitya · Chile · Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
