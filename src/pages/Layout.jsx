// Layout.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/browse", label: "Browse Builds" },
    { to: "/submit", label: "Submit Setup" },
    { to: "/leaderboard", label: "Leaderboard" },
  ];

  return (
    // <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col overflow-x-hidden">
      {/* Glow BG */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-cyan-500/10 bg-[#020617]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/60 bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              <span className="text-lg font-bold tracking-tight">SP</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-base sm:text-lg font-semibold tracking-tight">
                SetupSpace
              </h1>
              <p className="text-[11px] text-slate-400">
                Community builds • Real setups
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-slate-300 hover:text-cyan-400 ${
                      isActive ? "text-cyan-300" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden items-center lg:flex">
                <span className="pointer-events-none absolute left-3 text-xs text-slate-400">
                  🔍
                </span>
                {/* <input
                  type="text"
                  placeholder="Search builds..."
                  className="w-44 xl:w-56 rounded-full border border-cyan-500/40 bg-slate-950/60 px-8 py-1.5 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                /> */}
              </div>
              {/* <button className="rounded-full border border-cyan-400/70 bg-slate-950/60 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:border-cyan-300 hover:text-white">
                Log in
              </button> */}
              {/* <a className="rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:bg-cyan-300">
                Join community
              </a> */}
              <a 
        href="https://x.com/RahilP4Code?t=UcRvdEsR79yTdiJjvGzFEA" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="rounded-full bg-cyan-400 px-5 py-2 text-xs font-semibold tracking-wide text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:bg-cyan-300"
      >
        Join community
      </a>
            </div>
          </div>

          {/* Mobile nav toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-slate-200"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="text-xs">Menu</span>
            <span className="text-lg">☰</span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#020617]">
            <div className="mx-auto max-w-6xl px-4 py-3 space-y-3">
              <nav className="flex flex-col gap-2 text-sm">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-2 py-1 ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-slate-200 hover:bg-slate-900"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 pt-6 sm:pt-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-slate-800 bg-[#020617]/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 lg:px-8 py-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} PC Setup Hub</span>
            <span className="hidden sm:inline">•</span>
            <button className="hover:text-cyan-300">About</button>
            <button className="hover:text-cyan-300">Contact</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Join us:</span>
            <button className="hover:text-cyan-300">Discord</button>
            <button className="hover:text-cyan-300">Instagram</button>
          </div>
        </div>
      </footer> */}
      <footer className="border-t border-slate-800 bg-[#020617]/95">
  <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 lg:px-8 py-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
    
    <div className="flex flex-wrap items-center gap-3">
      <span>© {new Date().getFullYear()} PC Setup Hub</span>
      <span className="hidden sm:inline">•</span>

      <a 
        href="https://x.com/RahilP4Code?t=UcRvdEsR79yTdiJjvGzFEA" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-300"
      >
        About
      </a>

      <a 
        href="https://x.com/RahilP4Code?t=UcRvdEsR79yTdiJjvGzFEA" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-300"
      >
        Contact
      </a>
    </div>

    <div className="flex items-center gap-3">
      <span className="text-slate-500">Join us:</span>

      <a 
        href="https://x.com/RahilP4Code?t=UcRvdEsR79yTdiJjvGzFEA" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-300"
      >
        Discord
      </a>

      <a 
        href="https://x.com/RahilP4Code?t=UcRvdEsR79yTdiJjvGzFEA" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-300"
      >
        Instagram
      </a>
    </div>
    
  </div>
</footer>

    </div>
  );
}
