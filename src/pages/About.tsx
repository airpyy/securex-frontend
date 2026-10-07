import React from "react";
import { Link } from "react-router";

import {
  ShieldCheck,
  Code2,
  Database,
  Server,
  LockKeyhole,
  UserRound,
  Layers3,
  Mail,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Braces,
  Network,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "Zustand", icon: Layers3 },
  { name: "Java", icon: Cpu },
  { name: "Spring Boot", icon: Server },
  { name: "Spring Security", icon: Shield },
  { name: "Hibernate / JPA", icon: Database },
  { name: "MySQL", icon: Database },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

          <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

          <div className="absolute -bottom-32 left-[35%] h-64 w-64 rounded-full bg-purple-600/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.06] sm:opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* LEFT */}
            <div>

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-[11px] font-medium text-red-400 backdrop-blur sm:mb-7 sm:px-4 sm:py-2 sm:text-sm">
                <Zap className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                <span>Developer • Builder • Security Enthusiast</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Building things that

                <span className="block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  feel powerful.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
                I'm{" "}
                <span className="font-semibold text-white">
                  Arpit Prajapati
                </span>
                , a Computer Science developer focused on full-stack
                development, Java backend systems, modern React applications
                and authentication-driven products.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
                SecureX is one of my projects where I bring those technologies
                together to build a complete authentication experience —
                from the frontend interface to the backend security layer.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">

                <Link
                  to="/services"
                  className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 active:scale-[0.98] sm:w-auto sm:px-6"
                >
                  Explore SecureX
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="mailto:arpyyy156@gmail.com"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 active:scale-[0.98] sm:w-auto sm:px-6"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>

              </div>

              {/* Stats */}
              <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-white/10 py-4 sm:mt-12 sm:py-5">

                <div className="pr-2 sm:pr-5">
                  <p className="text-base font-bold text-white sm:text-2xl">
                    Full
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    Stack Development
                  </p>
                </div>

                <div className="border-x border-white/10 px-3 sm:px-5">
                  <p className="text-base font-bold text-white sm:text-2xl">
                    Java
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    Backend Focus
                  </p>
                </div>

                <div className="pl-3 sm:pl-5">
                  <p className="text-base font-bold text-white sm:text-2xl">
                    React
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    Modern Frontend
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT — CORE CARD */}
            <div className="relative mx-auto w-full max-w-md">

              <div className="absolute -inset-5 rounded-full bg-blue-500/10 blur-3xl sm:-inset-10" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-6">

                {/* Top bar */}
                <div className="mb-4 flex items-center justify-between sm:mb-6">

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-green-500 sm:h-2.5 sm:w-2.5" />
                  </div>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-slate-500 sm:text-[10px] sm:tracking-[0.25em]">
                    SECUREX // CORE
                  </span>

                </div>

                {/* Core */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-72 sm:rounded-3xl">

                  <div className="absolute h-44 w-44 rounded-full border border-blue-500/10 sm:h-56 sm:w-56" />

                  <div className="absolute h-36 w-36 rounded-full border border-red-500/20 sm:h-44 sm:w-44" />

                  <div className="absolute h-28 w-28 rounded-full border border-blue-400/30 sm:h-32 sm:w-32" />

                  <div className="absolute h-20 w-20 animate-pulse rounded-full bg-blue-500/20 blur-xl sm:h-24 sm:w-24" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/60 bg-gradient-to-br from-blue-500/30 to-red-500/20 shadow-[0_0_60px_rgba(59,130,246,0.5)] sm:h-24 sm:w-24">
                    <ShieldCheck className="h-9 w-9 text-blue-300 sm:h-11 sm:w-11" />
                  </div>

                  {/* HUD */}
                  <span className="absolute left-3 top-4 font-mono text-[7px] text-red-400 sm:left-5 sm:top-6 sm:text-[9px]">
                    AUTH_CORE
                  </span>

                  <span className="absolute right-3 top-4 font-mono text-[7px] text-blue-400 sm:right-5 sm:top-6 sm:text-[9px]">
                    ONLINE
                  </span>

                  <span className="absolute bottom-4 left-3 font-mono text-[7px] text-slate-500 sm:bottom-6 sm:left-5 sm:text-[9px]">
                    ACCESS_CONTROL
                  </span>

                  <span className="absolute bottom-4 right-3 font-mono text-[7px] text-slate-500 sm:bottom-6 sm:right-5 sm:text-[9px]">
                    SECUREX
                  </span>

                </div>

                {/* System Data */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                    <p className="font-mono text-[9px] text-slate-500">
                      SYSTEM
                    </p>

                    <p className="mt-1 text-xs font-semibold text-green-400 sm:text-sm">
                      OPERATIONAL
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                    <p className="font-mono text-[9px] text-slate-500">
                      SECURITY
                    </p>

                    <p className="mt-1 text-xs font-semibold text-blue-400 sm:text-sm">
                      PROTECTED
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ME ================= */}
      <section className="relative border-y border-white/10 bg-[#050914] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">

            {/* Profile */}
            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-red-500/10 to-blue-500/10 blur-2xl sm:-inset-4" />

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:rounded-3xl sm:p-8">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-600 shadow-lg shadow-blue-500/20 sm:h-24 sm:w-24">
                  <UserRound className="h-9 w-9 text-white sm:h-11 sm:w-11" />
                </div>

                <h2 className="mt-5 text-2xl font-bold sm:mt-7 sm:text-3xl">
                  Arpit Prajapati
                </h2>

                <p className="mt-2 text-sm font-medium text-blue-400 sm:text-base">
                  B.Tech Computer Science Developer
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400 sm:mt-5 sm:leading-7">
                  I enjoy turning ideas into working applications and
                  understanding how systems work behind the interface.
                  My main focus is full-stack development with a strong
                  interest in backend engineering and application security.
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">

                  {[
                    "Java",
                    "Spring Boot",
                    "React",
                    "TypeScript",
                    "SQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 sm:px-3 sm:text-xs"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <a
                  href="mailto:arpyyy156@gmail.com"
                  className="mt-6 flex min-w-0 items-center gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 transition hover:text-white sm:mt-7 sm:pt-6"
                >
                  <Mail className="h-4 w-4 shrink-0 text-blue-400" />

                  <span className="truncate">
                    arpyyy156@gmail.com
                  </span>
                </a>

              </div>
            </div>

            {/* Story */}
            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-xs sm:tracking-[0.25em]">
                // Developer Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                More than just
                <span className="text-blue-500"> writing code.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm text-slate-400 sm:mt-7 sm:space-y-5 sm:text-base">

                <p className="leading-7 sm:leading-8">
                  I'm interested in understanding the complete lifecycle
                  of an application — how the frontend communicates with
                  the backend, how APIs process requests, how data is
                  stored and how authentication protects resources.
                </p>

                <p className="leading-7 sm:leading-8">
                  That's why SecureX isn't just a UI project. It is an
                  attempt to bring together frontend state management,
                  authentication flows, protected routing, REST APIs,
                  Spring Boot and database persistence into one application.
                </p>

                <p className="leading-7 sm:leading-8">
                  I'm continuously improving my skills in Java, Data
                  Structures, backend development, React and modern
                  application architecture while building projects that
                  solve practical problems.
                </p>

              </div>

              {/* Skill cards */}
              <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <Server className="h-5 w-5 text-red-400 sm:h-6 sm:w-6" />

                  <h3 className="mt-3 text-sm font-semibold sm:mt-4 sm:text-base">
                    Backend Engineering
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    Java, Spring Boot, REST APIs, JPA and database-driven
                    application development.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <Globe className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />

                  <h3 className="mt-3 text-sm font-semibold sm:mt-4 sm:text-base">
                    Frontend Development
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    React, TypeScript, Zustand, routing and responsive
                    modern interfaces.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 sm:mb-12">

            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400 sm:text-xs sm:tracking-[0.25em]">
              // Tech Arsenal
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl">
              The stack behind SecureX.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
              A combination of modern frontend technologies and Java
              backend technologies used to build the application.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06] sm:p-5"
                >

                  <div className="flex items-center justify-between gap-2">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/10 sm:h-11 sm:w-11">
                      <Icon className="h-5 w-5 text-blue-400 transition group-hover:text-white" />
                    </div>

                    <Sparkles className="h-3.5 w-3.5 text-slate-700 transition group-hover:text-blue-400 sm:h-4 sm:w-4" />

                  </div>

                  <h3 className="mt-4 text-sm font-semibold sm:mt-5 sm:text-base">
                    {tech.name}
                  </h3>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="border-y border-white/10 bg-[#050914] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-xs sm:tracking-[0.25em]">
              // System Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">
              Under the hood.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base">
              SecureX connects the frontend, backend and database into
              one authentication workflow.
            </p>

          </div>

          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5 lg:mt-16">

            {/* Frontend */}
            <div className="relative rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-5 sm:rounded-3xl sm:p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                <Globe className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
              </div>

              <p className="mt-5 font-mono text-[10px] text-blue-400 sm:mt-6 sm:text-xs">
                01 // CLIENT
              </p>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                React Frontend
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:leading-7">
                User interface, authentication forms, protected routes,
                global state and dashboard experience.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                <p>React + TypeScript</p>
                <p>Zustand</p>
                <p>React Router</p>
                <p>Tailwind CSS</p>
              </div>

            </div>

            {/* Backend */}
            <div className="relative rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-5 sm:rounded-3xl sm:p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                <Server className="h-5 w-5 text-red-400 sm:h-6 sm:w-6" />
              </div>

              <p className="mt-5 font-mono text-[10px] text-red-400 sm:mt-6 sm:text-xs">
                02 // SERVER
              </p>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Spring Backend
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:leading-7">
                Authentication APIs, business logic, security rules and
                communication between the frontend and database.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                <p>Java + Spring Boot</p>
                <p>Spring Security</p>
                <p>REST APIs</p>
                <p>Hibernate / JPA</p>
              </div>

            </div>

            {/* Database */}
            <div className="relative rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-5 sm:rounded-3xl sm:p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">
                <Database className="h-5 w-5 text-purple-400 sm:h-6 sm:w-6" />
              </div>

              <p className="mt-5 font-mono text-[10px] text-purple-400 sm:mt-6 sm:text-xs">
                03 // DATA
              </p>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                MySQL Database
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:leading-7">
                Persistent storage for users and application data through
                JPA entity mappings and repository-based access.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                <p>MySQL</p>
                <p>JPA</p>
                <p>Hibernate</p>
                <p>Repository Layer</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY SECUREX ================= */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400 sm:text-xs sm:tracking-[0.25em]">
            // Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            Security shouldn't feel complicated.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-8">
            SecureX aims to make authentication understandable and
            manageable while keeping security at the center of the
            application experience.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:mt-12 sm:grid-cols-3 sm:gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <ShieldCheck className="h-6 w-6 text-green-400 sm:h-7 sm:w-7" />

              <h3 className="mt-4 font-semibold sm:mt-5">
                Secure
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Authentication and protected resources are at the core
                of the application.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <Zap className="h-6 w-6 text-yellow-400 sm:h-7 sm:w-7" />

              <h3 className="mt-4 font-semibold sm:mt-5">
                Modern
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Built using modern frontend and backend technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <Network className="h-6 w-6 text-blue-400 sm:h-7 sm:w-7" />

              <h3 className="mt-4 font-semibold sm:mt-5">
                Connected
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Frontend, backend and database work together as one
                application.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 via-purple-600/10 to-blue-600/20 p-6 text-center sm:rounded-[2rem] sm:p-10 md:p-16">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

          <div className="relative">

            <Sparkles className="mx-auto h-8 w-8 text-blue-400 sm:h-9 sm:w-9" />

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:mt-5 sm:text-3xl md:text-4xl">
              Let's build something awesome.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base">
              Interested in SecureX, development or technology?
              Feel free to connect.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">

              <a
                href="mailto:arpyyy156@gmail.com"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 active:scale-[0.98] sm:w-auto sm:px-6"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

              <Link
                to="/signup"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] sm:w-auto sm:px-6"
              >
                Try SecureX
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
