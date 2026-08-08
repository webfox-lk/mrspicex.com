import { useMemo, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { mailtoLink, site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export interface InquiryFormValues {
  fullName: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: string;
  message: string;
}

const emptyValues: InquiryFormValues = {
  fullName: "",
  company: "",
  country: "",
  email: "",
  whatsapp: "",
  product: "",
  quantity: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground";

function buildBody(v: InquiryFormValues) {
  return [
    `Full name: ${v.fullName}`,
    `Company: ${v.company}`,
    `Country: ${v.country}`,
    `Email: ${v.email}`,
    `WhatsApp: ${v.whatsapp}`,
    `Product: ${v.product}`,
    `Quantity required: ${v.quantity}`,
    "",
    v.message,
  ].join("\n");
}

export function InquiryForm({
  defaultProduct = "",
  compact = false,
}: {
  defaultProduct?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<InquiryFormValues>({
    ...emptyValues,
    product: defaultProduct,
  });
  const [error, setError] = useState<string | null>(null);

  const subject = useMemo(
    () => `Export inquiry${values.product ? ` — ${values.product}` : ""} | ${site.shortName}`,
    [values.product],
  );

  const set = (key: keyof InquiryFormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    if (!values.fullName.trim() || !values.email.trim() || !values.product.trim()) {
      setError("Please add your name, email address and the product you need.");
      return false;
    }
    setError(null);
    return true;
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = mailtoLink(subject, buildBody(values));
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(whatsappLink(`${subject}\n\n${buildBody(values)}`), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
      noValidate
    >
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <div>
          <label className={labelClass} htmlFor="if-name">
            Full name*
          </label>
          <input id="if-name" className={fieldClass} value={values.fullName} onChange={set("fullName")} placeholder="Jane Fernando" autoComplete="name" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="if-company">
            Company name
          </label>
          <input id="if-company" className={fieldClass} value={values.company} onChange={set("company")} placeholder="Global Foods Ltd" autoComplete="organization" />
        </div>
        <div>
          <label className={labelClass} htmlFor="if-country">
            Country
          </label>
          <input id="if-country" className={fieldClass} value={values.country} onChange={set("country")} placeholder="United Arab Emirates" autoComplete="country-name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="if-email">
            Email address*
          </label>
          <input id="if-email" type="email" className={fieldClass} value={values.email} onChange={set("email")} placeholder="buyer@company.com" autoComplete="email" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="if-whatsapp">
            WhatsApp number
          </label>
          <input id="if-whatsapp" className={fieldClass} value={values.whatsapp} onChange={set("whatsapp")} placeholder="+971 50 000 0000" autoComplete="tel" />
        </div>
        <div>
          <label className={labelClass} htmlFor="if-product">
            Product*
          </label>
          <select id="if-product" className={fieldClass} value={values.product} onChange={set("product")} required>
            <option value="">Select a spice</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Mixed / Other">Mixed / Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="if-quantity">
          Quantity required
        </label>
        <input id="if-quantity" className={fieldClass} value={values.quantity} onChange={set("quantity")} placeholder="e.g. 5 MT per month" />
      </div>

      <div>
        <label className={labelClass} htmlFor="if-message">
          Message
        </label>
        <textarea id="if-message" rows={compact ? 3 : 5} className={fieldClass} value={values.message} onChange={set("message")} placeholder="Tell us about your grades, packing, destination port and target shipment date." />
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Mail className="size-4" aria-hidden="true" />
          Send via Email
        </button>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <FaWhatsapp className="size-4" aria-hidden="true" />
          Send via WhatsApp
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        We reply to every verified trade inquiry within one business day.
      </p>
    </form>
  );
}