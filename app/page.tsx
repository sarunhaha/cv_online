"use client";

import React, { Suspense, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

/* ----------------------------- 3D ACCENTS - Bruno Simon Style ----------------------------- */
import { Float, Box, Sphere, Torus, Cone } from "@react-three/drei";

// Floating 3D Objects - Bruno Simon style with warm colors
function FloatingObjects() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={group}>
      {/* Main floating cube */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
          <meshStandardMaterial color="#ff6b35" roughness={0.4} metalness={0.1} />
        </Box>
      </Float>

      {/* Floating sphere */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.7]} position={[2, 1, -1]}>
          <meshStandardMaterial color="#ffd93d" roughness={0.3} metalness={0.2} />
        </Sphere>
      </Float>

      {/* Floating torus */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.6, 0.3, 16, 32]} position={[0, -1, 1]}>
          <meshStandardMaterial color="#6bcf7f" roughness={0.4} metalness={0.1} />
        </Torus>
      </Float>

      {/* Floating cone */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Cone args={[0.5, 1, 8]} position={[1.5, -0.5, 0]}>
          <meshStandardMaterial color="#e84a5f" roughness={0.5} metalness={0.1} />
        </Cone>
      </Float>
    </group>
  );
}

// Interactive Mouse Follower
function MouseFollower() {
  const ref = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.x = mouse.x * 3;
    ref.current.position.y = mouse.y * 3;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial
        color="#ff6b35"
        emissive="#ff6b35"
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

// SpinningIcosahedron component
function SpinningIcosahedron({ scale = 1 }: { scale?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={mesh} scale={scale}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color="#ff6b35" wireframe wireframeLinewidth={2} />
    </mesh>
  );
}

// AccentCanvas is not used but kept for potential future use
function AccentCanvas({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} aria-hidden>
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-70">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d1d5db" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#g)" />
        </svg>
      </div>
    );
  }
  return (
    <Canvas
      className={className}
      dpr={[1, 1.5]}
      camera={{ position: [2.5, 2.0, 3.0], fov: 45 }}
      shadows
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} castShadow />
      <Suspense fallback={null}>
        <SpinningIcosahedron scale={1.2} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

