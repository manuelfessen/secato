export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        {kicker ? (
          <p className="font-mono text-[0.72rem] font-semibold tracking-[0.18em] text-red uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
