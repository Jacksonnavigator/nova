import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { values, timeline, stats } from "@/data/site";
import { ArrowRight, CheckCircle2, Eye, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Learn about TechNova's mission, vision, values and story as East Africa's leading electronics and IoT company.",
      },
      { property: "og:title", content: "About TechNova" },
      {
        property: "og:description",
        content: "Our mission, vision and the team turning ideas into smart solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const whyChoose = [
  {
    title: "End-to-end expertise",
    desc: "Hardware, firmware, cloud, and field deployment from one team from prototype to production.",
  },
  {
    title: "Production-grade quality",
    desc: "Industrial standards, certified processes, and rigorous testing on every deliverable.",
  },
  {
    title: "24/7 monitoring & support",
    desc: "SLAs, remote diagnostics, and firmware updates to keep your systems running.",
  },
  {
    title: "Regional presence",
    desc: "Based in Arusha with delivery across East Africa and remote engagements worldwide.",
  },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About TechNova"
        title="People. Technology. Impact."
        description="Founded in Arusha, TechNova blends deep electronics expertise with modern software to deliver end-to-end smart solutions across East Africa."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 min-h-[430px] relative">
            <img
              src="/assets/team-workspace.jpg"
              alt="Technology team collaborating around laptops and devices"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Built in Arusha
              </div>
              <h2 className="mt-2 text-3xl font-semibold text-white">Hardware, software and field support under one roof.</h2>
            </div>
          </div>
          <div className="grid gap-6">
            <GlassCard className="p-8">
              <Target className="h-8 w-8 text-brand mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To provide innovative electronics, embedded systems, IoT solutions, automation,
                networking, software development and technical support that help individuals,
                businesses and industries embrace smart technology.
              </p>
            </GlassCard>
            <GlassCard className="p-8">
              <Eye className="h-8 w-8 text-brand mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To become East Africa&apos;s leading technology and engineering company delivering
                intelligent electronic and digital solutions.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="bg-cloud section-pad mb-0">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What We Stand For" title="Core Values" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <GlassCard key={v.title}>
                <CheckCircle2 className="h-6 w-6 text-brand mb-3" />
                <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Our Story" title="Our Journey" align="center" />
          <div className="relative pl-8 border-l border-slate-200 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full bg-brand glow-blue" />
                <div className="text-sm text-brand font-semibold">{t.year}</div>
                <div className="text-lg font-semibold text-slate-900 mt-1">{t.title}</div>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 section-pad text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
              Our Impact in Numbers
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Delivering Results That Matter
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl sm:text-5xl font-semibold text-brand tabular-nums">
                  <AnimatedCounter value={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Why TechNova" title="Why Choose Us" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((w) => (
              <GlassCard key={w.title}>
                <div className="font-semibold text-slate-900">{w.title}</div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-xl bg-cloud border border-slate-200 p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Ready to work with us?
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Let&apos;s discuss how TechNova can help you build, scale, or innovate with smart technology.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors glow-blue"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

