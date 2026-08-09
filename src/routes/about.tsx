import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Flag, Leaf, ShieldCheck, Users } from "lucide-react";
import plantationImage from "@/assets/plantation.jpg";
import qualityImage from "@/assets/quality.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const TITLE = "About M.R Spice Export | Ceylon Spice Exporters";
const DESCRIPTION =
  "Learn how M.R SPICE EXPORT (PVT) LTD sources, grades and ships premium Sri Lankan whole spices — our mission, vision, core values and export philosophy.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "What we quote is what we ship. Specifications, grades and timelines are never quietly adjusted." },
  { icon: Leaf, title: "Origin Respect", text: "Fair, long-term relationships with growers keep quality high and supply stable through every season." },
  { icon: Users, title: "Buyer Partnership", text: "We treat each importer as a long-term partner, not a transaction — and plan volumes around their calendar." },
  { icon: Compass, title: "Consistency", text: "Repeatable grading discipline so your tenth container matches your first." },
];

const timeline = [
  { year: "Sourcing", text: "Direct purchasing from growers and collection centres across Sri Lanka's spice-growing districts." },
  { year: "Processing", text: "Cleaning, sorting, drying and grading to buyer-specified standards at partner facilities." },
  { year: "Inspection", text: "Sensory, moisture and foreign-matter checks with documented results per batch." },
  { year: "Export", text: "Packing, documentation and shipment through the Port of Colombo to destinations worldwide." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="M.R SPICE EXPORT (PVT) LTD"
        intro="M.R SPICE EXPORT (PVT) LTD is a Sri Lankan exporter specializing in premium-quality whole spices for international markets. We are dedicated to providing carefully selected products while maintaining high standards of quality, reliability and customer satisfaction."
        image={plantationImage}
        alt="Sri Lankan spice plantation at sunrise"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Our Company</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Rooted in Ceylon, trusted internationally</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                We are a dedicated whole-spice exporter. That focus is deliberate: whole spices demand different
                handling, grading and storage from ground products, and buyers who care about aroma, oil content and
                appearance need a supplier who understands that difference.
              </p>
              <p>
                Our team works directly with growers and collection centres in the cinnamon belt of the south-west,
                the pepper and clove lands of the central hills, and the arecanut and goraka regions of the wet zone.
                Buying close to the source keeps quality high and pricing honest.
              </p>
              <p>
                From a single trial pallet to repeat full container loads, we handle grading, packing, documentation
                and shipping so that international buyers can rely on one accountable partner in Sri Lanka.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={qualityImage} alt="Inspecting graded Ceylon cinnamon before export packing" loading="lazy" width={1280} height={1280} className="size-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-24 sm:py-32">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="hover-lift h-full rounded-3xl border border-border/70 bg-background p-9 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
                <Flag className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To deliver authentic Sri Lankan whole spices to international buyers with uncompromising quality,
                transparent communication and dependable shipping while ensuring the growers behind every
                consignment are paid fairly.
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="hover-lift h-full rounded-3xl border border-border/70 bg-background p-9 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
                <Eye className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To be recognised among the most trusted names in Ceylon spice export the first call for any importer
                who wants genuine Sri Lankan origin, consistent grading and a supplier that keeps its word.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Core Values" title="The principles behind every shipment" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <article className="hover-lift h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-2xl bg-accent text-primary">
                    <v.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Export Philosophy"
            title="From plantation to port, one accountable chain"
            intro="We keep every stage under our own supervision so nothing is lost between the grower and your warehouse."
          />
          <ol className="mx-auto mt-16 max-w-3xl space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 110} as="li" className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/25 bg-card text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && <span aria-hidden="true" className="mt-2 w-px flex-1 bg-primary/20" />}
                </div>
                <div className="min-w-0 pt-1.5">
                  <h3 className="text-lg font-bold">{t.year}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Why Sri Lanka</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Why Choose Sri Lankan Spices</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sri Lanka's tropical monsoon climate, varied elevation and mineral-rich soil create growing conditions
              that few origins can match. True Ceylon cinnamon — softer, sweeter and naturally low in coumarin — grows
              here and nowhere else at this quality. Pepper, cloves, cardamom, nutmeg and mace from the central hills
              carry high volatile-oil content, and traditional harvesting keeps the whole spice intact.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              For buyers, that means stronger aroma per kilogram, better shelf presence and an origin story customers
              recognise instantly.
            </p>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={plantationImage} alt="Green hills of a Sri Lankan spice growing region" loading="lazy" width={1600} height={900} className="size-full object-cover" />
          </Reveal>
        </div>
      </section>
    </>
  );
}