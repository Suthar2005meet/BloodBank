    import React from "react";
    import { Link } from "react-router-dom";
    import { HeaderComponent } from "./HeaderComponent";

    export const AboutUs = () => {
    return (
        <div
        className="min-h-screen bg-neutral-950 text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
        {/* Header */}
        <HeaderComponent />

        {/* Main Content */}
        <main
            className="py-24 px-4"
            style={{
            background:
                "radial-gradient(ellipse at 70% 20%, rgba(201,0,0,0.13) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(163,0,0,0.09) 0%, transparent 50%), #0a0a0a",
            }}
        >
            <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-gradient-to-r from-red-600 to-transparent" />
                <span className="text-xs text-red-500 font-bold tracking-widest uppercase">
                Our Story
                </span>
            </div>

            {/* Page Title */}
            <h2
                className="text-5xl md:text-6xl font-bold text-white tracking-wide leading-none mb-10"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                About BloodLink:
                <br />
                <span className="text-red-600">Our Mission</span>
            </h2>

            {/* Problem Block */}
            <div
                className="rounded-2xl border border-white/10 p-8 mb-8"
                style={{
                background:
                    "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
            >
                <div className="flex items-start gap-4">
                <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl text-red-500"
                    style={{
                    background:
                        "linear-gradient(135deg, rgba(201,0,0,0.2), rgba(163,0,0,0.08))",
                    border: "1px solid rgba(201,0,0,0.25)",
                    }}
                >
                    <i className="fas fa-triangle-exclamation"></i>
                </div>
                <div>
                    <h4 className="text-white font-semibold text-base mb-2">
                    The Problem
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed m-0">
                    Blood donation systems often suffer from manual processes,
                    resulting in critical delays, wastage of units due to poor
                    inventory management, and difficulties in matching urgent
                    requests with eligible donors.
                    </p>
                </div>
                </div>
            </div>

            {/* Solution */}
            <h3
                className="text-3xl font-bold text-white tracking-wide mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                Our Solution: Centralized Efficiency
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10">
                BloodLink is a centralized Blood Bank & Donor Management System
                designed to bridge the communication gap between hospitals, blood
                banks, and donors. By leveraging Python, MongoDB, and real-time
                alerts, we ensure that the right blood reaches the right patient at
                the right time.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-12">
                {[
                {
                    icon: "fa-bolt",
                    title: "Real-Time Matching",
                    desc: "Instantaneous matching of hospital requests with available blood bank inventory and nearby donors.",
                },
                {
                    icon: "fa-shield-halved",
                    title: "Zero Wastage",
                    desc: "Automated tracking and expiry alerts for every unit in the inventory.",
                },
                {
                    icon: "fa-heart-pulse",
                    title: "Donor Empowerment",
                    desc: "Easy scheduling, history tracking, and direct notification for urgent local needs.",
                },
                ].map((item, i) => (
                <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 p-6 hover:border-red-700/40 hover:shadow-lg hover:shadow-red-950/20 transition-all duration-300"
                    style={{
                    background:
                        "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    }}
                >
                    <div
                    className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-base text-red-500"
                    style={{
                        background:
                        "linear-gradient(135deg, rgba(201,0,0,0.18), rgba(163,0,0,0.08))",
                        border: "1px solid rgba(201,0,0,0.22)",
                    }}
                    >
                    <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed m-0">
                        {item.desc}
                    </p>
                    </div>
                </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 mb-12" />

            {/* Team */}
            <h3
                className="text-3xl font-bold text-white tracking-wide mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                The Team
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10">
                We are a dedicated team committed to using technology to solve
                real-world problems. This project is built using HTML, CSS,
                JavaScript, Python (Flask/Django), and MongoDB to provide a scalable
                and reliable platform for life-saving services.
            </p>

            {/* CTA Banner */}
            <div
                className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                style={{
                background:
                    "linear-gradient(145deg, rgba(201,0,0,0.18), rgba(163,0,0,0.07))",
                border: "1px solid rgba(201,0,0,0.3)",
                }}
            >
                <div>
                <div className="text-lg font-semibold text-white mb-1">
                    🤝 Interested in Partnering?
                </div>
                <p className="text-neutral-400 text-sm m-0">
                    We'd love to connect and grow together.
                </p>
                </div>
                <Link
                to="/contacts"
                className="shrink-0 px-7 py-3 rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-800 hover:-translate-y-0.5 transition-all duration-200"
                >
                Contact Us Today
                </Link>
            </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-white/10 py-8">
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
