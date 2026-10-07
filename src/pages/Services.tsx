import React from "react";
import { Link } from "react-router";

import {
  ShieldCheck,
  LockKeyhole,
  UserRound,
  KeyRound,
  MailCheck,
  MonitorSmartphone,
  Activity,
  Database,
  Server,
  Fingerprint,
  Settings,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "SecureX provides a reliable authentication system to protect user accounts with secure login and authentication workflows.",
    features: [
      "Secure user login",
      "Authentication management",
      "Protected routes",
      "Token-based access",
    ],
  },
  {
    icon: UserRound,
    title: "User Management",
    description:
      "Manage user accounts, profiles, account status and personal information from one centralized platform.",
    features: [
      "User profiles",
      "Account status",
      "Profile management",
      "User information",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Password Security",
    description:
      "Give users the tools they need to securely manage and update their account passwords.",
    features: [
      "Password management",
      "Password updates",
      "Secure password handling",
      "Account protection",
    ],
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description:
      "Control access to protected areas of your application and ensure only authenticated users can access private resources.",
    features: [
      "Protected pages",
      "Authentication checks",
      "Access control",
      "Private resources",
    ],
  },
  {
    icon: MailCheck,
    title: "Email & Verification",
    description:
      "Support account verification and email-based communication to keep user accounts reliable and secure.",
    features: [
      "Email verification",
      "Account confirmation",
      "Email-based security",
      "User communication",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Session Management",
    description:
      "Keep track of authenticated sessions and provide users with better visibility over their account access.",
    features: [
      "Active sessions",
      "Login sessions",
      "Device awareness",
      "Session security",
    ],
  },
  {
    icon: Activity,
    title: "Security Monitoring",
    description:
      "Provide users with useful security information and account activity so they can stay aware of their account.",
    features: [
      "Security activity",
      "Account status",
      "Login awareness",
      "Security overview",
    ],
  },
  {
    icon: Database,
    title: "Secure Data Management",
    description:
      "Organize and manage authentication-related user information through a structured backend architecture.",
    features: [
      "User data management",
      "Database integration",
      "Structured data",
      "Backend connectivity",
    ],
  },
  {
    icon: Server,
    title: "API Integration",
    description:
      "Connect frontend authentication interfaces with backend APIs for reliable account and authentication operations.",
    features: [
      "REST API integration",
      "Authentication APIs",
      "Frontend-backend communication",
      "API-based operations",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-[#05070a] dark:text-white">

      {/* ================= HERO ================= */}
      <section className="px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 sm:mb-6 sm:h-16 sm:w-16">
            <ShieldCheck className="h-7 w-7 text-blue-600 sm:h-8 sm:w-8" />
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:mb-3 sm:text-sm">
            SecureX Services
          </p>

          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Everything you need to build a{" "}
            <span className="text-blue-600">
              secure authentication
            </span>{" "}
            experience.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            SecureX provides authentication, user management, security,
            session management and API integration features designed to
            keep modern applications protected.
          </p>

          {/* Hero Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">

            <Link
              to="/signup"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-900 sm:w-auto"
            >
              Learn More
            </Link>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              What we provide
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              Powerful security services
            </h2>

            <p className="mx-auto mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
              A complete set of authentication and account security
              capabilities for your application.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    group rounded-2xl
                    border border-gray-200
                    bg-white p-5
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-300
                    hover:shadow-lg
                    dark:border-gray-800
                    dark:bg-[#0d1117]
                    dark:hover:border-blue-800
                    sm:p-6
                  "
                >

                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-600 dark:bg-blue-900/30 sm:mb-5 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white sm:h-6 sm:w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white sm:text-xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-2.5">

                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= SECURITY FIRST ================= */}
      <section className="border-y border-gray-200 bg-white px-4 py-12 dark:border-gray-800 dark:bg-[#090c10] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

            {/* Text */}
            <div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:mb-3 sm:text-sm">
                Security First
              </p>

              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                Built around account security.
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
                SecureX is designed around the idea that authentication
                should be simple for users while keeping protected
                application resources behind proper access controls.
              </p>

              <div className="mt-6 space-y-4 sm:mt-7">

                {/* Feature 1 */}
                <div className="flex gap-3 sm:gap-4">

                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Fingerprint className="h-4 w-4 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                      Authentication Protection
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:text-sm">
                      Keep private areas accessible only to authenticated users.
                    </p>
                  </div>

                </div>

                {/* Feature 2 */}
                <div className="flex gap-3 sm:gap-4">

                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Settings className="h-4 w-4 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                      Centralized Account Management
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:text-sm">
                      Give users one place to manage their account and security.
                    </p>
                  </div>

                </div>

                {/* Feature 3 */}
                <div className="flex gap-3 sm:gap-4">

                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <LockKeyhole className="h-4 w-4 text-purple-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                      Secure Access
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:text-sm">
                      Protect sensitive application routes and user resources.
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Security Card */}
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-[#0d1117] sm:rounded-3xl sm:p-8">

              <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                    SecureX
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                    Security Overview
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 sm:h-12 sm:w-12">
                  <ShieldCheck className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
                </div>

              </div>

              <div className="space-y-2.5">

                {[
                  "Authentication enabled",
                  "Protected routes",
                  "User profile management",
                  "Session management",
                  "Secure API communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-[#11161d] sm:p-4"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500 sm:h-5 sm:w-5" />

                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-[#0d1117] sm:rounded-3xl sm:p-10 md:p-12">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 sm:h-14 sm:w-14 sm:rounded-2xl">
              <Headphones className="h-6 w-6 text-blue-600 sm:h-7 sm:w-7" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Need help?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
              Have questions about SecureX, authentication or account
              security? Get in touch and we will be happy to help.
            </p>

            <a
              href="mailto:arpyyy156@gmail.com"
              className="
                mt-6 inline-flex min-h-11
                max-w-full items-center justify-center gap-2
                rounded-xl bg-blue-600
                px-5 py-3
                text-sm font-medium text-white
                transition hover:bg-blue-700
                active:scale-[0.98]
                sm:mt-7 sm:px-6
              "
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate">
                arpyyy156@gmail.com
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-blue-600 px-5 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-12">

          <ShieldCheck className="mx-auto h-9 w-9 text-white/90 sm:h-10 sm:w-10" />

          <h2 className="mt-4 text-2xl font-bold text-white sm:mt-5 sm:text-3xl">
            Ready to secure your application?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Create your SecureX account and start managing authentication
            and account security from one place.
          </p>

          <Link
            to="/signup"
            className="
              mt-6 inline-flex min-h-11
              items-center justify-center gap-2
              rounded-xl bg-white
              px-6 py-3
              text-sm font-semibold text-blue-600
              transition hover:bg-blue-50
              active:scale-[0.98]
              sm:mt-7
            "
          >
            Create Account
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Services;