import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";

export function InquiryModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-end overflow-y-auto bg-foreground/45 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="animate-scale-in my-auto w-full max-w-2xl rounded-t-3xl bg-card p-6 shadow-lift outline-none sm:rounded-3xl sm:p-9"
      >
        <div className="mb-6 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Export inquiry</p>
            <h2 id="inquiry-title" className="mt-2 text-2xl font-bold sm:text-3xl">
              {product ? `Request a quote for ${product}` : "Request a quote"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your requirement and our export desk will respond with grades, packing options and FOB/CIF pricing.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry form"
            className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <InquiryForm defaultProduct={product} compact />
      </div>
    </div>
  );
}