const metrics = [
  { value: "•", label: "Más cierres sin aumentar inversión en marketing." },
  { value: "•", label: "Respuesta en minutos para no enfriar oportunidades." },
  {
    value: "•",
    label: "Cada lead recibe seguimiento sin depender de la memoria del comercial.",
  },
  { value: "•", label: "Visibilidad completa del estado y próximo paso de cada oportunidad." },
  { value: "•", label: "Control real del rendimiento comercial con datos claros." },
];

export default function Results() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Lo que cambia cuando el sistema funciona
        </h2>
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
