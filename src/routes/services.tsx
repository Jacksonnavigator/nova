import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { coreCapabilities, services } from "@/data/site";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Electronics repair, PCB design, embedded systems, IoT, automation, networking, and software engineering services.",
      },
      { property: "og:title", content: "TechNova Services" },
      { property: "og:description", content: "Full-stack hardware and software services for the smart era." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const serviceImages = [
  {
    title: "Prototype",
    desc: "Boards, sensors and firmware tested at bench level.",
    image: "/assets/engineering-lab-bench.jpg",
  },
  {
    title: "Deploy",
    desc: "Industrial panels, power systems and connected devices installed on site.",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    title: "Monitor",
    desc: "Cloud dashboards and telemetry turn field signals into decisions.",
    image: "/assets/Soil Sensor system to record data and send tothe backend and i the cloud.jpg",
  },
];

function Services() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Core Capabilities"
        title="Electronics & Technology Solutions"
        description="From soldering iron to cloud dashboard, a single partner for every layer of your solution."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="grid lg:grid-cols-3 gap-5">
          {serviceImages.map((item) => (
            <div key={item.title} className="relative min-h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
              <img src={item.image} alt={item.title} className={`absolute inset-0 h-full w-full ${item.image.includes("Industrial VFD") ? "object-contain p-4" : "object-cover object-center"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <SectionHeader eyebrow="What We Do Best" title="Solutions Built for What's Next" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreCapabilities.map((cap) => (
            <GlassCard key={cap.title} className="flex flex-col min-h-[220px]">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-[#f0f5fa] text-brand w-fit">
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{cap.title}</h3>
              <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{cap.desc}</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Enquire <ChevronRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="bg-cloud section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Full Service Catalog"
            title="All Services"
            description="Every capability we offer, from device repair to enterprise IoT deployments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <GlassCard key={s.title} className="min-h-[180px] flex flex-col">
                <div className="mb-3 inline-flex p-2.5 rounded-lg bg-brand/10 text-brand w-fit">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-1.5 flex-1">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark font-medium"
                >
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 section-pad pb-8">
        <div className="rounded-xl bg-slate-900 p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Need a custom solution?
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Tell us about your project and our engineers will design the right approach for your
            requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}


