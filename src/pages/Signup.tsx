import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import axios from "axios";

import { Button } from "../components/ui/button";
import { Alert, AlertTitle } from "../components/ui/alert";

import {
  Mail,
  Lock,
  User,
  Loader2,
  CircleAlert,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type SignupData from "../models/SignupData";
import { registerUser } from "../services/AuthServices";

import { NavLink, useNavigate } from "react-router";

import { toast } from "sonner";

function Signup() {
  const [data, setData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Input change
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError(null);
    }
  };

  // Signup
  const handleSignup = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError(null);
    setLoading(true);

    console.log("Signup Data:", data);

    try {
      const result = await registerUser(data);

      console.log("Signup successful:", result);

      toast.success("Registration successful!", {
        description: "Your SecureX account has been created.",
      });

      setData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error: unknown) {
      console.error("Signup Error:", error);

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        const backendMessage =
          typeof error.response?.data === "string"
            ? error.response.data
            : error.response?.data?.message;

        if (status === 400) {
          const message =
            backendMessage ||
            "Invalid registration details.";

          setError(message);

          toast.error("Registration failed!", {
            description: message,
          });
        } else if (status === 409) {
          const message =
            backendMessage ||
            "User already exists.";

          setError(message);

          toast.warning("User already exists!", {
            description:
              "An account with this email already exists.",
          });
        } else if (status === 401) {
          const message =
            backendMessage ||
            "You are not authorized.";

          setError(message);

          toast.error("Unauthorized!", {
            description: message,
          });
        } else if (status === 403) {
          const message =
            backendMessage ||
            "You do not have permission.";

          setError(message);

          toast.error("Access denied!", {
            description: message,
          });
        } else if (status === 404) {
          const message =
            backendMessage ||
            "Registration service not found.";

          setError(message);

          toast.error("Service not found!", {
            description: message,
          });
        } else if (
          status &&
          status >= 400 &&
          status < 500
        ) {
          const message =
            backendMessage ||
            "Please check your details and try again.";

          setError(message);

          toast.error("Request failed!", {
            description: message,
          });
        } else if (status && status >= 500) {
          const message =
            backendMessage ||
            "Server error. Please try again later.";

          setError(message);

          toast.error("Server error!", {
            description: message,
          });
        } else if (
          error.request &&
          !error.response
        ) {
          const message =
            "Unable to connect to the server.";

          setError(message);

          toast.error("Connection failed!", {
            description:
              "Please make sure the backend server is running.",
          });
        } else {
          const message =
            backendMessage ||
            "Something went wrong. Please try again.";

          setError(message);

          toast.error("Registration failed!", {
            description: message,
          });
        }
      } else {
        const message =
          "Something went wrong. Please try again.";

        setError(message);

        toast.error("Registration failed!", {
          description: message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  /*
   * OAuth base URL
   *
   * .env:
   * VITE_BASE_URL=http://localhost:8082
   */
  const oauthBaseUrl =
    import.meta.env.VITE_BASE_URL || "http://localhost:8082";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 dark:bg-[#070b13]">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-7 text-center">

          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2A4A] text-xl text-white shadow-sm">
            🛡️
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Get started with your SecureX account
          </p>

        </div>

        {/* Signup Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0d131f]">

          <form onSubmit={handleSignup}>

            {/* Name */}
            <div className="mb-5">

              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  disabled={loading}
                  className="
                    w-full rounded-lg border border-slate-300
                    bg-white py-3 pl-10 pr-4 text-sm
                    text-slate-900 outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-[#090e18]
                    dark:text-white
                    dark:placeholder:text-slate-600
                  "
                />

              </div>
            </div>

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
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                  className="
                    w-full rounded-lg border border-slate-300
                    bg-white py-3 pl-10 pr-4 text-sm
                    text-slate-900 outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-[#090e18]
                    dark:text-white
                    dark:placeholder:text-slate-600
                  "
                />

              </div>
            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  required
                  disabled={loading}
                  className="
                    w-full rounded-lg border border-slate-300
                    bg-white py-3 pl-10 pr-4 text-sm
                    text-slate-900 outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2 focus:ring-blue-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-[#090e18]
                    dark:text-white
                    dark:placeholder:text-slate-600
                  "
                />

              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5">
                <Alert variant="destructive">
                  <CircleAlert />
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              </div>
            )}

            {/* Signup Button */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-lg
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
                  Creating account...
                </>
              ) : (
                "Create Account"
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

          {/* Google OAuth */}
          <a
            href={`${oauthBaseUrl}/oauth2/authorization/google`}
            className="block"
          >
            <Button
              type="button"
              variant="outline"
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
          </a>

          {/* GitHub OAuth */}
          <a
            href={`${oauthBaseUrl}/oauth2/authorization/github`}
            className="block"
          >
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
              <FaGithub
                size={17}
                className="mr-2"
              />

              Continue with GitHub
            </Button>
          </a>

        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">

          Already have an account?{" "}

          <NavLink
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Sign in
          </NavLink>

        </p>

      </div>
    </div>
  );
}

export default Signup;