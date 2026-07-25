import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { projects } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Real-world IoT, automation and embedded systems projects delivered by TechNova across East Africa.",
      },
      { property: "og:title", content: "TechNova Projects" },
      {
        property: "og:description",
        content: "Delivered smart systems across agriculture, industry, healthcare and smart cities.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const fallbackProjectImage = "/assets/industrial-engineering-workshop.jpg";

function shouldContain(image?: string) {
  return Boolean(
    image &&
      (image.includes("Iot Kit") ||
        image.includes("Industrial VFD") ||
        image.includes("Solar adaptive")),
  );
}

function Projects() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Case Studies"
        title="Projects That Drive Impact"
        description="A selection of deployments across agriculture, industry, smart cities and healthcare."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const image = p.image ?? fallbackProjectImage;

            return (
              <GlassCard key={p.title} className="min-h-[360px] flex flex-col p-0 overflow-hidden">
                <div className="relative h-56 bg-slate-950 overflow-hidden">
                  <img
                    src={image}
                    alt={p.title}
                    className={`absolute inset-0 h-full w-full ${shouldContain(image) ? "object-contain p-4" : "object-cover object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                  <div className="absolute top-3 left-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand bg-white/90 px-2 py-1 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-4 text-3xl font-semibold text-white/55">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{p.desc}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="relative overflow-hidden rounded-xl bg-slate-900 p-10 sm:p-14 text-center">
          <img
            src="/assets/client-strategy-meeting.jpg"
            alt="Client strategy meeting for a technology project"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
              Your Project
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Have a similar challenge?
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              We design and deploy custom IoT, automation, and embedded solutions tailored to your
              industry.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
