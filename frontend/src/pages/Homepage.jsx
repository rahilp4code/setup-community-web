// HomePage.jsx
import React from "react";
import { Link, Links } from "react-router-dom";
import img from "../assets/mysetup.jpeg";

const trendingTags = [
  "Budget",
  "Gaming",
  "AI / Workstation",
  "Minimalist",
  "RGB + Aesthetic",
  "Liquid Cooled",
];

const featuredBuilds = [
  {
    id: 1,
    title: "Neon Tempest 4090",
    user: "@VoltageLord",
    rating: 4.9,
    tags: ["Workstation", "RTX 4090", "Custom Loop"],
    image: "https://i.redd.it/qh8chob41y181.jpg",
  },
  {
    id: 2,
    title: "CyberWave Streaming Rig",
    user: "@PixelStream",
    rating: 4.8,
    tags: ["Streaming", "RGB", "Ryzen"],
    image:
      "https://i.redd.it/upgraded-my-pc-with-cyberpunk-vibes-new-build-vs-old-build-v0-bn1sbdsdl9eb1.jpg?width=4906&format=pjpg&auto=webp&s=41a877f70b3f98a37cd563be958c09dc0d78cded",
  },
  {
    id: 3,
    title: "Silent Shadow ITX",
    user: "@MiniBeast",
    rating: 4.7,
    tags: ["ITX", "Minimal", "Silent"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotwcd1oyvOQ8ahqq4_ETSL-Ied39s6seKqA&s",
  },
];

const latestBuilds = [
  {
    id: 1,
    name: "Razorline 4060 Setup",
    user: "@Rahil",
    parts: "i5-12400F • RTX 4060 • 16GB",
    likes: 132,
    comments: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNLl0j26Iwbyrbdc4hCMnvrQttrbIBEkd4Q&s",
  },
  {
    id: 2,
    name: "Budget Battlestation",
    user: "@Alex",
    parts: "Ryzen 5 3600 • GTX 1660",
    likes: 68,
    comments: 4,
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Snow White Build",
    user: "@Luna",
    parts: "i7 • RTX 3070 • White Theme",
    likes: 209,
    comments: 18,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "Desk Minimal v3",
    user: "@FocusMode",
    parts: "Mac + PC hybrid desk",
    likes: 94,
    comments: 7,
    image:
      "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const leaderboard = [
  { user: "@VoltageLord", likes: 1245 },
  { user: "@SilentCooling", likes: 1022 },
  { user: "@PortableBeast", likes: 890 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/60 px-3 py-1 text-[11px] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
            <span className="text-xs">✨</span>
            <span className="uppercase tracking-[0.18em] text-cyan-300">
              PC Setup Community
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
              Share your{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                battlestation
              </span>
              . Get inspired by others.
            </h2>
            <p className="max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-300">
              A community-driven gallery of PC setups and custom builds. Post
              your rig, see what others are rocking, and discover ideas for your
              next upgrade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:bg-cyan-300">
              Browse community builds
            </button>
            <button className="rounded-xl border border-cyan-500/50 bg-slate-950/60 px-4 py-2 text-sm font-medium text-cyan-100 hover:border-cyan-300">
              Upload my setup 🚀
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>2,300+ builds shared</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
              <span>No ads. Just setups.</span>
            </div>
          </div>
        </div>

        {/* Hero card */}
        <div className="relative max-w-md lg:max-w-full mx-auto w-full">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/50 via-fuchsia-500/40 to-cyan-500/30 opacity-60 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950/80 shadow-[0_0_40px_rgba(15,23,42,1)]">
            {/* <div className="relative h-44 sm:h-52 lg:h-60 w-full overflow-hidden"> */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt="Featured PC setup"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            <div className="space-y-2 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1">
                  Featured build
                  <span className="text-[10px] text-cyan-300">LIVE</span>
                </span>
                <span className="rounded-full border border-cyan-500/40 px-2 py-0.5 text-[10px] text-cyan-200">
                  #RGB #UltraWide
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                Neon Horizon Dual Monitor Setup
              </h3>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>by @Rahil</span>
                <span>❤️ 213 • 💬 18</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="mt-10 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Trending tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-cyan-500/40 bg-slate-950/70 px-3 py-1 text-xs text-cyan-100 hover:border-cyan-300 hover:text-white"
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured + Latest */}
      <section className="mt-10 grid gap-10 lg:grid-cols-[3fr,2fr]">
        {/* Featured carousel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-100">
              🔥 Featured builds
            </h3>
            <button className="text-xs text-cyan-300 hover:text-cyan-200">
              View all →
            </button>
          </div>

          {/* <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1"> */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredBuilds.map((build) => (
              <article
                key={build.id}
                // className="min-w-[220px] max-w-xs flex-1 rounded-2xl border border-cyan-500/30 bg-slate-950/70 shadow-[0_0_25px_rgba(15,23,42,1)]"
                className="rounded-lg sm:rounded-xl md:rounded-2xl border border-cyan-500/30 bg-slate-950/70 shadow-[0_0_25px_rgba(15,23,42,1)]"
              >
                {/* <div className="relative h-28 sm:h-32 overflow-hidden rounded-t-2xl"> */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                </div>
                <div className="space-y-2 p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{build.user}</span>
                    <span>⭐ {build.rating}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-50">
                    {build.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-cyan-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Latest builds */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-100">
              🧩 Latest community builds
            </h3>
            <button className="text-xs text-cyan-300 hover:text-cyan-200">
              See all →
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {latestBuilds.map((build) => (
              <article
                key={build.id}
                className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 transition hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(34,211,238,0.45)]"
              >
                <div className="relative h-24 sm:h-28 w-full overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                </div>
                <div className="space-y-1.5 p-3">
                  <h4 className="text-sm font-semibold text-slate-50">
                    {build.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">{build.parts}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{build.user}</span>
                    <span>
                      ❤️ {build.likes} • 💬 {build.comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard preview + CTA */}
      <section className="mt-10 grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-4 rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_0_25px_rgba(15,23,42,1)]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-100">
              🏆 Top builders this month
            </h3>
            <button className="text-xs text-cyan-300 hover:text-cyan-200">
              Full leaderboard →
            </button>
          </div>
          <div className="space-y-3 text-sm">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.user}
                className="flex items-center justify-between rounded-xl bg-slate-900/60 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-cyan-300">
                    {index === 0 ? "①" : index === 1 ? "②" : "③"}
                  </span>
                  <span className="text-slate-100">{entry.user}</span>
                </div>
                <span className="text-xs text-slate-400">
                  {entry.likes} likes
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-cyan-500/20 p-5 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-400/50" />
          <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full border border-fuchsia-400/40" />
          <div className="relative space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Want your setup featured?
            </h3>
            <p className="max-w-md text-sm text-slate-200">
              Upload high quality photos of your desk, PC, and peripherals. Add
              your full part list and story behind the build. The best setups
              get highlighted on the homepage.
            </p>
            {/* <Link to="/submit" className="mt-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.7)] hover:bg-cyan-300">Upload my build 🚀</Link> */}
            <Link
              to="/submit"
              className="mt-3 inline-block mx-auto rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.7)] hover:bg-cyan-300"
            >
              Upload my build 🚀
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
