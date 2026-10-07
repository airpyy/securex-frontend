import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  ShieldCheck,
  Camera,
  Pencil,
  Save,
  X,
  Lock,
  Eye,
  EyeOff,
  Copy,
  Check,
  LogOut,
  RefreshCw,
  CalendarDays,
  KeyRound,
  Globe,
  Clock3,
  UserCheck,
  UserX,
} from "lucide-react";

import useAuth from "../../auth/store";

const AVATAR_KEY = "securex_profile_avatar";
const PROFILE_KEY = "securex_profile_data";

const avatarSeeds = [
  "Naruto",
  "Gojo",
  "Luffy",
  "Itachi",
  "Levi",
  "Tanjiro",
  "Goku",
  "Sasuke",
  "Zoro",
  "Eren",
  "Killua",
  "DemonSlayer",
];

const getRandomAvatar = () => {
  const randomSeed =
    avatarSeeds[Math.floor(Math.random() * avatarSeeds.length)];

  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${randomSeed}`;
};

const formatDate = (date?: Date | string) => {
  if (!date) return "Not available";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Not available";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatDateTime = (date?: Date | string) => {
  if (!date) return "Not available";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Not available";
  }

  return parsedDate.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const UserProfile = () => {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");

  const [avatar, setAvatar] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [copied, setCopied] = useState(false);

  const [showPasswordSection, setShowPasswordSection] =
    useState(false);

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  /*
   * User interface fields
   */
  const userId = user?.id || "Not available";

  const userEmail = email || "No email available";

  const isEnabled = user?.enabled ?? false;

  const provider = user?.provider || "Local";

  const createdAt = user?.createdAt;

  const updatedAt = user?.updatedAt;

  /*
   * Load profile/avatar
   */
  useEffect(() => {
    /*
     * First priority:
     * Backend image
     */
    if (user?.image) {
      setAvatar(user.image);
      return;
    }

    /*
     * Second priority:
     * Previously generated avatar
     */
    const savedAvatar = localStorage.getItem(AVATAR_KEY);

    if (savedAvatar) {
      setAvatar(savedAvatar);
      return;
    }

    /*
     * Third priority:
     * Generate random anime avatar
     */
    const newAvatar = getRandomAvatar();

    setAvatar(newAvatar);

    localStorage.setItem(AVATAR_KEY, newAvatar);
  }, [user?.image]);

  /*
   * Save profile
   */
  const handleSaveProfile = async () => {
    if (!name.trim()) {
      return;
    }

    setIsSaving(true);

    try {
      const profileData = {
        name: name.trim(),
        email: userEmail,
      };

      localStorage.setItem(
        PROFILE_KEY,
        JSON.stringify(profileData)
      );

      /*
       * Backend API can be connected here later.
       *
       * await updateProfile({
       *   name: name.trim(),
       * });
       */

      setTimeout(() => {
        setIsSaving(false);
        setIsEditing(false);
      }, 500);
    } catch (error) {
      console.error("Profile update error:", error);
      setIsSaving(false);
    }
  };

  /*
   * Generate random avatar
   */
  const handleChangeAvatar = () => {
    /*
     * If backend image exists,
     * random avatar replaces it locally.
     */
    const newAvatar = getRandomAvatar();

    setAvatar(newAvatar);

    localStorage.setItem(AVATAR_KEY, newAvatar);
  };

  /*
   * Copy email
   */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(userEmail);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  /*
   * Password validation
   */
  const handlePasswordChange = () => {
    setPasswordError("");
    setPasswordMessage("");

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      setPasswordError(
        "Please fill all password fields."
      );
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError(
        "New passwords do not match."
      );
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordError(
        "New password must be different from current password."
      );
      return;
    }

    /*
     * Connect Spring Boot password API here.
     */

    setPasswordMessage(
      "Password validation successful. Connect your backend API to update the password."
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  /*
   * Logout
   */
  const handleLogout = async () => {
    await logout();
  };

  const displayName = name || "User";

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-[#05070a] sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your personal information and account security.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">

          {/* Profile Header */}
          <div className="border-b border-gray-200 px-6 py-8 dark:border-gray-800">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-5">

                {/* Avatar */}
                <div className="relative">

                  <img
                    src={avatar}
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-4 border-white bg-slate-100 object-cover shadow-md dark:border-[#0d1117]"
                  />

                  <button
                    onClick={handleChangeAvatar}
                    title="Change avatar"
                    className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
                  >
                    <Camera className="h-4 w-4" />
                  </button>

                </div>

                {/* Name */}
                <div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {displayName}
                  </h2>

                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {userEmail}
                  </p>

                  {/* Status */}
                  <div
                    className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      isEnabled
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {isEnabled ? (
                      <>
                        <UserCheck className="h-3.5 w-3.5" />
                        Active Account
                      </>
                    ) : (
                      <>
                        <UserX className="h-3.5 w-3.5" />
                        Account Disabled
                      </>
                    )}
                  </div>

                </div>

              </div>

              {/* Avatar button */}
              <button
                onClick={handleChangeAvatar}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <RefreshCw className="h-4 w-4" />
                Random Avatar
              </button>

            </div>

          </div>

          {/* Personal Information */}
          <div className="p-6">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Personal Information
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Your basic account information.
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </button>
              )}

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>

                <div className="relative">

                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    value={name}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-700 dark:bg-[#11161d] dark:text-white dark:disabled:bg-[#090c10]"
                  />

                </div>

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>

                <div className="flex gap-2">

                  <div className="relative flex-1">

                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      value={userEmail}
                      disabled
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 pl-10 pr-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-[#090c10] dark:text-gray-400"
                    />

                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="rounded-lg border border-gray-300 px-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                </div>

              </div>

            </div>

            {/* Edit buttons */}
            {isEditing && (
              <div className="mt-6 flex gap-3">

                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setName(user?.name || "");
                    setIsEditing(false);
                  }}
                  disabled={isSaving}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>

              </div>
            )}

          </div>
        </div>

        {/* Account Details */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Account Details
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Information associated with your SecureX account.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* ID */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <KeyRound className="h-4 w-4" />
                <span className="text-sm">
                  Account ID
                </span>
              </div>

              <p className="break-all text-sm font-medium text-gray-900 dark:text-white">
                {userId}
              </p>

            </div>

            {/* Provider */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Globe className="h-4 w-4" />
                <span className="text-sm">
                  Login Provider
                </span>
              </div>

              <p className="text-sm font-medium capitalize text-gray-900 dark:text-white">
                {provider}
              </p>

            </div>

            {/* Status */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm">
                  Account Status
                </span>
              </div>

              <p
                className={`text-sm font-medium ${
                  isEnabled
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {isEnabled ? "Enabled" : "Disabled"}
              </p>

            </div>

            {/* Created */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">
                  Created At
                </span>
              </div>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {formatDate(createdAt)}
              </p>

            </div>

            {/* Updated */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock3 className="h-4 w-4" />
                <span className="text-sm">
                  Last Updated
                </span>
              </div>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {formatDateTime(updatedAt)}
              </p>

            </div>

            {/* Email */}
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-[#11161d]">

              <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">
                  Email
                </span>
              </div>

              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {userEmail}
              </p>

            </div>

          </div>

        </div>

        {/* Security */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0d1117]">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Security
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Keep your account secure.
              </p>
            </div>

            <ShieldCheck className="h-6 w-6 text-green-500" />

          </div>

          <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Lock className="h-5 w-5 text-purple-600" />
                </div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Password
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Change your account password
                  </p>
                </div>

              </div>

              <button
                onClick={() => {
                  setShowPasswordSection(
                    !showPasswordSection
                  );

                  setPasswordError("");
                  setPasswordMessage("");
                }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {showPasswordSection
                  ? "Cancel"
                  : "Change Password"}
              </button>

            </div>

            {showPasswordSection && (
              <div className="mt-5 border-t border-gray-200 pt-5 dark:border-gray-800">

                <div className="grid gap-4 md:grid-cols-3">

                  {/* Current */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Current Password
                    </label>

                    <div className="relative">

                      <input
                        type={
                          showCurrentPassword
                            ? "text"
                            : "password"
                        }
                        value={currentPassword}
                        onChange={(e) =>
                          setCurrentPassword(e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 pr-10 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-[#11161d] dark:text-white"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(
                            !showCurrentPassword
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* New */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      New Password
                    </label>

                    <div className="relative">

                      <input
                        type={
                          showNewPassword
                            ? "text"
                            : "password"
                        }
                        value={newPassword}
                        onChange={(e) =>
                          setNewPassword(e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 pr-10 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-[#11161d] dark:text-white"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowNewPassword(
                            !showNewPassword
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showNewPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* Confirm */}
                  <div>

                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm Password
                    </label>

                    <div className="relative">

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 pr-10 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-[#11161d] dark:text-white"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>

                    </div>

                  </div>

                </div>

                {passwordError && (
                  <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                    {passwordError}
                  </p>
                )}

                {passwordMessage && (
                  <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    {passwordMessage}
                  </p>
                )}

                <button
                  onClick={handlePasswordChange}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  <Lock className="h-4 w-4" />
                  Update Password
                </button>

              </div>
            )}

          </div>

        </div>

        {/* Logout */}
        <div className="mt-6 rounded-2xl border border-red-200 bg-white p-6 shadow-sm dark:border-red-900/40 dark:bg-[#0d1117]">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Sign out
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Sign out from your SecureX account on this device.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-300 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default UserProfile;