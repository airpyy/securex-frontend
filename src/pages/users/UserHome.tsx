import React from "react";
import { Link } from "react-router";
import {
  ShieldCheck,
  User,
  Lock,
  Mail,
  Monitor,
  Clock3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import useAuth from "../../auth/store";

const UserHome = () => {
  const user = useAuth((state) => state.user);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8 dark:bg-[#05070a]">
      <div className="mx-auto max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name || "User"} 👋
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your account and security settings from your dashboard.
          </p>
        </div>

        {/* Account Status */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <ShieldCheck className="h-7 w-7 text-green-600" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Account Secure
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your account is currently protected.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              Active
            </div>
          </div>
        </div>

        {/* Security Overview */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>

              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Email
            </h3>

            <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
              {user?.email || "No email available"}
            </p>

            <p className="mt-3 text-xs font-medium text-green-600">Verified</p>
          </div>

          {/* Password */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <Lock className="h-5 w-5 text-purple-600" />
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Password
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Keep your password strong and secure.
            </p>

            <Link
              to="/dashboard/profile"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
            >
              Manage
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Sessions */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
              <Monitor className="h-5 w-5 text-orange-600" />
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Active Sessions
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              1 active session
            </p>

            <Link
              to="/dashboard/profile"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
            >
              View sessions
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/dashboard/profile"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-md dark:border-gray-800 dark:bg-[#0d1117]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <User className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    My Profile
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage your personal information
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/dashboard/profile"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-purple-400 hover:shadow-md dark:border-gray-800 dark:bg-[#0d1117]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Lock className="h-5 w-5 text-purple-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Security
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage password and security
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/dashboard/profile"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md dark:border-gray-800 dark:bg-[#0d1117]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
                  <Monitor className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Sessions
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Review logged-in devices
                  </p>
                </div>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
              <Clock3 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                Recent Security Activity
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your latest account activity
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Successful login
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Current session
              </p>
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Just now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
