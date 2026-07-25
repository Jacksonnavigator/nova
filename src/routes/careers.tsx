import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileUp,
  GitBranch,
  HeartHandshake,
  Layers,
  Lightbulb,
  Radio,
  Rocket,
  Server,
  Sparkles,
  Sprout,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Join TechNova's future talent pool for upcoming engineering, product and growth opportunities.",
      },
      { property: "og:title", content: "Careers at TechNova" },
      {
        property: "og:description",
        content: "No open roles today, but exceptional talent can submit a CV for future teams.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const focusAreas = [
  {
    icon: Cpu,
    title: "Engineering",
    desc: "Embedded systems, PCB design, firmware, automation and field-ready connected hardware.",
  },
  {
    icon: Layers,
    title: "Product",
    desc: "Cloud dashboards, mobile experiences, device workflows and practical UX for industrial users.",
  },
  {
    icon: Rocket,
    title: "Growth",
    desc: "Partnerships, technical sales, customer success and market expansion across East Africa.",
  },
];

const missionCards = [
  {
    icon: Sprout,
    title: "Smarter agriculture",
    desc: "Making irrigation, soil data and energy-aware farming more accessible for local producers.",
  },
  {
    icon: BrainCircuit,
    title: "Useful intelligence",
    desc: "Bringing AI and telemetry into everyday operations without burying teams in complexity.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable infrastructure",
    desc: "Designing systems that keep working in real sites, real weather and real operational pressure.",
  },
];

const techStack = [
  { icon: Code2, label: "React" },
  { icon: Code2, label: "TypeScript" },
  { icon: Cpu, label: "ESP32" },
  { icon: Cpu, label: "STM32" },
  { icon: Radio, label: "LoRa / GSM" },
  { icon: Cloud, label: "Cloud Dashboards" },
  { icon: Server, label: "REST APIs" },
  { icon: Database, label: "SQL / NoSQL" },
  { icon: GitBranch, label: "Git" },
];

const roadmap = [
  {
    step: "Now",
    title: "Product hardening",
    desc: "Standardizing our IoT kits, dashboards and automation workflows into repeatable delivery systems.",
  },
  {
    step: "Next",
    title: "Regional deployments",
    desc: "Scaling pilots in agriculture, energy monitoring, industrial automation and smart infrastructure.",
  },
  {
    step: "Later",
    title: "Innovation lab",
    desc: "Expanding R&D around edge AI, rugged sensors and local manufacturing partnerships.",
  },
];

const inputClass =
  "rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand w-full";

function Careers() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Future Talent Pool"
        title="We Are Building the Future"
        description="We do not have open roles today, but we are always looking for exceptional people who want to change the industry with us."
      />

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 min-h-[420px] relative">
            <img
              src="/assets/logo.png"
              alt="Startup team planning future product work"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10 max-w-xl">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Not hiring right now
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Drop your resume for future roles.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
                If your work sits at the edge of hardware, software, operations or growth,
                introduce yourself now. We will review the pool first when new engineering,
                product and market roles open.
              </p>
              <a
                href="#future-talent"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition glow-blue"
              >
                Submit Your Resume for Future Roles <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <GlassCard className="p-7 sm:p-8">
            <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              TechNova is solving a practical problem: too many farms, factories, clinics and
              growing businesses still run without reliable real-time data. We build the connected
              electronics, automation and software layer that helps them see clearly, act faster
              and waste less.
            </p>
            <div className="mt-7 grid gap-3">
              {missionCards.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-cloud text-brand grid place-items-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="bg-cloud section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Where You Could Fit"
            title="Future Teams We Are Building"
            description="No live vacancies today. These are the teams we expect to grow as the product roadmap expands."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {focusAreas.map((area) => (
              <GlassCard key={area.title} className="p-6">
                <div className="mb-5 inline-flex p-3 rounded-lg bg-brand/10 text-brand">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 section-pad">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="/assets/electronics-prototyping.jpg"
              alt="Electronics lab bench with prototype wiring and measurement tools"
              className="h-[360px] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="The Tech Stack"
              title="Tools Behind the Work"
              description="Our team blends rugged hardware with modern software so projects can move from prototype to deployment."
            />
            <div className="grid sm:grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <tech.icon className="h-4 w-4 text-brand" />
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 section-pad text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Growth Story"
            title="Where We Are Heading"
            description="We are still early, but the direction is clear: turn custom field work into repeatable products that can scale across the region."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {roadmap.map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-blue-300">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 section-pad">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
          <GlassCard className="p-8 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 w-fit">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Founder's Note
            </div>
            <blockquote className="text-2xl sm:text-3xl font-semibold leading-snug text-slate-900">
              "We want to build a team that can take a real-world problem, touch the hardware,
              shape the software and leave the customer with something dependable."
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-slate-600">TechNova Founder</p>
          </GlassCard>

          <div id="future-talent">
            <GlassCard className="p-8">
              <SectionHeader
                eyebrow="Future Talent Pool"
                title="Submit Your Resume"
                description="We will keep your profile on hand for future engineering, product and growth roles."
              />
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Full name *" className={inputClass} />
                  <input type="email" placeholder="Email *" className={inputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Future team of interest" className={inputClass} />
                  <input placeholder="LinkedIn or portfolio" className={inputClass} />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us what you build, lead or want to grow into"
                  className={`${inputClass} resize-none`}
                />
                <label className="rounded-lg border border-dashed border-slate-300 bg-cloud/60 p-5 text-sm text-slate-600 cursor-pointer hover:border-brand transition">
                  <span className="flex items-center gap-2 font-semibold text-slate-800">
                    <FileUp className="h-4 w-4 text-brand" />
                    Upload resume or CV
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">PDF, DOC or DOCX preferred.</span>
                  <input type="file" className="sr-only" />
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition w-fit glow-blue"
                  >
                    Submit Your Resume for Future Roles
                  </button>
                  <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    No role is open today; this adds you to our future review list.
                  </span>
                </div>
              </form>
            </GlassCard>
          </div>        </div>
      </section>
    </PageShell>
  );
}



