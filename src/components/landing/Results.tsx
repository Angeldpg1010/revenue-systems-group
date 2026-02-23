const metrics = [
  { value: "+35%", label: "mejora media en tasa de contacto" },
  { value: "-40%", label: "menos tiempo en tareas manuales" },
  { value: "24h", label: "tiempo objetivo de respuesta comercial" },
];

export default function Results() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Resultados esperados</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-lg border border-zinc-200 bg-white p-6">
              <p className="text-3xl font-semibold text-[#0E2A47]">{metric.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
