import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-spices.jpg";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { useInquiry } from "@/components/site/InquiryProvider";
import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

const TITLE = "Sri Lankan Whole Spices for Bulk Export | Products";
const DESCRIPTION =
  "Browse our export range of Sri Lankan whole spices: Ceylon cinnamon, black pepper, cloves, cardamom, nutmeg, mace, vanilla, arecanut and goraka — available in bulk.";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sri Lankan whole spices for export",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.description,
              category: p.category,
              brand: { "@type": "Brand", name: "M.R SPICE EXPORT (PVT) LTD" },
            },
          })),
        }),
      },
    ],
  }),
});

function Products() {
  const [filter, setFilter] = useState<string>("All");
  const { open } = useInquiry();
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Whole Spices, Graded for Export"
        intro="Nine whole-spice lines sourced across Sri Lanka, cleaned and graded to buyer specification. Samples and full specification sheets are available for every product."
        image={heroImage}
        alt="Assortment of premium Sri Lankan whole spices"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-center justify-center gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <ProductCard product={p} detailed />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 rounded-[2rem] border border-border/70 bg-card p-10 text-center shadow-soft sm:p-14">
            <h2 className="text-2xl font-bold sm:text-3xl">Need a spice that isn't listed?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We regularly source additional Sri Lankan agricultural commodities on request. Tell us the product,
              grade and volume you need and we will confirm availability.
            </p>
            <button
              type="button"
              onClick={() => open("Mixed / Other")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lift"
            >
              Request a Quote
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}