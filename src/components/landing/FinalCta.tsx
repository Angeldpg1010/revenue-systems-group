export default function FinalCta() {
  return (
    <section id="diagnostico" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-2xl bg-[#0E2A47] p-8 text-white md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Reserva un diagnostico comercial.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-200">
            En 30 minutos revisamos tu embudo y definimos un plan claro para automatizar ventas.
          </p>
          <a
            href="mailto:hello@revenuesystemsgroup.com"
            aria-label="Reservar diagnostico por correo"
            className="mt-8 inline-flex rounded-md bg-[#00B8F5] px-6 py-3 font-semibold text-[#0A1B2E] transition hover:bg-[#20C6FC] focus:ring-2 focus:ring-white focus:outline-none"
          >
            Reservar diagnostico
          </a>
        </div>
      </div>
    </section>
  );
}
