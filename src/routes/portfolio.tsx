import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { testimonials, projects, stats } from "@/data/site";
import { Award, Star, ArrowRight, Code2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - TechNova Electronics & IoT" },
      {
        name: "description",
        content: "Gallery of completed projects, client reviews, awards and achievements.",
      },
      { property: "og:title", content: "TechNova Portfolio" },
      { property: "og:description", content: "Showcase of engineering excellence and delivered outcomes." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const awards = [
  "East Africa IoT Innovator 2025",
  "Best Smart Agriculture Deployment 2024",
  "Top Tech Employer Arusha 2024",
  "Excellence in Embedded Design 2023",
  "Smart City Partner of the Year 2023",
  "Startup of the Year Finalist 2022",
];

const softwareProjectTitles = ["Bird Species Identifier (Tanzania)", "Bongo SMS Scam Detector"];

function Portfolio() {
  const softwareProjects = projects.filter((project) => softwareProjectTitles.includes(project.title));
  const galleryProjects = projects.filter((project) => !softwareProjectTitles.includes(project.title));

  return (
    <PageShell>
      <PageHeader
        eyebrow="Achievements"
        title="Portfolio"
        description="A visual record of the systems we've engineered and the clients we've served."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 min-h-[420px]">
          <img
            src="/assets/Industrial VFD machine.jpg"
            alt="Industrial automation hardware built by TechNova"
            className="absolute inset-0 h-full w-full object-contain p-6"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/50 to-slate-950/10" />
          <div className="relative z-10 grid md:grid-cols-5 gap-5 p-8 sm:p-10 items-end min-h-[420px]">
            <div className="md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
                Delivered Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">Proof you can see.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                From panels and sensors to dashboards, mobile tools and AI software, these are the systems we take from idea to working deployment.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...stats, { n: 12, s: "", l: "Awards" }].map((s) => (
                <div key={s.l} className="rounded-lg border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
                  <div className="text-3xl font-semibold text-white tabular-nums">
                    <AnimatedCounter value={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-300">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <SectionHeader
          eyebrow="Software Projects"
          title="AI and Security Tools Built for Tanzania"
          description="Two software products added to the portfolio: one for local biodiversity intelligence, one for safer mobile messaging."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {softwareProjects.map((project, index) => {
            const Icon = index === 0 ? Code2 : ShieldCheck;

            return (
              <GlassCard key={project.title} className="p-0 overflow-hidden">
                <div className="relative min-h-[340px] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                      <Icon className="h-4 w-4" />
                      {project.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">{project.desc}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="bg-cloud section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Work" title="Project Gallery" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryProjects.map((p) => (
              <div key={p.title} className="relative aspect-[4/5] rounded-xl overflow-hidden group border border-slate-200 bg-slate-900">
                <img
                  src={p.image ?? "/assets/industrial-engineering-workshop.jpg"}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-200">{p.tag}</div>
                  <div className="text-base font-semibold text-white mt-1">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Testimonials" title="Client Reviews" align="center" />
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <GlassCard key={t.name}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 section-pad text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
              Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Awards & Achievements
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((a) => (
              <GlassCard key={a} className="bg-slate-800/50 border-slate-700">
                <Award className="h-6 w-6 text-brand mb-3" />
                <div className="font-semibold text-white">{a}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 section-pad pb-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Ready to be our next success story?</h2>
        <p className="mt-3 text-slate-600 max-w-lg mx-auto">
          Join the organizations transforming their operations with TechNova smart systems.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-8 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors glow-blue"
        >
          Start a Project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
