"use client";

import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";

/* ------------------------------ ANIM UTILS ---------------------------- */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

/* --------------------------------- PAGE -------------------------------- */
export default function Home() {
  const [inspect, setInspect] = useState(false);

  // Keyboard shortcut: I toggles inspect mode
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "i" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return;
      setInspect((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main
        data-inspect={inspect ? "on" : "off"}
        className="relative min-h-screen bg-background text-foreground antialiased"
      >
        {/* NAV / HEADER */}
        <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
            <a href="#top" className="font-mono text-sm font-medium tracking-tight">
              Sarun&nbsp;Saengsomboon
            </a>
            <div className="flex items-center gap-7">
              <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
                <a href="#about" className="transition-colors hover:text-foreground">About</a>
                <a href="#work" className="transition-colors hover:text-foreground">Work</a>
                <a href="#career" className="transition-colors hover:text-foreground">Career</a>
                <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
                <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
              </nav>
              <button
                type="button"
                onClick={() => setInspect((v) => !v)}
                aria-pressed={inspect}
                title="Toggle inspect mode (I)"
                className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  inspect
                    ? "border-spec bg-accent-soft text-accent"
                    : "border-line text-muted hover:border-spec hover:text-accent"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    inspect ? "bg-spec" : "bg-line"
                  }`}
                />
                inspect
                <kbd className="hidden rounded border border-line bg-background px-1 text-[10px] leading-4 sm:inline-block">
                  I
                </kbd>
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section id="top" className="inspect-zone relative">
          <div className="spec-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-20 sm:px-8 sm:pt-28">
            <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-5 font-mono text-sm text-accent">
                  Product Leader × AI Builder — Bangkok
                </p>

                <div className="spec relative inline-block">
                  <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    From idea to
                    <br />
                    shipped product.
                  </h1>
                  <span className="spec-chip absolute -top-3 right-0 -translate-y-full">
                    display/72 · Bricolage · semibold
                  </span>
                </div>

                <div className="spec relative mt-7 max-w-xl">
                  <p className="text-lg leading-relaxed text-muted">
                    I&apos;m Sarun Saengsomboon — around 20 years across product
                    management, UX, and engineering. I shape product strategy,
                    design the experience, and build with AI — moving from
                    concept to production in weeks, not quarters.
                  </p>
                  <span className="spec-chip absolute -bottom-3 left-0 translate-y-full">
                    body/18 · Inter · max-w-xl
                  </span>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <div className="spec relative">
                    <a
                      href="#contact"
                      className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      Get in touch
                    </a>
                    <span className="spec-chip absolute -bottom-3 left-0 translate-y-full">
                      button/primary
                    </span>
                  </div>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1IqWFop7breW1bpv6A8QJPXQeepV7J689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Portfolio
                  </a>
                </div>

                <p className="mt-8 font-mono text-xs text-muted">
                  Curious how this page is built?{" "}
                  <button
                    type="button"
                    onClick={() => setInspect((v) => !v)}
                    className="text-accent underline decoration-dotted underline-offset-4 hover:decoration-solid"
                  >
                    {inspect ? "close inspect" : "inspect it"}
                  </button>
                  {" "}— like any good design system.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <div className="relative">
                  <div className="spec-select relative h-44 w-44 overflow-hidden rounded-2xl border border-line sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                    <Image
                      src="/image_profile2.png"
                      alt="Sarun Saengsomboon"
                      fill
                      priority
                      sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Figma-style selection handles */}
                  <span className="spec-handle -left-1 -top-1" aria-hidden="true" />
                  <span className="spec-handle -right-1 -top-1" aria-hidden="true" />
                  <span className="spec-handle -bottom-1 -left-1" aria-hidden="true" />
                  <span className="spec-handle -bottom-1 -right-1" aria-hidden="true" />
                  <span className="spec-chip absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full">
                    img · 320 × 320 · radius/16
                  </span>
                </div>
              </motion.div>
            </div>

            {/* AT A GLANCE strip */}
            <motion.dl
              {...fadeUp}
              className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
            >
              {highlights.map((h) => (
                <div key={h.label} className="bg-background px-5 py-4">
                  <dt className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {h.value}
                  </dt>
                  <dd className="mt-1 font-mono text-xs text-muted">{h.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" label="/about" title="About">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a technology and digital product professional with around
              20 years of experience across software development, system analysis,
              UX/UI design, product strategy, team management, and business
              operations. My career started in software development — web
              applications, backend systems, databases, and internal business
              platforms — and over time I expanded into system analysis, UX/UI
              design, product management, and leadership, giving me a strong
              ability to understand both technical requirements and business goals.
            </p>
            <p>
              I&apos;ve worked on a wide range of digital products: web platforms,
              mobile applications, back-office and POS systems, KYC, FinTech
              platforms, blockchain and DeFi applications, chatbots, LINE OA
              integrations, and automation workflows. Since 2023 I&apos;ve actively
              integrated AI tools — ChatGPT, Claude, and Claude Code — into my daily
              workflow to support product research, UX thinking, documentation,
              rapid prototyping, and building production-ready applications, moving
              faster from idea to prototype, and from prototype to real product.
            </p>
            <p>
              My strength is the ability to connect business, user experience,
              technology, and execution. I work closely with founders, executives,
              clients, designers, developers, and compliance teams to translate
              ideas into practical digital products — and I enjoy work that needs
              both strategic thinking and hands-on execution, especially across
              AI-enabled products, UX/UI systems, FinTech, blockchain, automation,
              and scalable SaaS.
            </p>
          </div>
        </Section>

        {/* SELECTED WORK */}
        <Section id="work" label="/work" title="Selected work">
          <div className="space-y-14">
            {works.map((w, i) => (
              <motion.article
                key={w.title}
                {...fadeUp}
                className="group grid items-center gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <Frame url={w.url}>
                    <Image
                      src={w.img}
                      alt={w.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </Frame>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                  <p className="font-mono text-xs text-accent">{w.meta}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {w.brief}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
            <p className="font-mono text-xs text-muted">
              * Client work is under NDA — visuals are stylized illustrations
              of each product, not actual screenshots.
            </p>
          </div>
        </Section>

        {/* CAREER TIMELINE */}
        <Section id="career" label="/career" title="Career">
          <div className="space-y-14">
            {eras.map((era) => (
              <div key={era.name}>
                <motion.div {...fadeUp} className="mb-6 flex items-baseline gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {era.name}
                  </h3>
                  <span className="font-mono text-xs text-accent">{era.span}</span>
                </motion.div>
                <div className="relative border-l border-line pl-7">
                  {era.jobs.map((c) => (
                    <motion.article key={c.org + c.time} {...fadeUp} className="relative pb-9 last:pb-0">
                      <span
                        className={`absolute -left-7 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-background ${
                          c.current ? "bg-accent" : "bg-line"
                        }`}
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h4 className="text-base font-medium text-foreground">
                          {c.role}
                        </h4>
                        <span className="shrink-0 font-mono text-xs text-muted">
                          {c.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-accent">{c.org}</p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                        {c.brief}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" label="/skills" title="Skills & Tools">
          <div className="space-y-8">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION & CERTS */}
        <Section id="education" label="/education" title="Education & Certifications">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <div className="text-sm font-medium text-foreground">{e.school}</div>
                    <div className="mt-0.5 text-sm text-muted">{e.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                Certifications
              </h3>
              <ul className="space-y-2.5">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" label="/contact" title="Get in touch">
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Open for product leadership, AI-enabled product development, and
            design-engineering collaborations. The fastest way to reach me:
          </p>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-baseline justify-between gap-4 bg-background px-5 py-4 transition-colors hover:bg-accent-soft"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {c.label}
                  </span>
                  <span className="truncate text-sm text-foreground">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
          <p className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-8 text-sm text-muted">
            <span>© {new Date().getFullYear()} Sarun Saengsomboon · Bangkok, Thailand</span>
            <span className="font-mono text-xs">designed &amp; built by hand — press I</span>
          </p>
        </footer>
      </main>
    </MotionConfig>
  );
}

/* ------------------------------ COMPONENTS ----------------------------- */
function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      {...fadeUp}
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-line px-6 py-16 sm:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="flex items-baseline gap-3 lg:sticky lg:top-24 lg:h-fit lg:flex-col lg:items-start lg:gap-2">
          <span className="font-mono text-xs text-accent">{label}</span>
          <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </motion.section>
  );
}

/* Browser chrome around each coded mockup */
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 group-hover:shadow-[0_8px_30px_rgba(13,153,255,0.08)]">
      <div className="flex items-center gap-2 border-b border-line bg-background px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="truncate font-mono text-[10px] text-muted">{url}</span>
      </div>
      <div className="relative aspect-[16/11] overflow-hidden">{children}</div>
    </div>
  );
}

/* --------------------------- CONTENT (EDIT ME) -------------------------- */
const highlights = [
  { value: "~20", label: "years in tech" },
  { value: "Co-Founder", label: "devio · KULAP" },
  { value: "Idea → Launch", label: "product + design + code" },
  { value: "AI-first", label: "builder since 2023" },
];

const works = [
  {
    title: "devio — AI-assisted product studio",
    meta: "2017 → now · Co-Founder",
    url: "devio.co.th / studio",
    brief:
      "Production web/mobile apps, LINE OA chatbots, and automation for clients. Since 2023 the studio runs an AI-first workflow — Claude Code and n8n — cutting idea-to-production from months to weeks.",
    tags: ["AI workflow", "Automation", "Full-stack"],
    img: "/devio_img.png",
    alt: "Illustration of devio's work — web apps, mobile apps, chatbot, and automation pipeline connected by an AI core",
  },
  {
    title: "KULAP — DeFi swap aggregator",
    meta: "2018 – 2023 · Co-Founder & CPO",
    url: "kulap.io / swap",
    brief:
      "Led product from whitepaper to a live decentralized exchange — roadmap, protocol integrations, best-rate routing across 4 DEXs, and the KYC system built with AML/Compliance teams. Owned both product decisions and the dApp experience.",
    tags: ["Product leadership", "DeFi", "KYC/AML"],
    img: "/kulap_img.png",
    alt: "Illustration of KULAP — token swap interface routing across DeFi protocols with charts and a security shield",
  },
  {
    title: "PTT Digital — POS design system",
    meta: "2022 – 2023 · UX/UI Lead",
    url: "pos-ds / foundations",
    brief:
      "Built and drove adoption of a comprehensive design system for POS and back-office products — tokens, components, and docs used across teams — while leading designers and mentoring juniors.",
    tags: ["Design system", "Team leadership"],
    img: "/ptt_img.png",
    alt: "Illustration of a POS terminal beside a design-system sheet — color tokens, components, and back-office dashboard",
  },
];

const eras = [
  {
    name: "Lead & found",
    span: "2017 → now",
    jobs: [
      {
        role: "Co-Founder & UX/UI Lead",
        org: "devio co., ltd",
        time: "Apr 2017 – Present",
        current: true,
        brief:
          "Design-engineering studio shipping production web/mobile apps, LINE OA chatbots, and automation. Leveraging Claude Code (2025) to build production apps and trading POCs with n8n; driving product vision, prototyping in Figma, and ensuring technical feasibility with developers.",
      },
      {
        role: "Chief Operating Officer",
        org: "CRYPTOPLAT CO., LTD.",
        time: "Mar 2023 – Apr 2025",
        brief:
          "Operational and product leadership at a regulated digital-asset business — directing company-wide operations, regulatory compliance, security and risk management, and the technology roadmap for platform stability, scalability, and UX.",
      },
      {
        role: "UX/UI & Interface Specialist",
        org: "Playbux",
        time: "Jun 2022 – Mar 2024",
        brief:
          "Research and design across end-to-end journeys for a DeFi platform — user research, personas, journey mapping, low/high-fidelity prototypes, and usability testing to iterate with data.",
      },
      {
        role: "Co-Founder & CPO",
        org: "KULAP",
        time: "Apr 2018 – Nov 2023",
        brief:
          "Product and UX for a decentralized exchange/aggregator. Designed dApp interfaces across blockchain protocols and the KYC system in collaboration with AML/Compliance teams.",
      },
      {
        role: "UX/UI Lead",
        org: "PTT Digital Solutions Co., Ltd",
        time: "Jul 2022 – Jun 2023",
        brief:
          "Led designers and developers; built a comprehensive Design System for POS and Back-Office UI, ensuring consistency and scalability. Managed projects concept-to-launch and mentored junior designers.",
      },
      {
        role: "UX/UI Lead",
        org: "boswell digital holding co., ltd",
        time: "May 2022 – Jan 2023",
        brief:
          "Loan & lending UX on blockchain — research, wireframes, mockups, and prototypes for mobile and back-office, working closely with developers for efficient implementation.",
      },
    ],
  },
  {
    name: "UX craft",
    span: "2013 → 2017",
    jobs: [
      {
        role: "Assistant Manager – User Experience",
        org: "Mono Technology PCL",
        time: "Aug 2013 – Oct 2017",
        brief:
          "UX for corporate websites, mobile apps, and internal systems including MThai, Mono29, Mono Radio, and Mono Basketball, partnering across design, dev, marketing, and analytics.",
      },
    ],
  },
  {
    name: "Code foundations",
    span: "2005 → 2013",
    jobs: [
      {
        role: "System Analyst",
        org: "GDL Technology",
        time: "Dec 2012 – Aug 2013",
        brief:
          "Analysis and design of the compensation fund system at the Social Security Office — flowcharts, ER diagrams, and DFDs, ensuring technical compatibility with developers and end users.",
      },
      {
        role: "Programmer / Analyst",
        org: "Urmundee Co., Ltd.",
        time: "Nov 2011 – Dec 2012",
        brief:
          "Built web applications with PHP frameworks, working alongside designers and account executives.",
      },
      {
        role: "Programmer Analyst",
        org: "DTV Service Co., Ltd",
        time: "Mar 2005 – Nov 2011",
        brief:
          "Web and back-end systems with PHP Framework and ASP.NET; designed databases from business requirements and maintained back-end systems.",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Product & Strategy",
    items: ["Product Strategy", "Product Management", "Project Management", "Jira", "Notion", "FigJam", "Data Mining"],
  },
  {
    title: "AI & Automation",
    items: ["Claude", "Claude Code", "ChatGPT", "n8n"],
  },
  {
    title: "Design",
    items: ["UX/UI Design", "Design Systems", "User Research", "Prototyping", "Figma", "Sketch", "Adobe XD"],
  },
  {
    title: "Engineering",
    items: ["React.js", "React Native", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PHP", "ASP.NET"],
  },
];

const education = [
  {
    school: "Kasetsart University",
    detail: "Master's degree, Information Technology · 2009–2011",
  },
  {
    school: "Mae Fah Luang University",
    detail: "Bachelor's degree, Information Technology · 2002–2005",
  },
];

const certifications = [
  "Learn React Course",
  "Learn React Native Course",
  "Project Management Method L-Timer™",
  "Web Report Management using PHP",
  "Data Mining",
  "TechJam 2019 Deep Design Finalist",
];

const contacts = [
  { label: "Email", value: "sarun@devio.co.th", href: "mailto:sarun@devio.co.th" },
  { label: "Phone", value: "+66 64-217-2517", href: "tel:+66642172517" },
  { label: "LinkedIn", value: "in/saruns", href: "https://www.linkedin.com/in/saruns", external: true },
  { label: "GitHub", value: "@sarunhaha", href: "https://github.com/sarunhaha", external: true },
];
