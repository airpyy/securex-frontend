import React from "react";
import { AlertTriangle, ArrowLeft, RefreshCw, ShieldX } from "lucide-react";
import { Button } from "../components/ui/button";
import { NavLink, useSearchParams } from "react-router";

const OauthFailure = () => {
  const [searchParams] = useSearchParams();

  const error =
    searchParams.get("error") ||
    "OAuth authentication failed. Please try again.";

  const provider = searchParams.get("provider");

  const providerName =
    provider === "google"
      ? "Google"
      : provider === "github"
      ? "GitHub"
      : "OAuth provider";

  const handleRetry = () => {
    if (provider === "google" || provider === "github") {
      window.location.href = `${
        import.meta.env.VITE_BASE_URL
      }/oauth2/authorization/${provider}`;
      return;
    }

    window.location.href = "/login";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-5 dark:bg-[#070b13]">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl dark:bg-red-500/5" />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2A4A] text-xl text-white shadow-lg">
            🛡️
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            SecureX
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Secure authentication platform
          </p>
        </div>

        {/* Card */}
        <div
          className="
            rounded-2xl border border-slate-200
            bg-white p-8 shadow-xl shadow-slate-200/40
            dark:border-slate-800
            dark:bg-[#0d131f]
            dark:shadow-black/20
          "
        >

          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10">

              <div className="absolute inset-0 animate-ping rounded-full bg-red-500/10" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/15">
                <ShieldX
                  size={30}
                  className="text-red-600 dark:text-red-400"
                />
              </div>

            </div>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Authentication Failed
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              We couldn't complete your{" "}
              {providerName} sign-in.
              Please try again or use another
              authentication method.
            </p>

          </div>

          {/* Error box */}
          <div
            className="
              mt-6 flex gap-3 rounded-xl border
              border-red-200 bg-red-50 p-4
              dark:border-red-500/20
              dark:bg-red-500/5
            "
          >
            <AlertTriangle
              size={18}
              className="mt-0.5 shrink-0 text-red-500"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
                OAuth Error
              </p>

              <p className="mt-1 break-words text-sm text-red-700 dark:text-red-300">
                {error}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">

            {/* Retry */}
            <Button
              type="button"
              onClick={handleRetry}
              className="
                w-full rounded-lg py-6
                bg-blue-600
                text-sm font-medium text-white
                shadow-sm
                transition
                hover:bg-blue-700
              "
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            {/* Login */}
            <NavLink to="/login" className="block">
              <Button
                type="button"
                variant="outline"
                className="
                  w-full rounded-lg py-6
                  border-slate-300
                  text-sm font-medium
                  hover:bg-slate-50
                  dark:border-slate-700
                  dark:hover:bg-slate-800
                "
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Button>
            </NavLink>

          </div>

          {/* Help text */}
          <div className="mt-6 border-t border-slate-200 pt-5 text-center dark:border-slate-800">
            <p className="text-xs leading-5 text-slate-400 dark:text-slate-500">
              If the problem continues, try signing in with
              your email and password instead.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} SecureX. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default OauthFailure;