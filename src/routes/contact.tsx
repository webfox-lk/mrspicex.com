import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import qualityImage from "@/assets/quality.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { site, whatsappLink } from "@/lib/site";


const TITLE = "Contact M.R Spice Export | Request an Export Quote";
const DESCRIPTION =
  "Contact M.R SPICE EXPORT (PVT) LTD for bulk Sri Lankan whole spice quotations. Send your requirement by email or WhatsApp and receive a reply within one business day.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESCRIPTION,
        }),
      },
    ],
  }),
});

function Contact() {
  const details = [
    { icon: MapPin, label: "Head office", value: site.address },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Telephone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with our export desk",
      href: whatsappLink("Hello M.R Spice Export, I would like to request a quotation."),
    },
    { icon: Clock, label: "Business hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Shipment"
        intro="Tell us the spice, grade, volume and destination port. Our export desk replies to every verified trade inquiry within one business day."
        image={qualityImage}
        alt="Ceylon cinnamon being prepared for export packing"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Inquiry Form</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Complete the form and send it through whichever channel suits you.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={100} className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft">
              <h2 className="text-xl font-bold">Company Information</h2>
              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <d.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium transition hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

           <Reveal delay={180} className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-soft">
  <iframe
    title="Map showing M.R Spice Export head office in Mawathagama, Sri Lanka"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.187091882168!2d80.3581551747759!3d7.334042394702024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36e5c8b6a5e9b%3A0x7c8e5e5e5e5e5e5e!2sM.R%20SPICE%20EXPORT%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1697040000000!5m2!1sen!2slk"
    loading="lazy"
    className="h-72 w-full border-0"
  />
  <p className="px-6 py-4 text-xs text-muted-foreground">
    Location : 1st Floor, 96 Kandy Road, Mawathagama, Sri Lanka.
  </p>
</Reveal>
          </div>
        </div>
      </section>
    </>
  );
}