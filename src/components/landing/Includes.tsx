const items = [
  "Diseño del pipeline adaptado a vuestro proceso.",
  "Automatización de asignación y seguimiento de leads.",
  "Alertas y tareas automáticas para comerciales.",
  "Panel de control con métricas clave.",
  "Formación práctica para el equipo.",
];

export default function Includes() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Qué incluye el Sistema Comercial Automatizado
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-zinc-200 p-5 text-zinc-700">
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#diagnostico"
          aria-label="Reservar diagnóstico gratuito"
          className="mt-10 inline-flex rounded-md border border-[#0E2A47] px-6 py-3 font-semibold text-[#0E2A47] transition hover:bg-[#0E2A47] hover:text-white focus:ring-2 focus:ring-[#0E2A47] focus:outline-none"
        >
          Reservar diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}
