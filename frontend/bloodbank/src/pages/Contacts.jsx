    import React from "react";
    import { HeaderComponent } from "./HeaderComponent";
    import { Link } from "react-router-dom";

    export const Contacts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Submitted Successfully!");
    };

    const inputClass =
        "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-700/30 transition-all duration-200";

    return (
        <div
        className="min-h-screen bg-neutral-950 text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
        {/* Header */}
        <HeaderComponent />

        <main
            className="py-24 px-4"
            style={{
            background:
                "radial-gradient(ellipse at 70% 20%, rgba(201,0,0,0.13) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(163,0,0,0.09) 0%, transparent 50%), #0a0a0a",
            }}
        >
            <div className="max-w-6xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-gradient-to-r from-red-600 to-transparent" />
                <span className="text-xs text-red-500 font-bold tracking-widest uppercase">
                Contact Us
                </span>
            </div>

            {/* Page Title */}
            <h2
                className="text-5xl md:text-6xl font-bold text-white tracking-wide leading-none mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                Get in Touch with <span className="text-red-600">BloodLink</span>
            </h2>
            <p className="text-neutral-500 text-sm mb-14 max-w-lg">
                We are here to assist you. Select your contact method below or send
                us a message.
            </p>

            {/* Two column layout: Info cards + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* ── Left: Contact Info Cards ── */}
                <div className="flex flex-col gap-5">
                {/* Helpline */}
                <div
                    className="flex items-start gap-5 rounded-2xl border p-6 hover:border-red-700/40 hover:shadow-lg hover:shadow-red-950/20 transition-all duration-300"
                    style={{
                    background:
                        "linear-gradient(145deg, rgba(201,0,0,0.16), rgba(163,0,0,0.06))",
                    border: "1px solid rgba(201,0,0,0.28)",
                    }}
                >
                    <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl text-red-400"
                    style={{
                        background: "rgba(201,0,0,0.2)",
                        border: "1px solid rgba(201,0,0,0.35)",
                    }}
                    >
                    <i className="fas fa-phone"></i>
                    </div>
                    <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                        24/7 Helpline (Emergency)
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                        For urgent hospital blood requests or immediate donor
                        assistance.
                    </p>
                    <span className="text-red-400 font-bold text-sm">
                        +91 1234 567 890
                    </span>
                    </div>
                </div>

                {/* Email */}
                <div
                    className="flex items-start gap-5 rounded-2xl border border-white/10 p-6 hover:border-red-700/40 hover:shadow-lg hover:shadow-red-950/20 transition-all duration-300"
                    style={{
                    background:
                        "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                >
                    <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl text-red-500"
                    style={{
                        background:
                        "linear-gradient(135deg, rgba(201,0,0,0.18), rgba(163,0,0,0.08))",
                        border: "1px solid rgba(201,0,0,0.22)",
                    }}
                    >
                    <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                        General Inquiries
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                        For partnership, technical support, or non-urgent questions.
                    </p>
                    <span className="text-red-400 font-bold text-sm">
                        support@bloodlink.org
                    </span>
                    </div>
                </div>

                {/* Headquarters */}
                <div
                    className="flex items-start gap-5 rounded-2xl border border-white/10 p-6 hover:border-red-700/40 hover:shadow-lg hover:shadow-red-950/20 transition-all duration-300"
                    style={{
                    background:
                        "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                >
                    <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl text-red-500"
                    style={{
                        background:
                        "linear-gradient(135deg, rgba(201,0,0,0.18), rgba(163,0,0,0.08))",
                        border: "1px solid rgba(201,0,0,0.22)",
                    }}
                    >
                    <i className="fas fa-location-dot"></i>
                    </div>
                    <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                        Our Headquarters
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                        BloodLink Central Management Office, Your City/Region
                        Address
                    </p>
                    <span className="text-red-400 font-bold text-sm">
                        Mon – Fri: 9:00 AM – 5:00 PM
                    </span>
                    </div>
                </div>
                </div>

                {/* ── Right: Contact Form ── */}
                <div
                className="rounded-2xl border border-white/10 p-8 shadow-2xl shadow-black/40"
                style={{
                    background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                }}
                >
                <h3
                    className="text-3xl font-bold text-white tracking-wide mb-7"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                        Your Full Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className={inputClass}
                    />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                        Your Email Address
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                        Subject
                    </label>
                    <select required className={`${inputClass} appearance-none`}>
                        <option value="" className="bg-neutral-900">
                        -- Select Inquiry Type --
                        </option>
                        <option value="donor" className="bg-neutral-900">
                        Donor Profile Issue
                        </option>
                        <option value="hospital" className="bg-neutral-900">
                        Hospital Request Support
                        </option>
                        <option value="technical" className="bg-neutral-900">
                        Technical Support / Bug Report
                        </option>
                        <option value="general" className="bg-neutral-900">
                        General Inquiry
                        </option>
                    </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                        Message Details
                    </label>
                    <textarea
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        className={`${inputClass} resize-none`}
                    />
                    </div>

                    {/* Submit */}
                    <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-br from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-800 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                    <i className="fas fa-paper-plane"></i>
                    Submit Message
                    </button>
                </form>
                </div>
            </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-white/10 py-8 mt-16">
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
                &copy; 2025 BloodLink — Centralized Blood Management System. |{" "}
                <Link
                to="/aboutus"
                className="text-red-500 hover:text-red-400 transition-colors duration-200"
                >
                About Us
                </Link>
            </p>
            </div>
        </footer>
        </div>
    );
    };
