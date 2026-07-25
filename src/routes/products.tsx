import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { products } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "IoT boards, control panels, custom PCBs, automation systems, smart sensors and embedded devices.",
      },
      { property: "og:title", content: "TechNova Products" },
      { property: "og:description", content: "Engineered hardware ready for production and deployment." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function shouldContain(image: string) {
  return image.includes("Iot Kit") || image.includes("Industrial VFD") || image.includes("Solar adaptive");
}

function Products() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Engineered Hardware"
        title="Products Built for Production"
        description="Ready-to-deploy modules and custom-built systems for makers, businesses and industries."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <GlassCard key={p.title} className="min-h-[380px] flex flex-col p-0 overflow-hidden">
              <div className="relative h-60 bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`absolute inset-0 h-full w-full ${shouldContain(p.image) ? "object-contain p-4" : "object-cover object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                  {p.price}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Production ready
                  </span>
                  <Link
                    to="/contact"
                    className="rounded-md border border-brand px-4 py-1.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="bg-cloud section-pad">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
            <img
              src="/assets/electronics-prototyping.jpg"
              alt="Electronics prototyping bench for custom hardware development"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Custom Hardware"
              title="Need Something Tailored?"
              description="We design and manufacture custom PCBs, control panels, and embedded devices to your exact specifications."
            />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors -mt-4"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