/* ------------------------------ ANIM UTILS ---------------------------- */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const chip = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* --------------------------------- PAGE -------------------------------- */
export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-900 antialiased">
      {/* Bruno Simon Style 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff6b35" />
          <Suspense fallback={null}>
            <FloatingObjects />
            <MouseFollower />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* Soft overlay for readability */}
      <div className="fixed inset-0 -z-5 bg-gradient-to-b from-transparent via-white/30 to-white/80 pointer-events-none" />

      {/* NAV / HEADER */}
      <motion.header
        className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-orange-200/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <motion.div
            className="font-semibold tracking-tight text-slate-900"
            whileHover={{ scale: 1.05 }}
          >Sarun Saengsomboon (Jeff)</motion.div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#education" className="hover:opacity-80">Education</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-4 pb-20 pt-24 sm:grid-cols-2 z-10">
        <div>
          <motion.h1
            className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UX/UI Lead
          </motion.h1>
          <motion.p
            className="mt-4 max-w-prose text-base sm:text-lg leading-relaxed text-slate-700"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="liquid-card inline-block px-6 py-4">
              20 years in information technology, crafting product experiences, leading design systems, and shipping web/mobile apps. Pragmatic, data-aware, and AI-assisted workflow since 2023.
            </span>
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.a
              variants={chip}
              href="/Profile_Sarun2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 font-semibold text-slate-900 rounded-full bg-slate-200 hover:bg-slate-300 shadow-md hover:shadow-lg transition-all"
            >
              Download CV (PDF)
            </motion.a>
            <motion.a
              variants={chip}
              href="#contact"
              className="relative px-6 py-3 font-semibold text-slate-700 rounded-full border-2 border-slate-200 bg-transparent hover:bg-slate-50 transition-all"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="relative h-[280px] sm:h-[360px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px]">
            {/* Glass morphism container */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-pink-500/10 blur-xl" />

            {/* Profile image with 3D effect */}
            <motion.div
              className="relative rounded-full overflow-hidden border-2 border-white/50 shadow-2xl backdrop-blur-sm bg-white/20"
            >
              <Image
                src="/image_profile.png"
                alt="Sarun Saengsomboon (Jeff)"
                width={320}
                height={320}
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Floating accent dots */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-80"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-6 w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 opacity-80"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* SUMMARY STRIP */}
      <motion.section className="mx-auto mb-12 max-w-5xl px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            {
              icon: "⏱",
              label: "Years",
              value: "20",
              color: "from-orange-400 to-yellow-400"
            },
            {
              icon: "👥",
              label: "Leadership",
              value: "UX/UI, Product",
              color: "from-pink-400 to-red-400"
            },
            {
              icon: "💻",
              label: "Code",
              value: "React, Mobile, Backend",
              color: "from-green-400 to-teal-400"
            },
            {
              icon: "🤖",
              label: "AI",
              value: "ChatGPT/Claude",
              color: "from-orange-400 to-orange-500"
            },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="liquid-card p-6">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-60`} />


                {/* Icon */}
                <div className="text-3xl mb-3">{item.icon}</div>

                {/* Content */}
                <div className="space-y-1 relative z-10">
                  <div className="text-sm text-slate-500 font-medium">{item.label}</div>
                  <div className="text-xl font-bold text-slate-900">{item.value}</div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* EXPERIENCE (Scroll‑telling chapters) */}
      <motion.section
        id="experience"
        className="relative mx-auto max-w-5xl px-4 py-16 z-10 perspective-2000"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Experience</h2>
          <p className="text-lg text-slate-600">My professional journey over 20 years</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full sm:block" />

          <div className="space-y-12">
            {chapters.map((c, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 hidden sm:block">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 shadow-lg group-hover:scale-125 transition-all" />
                </div>

                {/* Content card with liquid glass effect */}
                <div className="ml-0 sm:ml-16 liquid-card">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 opacity-60" />

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                        <div className="text-sm font-medium text-orange-600 mt-1">{c.time}</div>
                      </div>
                      {idx === 1 && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Current</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed">{c.brief}</p>

                    {/* Points */}
                    <ul className="space-y-2">
                      {c.points.map((p, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">▸</span>
                          <span className="text-slate-700 text-sm leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="mx-auto max-w-5xl px-4 py-12 relative z-10 perspective-1000"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.h2 className="mb-8 text-3xl font-semibold" {...fadeUp}>
          Skills & Tools
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((s) => (
            <motion.span
              key={s}
              variants={chip}
              className="rounded-full border border-orange-300/50 bg-white/90 backdrop-blur-sm px-4 py-2 text-base transition-all transform-gpu card-3d"
              whileHover={{ scale: 1.1, z: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>


      {/* EDUCATION */}
      <motion.section
        id="education"
        className="mx-auto max-w-5xl px-4 py-16 relative z-10 perspective-1000"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Education & Certifications</h2>
          <p className="text-lg text-slate-600">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="liquid-card h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 opacity-60" />

              {/* 3D Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🎓</span>
                  <h3 className="text-xl font-bold text-slate-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900">Kasetsart University</div>
                    <div className="text-sm text-slate-600 mt-1">2009 - 2011</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900">Previous Institution</div>
                    <div className="text-sm text-slate-600 mt-1">2002 - 2005</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="liquid-card h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 opacity-60" />

              {/* 3D Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🏆</span>
                  <h3 className="text-xl font-bold text-slate-900">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <span className="text-orange-500 mr-2 mt-0.5">✓</span>
                      <span className="text-sm text-slate-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="relative mx-auto max-w-5xl px-4 pb-24 pt-16 z-10 perspective-1000"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Let&apos;s Connect</h2>
          <p className="text-lg text-slate-600">Open for new opportunities and collaborations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="liquid-card p-8 sm:p-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <p className="text-lg text-slate-700 mb-8 text-center">
                  Open for UX/UI leadership, product design, and front-end collaborations.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Email */}
                  <motion.a
                    href="mailto:sarunhaha@gmail.com"
                    className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl mb-3">📧</span>
                    <span className="text-sm font-medium text-slate-600">Email</span>
                    <span className="text-xs text-slate-500 mt-1">sarunhaha@gmail.com</span>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+66818256617"
                    className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl mb-3">📱</span>
                    <span className="text-sm font-medium text-slate-600">Phone</span>
                    <span className="text-xs text-slate-500 mt-1">+66 81-825-6617</span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/saruns"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl mb-3">💼</span>
                    <span className="text-sm font-medium text-slate-600">LinkedIn</span>
                    <span className="text-xs text-slate-500 mt-1">@saruns</span>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/sarunhaha"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl mb-3">🐙</span>
                    <span className="text-sm font-medium text-slate-600">GitHub</span>
                    <span className="text-xs text-slate-500 mt-1">@sarunhaha</span>
                  </motion.a>
                </div>
              </div>
          </div>
        </motion.div>
      </motion.section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sarun Saengsomboon (Jeff). Built with Next.js, Framer Motion, and React Three Fiber.
      </footer>
    </main>
  );
}

/* --------------------------- CONTENT (EDIT ME) -------------------------- */
const chapters = [
{
  title: "Chief Operating Officer – CRYPTOPLAT CO., LTD.",
  time: "Mar 2023 – Apr 2025 • Bangkok, Thailand",
  brief: "Operational and product leadership at a regulated digital‑asset broker/dealer; focused on compliance, security, and customer experience.",
  points: [
    "Directed company‑wide operations, policies, KPIs, and staffing to maximize productivity.",
    "Worked with CEO/executives on strategy and growth; drove process and offering improvements.",
    "Raised customer satisfaction via service standards and engagement initiatives.",
    "Implemented regulatory compliance with legal/SEC advisors and internal protocols.",
    "Owned security & risk management; mitigated operational/financial/cyber risks.",
    "Oversaw technology roadmap for stability, scalability, and UX; adopted suitable FinTech innovations.",
  ],
},
{
  title: "Co‑Founder & UX/UI Lead – devio co., ltd",
  time: "Apr 2017 – Present • Bangkok, Thailand",
  brief: "Design‑engineering studio shipping production web/mobile apps, LINE OA chatbots, and SaaS.",
  points: [
    "Leveraged AI tools (ChatGPT, Claude) since 2023 for ideation, research synthesis, and faster prototyping.",
    "Built production apps with Claude Code (2025), including mobile/web, LINE OA, and trading POCs with n8n.",
    "Drove product vision and sprint goals; tracked scope from proposal to delivery.",
    "Produced wireframes/prototypes (Figma/Sketch/XD); ensured technical feasibility with developers.",
    "Collaborated with PMs and clients via Jira, Trello, FigJam, InVision, Marvel, Overflow, GitHub, Notion, Coda, Zeplin, Google Docs.",
  ],
},
{
  title: "UX/UI – Playbux",
  time: "Jun 2022 – Mar 2024 • Bangkok, Thailand",
  brief: "UX/UI for DeFi platform features; research and design across end‑to‑end journeys.",
  points: [
    "Studied and experimented with DeFi platforms to inform end‑to‑end product UX.",
    "Conducted user research; synthesized needs/behaviors/preferences into personas.",
    "Mapped user journeys and designed flows for core tasks.",
    "Created low‑/high‑fidelity wireframes and prototypes for validation.",
    "Worked closely with devs/PMs; ran usability testing to iterate using data.",
  ],
},
{
  title: "Co‑Founder & CPO – KULAP",
  time: "Apr 2018 – Nov 2023 • Bangkok, Thailand",
  brief: "Product & UX for decentralized exchange/aggregator with KYC/AML workflows.",
  points: [
    "Designed UIs for dApps across blockchain protocols; research‑driven decision making.",
    "Analyzed and designed the KYC system in collaboration with AML/Compliance teams.",
    "Created wireframes/prototypes (Figma/Sketch/XD) and coordinated audits.",
    "Aligned design with technical constraints working closely with developers.",
  ],
},
{
  title: "UX/UI Lead – PTT Digital Solutions Co., Ltd",
  time: "Jul 2022 – Jun 2023 • Bangkok, Thailand",
  brief: "Led UX/UI initiatives; established design system for POS and Back‑Office.",
  points: [
    "Led a team of designers/developers; maintained high standards of quality and innovation.",
    "Developed and implemented a comprehensive Design System for POS and Back‑Office UI.",
    "Managed projects from concept to launch with scope, tasks, timelines, and on‑time releases.",
    "Conducted research and analysis that improved usability and adoption.",
    "Mentored junior designers; evolved guidelines for consistency and scalability; collaborated cross‑functionally.",
  ],
},
{
  title: "UX/UI Lead – boswell digital holding co., ltd",
  time: "May 2022 – Jan 2023 • Bangkok, Thailand",
  brief: "Loan & lending UX on blockchain; mobile and back‑office design.",
  points: [
    "Researched UX processes for loan/lending on blockchain.",
    "Produced wireframes, mockups, and prototypes for mobile and back‑office flows.",
    "Collaborated with stakeholders to deliver efficient, effective designs.",
  ],
},
{
  title: "Assistant Manager – User Experience – Mono Technology PCL",
  time: "Aug 2013 – Oct 2017 • Nonthaburi, Thailand",
  brief: "UX for corporate websites, mobile apps, and internal systems (e.g., MThai, MONO29).",
  points: [
    "Created wireframes/prototypes (UXPin, Sketch).",
    "Partnered with designers, developers, marketers, content/data analysts, and PMs.",
    "Contributed to multiple brand properties and internal platforms.",
  ],
},
{
  title: "System Analyst – GDL Technology",
  time: "Dec 2012 – Aug 2013 • Thailand",
  brief: "Business/system analysis for Social Security Office compensation fund system.",
  points: [
    "Analyzed and designed modules for compensation fund workflows.",
    "Collaborated with developers, testers, and end users for compatibility.",
    "Produced flowcharts, ER diagrams, and DFDs using Microsoft Visio.",
  ],
},
{
  title: "Programmer/Analyst – Urmundee Co., Ltd.",
  time: "Nov 2011 – Dec 2012 • Thailand",
  brief: "Web application development with PHP frameworks.",
  points: [
    "Built web apps with PHP frameworks.",
    "Worked alongside designers and account executives.",
  ],
},
{
  title: "Programmer Analyst – DTV Service Co., Ltd",
  time: "Mar 2005 – Nov 2011 • Thailand",
  brief: "Web and back‑end systems (PHP Framework, ASP.NET); database design and maintenance.",
  points: [
    "Developed web apps using PHP frameworks and ASP.NET.",
    "Collaborated with designers, marketers, and PMs.",
    "Designed databases from business requirements; maintained back‑end systems.",
  ],
},
];

const skills = [
  "Next.js",
  "React.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "React Three Fiber",
  "Three.js",
  "Figma",
  "Sketch",
  "Adobe XD",
  "ChatGPT",
  "Claude",
  "n8n",
  "Jira",
  "Trello",
  "FigJam",
  "InVision",
  "Marvel",
  "Overflow",
  "GitHub",
  "Notion",
  "Coda",
  "Zeplin",
  "Google Docs",
  "Design Systems",
  "Accessibility",
  "Analytics/A-B Testing",
  "PHP",
  "ASP.NET",
  "Data Mining",
  "Project Management",
];

const certifications = [
  "React Native Course (Codecademy, 2025)",
  "React Course (Codecademy, 2025)",
  "Money Laundering Law Certificate",
  "TechJam 2019 Deep Design Finalist",
  "Data Mining Certificate",
  "Project Management Certificate",
  "Web Report Management (PHP)",
];
