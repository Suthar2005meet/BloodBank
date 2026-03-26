import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted!");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-700/30 transition-all duration-200";

  return (
    <div
      className="min-h-screen flex flex-col bg-neutral-950 text-white"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background:
          "radial-gradient(ellipse at 65% 30%, rgba(201,0,0,0.15) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(163,0,0,0.1) 0%, transparent 50%), #0a0a0a",
      }}
    >

      {/* Main — centered */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">

          {/* Card */}
          <div
            className="rounded-2xl border border-white/10 p-10 shadow-2xl shadow-black/60"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))" }}
          >

            {/* Icon + Title */}
            <div className="text-center mb-8">
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl text-red-500"
                style={{
                  background: "linear-gradient(135deg, rgba(201,0,0,0.2), rgba(163,0,0,0.08))",
                  border: "1px solid rgba(201,0,0,0.25)",
                }}
              >
                <i className="fas fa-sign-in-alt"></i>
              </div>
              <h2
                className="text-4xl font-bold text-white tracking-wide mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Donor Portal Login
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Access your profile to view donation history and urgent requests.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email / Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Email / Phone Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-br from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-800 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <i className="fas fa-sign-in-alt"></i>
                Login
              </button>

              {/* Register link */}
              <p className="text-center text-neutral-500 text-sm pt-1">
                New Donor?{" "}
                <Link
                  to="/signup"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200"
                >
                  Register Here
                </Link>
              </p>

            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center text-xs">
              <i className="fas fa-tint text-white"></i>
            </span>
            <span
              className="text-neutral-500 text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BloodLink
            </span>
          </div>
          <p className="text-neutral-600 text-xs text-center">
            &copy; 2025 BloodLink — Centralized Blood Management System.
          </p>
        </div>
      </footer>

    </div>
  );
};