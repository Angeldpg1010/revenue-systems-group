export default function Hero() {
  return (
    <section className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Domia Revenue Systems
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
          Aumentamos las ventas de empresas con equipo comercial automatizando
          su gestión de leads.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Detectamos fugas en vuestro proceso comercial e implementamos un
          sistema estructurado para que ningún lead se pierda y el seguimiento
          sea automático. 15 minutos. Sin compromiso.
        </p>
        <a
          href="#diagnostico"
          aria-label="Reservar diagnóstico gratuito"
          className="mt-10 inline-flex rounded-md bg-[#00B8F5] px-6 py-3 font-semibold text-[#0A1B2E] transition hover:bg-[#20C6FC] focus:ring-2 focus:ring-[#0E2A47] focus:outline-none"
        >
          Reservar diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}
