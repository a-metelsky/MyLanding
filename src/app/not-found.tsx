import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-3 font-heading text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-xl text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to Home
      </Link>
    </main>
  );
}
