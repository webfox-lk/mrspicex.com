import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground pt-[72px]">
      <img src={image} alt={alt} width={1600} height={900} className="absolute inset-0 -z-10 size-full object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/85" aria-hidden="true" />
      <div className="container-x py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-background sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}