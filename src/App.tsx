import { Button } from "./components/ui/button";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      {/* Toast Notification */}
      <Toaster position="top-right" richColors closeButton />

      <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#05070d] dark:text-white">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          {/* Background Magic Glow */}
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 animate-pulse rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/20" />

          <div className="mx-auto flex min-h-[650px] max-w-6xl items-center px-6 py-20">
            <div className="grid w-full items-center gap-12 md:grid-cols-2">
              {/* ================= LEFT CONTENT ================= */}
              <div className="transition duration-700 hover:translate-x-1">
                {/* Badge */}
                <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 transition duration-300 hover:border-blue-400 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                  ⚡ Next Generation Security
                </div>

                {/* Heading */}
                <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                  Protect Your
                  <span className="block text-blue-600 dark:text-blue-500">
                    Digital World
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-gray-400">
                  SecureX is a modern security platform built to protect your
                  identity, applications and digital data from evolving cyber
                  threats.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    className="bg-blue-600 px-6 py-6 text-base text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                    onClick={() => (window.location.href = "/signup")}
                  >
                    Get Started →
                  </Button>

                  <Button
                    variant="outline"
                    className="border-slate-300 bg-transparent px-6 py-6 text-base text-slate-800 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
                    onClick={() => (window.location.href = "/services")}
                  >
                    Explore Security
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-10 flex gap-8 border-t border-slate-200 pt-6 dark:border-gray-800">
                  <div className="transition duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold">24/7</h3>

                    <p className="text-sm text-slate-500 dark:text-gray-500">
                      Protection
                    </p>
                  </div>

                  <div className="transition duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold">99.9%</h3>

                    <p className="text-sm text-slate-500 dark:text-gray-500">
                      Security
                    </p>
                  </div>

                  <div className="transition duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold">Zero</h3>

                    <p className="text-sm text-slate-500 dark:text-gray-500">
                      Trust
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SECURITY CARD ================= */}
              <div className="relative flex justify-center transition duration-700 hover:-translate-y-2">
                {/* Blue Mana Glow */}
                <div className="absolute h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/20" />

                <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/50 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-blue-500/20 dark:bg-[#0b101c] dark:shadow-blue-900/20">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-gray-800">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-gray-500">
                        SecureX System
                      </p>

                      <h2 className="text-xl font-semibold">Security Core</h2>
                    </div>

                    {/* Shield */}
                    <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-blue-100 text-xl dark:bg-blue-600/20">
                      🛡️
                    </div>
                  </div>

                  {/* ================= MAGIC CORE ================= */}
                  <div className="flex h-64 items-center justify-center">
                    <div className="relative flex h-44 w-44 animate-pulse items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/5">
                      {/* Outer Magic Circle */}
                      <div className="absolute h-32 w-32 rotate-45 animate-spin border-2 border-blue-500/40" />

                      {/* Inner Magic Circle */}
                      <div className="absolute h-24 w-24 -rotate-45 animate-pulse border border-blue-400/30" />

                      {/* Core */}
                      <div className="z-10 text-6xl transition duration-500 hover:scale-110">
                        ♜
                      </div>
                    </div>
                  </div>

                  {/* System Status */}
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4 transition duration-300 hover:border-green-500/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-gray-400">
                          System Status
                        </p>

                        <p className="font-semibold text-green-600 dark:text-green-400">
                          ● All Systems Protected
                        </p>
                      </div>

                      <span className="text-2xl text-green-500">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="border-t border-slate-200 bg-slate-50 py-20 dark:border-gray-900 dark:bg-[#080b12]">
          <div className="mx-auto max-w-6xl px-6">
            {/* Heading */}
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-500">
                SecureX Powers
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                One Platform. Complete Protection.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-gray-500">
                Everything you need to keep your digital identity and
                applications secure.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {/* Identity Security */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#0c111b] dark:hover:border-blue-500/50">
                <div className="mb-5 text-3xl transition duration-300 group-hover:scale-110">
                  🔐
                </div>

                <h3 className="text-xl font-semibold">Identity Security</h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-gray-500">
                  Protect user accounts with secure authentication and modern
                  access control.
                </p>
              </div>

              {/* Threat Protection */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#0c111b] dark:hover:border-blue-500/50">
                <div className="mb-5 text-3xl transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  ⚔️
                </div>

                <h3 className="text-xl font-semibold">Threat Protection</h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-gray-500">
                  Detect suspicious activity and keep your applications
                  protected from threats.
                </p>
              </div>

              {/* Zero Trust */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#0c111b] dark:hover:border-blue-500/50">
                <div className="mb-5 text-3xl transition duration-300 group-hover:scale-110">
                  🛡️
                </div>

                <h3 className="text-xl font-semibold">Zero Trust</h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-gray-500">
                  Give users only the access they need while keeping sensitive
                  resources protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-white px-6 py-20 dark:bg-[#05070d]">
          <div className="mx-auto max-w-4xl rounded-3xl border border-blue-200 bg-blue-50 p-10 text-center transition duration-500 hover:border-blue-400 dark:border-blue-500/20 dark:bg-blue-500/5 dark:hover:border-blue-500/50">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to enter the secure zone?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-gray-500">
              Build your account and experience a smarter way to protect your
              digital world.
            </p>

            <Button
              className="mt-7 bg-blue-600 px-8 py-6 text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              onClick={() => (window.location.href = "/signup")}
            >
              Create Your Account
            </Button>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-slate-200 bg-white py-8 dark:border-gray-900 dark:bg-[#05070d]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
            <p className="text-sm text-slate-500 dark:text-gray-600">
              © 2026 SecureX. All rights reserved.
            </p>

            <p className="text-sm text-slate-400 dark:text-gray-700">
              Secure your world. Control your access.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
