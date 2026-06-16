"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
      {/* NAV / HEADER */}
      <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="font-mono text-sm font-medium tracking-tight">
            Sarun&nbsp;Saengsomboon
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:px-8 sm:pt-28"
      >
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-mono text-sm text-accent">UX/UI Lead · Product-minded</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Sarun Saengsomboon
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Around 20 years connecting business, user experience, technology,
              and execution — from software engineering to UX/UI leadership and
              product strategy across FinTech, blockchain, and SaaS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-line sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <Image
                src="/image_profile2.png"
                alt="Sarun Saengsomboon"
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 320px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="01" title="About">
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

      {/* HIGHLIGHTS */}
      <Section id="highlights" label="02" title="At a glance">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label}>
              <dt className="text-3xl font-semibold tracking-tight text-foreground">
                {h.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{h.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" label="03" title="Experience">
        <div className="divide-y divide-line">
          {chapters.map((c, idx) => (
            <motion.article key={idx} {...fadeUp} className="py-7 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-foreground">{c.role}</h3>
                <span className="font-mono text-xs text-muted">{c.time}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{c.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {c.brief}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="04" title="Skills & Tools">
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
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
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
      <Section id="education" label="05" title="Education & Certifications">
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
      <Section id="contact" label="06" title="Get in touch">
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Open for UX/UI leadership, product design, and front-end
          collaborations. The fastest way to reach me:
        </p>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
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
        <p className="border-t border-line pt-8 text-sm text-muted">
          © {new Date().getFullYear()} Sarun Saengsomboon · Bangkok, Thailand
        </p>
      </footer>
    </main>
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
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </motion.section>
  );
}

/* --------------------------- CONTENT (EDIT ME) -------------------------- */
const highlights = [
  { value: "~20", label: "Years in tech" },
  { value: "Co-Founder", label: "devio · KULAP" },
  { value: "UX → Code", label: "Design + build" },
  { value: "AI-assisted", label: "Workflow since 2023" },
];

const chapters = [
  {
    role: "Co-Founder & UX/UI Lead",
    org: "devio co., ltd",
    time: "Apr 2017 – Present",
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
  {
    role: "Assistant Manager – User Experience",
    org: "Mono Technology PCL",
    time: "Aug 2013 – Oct 2017",
    brief:
      "UX for corporate websites, mobile apps, and internal systems including MThai, Mono29, Mono Radio, and Mono Basketball, partnering across design, dev, marketing, and analytics.",
  },
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
];

const skillGroups = [
  {
    title: "Design",
    items: ["UX/UI Design", "Design Systems", "User Research", "Prototyping", "Figma", "Sketch", "Adobe XD"],
  },
  {
    title: "Engineering",
    items: ["React.js", "React Native", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PHP", "ASP.NET"],
  },
  {
    title: "AI & Automation",
    items: ["Claude", "Claude Code", "ChatGPT", "n8n"],
  },
  {
    title: "Product & Collaboration",
    items: ["Product Strategy", "Project Management", "Jira", "Notion", "FigJam", "Data Mining"],
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
