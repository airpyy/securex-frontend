import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import useAuthStore from "../auth/store";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = useAuthStore((state) => state.user);
  const authState = useAuthStore((state) => state.authState);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Check saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-[#05070d]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo + App Name */}
        <a href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16 2.5 4.5 7v8.2c0 6.6 4.5 12.2 11.5 14.3 7-2.1 11.5-7.7 11.5-14.3V7L16 2.5Z"
              fill="#1B2A4A"
            />

            <path
              d="m10 16 4.2 4.2L22 12.4"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-lg font-semibold text-[#1B2A4A] dark:text-white">
            SecureX
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-gray-600 transition hover:text-[#1B2A4A] dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-[#1B2A4A] dark:text-gray-400 dark:hover:text-white"
          >
            About
          </a>

          <a
            href="/services"
            className="text-sm font-medium text-gray-600 transition hover:text-[#1B2A4A] dark:text-gray-400 dark:hover:text-white"
          >
            Services
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-2 md:flex">
          {authState ? (
            <>
              {/* User Name */}
              <Link
                to="/dashboard/profile"
                className="px-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {user?.name || "User"}
              </Link>

              {/* Logout */}
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/login")}
              >
                Sign in
              </Button>

              {/* Sign Up */}
              <Button onClick={() => (window.location.href = "/signup")}>
                Sign up
              </Button>
            </>
          )}

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-1"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-[#05070d] md:hidden">
          <div className="flex flex-col gap-2">
            {/* Home */}
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Home
            </a>

            {/* About */}
            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              About
            </a>

            {/* Services */}
            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Services
            </a>

            {/* Auth */}
            {authState ? (
              <div className="mt-2 flex items-center gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
                <span className="flex-1 px-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.name || "User"}
                </span>

                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="mt-2 flex gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => (window.location.href = "/login")}
                >
                  Sign in
                </Button>

                <Button
                  className="flex-1"
                  onClick={() => (window.location.href = "/signup")}
                >
                  Sign up
                </Button>
              </div>
            )}

            {/* Mobile Theme Toggle */}
            <Button variant="outline" onClick={toggleTheme} className="mt-1">
              {darkMode ? (
                <>
                  <Sun size={18} className="mr-2" />
                  Light mode
                </>
              ) : (
                <>
                  <Moon size={18} className="mr-2" />
                  Dark mode
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
