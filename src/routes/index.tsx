import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/site/GlassCard";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { SectionHeader } from "@/components/site/SectionHeader";
import { trustedPartners, audienceCards, coreCapabilities, industries, stats, posts } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechNova Electronics & IoT - Turning Ideas into Smart Solutions" },
      {
        name: "description",
        content:
          "East Africa's premier electronics, embedded systems, IoT, automation and software engineering company. Design, integrate and innovate.",
      },
      {
        property: "og:title",
        content: "TechNova Electronics & IoT - Turning Ideas into Smart Solutions",
      },
      {
        property: "og:description",
        content:
          "East Africa's premier electronics, embedded systems, IoT, automation and software engineering company.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const audienceImages = ["/assets/client-strategy-meeting.jpg", "/assets/electronics-prototyping.jpg"];

const capabilityImages = [
  "/assets/Iot Kit.jpg",
  "/assets/electronics-prototyping.jpg",
  "/assets/Industrial VFD machine.jpg",
  "/assets/server-room-cloud.jpg",
  "/assets/security-monitoring.jpg",
  "/assets/solar-field.jpg",
];

function Home() {
  return (
    <main>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/assets/engineering-lab-bench.jpg"
          alt="Engineering workshop with technology systems in production"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/55 to-slate-950/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
              Electronics, IoT and automation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] text-white tracking-tight">
              We Build Smart Systems That Drive What&apos;s Next
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
              Electronics, embedded systems, IoT, automation, and software engineering for
              organizations that need to move fast without compromising on quality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors glow-blue"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/75 px-[22px] py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-y border-slate-200 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Trusted by Leading Organizations
          </p>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-slate-400 text-sm font-medium">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-12 shrink-0">
              {trustedPartners.map((name) => (
                <span key={name} className="text-slate-500">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {audienceCards.map((card, index) => (
            <GlassCard key={card.tag} className="p-0 overflow-hidden">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={audienceImages[index]}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                  {card.tag}
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">{card.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{card.desc}</p>
                <ul className="space-y-3 mb-8">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                >
                  {card.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Electronics & Technology Solutions Built for What's Next"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreCapabilities.map((cap, index) => (
              <GlassCard key={cap.title} className="flex flex-col min-h-[330px] p-0 overflow-hidden">
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <img
                    src={capabilityImages[index]}
                    alt={cap.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex p-2.5 rounded-lg bg-white/95 text-brand shadow-sm">
                    <cap.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{cap.desc}</p>
                  <Link
                    to={cap.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Explore {cap.title.split(" ")[0]} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What We Serve" title="Strong Partnerships Across Every Industry" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <GlassCard key={ind.title} hover={false} className="p-0 overflow-hidden">
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img src={ind.image} alt={ind.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex p-2.5 rounded-lg bg-white/95 text-brand shadow-sm">
                    <ind.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-900 text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-4">
              AI & Technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
              Smart Engineering, Human-Led Innovation
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              We combine embedded systems, IoT platforms, and AI-powered analytics with hands-on
              engineering expertise to deliver production-ready solutions that work from day one.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-white/10 bg-slate-800">
            <img
              src="/assets/ai-technology-interface.jpg"
              alt="Immersive technology interface used for AI powered systems"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-semibold text-white">AI-powered solutions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Computer vision, predictive maintenance and intelligent automation built on reliable hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
            <img
              src="/assets/team-workspace.jpg"
              alt="Technology team working together at a shared table"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                About TechNova
              </div>
              <h2 className="mt-2 text-3xl font-semibold text-white">People. Technology. Impact.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Specialized engineering, practical field experience and human-first partnerships across East Africa.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-200 transition-colors"
              >
                About TechNova <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.title} to="/blog">
                <GlassCard hover className="p-0 overflow-hidden">
                  <div className="grid sm:grid-cols-[180px_1fr]">
                    <div className="relative h-40 sm:h-full min-h-[150px] overflow-hidden bg-slate-900">
                      <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
                        {post.cat}
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-1">{post.title}</h4>
                      <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                      <span className="mt-3 text-sm text-brand font-medium inline-flex items-center gap-1">
                        Read More <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Impact in Numbers" title="Delivering Results That Matter" align="center" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl sm:text-5xl font-semibold text-brand tabular-nums">
                  <AnimatedCounter value={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Contact Us"
            title="Let's build something exceptional together."
            description="Ready to build smart systems or transform your technology stack? Reach out to our specialists today."
            align="center"
          />
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <ContactInfo icon={Mail} label="Email" value="technova.iot@gmail.com" />
              <ContactInfo icon={Phone} label="Phone" value="+255 756 617 479" />
              <ContactInfo icon={MapPin} label="Headquarters" value="Arusha, Tanzania" />
            </div>
            <GlassCard hover={false} className="lg:col-span-3 p-8">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Full Name *" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  <input placeholder="Company" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email *" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                  <input placeholder="Phone" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" />
                </div>
                <select className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand">
                  <option value="">How can we help?</option>
                  <option>New Project</option>
                  <option>Electronics Repair</option>
                  <option>IoT / Automation</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
                <textarea rows={4} placeholder="Message *" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors w-fit glow-blue">
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInfo({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</div>
      <div className="flex items-center gap-2 text-slate-900 font-medium">
        <Icon className="h-4 w-4 text-brand" />
        {value}
      </div>
    </div>
  );
}
