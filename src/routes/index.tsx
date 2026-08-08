import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  Boxes,
  ChevronDown,
  FileText,
  Globe2,
  Handshake,
  Leaf,
  MessageCircle,
  PackageCheck,
  Ship,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "@/assets/hero-spices.jpg";
import qualityImage from "@/assets/quality.jpg";
import plantationImage from "@/assets/plantation.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { useInquiry } from "@/components/site/InquiryProvider";
import { featuredProducts } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";
import worldMap from "@/assets/world-map.png";


const TITLE = "Sri Lankan Whole Spice Exporter | M.R Spice Export";
const DESCRIPTION =
  "M.R SPICE EXPORT (PVT) LTD exports premium Sri Lankan whole spices — Ceylon cinnamon, pepper, cloves, cardamom, arecanut and goraka — in bulk to importers worldwide.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          description: DESCRIPTION,
          email: site.email,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st floor, 96 Kandy Road, Mawathagama",
            addressLocality: "Kurunegala",
            addressCountry: "LK",
          },
        }),
      },
    ],
  }),
});

const reasons = [
  {
    icon: Leaf,
    title: "Premium Sri Lankan Origin",
    text: "Every consignment is sourced directly from smallholder growers and estates across Sri Lanka's spice belt, protecting origin authenticity and traceability.",
  },
  {
    icon: ShieldCheck,
    title: "Export Quality",
    text: "Cleaning, grading and moisture control are carried out to internationally accepted specifications before any container is sealed.",
  },
  {
    icon: Boxes,
    title: "Bulk Supply",
    text: "Reliable volumes from trial orders to full container loads, with harvest-season planning for buyers who need year-round continuity.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    text: "FOB, CFR and CIF shipments to major ports across the Middle East, Europe, Asia, North America and Australia.",
  },
  {
    icon: Handshake,
    title: "Reliable Service",
    text: "One dedicated export coordinator per buyer, clear documentation and honest updates from purchase order to arrival.",
  },
  {
    icon: PackageCheck,
    title: "Quality Packaging",
    text: "Food-grade liners, moisture barriers and private-label packing options that protect aroma and oil content in transit.",
  },
];

const steps = [
  { icon: MessageCircle, title: "Send Inquiry", text: "Share your product, grade, volume and destination port." },
  { icon: FileText, title: "Receive Quotation", text: "We respond within one business day with pricing, samples and lead time." },
  { icon: Handshake, title: "Order Confirmation", text: "Specifications, packing and payment terms are confirmed in writing." },
  { icon: Ship, title: "Worldwide Delivery", text: "Inspected, sealed and shipped with complete export documentation." },
];

const spiceQualities = [
  { icon: Leaf, title: "Natural", text: "Cultivated in mineral-rich tropical soil with traditional, chemical-conscious practices." },
  { icon: Wind, title: "Rich Aroma", text: "High volatile-oil content that survives grinding, blending and long shelf life." },
  { icon: Award, title: "Authentic Origin", text: "Genuine Ceylon varieties — not substituted, blended or re-exported stock." },
  { icon: Sparkles, title: "Premium Quality", text: "Hand-selected, uniformly graded lots that meet demanding buyer specifications." },
];

