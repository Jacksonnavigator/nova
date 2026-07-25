import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { coreCapabilities, services } from "@/data/site";
import { ArrowRight, Camera, ChevronRight, Code2, Cpu, Radio, Smartphone, Wifi, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Electronics services, IoT and automation, engineering development, software solutions, CCTV, networks, Wi-Fi and system maintenance.",
      },
      { property: "og:title", content: "TechNova Services" },
      { property: "og:description", content: "Hardware and software systems. Design, integrate and innovate." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const serviceImages = [
  {
    title: "Design",
    desc: "Hardware and software systems shaped around your real operating needs.",
    image: "/assets/electronics-prototyping.jpg",
  },
  {
    title: "Integrate",
    desc: "Devices, dashboards, networks and automation connected into one working system.",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    title: "Innovate",
    desc: "IoT, AI and field data turned into smarter decisions for homes, farms and industry.",
    image: "/assets/Soil Sensor system to record data and send tothe backend and i the cloud.jpg",
  },
];

const flyerServiceGroups = [
  {
    icon: Smartphone,
    title: "Electronics Services",
    image: "/assets/engineer-laptop-workshop.jpg",
    items: ["Phone Repair", "Laptop Repair", "Computer Maintenance", "Electronic Device Repair"],
  },
  {
    icon: Radio,
    title: "IoT & Automation",
    image: "/assets/smart-agriculture-field.jpg",
    items: ["Smart Home Systems", "Smart Agriculture", "Industrial Monitoring", "Remote Sensor Systems"],
  },
  {
    icon: Cpu,
    title: "Engineering & Development",
    image: "/assets/electronics-prototyping.jpg",
    items: ["PCB Design", "Embedded Systems", "Custom Electronics", "Prototype Development"],
  },
  {
    icon: Code2,
    title: "Software Solutions",
    image: "/assets/software-dashboard-code.jpg",
    items: ["Mobile Applications", "Web Applications", "Cloud Dashboards", "AI Integration"],
  },
];

const supportServices = [
  { icon: Camera, title: "CCTV Installation" },
  { icon: Wifi, title: "Network Setup & MikroTik Networks" },
  { icon: Wifi, title: "Wi-Fi Solutions" },
  { icon: Wrench, title: "System Integration & Maintenance" },
];

function Services() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Hardware & Software Systems"
        title="Design. Integrate. Innovate."
        description="Electronics, IoT, automation, engineering development and software solutions for people and organizations building a smarter future."
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
        <SectionHeader
          eyebrow="What We Offer"
          title="Hardware & Software Systems"
          description="The core service groups from TechNova Electronics & IoT."
          align="center"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {flyerServiceGroups.map((group) => (
            <GlassCard key={group.title} className="p-0 overflow-hidden">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img src={group.image} alt={group.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex p-2.5 rounded-lg bg-white/95 text-brand shadow-sm">
                  <group.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-8 text-white">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportServices.map((item) => (
            <div key={item.title} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
              <div className="h-11 w-11 rounded-lg bg-brand text-white grid place-items-center shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 section-pad">
        <SectionHeader eyebrow="Core Capabilities" title="Solutions Built for What's Next" />
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
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
            We build smart solutions for a smarter future
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Turning ideas into smart solutions
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Tell us about your project and our engineers will design the right approach for your requirements.
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
