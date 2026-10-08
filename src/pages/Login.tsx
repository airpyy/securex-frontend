import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import axios from "axios";

import { Button } from "../components/ui/button";
import { Alert, AlertTitle } from "../components/ui/alert";

import useAuthStore from "../auth/store";

import {
  Mail,
  Lock,
  Loader2,
  CircleAlert,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type LoginData from "../models/LoginData";

import {
  loginWithGoogle,
  loginWithGithub,
} from "../services/AuthServices";

import { NavLink, useNavigate } from "react-router";

function Login() {
  const [logindata, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  // Input change
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError(null);
    }
  };

  // Login
  const handleLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("Login Data:", logindata);

    setLoading(true);
    setError(null);

    try {
      await login(logindata);

      navigate("/Dashboard");
    } catch (error: unknown) {
      console.error("Login Error:", error);

      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          error.response?.data ||
          "Invalid email or password.";

        setError(
          typeof message === "string"
            ? message
            : "Invalid email or password."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 dark:bg-[#070b13]">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2A4A] text-xl text-white shadow-sm">
            🛡️
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sign in to continue to your SecureX account
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5">
            <Alert variant="destructive">
              <CircleAlert />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          </div>
        )}

        {/* Login Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0d131f]">

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={logindata.email}
                  onChange={handleInputChange}
                  required
                  className="
                    w-full rounded-lg border border-slate-300
                    bg-white py-3 pl-10 pr-4 text-sm
                    text-slate-900 outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/10
                    dark:border-slate-700
                    dark:bg-[#090e18]
                    dark:text-white
                    dark:placeholder:text-slate-600
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <a
                  href="#"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={logindata.password}
                  onChange={handleInputChange}
                  required
                  className="
                    w-full rounded-lg border border-slate-300
                    bg-white py-3 pl-10 pr-4 text-sm
                    text-slate-900 outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/10
                    dark:border-slate-700
                    dark:bg-[#090e18]
                    dark:text-white
                    dark:placeholder:text-slate-600
                  "
                />
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className="
                mt-2 w-full rounded-lg
                bg-blue-600 py-6
                text-sm font-medium text-white
                shadow-sm
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

            <span className="text-xs font-medium text-slate-400">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            onClick={loginWithGoogle}
            className="
              mb-3 w-full rounded-lg py-6
              border-slate-300
              text-sm font-medium
              hover:bg-slate-50
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            <span className="mr-2 text-base font-bold text-red-500">
              G
            </span>

            Continue with Google
          </Button>

          {/* GitHub */}
          <Button
            type="button"
            variant="outline"
            onClick={loginWithGithub}
            className="
              w-full rounded-lg py-6
              border-slate-300
              text-sm font-medium
              hover:bg-slate-50
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            <FaGithub
              size={17}
              className="mr-2"
            />

            Continue with GitHub
          </Button>
        </div>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account?{" "}

          <NavLink
            to="/signup"
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Create an account
          </NavLink>
        </p>

      </div>
    </div>
  );
}

export default Login;