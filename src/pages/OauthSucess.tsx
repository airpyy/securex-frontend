import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import { refreshToken } from "../services/AuthServices";
import useAuth from "../auth/store";

const OauthSucess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const changeLocalLoginData = useAuth(
    (state) => state.changeLocalLoginData
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const provider = searchParams.get("provider");

  const providerName =
    provider === "google"
      ? "Google"
      : provider === "github"
        ? "GitHub"
        : "OAuth";

  useEffect(() => {
    const authenticateOAuthUser = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get token/user from backend after OAuth
        const response = await refreshToken();

        console.log("OAuth Refresh Response:", response);

        if (!response?.accessToken) {
          throw new Error("Access token not received");
        }

        // Update Zustand
        changeLocalLoginData(
          response.accessToken,
          response.users,
          true,
          false
        );

        // Save token
        localStorage.setItem("securex", response.accessToken);

        console.log("OAuth authentication completed");

        // Go to protected dashboard
        navigate("/dashboard", { replace: true });
      } catch (err) {
        console.error("OAuth authentication failed:", err);

        setError(
          "Authentication session could not be established. Please login again."
        );

        setLoading(false);
      }
    };

    authenticateOAuthUser();
  }, [changeLocalLoginData, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#070b13]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
            Completing authentication...
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Please wait while we secure your session.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 dark:bg-[#070b13]">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-xl dark:border-red-500/20 dark:bg-[#0d131f]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10">
            <ShieldCheck className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
            Authentication Failed
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {error}
          </p>

          <NavLink to="/login" className="mt-6 block">
            <Button className="w-full py-6">
              Back to Login
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-5 dark:bg-[#070b13]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />

      <div className="relative w-full max-w-md">

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

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-[#0d131f] dark:shadow-black/20">

          <div className="flex justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15">
                <CheckCircle2
                  size={32}
                  strokeWidth={2.5}
                  className="text-emerald-600 dark:text-emerald-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <Sparkles size={15} className="text-emerald-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Authentication Successful
              </span>

              <Sparkles size={15} className="text-emerald-500" />
            </div>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Welcome to SecureX!
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Your account has been successfully authenticated using{" "}
              {providerName}.
            </p>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">
            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                Account Verified
              </p>

              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">
                Your authentication was completed securely. You can now
                access your SecureX dashboard.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <NavLink to="/dashboard" className="block">
              <Button
                type="button"
                className="w-full rounded-lg bg-blue-600 py-6 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                Continue to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </NavLink>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} SecureX. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default OauthSucess;