const stats = [
  { value: 25, suffix: "+", label: "Export destinations" },
  { value: 9, suffix: "", label: "Whole spice lines" },
  { value: 100, suffix: "%", label: "Sri Lankan origin" },
  { value: 24, suffix: "hr", label: "Inquiry response" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const mapDots = [
  { top: "35%", left: "32%" },
  { top: "22%", left: "42%" },
  { top: "56%", left: "51%" },
  { top: "68%", left: "66%" },
  { top: "36%", left: "60%" },
  { top: "28%", left: "72%" },
  { top: "63%", left: "39%" },
];

function Index() {
  const { open } = useInquiry();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-foreground">
        <img
          src={heroImage}
          alt="Premium Sri Lankan whole spices including cinnamon, pepper, cardamom and cloves"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/85 via-foreground/65 to-foreground/80" aria-hidden="true" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-24 -z-10 size-72 rounded-full bg-primary/25 blur-3xl [animation:float-slow_14s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-16 -z-10 size-80 rounded-full bg-gold/20 blur-3xl [animation:float-slow_18s_ease-in-out_infinite]" />

        <div className="container-x py-36">
          <div className="max-w-3xl">
            <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Sri Lankan Whole Spice Exporter
            </p>
            <h1 className="animate-fade-in mt-6 text-4xl font-bold leading-[1.05] text-background sm:text-5xl md:text-6xl lg:text-[4.25rem]" style={{ animationDelay: "120ms" }}>
              Premium Sri Lankan Whole Spices Exported Worldwide
            </h1>
            <p className="animate-fade-in mt-7 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg" style={{ animationDelay: "240ms" }}>
              {site.name} supplies premium-quality whole spices sourced from Sri Lanka. We provide reliable bulk
              export solutions for wholesalers, distributors, retailers and importers worldwide.
            </p>
            <div className="animate-fade-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "360ms" }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lift"
              >
                Explore Products
              </Link>
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center justify-center rounded-full border border-background/35 bg-background/10 px-8 py-4 text-sm font-semibold text-background backdrop-blur transition-all duration-300 hover:bg-background/20"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-background/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="size-4 [animation:scroll-hint_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Buyers Choose M.R SPICE EXPORT"
            intro="We understand the importance of quality, reliability and timely delivery in the global spice market. Our team carefully selects and supplies premium Sri Lankan whole spices to meet the requirements of wholesalers, importers, distributors and food manufacturers worldwide."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <article className="hover-lift h-full rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
                    <r.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-muted/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Range"
            title="Featured Export Products"
            intro="A selection of the whole spices most requested by our international buyers. Full specifications and samples are available on request."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lift"
            >
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Export process */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Export Process"
            intro="Four transparent steps from first message to delivered container."
          />
          <div className="relative mt-20">
            <div aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent lg:block" />
            <ol className="grid gap-10 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 140} as="li" className="relative">
                  <span className="relative z-10 grid size-14 place-items-center rounded-2xl border border-primary/20 bg-card text-primary shadow-soft">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Step {i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="bg-card py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={qualityImage}
                alt="Quality inspector grading Ceylon cinnamon quills at an export facility"
                loading="lazy"
                width={1280}
                height={1280}
                className="size-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Quality Commitment</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Quality You Can Trust</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Quality control begins long before packing. We buy from growing regions we know personally, reject
                lots that fail our sensory and moisture checks, and keep each consignment traceable to its source.
              </p>
              <p>
                Every batch is cleaned, sorted and graded, then inspected for foreign matter, colour consistency and
                aroma. Moisture levels are measured and controlled so the spice reaches your warehouse in the same
                condition it left ours.
              </p>
              <p>
                Packaging is chosen for the journey: food-grade liners, moisture barriers and secure palletisation,
                with private labelling available. After shipment, your coordinator stays available until you confirm
                the goods arrived exactly as specified.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Careful sourcing", "Batch inspection", "Moisture control", "Protective packaging"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                  <ShieldCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Sri Lankan spices */}
      <section className="relative isolate overflow-hidden bg-foreground py-24 sm:py-32">
        <img src={plantationImage} alt="" aria-hidden="true" loading="lazy" width={1600} height={900} className="absolute inset-0 -z-10 size-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-foreground/70" aria-hidden="true" />
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Origin</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-background sm:text-4xl">Why Sri Lankan Spices</h2>
            <p className="mt-5 text-base leading-relaxed text-background/75">
              Sri Lanka is internationally recognized for producing some of the world's finest spices. From the rich aroma of Ceylon Cinnamon to the unique flavor of Goraka and premium Arecanut, our products represent the authentic taste of Sri Lanka.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spiceQualities.map((q, i) => (
              <Reveal key={q.title} delay={i * 100}>
                <div className="glass-panel hover-lift h-full rounded-2xl p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <q.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Worldwide Export */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Global Reach
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Exporting Sri Lankan Excellence Worldwide
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              Our containers move through Colombo Port to buyers across the
              Middle East, Europe, Asia, North America and Oceania.
            </p>
          </div>


          {/* World Map Box */}
          <div className="relative mx-auto mt-16 h-[420px] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:h-[500px]">

            {/* Transparent World Map */}
            <img
              src={worldMap}
              alt="Worldwide export destinations from Sri Lanka"
              className="absolute inset-0 z-0 h-full w-full object-contain p-8 md:p-12"
            />

            {/* Blinking Export Locations */}
            {mapDots.map((d, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute z-10 size-3 rounded-full bg-gold shadow-[0_0_0_6px_color-mix(in_oklab,var(--gold)_22%,transparent)]"
                style={{
                  top: d.top,
                  left: d.left,
                  animation: `pulse-dot 2.8s ease-in-out ${i * 0.35}s infinite`,
                }}
              />
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl md:text-[2.75rem]">
              Ready to Import Premium Sri Lankan Spices?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80">
              Send us your requirement today and receive a detailed quotation, product specifications and samples.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-lift"
              >
                Request Quote
              </button>
              <a
                href={whatsappLink("Hello M.R Spice Export, I would like to discuss a bulk spice order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
              >
                <FaWhatsapp className="size-5" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
