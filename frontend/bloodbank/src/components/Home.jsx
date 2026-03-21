import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-3 text-white font-bold text-2xl tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center text-base shadow-lg shadow-red-900/40">
              <i className="fas fa-tint"></i>
            </span>
            BloodLink
          </div>
          <nav>
            <Link to='contact' className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="bg-neutral-950 text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Hero Section ── */}
        <section
          id="hero"
          className="relative py-40 text-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 65% 40%, rgba(201,0,0,0.22) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(163,0,0,0.13) 0%, transparent 50%), #0a0a0a",
          }}
        >
          {/* Decorative rings */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-56 w-[560px] h-[560px] rounded-full border border-red-900/20 pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-32 w-[360px] h-[360px] rounded-full border border-red-900/10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-800/40 bg-red-950/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="text-xs text-red-400 font-semibold tracking-widest uppercase">Life-Saving Platform</span>
            </div>

            <h1
              className="text-7xl md:text-9xl font-bold tracking-wide text-white mb-6 leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Save Lives.<br />
              <span className="text-red-600">Donate</span> Blood.
            </h1>

            <p className="text-neutral-400 text-lg max-w-lg mx-auto leading-relaxed mb-12">
              Connecting Donors, Hospitals, and Blood Banks in Real-Time to
              ensure zero delay and zero wastage of life-saving blood units.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="px-9 py-4 rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-900/30 hover:-translate-y-1 hover:from-red-500 hover:to-red-800 transition-all duration-200"
              >
                Register to Save a Life Today
              </Link>
              <a
                href="#user-portals"
                className="px-9 py-4 rounded-full border border-white/10 text-neutral-300 text-sm font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
              >
                Explore Portals
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 mt-20 pt-10 border-t border-white/5">
              {[
                { value: "10K+", label: "Registered Donors" },
                { value: "200+", label: "Partner Hospitals" },
                { value: "50K+", label: "Units Delivered" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-red-500 tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{s.value}</div>
                  <div className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portals Section ── */}
        <section id="user-portals" className="py-28 border-t border-white/10" style={{ background: "#0e0e0e" }}>
          <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-gradient-to-r from-red-600 to-transparent" />
              <span className="text-xs text-red-500 font-bold tracking-widest uppercase">Access Portals</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <h2
                className="text-5xl md:text-6xl font-bold text-white tracking-wide leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Your Gateway
              </h2>
              <p className="text-neutral-500 text-sm max-w-xs md:text-right leading-relaxed">
                Select your role to access the centralized blood management system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Donor Card */}
              <div className="group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-red-700/40 hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300">
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl text-red-500"
                  style={{ background: "linear-gradient(135deg, rgba(201,0,0,0.18), rgba(163,0,0,0.07))", border: "1px solid rgba(201,0,0,0.22)" }}
                >
                  <i className="fas fa-user-plus"></i>
                </div>
                <span className="text-[10px] text-red-500/60 font-bold tracking-widest uppercase block mb-2">Donor Portal</span>
                <h3 className="text-lg font-semibold text-white mb-3">Be a Hero</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-7">
                  Track your donation history, find urgent requests, and schedule your next appointment.
                </p>
                <Link
                  to="/login"
                  className="inline-block px-6 py-2.5 rounded-full border border-red-700/50 text-red-400 text-sm font-medium hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
                >
                  Donor Login / Register →
                </Link>
              </div>

              {/* Hospital Card — accent */}
              <div
                className="group relative rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-950/40 transition-all duration-300 overflow-hidden"
                style={{ background: "linear-gradient(145deg, rgba(201,0,0,0.18), rgba(163,0,0,0.07))", border: "1px solid rgba(201,0,0,0.3)" }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full -mt-12 -mr-12 bg-red-900/15 pointer-events-none" />
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl text-red-400 relative z-10"
                  style={{ background: "rgba(201,0,0,0.22)", border: "1px solid rgba(201,0,0,0.38)" }}
                >
                  <i className="fas fa-hospital"></i>
                </div>
                <span className="text-[10px] text-red-400/70 font-bold tracking-widest uppercase block mb-2 relative z-10">Hospital Portal</span>
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10">Emergency Ready</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-7 relative z-10">
                  Submit immediate blood requests, check real-time inventory, and track unit delivery status.
                </p>
                <Link
                  to="/portal_login"
                  className="inline-block px-6 py-2.5 rounded-full bg-red-700 text-white text-sm font-medium hover:bg-red-600 transition-all duration-200 relative z-10"
                >
                  Hospital Login →
                </Link>
              </div>

              {/* Admin Card */}
              <div className="group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-red-700/40 hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300">
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl text-red-500"
                  style={{ background: "linear-gradient(135deg, rgba(201,0,0,0.18), rgba(163,0,0,0.07))", border: "1px solid rgba(201,0,0,0.22)" }}
                >
                  <i className="fas fa-warehouse"></i>
                </div>
                <span className="text-[10px] text-red-500/60 font-bold tracking-widest uppercase block mb-2">Admin Portal</span>
                <h3 className="text-lg font-semibold text-white mb-3">Command Center</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-7">
                  Manage inventory, authorize requests, view donor records, and generate crucial reports.
                </p>
                <Link
                  to="/portal_login"
                  className="inline-block px-6 py-2.5 rounded-full border border-red-700/50 text-red-400 text-sm font-medium hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200"
                >
                  Blood Bank / Admin →
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center text-xs">
              <i className="fas fa-tint text-white"></i>
            </span>
            <span className="text-neutral-500 text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              BloodLink
            </span>
          </div>
          <p className="text-neutral-600 text-xs text-center">
            2025 BloodLink — Centralized Blood Management System. A Project for a Better Community.
          </p>
        </div>
      </footer>
    </>
  );
};