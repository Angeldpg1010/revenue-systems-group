const projectTypes = [
  "ERP y sistemas internos",
  "Automatizacion de procesos",
  "Integraciones entre plataformas",
  "Plataformas B2B a medida",
];

export default function ProjectTypes() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-[#0E2A47] md:text-3xl">Tipos de proyecto</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
          Texto provisional: cubrimos escenarios habituales de transformacion digital B2B.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
          {projectTypes.map((item) => (
            <li key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
