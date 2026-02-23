export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © 2024 Revenue Systems Group. Consultora especializada en
          automatización comercial.
        </p>
        <nav aria-label="Legal" className="flex gap-4">
          <a href="#" className="underline-offset-4 hover:underline focus:underline focus:outline-none">
            Aviso legal
          </a>
          <a href="#" className="underline-offset-4 hover:underline focus:underline focus:outline-none">
            Política de privacidad
          </a>
          <a href="#" className="underline-offset-4 hover:underline focus:underline focus:outline-none">
            Política de cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
