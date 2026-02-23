export default function Hero() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Revenue Systems Group
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
          Cierra mas ventas con un sistema de leads automatizado.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Implementamos CRM y automatizaciones para que tu equipo comercial responda antes y venda mas.
        </p>
        <a
          href="#diagnostico"
          aria-label="Reservar diagnostico"
          className="mt-10 inline-flex rounded-md bg-[#00B8F5] px-6 py-3 font-semibold text-[#0A1B2E] transition hover:bg-[#20C6FC] focus:ring-2 focus:ring-[#0E2A47] focus:outline-none"
        >
          Reservar diagnostico
        </a>
      </div>
    </section>
  );
}
