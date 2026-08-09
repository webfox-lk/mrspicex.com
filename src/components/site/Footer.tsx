import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { products } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";


export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="font-display text-lg font-bold">M.R SPICE EXPORT</span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            M.R SPICE EXPORT (PVT) LTD is committed to supplying premium Sri Lankan whole spices to buyers across the globe.
          </p>
          {/* <div className="mt-6 flex gap-2">
            <a href="https://www.linkedin.com/in/mrspicexport" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/mrspicexport" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
              <Facebook className="size-4" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/mrspicexport" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
              <Instagram className="size-4" aria-hidden="true" />
            </a>
          </div> */}
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/75 transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Products</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to="/products" className="text-foreground/75 transition hover:text-primary">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FaWhatsapp className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={whatsappLink("Hello, I would like to inquire about your Sri Lankan spices.")} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center text-center gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} M.R SPICE EXPORT (PVT) LTD. All rights reserved.</p>
          <p>Developed by <a href="https://webfox.lk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Webfox</a></p>
        </div>
      </div>
    </footer>
  );
}