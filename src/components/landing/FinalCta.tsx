export default function FinalCta() {
  return (
    <section id="diagnostico" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-2xl bg-[#0E2A47] p-8 text-white md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Si tenéis leads pero no tenéis control, es momento de estructurar
            el sistema.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-200">
            Revisamos vuestro proceso actual y os diremos exactamente qué
            optimizar.
          </p>
          <a
            href="mailto:hello@revenuesystemsgroup.com"
            aria-label="Reservar diagnóstico gratuito"
            className="mt-8 inline-flex rounded-md bg-[#00B8F5] px-6 py-3 font-semibold text-[#0A1B2E] transition hover:bg-[#20C6FC] focus:ring-2 focus:ring-white focus:outline-none"
          >
            Reservar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
