import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <p className="font-mono text-[0.72rem] tracking-[0.18em] text-red uppercase">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Seite nicht gefunden</h1>
      <p className="mt-4 text-muted">
        Die Adresse existiert nicht.
      </p>
      <div className="mt-8">
        <Button href="/">Zur Startseite</Button>
      </div>
    </section>
  );
}
