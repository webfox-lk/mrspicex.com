import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInquiry } from "./InquiryProvider";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useInquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b border-border/60 shadow-soft" : "bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="M.R Spice Export home">
          {/* Responsive Icon Image replacing "MR" text */}
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-primary/80  p-0.5 shadow-sm transition-transform duration-500 group-hover:rotate-6 sm:size-11">
            <img
              src= {logo} // Change this to your logo asset path (e.g. /images/mr-logo.jpg or imported SVG/PNG)
              alt="M.R Spice Export Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-[15px] font-bold leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-background",
              )}
            >
              M.R SPICE EXPORT
            </span>
            <span
              className={cn(
                "block text-[10px] font-medium uppercase tracking-[0.24em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-background/70",
              )}
            >
              (PVT) LTD SRILANKA
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/75 hover:text-primary data-[active=true]:text-primary"
                  : "text-background/85 hover:text-background data-[active=true]:text-gold",
              )}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => open()}
            className="ml-3 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lift"
          >
            Request Quote
          </button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-full border p-2.5 transition-colors lg:hidden",
            scrolled ? "border-border/70 bg-card/70 text-foreground" : "border-background/30 bg-background/10 text-background",
          )}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-panel animate-fade-in border-t border-border/60 lg:hidden">
          <div className="container-x flex flex-col gap-1 py-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ "data-active": "true" }}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-accent data-[active=true]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="mt-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}