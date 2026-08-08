import type { Product } from "@/data/products";
import { useInquiry } from "./InquiryProvider";

export function ProductCard({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  const { open } = useInquiry();

  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          width={1024}
          height={1024}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-107"
        />
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
          Export Quality
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="shrink-0 text-[11px] italic text-muted-foreground">{product.botanical}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        {detailed && (
          <dl className="mt-5 space-y-2 border-t border-border pt-5 text-xs">
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-muted-foreground">Grades</dt>
              <dd className="text-foreground/80">{product.grades}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-muted-foreground">Packing</dt>
              <dd className="text-foreground/80">{product.packing}</dd>
            </div>
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground">Whole Spice</span>
          <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium text-brand-brown">Bulk Export</span>
        </div>

        <button
          type="button"
          onClick={() => open(product.name)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary/25 bg-transparent px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Request Inquiry
        </button>
      </div>
    </article>
  );
}