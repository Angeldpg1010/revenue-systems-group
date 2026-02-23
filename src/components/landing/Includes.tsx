const items = [
  "Auditoria de embudo y proceso comercial",
  "Configuracion CRM enfocada a conversion",
  "Automatizaciones de seguimiento y tareas",
  "Panel de pipeline y metricas de ventas",
];

export default function Includes() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Que incluye</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-zinc-200 p-5 text-zinc-700">
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#diagnostico"
          aria-label="Solicitar diagnostico"
          className="mt-10 inline-flex rounded-md border border-[#0E2A47] px-6 py-3 font-semibold text-[#0E2A47] transition hover:bg-[#0E2A47] hover:text-white focus:ring-2 focus:ring-[#0E2A47] focus:outline-none"
        >
          Solicitar diagnostico
        </a>
      </div>
    </section>
  );
}
