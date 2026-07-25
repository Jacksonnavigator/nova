import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { posts } from "@/data/site";
import { Search, ChevronRight, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - TechNova Electronics & IoT" },
      {
        name: "description",
        content:
          "Insights on IoT, AI, embedded systems, automation, networking and programming from TechNova engineers.",
      },
      { property: "og:title", content: "TechNova Blog" },
      { property: "og:description", content: "Deep-dive articles from working engineers." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const cats = ["All", "IoT", "AI", "Programming", "Networking", "Electronics", "Automation"];

function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = posts.filter(
    (p) =>
      (cat === "All" || p.cat === cat) &&
      (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())),
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <PageShell>
      <PageHeader eyebrow="Insights & Resources" title="Blog" description="Field notes and engineering deep-dives from the TechNova team." />

      <section className="mx-auto max-w-7xl px-6 mb-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-3 py-2.5 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition ${
                cat === c
                  ? "bg-brand text-white"
                  : "bg-[#f0f5fa] text-slate-600 hover:bg-brand/10 hover:text-brand border border-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="mx-auto max-w-7xl px-6 text-center py-20">
          <p className="text-slate-500">No articles match your search.</p>
        </section>
      ) : (
        <>
          {featured && (
            <section className="mx-auto max-w-7xl px-6 mb-12">
              <GlassCard className="p-0 overflow-hidden">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative h-72 lg:h-auto min-h-[360px] bg-slate-900">
                    <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-white/90 px-2 py-1 rounded">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="uppercase tracking-wider text-brand font-semibold">{featured.cat}</span>
                      <span>{featured.date}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{featured.title}</h2>
                    <p className="text-slate-600 mt-3 leading-relaxed">{featured.excerpt}</p>
                    <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
                      Read article <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </section>
          )}

          <section className="bg-cloud section-pad">
            <div className="mx-auto max-w-7xl px-6">
              <SectionHeader eyebrow="Latest Articles" title="More From Our Engineers" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((p) => (
                  <GlassCard key={p.title} className="min-h-[340px] flex flex-col p-0 overflow-hidden">
                    <div className="relative h-48 bg-slate-900">
                      <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="uppercase tracking-wider text-brand font-semibold">{p.cat}</span>
                        <span>{p.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mt-2">{p.title}</h3>
                      <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{p.excerpt}</p>
                      <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">
                        Read More <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="mx-auto max-w-7xl px-6 section-pad pb-8 text-center">
        <p className="text-slate-600 mb-4">Want engineering insights delivered to your inbox?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
          Subscribe via Contact <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
