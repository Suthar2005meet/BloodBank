    import React from "react";
    import { Link, Outlet } from "react-router-dom";

    export const HeaderComponent = () => {
    return (
        <div>
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
                <Link
                to="/"
                className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
                >
                Home
                </Link>
                <Link
                to="/aboutus"
                className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
                >
                About Us
                </Link>
                <Link
                to="/contacts"
                className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
                >
                Contact
                </Link>
            </nav>
            </div>
        </header>
        <Outlet/>
        </div>
    );
    };
