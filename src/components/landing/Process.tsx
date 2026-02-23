const steps = [
  "Diagnóstico - Analizamos vuestro proceso actual y detectamos fugas.",
  "Implementación - Configuramos el sistema en 14 días adaptado a vuestra empresa.",
  "Optimización - Ajustamos y medimos para asegurar resultados sostenibles.",
];

export default function Process() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Cómo trabajamos
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="rounded-lg border border-zinc-200 p-5 text-zinc-700">
              <span className="mr-2 font-semibold text-[#0E2A47]">0{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
