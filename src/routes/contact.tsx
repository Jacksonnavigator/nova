import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { faqs } from "@/data/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - TechNova Electronics & IoT" },
      {
        name: "description",
        content: "Contact TechNova in Arusha, Tanzania. Phone, WhatsApp, email and social channels.",
      },
      { property: "og:title", content: "Contact TechNova" },
      { property: "og:description", content: "Get in touch. Let's build something intelligent together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const inputClass =
  "rounded-md border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand w-full";

function Contact() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build something exceptional together."
        description="Ready to build smart systems or transform your technology stack? Reach out to our specialists today."
      />

      <section className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative min-h-[310px] overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
            <img
              src="/assets/client-strategy-meeting.jpg"
              alt="TechNova client strategy conversation"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="text-2xl font-semibold text-white">Tell us what you are building.</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                We will help you choose the right path from repair, prototype or full deployment.
              </p>
            </div>
          </div>
          <Info icon={Mail} label="Email" value="technova.iot@gmail.com" />
          <Info icon={Phone} label="Phone" value="+255 756 617 479" />
          <Info icon={MessageSquare} label="WhatsApp" value="+255 692 224 582" />
          <Info icon={MapPin} label="Headquarters" value="Arusha, Tanzania" />
          <Info icon={Clock} label="Hours" value="Mon-Sat, 8am-6pm EAT" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Follow Us
            </div>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
                <a key={i} href="#" className="p-2.5 rounded-md bg-[#f0f5fa] text-slate-600 hover:bg-brand hover:text-white transition-colors">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <GlassCard hover={false} className="lg:col-span-3 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Send a message</h2>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full Name *" className={inputClass} />
              <input placeholder="Company" className={inputClass} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email *" className={inputClass} />
              <input placeholder="Phone" className={inputClass} />
            </div>
            <select className={inputClass}>
              <option value="">How can we help?</option>
              <option>New Project</option>
              <option>Electronics Repair</option>
              <option>IoT / Automation</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
            <textarea rows={5} placeholder="Message *" className={`${inputClass} resize-none`} />
            <button type="submit" className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition w-fit glow-blue">
              Send Message
            </button>
          </form>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-7xl px-6 mb-20">
        <GlassCard hover={false} className="p-0 overflow-hidden">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[340px] bg-slate-900">
              <img
                src="/assets/engineer-laptop-workshop.jpg"
                alt="Engineer working from a laptop in a technical workspace"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <MapPin className="h-10 w-10 text-brand mb-4" />
              <div className="font-semibold text-slate-900 text-2xl">Visit our office</div>
              <p className="text-slate-600 mt-3 leading-relaxed">
                We are based in Arusha, Tanzania and support projects across East Africa through on-site deployment and remote engineering support.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="bg-cloud section-pad">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
          <div className="grid gap-3">
            {faqs.map((f, i) => (
              <GlassCard key={f.q} hover={false} className="p-0">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-slate-900 pr-4">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {f.a}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</div>
      <div className="flex items-center gap-2.5 text-slate-900 font-medium">
        <Icon className="h-4 w-4 text-brand shrink-0" />
        {value}
      </div>
    </div>
  );
}
