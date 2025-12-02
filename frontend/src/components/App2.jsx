// HomePage.jsx
import React from "react";
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
    image:
      "https://i.redd.it/qh8chob41y181.jpg",
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
      "https://images.pexels.com/photos/167404/pexels-photo-167404.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    <div className="min-h-screen bg-[#020617] text-slate-50">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-cyan-500/10 bg-[#020617]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/60 bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              <span className="text-lg font-bold tracking-tight">PC</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight md:text-xl">
                PC Setup Hub
              </h1>
              <p className="text-[11px] text-slate-400 md:text-xs">
                Community builds • Real setups
              </p>
            </div>
          </div>

          {/* Nav + Actions */}
          <div className="hidden items-center gap-6 text-sm md:flex">
            <nav className="flex items-center gap-5">
              <a href="#" className="text-slate-300 hover:text-cyan-400">
                Home
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400">
                Browse Builds
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400">
                Submit Setup
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400">
                Leaderboard
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400">
                Community
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden items-center md:flex">
                <span className="pointer-events-none absolute left-3 text-xs text-slate-400">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search builds, users, parts..."
                  className="w-52 rounded-full border border-cyan-500/40 bg-slate-950/60 px-8 py-1.5 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <button className="rounded-full border border-cyan-400/70 bg-slate-950/60 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:border-cyan-300 hover:text-white">
                Log in
              </button>
              <button className="rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:bg-cyan-300">
                Join community
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-10">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/60 px-3 py-1 text-[11px] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
              <span className="text-xs">✨</span>
              <span className="uppercase tracking-[0.18em] text-cyan-300">
                PC Setup Community
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Share your{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  battlestation
                </span>
                . Get inspired by others.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
                A community-driven gallery of PC setups and custom builds. Post
                your rig, see what others are rocking, and discover ideas for
                your next upgrade.
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

            <div className="flex flex-wrap gap-5 text-[11px] text-slate-400">
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

          {/* Hero preview card */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/50 via-fuchsia-500/40 to-cyan-500/30 opacity-60 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950/80 shadow-[0_0_40px_rgba(15,23,42,1)]">
              <div className="relative h-52 w-full overflow-hidden md:h-60">
                <img
                  src={img}
                  alt="Featured PC setup"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    Featured build
                    <span className="text-[10px] text-cyan-300">LIVE</span>
                  </span>
                  <span className="rounded-full border border-cyan-500/40 px-2 py-0.5 text-[10px] text-cyan-200">
                    #RGB #UltraWide
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
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
          {/* Featured carousel (fake, horizontal scroll) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-100">
                🔥 Featured builds
              </h3>
              <button className="text-xs text-cyan-300 hover:text-cyan-200">
                View all →
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2">
              {featuredBuilds.map((build) => (
                <article
                  key={build.id}
                  className="min-w-[230px] max-w-xs flex-1 rounded-2xl border border-cyan-500/30 bg-slate-950/70 shadow-[0_0_25px_rgba(15,23,42,1)]"
                >
                  <div className="relative h-32 overflow-hidden rounded-t-2xl">
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

          {/* Latest builds grid */}
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
                  <div className="relative h-24 w-full overflow-hidden">
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

        {/* Leaderboard + CTA */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[2fr,3fr]">
          {/* Leaderboard */}
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

          {/* CTA strip */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-cyan-500/20 p-5 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-400/50" />
            <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full border border-fuchsia-400/40" />
            <div className="relative space-y-3">
              <h3 className="text-lg font-semibold text-slate-50">
                Want your setup featured?
              </h3>
              <p className="max-w-md text-sm text-slate-200">
                Upload high quality photos of your desk, PC, and peripherals.
                Add your full part list and story behind the build. The best
                setups get highlighted on the homepage.
              </p>
              <button className="mt-1 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.7)] hover:bg-cyan-300">
                Upload my build 🚀
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#020617]/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} PC Setup Hub</span>
            <span>•</span>
            <button className="hover:text-cyan-300">About</button>
            <button className="hover:text-cyan-300">Contact</button>
            <button className="hover:text-cyan-300">Privacy</button>
            <button className="hover:text-cyan-300">Terms</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Join us:</span>
            <button className="hover:text-cyan-300">Discord</button>
            <button className="hover:text-cyan-300">Instagram</button>
            <button className="hover:text-cyan-300">YouTube</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// HomePage.jsx
// import React from "react";

// const trendingTags = [
//   "Budget",
//   "Gaming",
//   "AI / Workstation",
//   "Minimalist",
//   "RGB + Aesthetic",
//   "Liquid Cooled",
// ];

// const featuredBuilds = [
//   {
//     id: 1,
//     title: "Neon Tempest 4090",
//     user: "@VoltageLord",
//     rating: 4.9,
//     tags: ["Workstation", "RTX 4090", "Custom Loop"],
//     image:
//       "https://images.pexels.com/photos/8452551/pexels-photo-8452551.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 2,
//     title: "CyberWave Streaming Rig",
//     user: "@PixelStream",
//     rating: 4.8,
//     tags: ["Streaming", "RGB", "Ryzen"],
//     image:
//       "https://images.pexels.com/photos/9072304/pexels-photo-9072304.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 3,
//     title: "Silent Shadow ITX",
//     user: "@MiniBeast",
//     rating: 4.7,
//     tags: ["ITX", "Minimal", "Silent"],
//     image:
//       "https://images.pexels.com/photos/16041222/pexels-photo-16041222/free-photo-of-gaming-pc.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
// ];

// const latestBuilds = [
//   {
//     id: 1,
//     name: "Razorline 4060 Setup",
//     user: "@Rahil",
//     parts: "i5-12400F • RTX 4060 • 16GB",
//     likes: 132,
//     comments: 12,
//     image:
//       "https://images.pexels.com/photos/7915355/pexels-photo-7915355.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 2,
//     name: "Budget Battlestation",
//     user: "@Alex",
//     parts: "Ryzen 5 3600 • GTX 1660",
//     likes: 68,
//     comments: 4,
//     image:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 3,
//     name: "Snow White Build",
//     user: "@Luna",
//     parts: "i7 • RTX 3070 • White Theme",
//     likes: 209,
//     comments: 18,
//     image:
//       "https://images.pexels.com/photos/167404/pexels-photo-167404.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 4,
//     name: "Desk Minimal v3",
//     user: "@FocusMode",
//     parts: "Mac + PC hybrid desk",
//     likes: 94,
//     comments: 7,
//     image:
//       "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
// ];

// const leaderboard = [
//   { user: "@VoltageLord", likes: 1245 },
//   { user: "@SilentCooling", likes: 1022 },
//   { user: "@PortableBeast", likes: 890 },
// ];

// export default function HomePage() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
//         <div className="space-y-5">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/60 px-3 py-1 text-[11px] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
//             <span className="text-xs">✨</span>
//             <span className="uppercase tracking-[0.18em] text-cyan-300">
//               PC Setup Community
//             </span>
//           </div>

//           <div className="space-y-3">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
//               Share your{" "}
//               <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//                 battlestation
//               </span>
//               . Get inspired by others.
//             </h2>
//             <p className="max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-300">
//               A community-driven gallery of PC setups and custom builds. Post
//               your rig, see what others are rocking, and discover ideas for your
//               next upgrade.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3">
//             <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:bg-cyan-300">
//               Browse community builds
//             </button>
//             <button className="rounded-xl border border-cyan-500/50 bg-slate-950/60 px-4 py-2 text-sm font-medium text-cyan-100 hover:border-cyan-300">
//               Upload my setup 🚀
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
//             <div className="flex items-center gap-1.5">
//               <span className="h-2 w-2 rounded-full bg-cyan-400" />
//               <span>2,300+ builds shared</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
//               <span>No ads. Just setups.</span>
//             </div>
//           </div>
//         </div>

//         {/* Hero card */}
//         <div className="relative max-w-md lg:max-w-full mx-auto w-full">
//           <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/50 via-fuchsia-500/40 to-cyan-500/30 opacity-60 blur-xl" />
//           <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950/80 shadow-[0_0_40px_rgba(15,23,42,1)]">
//             <div className="relative h-44 sm:h-52 lg:h-60 w-full overflow-hidden">
//               <img
//                 src="https://images.pexels.com/photos/7915351/pexels-photo-7915351.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt="Featured PC setup"
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
//             </div>
//             <div className="space-y-2 p-4">
//               <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
//                 <span className="inline-flex items-center gap-1">
//                   Featured build
//                   <span className="text-[10px] text-cyan-300">LIVE</span>
//                 </span>
//                 <span className="rounded-full border border-cyan-500/40 px-2 py-0.5 text-[10px] text-cyan-200">
//                   #RGB #UltraWide
//                 </span>
//               </div>
//               <h3 className="text-sm sm:text-base font-semibold text-slate-50">
//                 Neon Horizon Dual Monitor Setup
//               </h3>
//               <div className="flex items-center justify-between text-[11px] text-slate-400">
//                 <span>by @Rahil</span>
//                 <span>❤️ 213 • 💬 18</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tags */}
//       <section className="mt-10 space-y-3">
//         <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
//           Trending tags
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {trendingTags.map((tag) => (
//             <button
//               key={tag}
//               className="rounded-full border border-cyan-500/40 bg-slate-950/70 px-3 py-1 text-xs text-cyan-100 hover:border-cyan-300 hover:text-white"
//             >
//               #{tag}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Featured + Latest */}
//       <section className="mt-10 grid gap-10 lg:grid-cols-[3fr,2fr]">
//         {/* Featured carousel */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm font-semibold text-slate-100">
//               🔥 Featured builds
//             </h3>
//             <button className="text-xs text-cyan-300 hover:text-cyan-200">
//               View all →
//             </button>
//           </div>

//           <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
//             {featuredBuilds.map((build) => (
//               <article
//                 key={build.id}
//                 className="min-w-[220px] max-w-xs flex-1 rounded-2xl border border-cyan-500/30 bg-slate-950/70 shadow-[0_0_25px_rgba(15,23,42,1)]"
//               >
//                 <div className="relative h-28 sm:h-32 overflow-hidden rounded-t-2xl">
//                   <img
//                     src={build.image}
//                     alt={build.title}
//                     className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
//                 </div>
//                 <div className="space-y-2 p-3">
//                   <div className="flex items-center justify-between text-[11px] text-slate-400">
//                     <span>{build.user}</span>
//                     <span>⭐ {build.rating}</span>
//                   </div>
//                   <h4 className="text-sm font-semibold text-slate-50">
//                     {build.title}
//                   </h4>
//                   <div className="flex flex-wrap gap-1.5">
//                     {build.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-cyan-200"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Latest builds */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm font-semibold text-slate-100">
//               🧩 Latest community builds
//             </h3>
//             <button className="text-xs text-cyan-300 hover:text-cyan-200">
//               See all →
//             </button>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {latestBuilds.map((build) => (
//               <article
//                 key={build.id}
//                 className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 transition hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(34,211,238,0.45)]"
//               >
//                 <div className="relative h-24 sm:h-28 w-full overflow-hidden">
//                   <img
//                     src={build.image}
//                     alt={build.name}
//                     className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
//                 </div>
//                 <div className="space-y-1.5 p-3">
//                   <h4 className="text-sm font-semibold text-slate-50">
//                     {build.name}
//                   </h4>
//                   <p className="text-[11px] text-slate-400">{build.parts}</p>
//                   <div className="flex items-center justify-between text-[11px] text-slate-400">
//                     <span>{build.user}</span>
//                     <span>
//                       ❤️ {build.likes} • 💬 {build.comments}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leaderboard preview + CTA */}
//       <section className="mt-10 grid gap-8 lg:grid-cols-[2fr,3fr]">
//         <div className="space-y-4 rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_0_25px_rgba(15,23,42,1)]">
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm font-semibold text-slate-100">
//               🏆 Top builders this month
//             </h3>
//             <button className="text-xs text-cyan-300 hover:text-cyan-200">
//               Full leaderboard →
//             </button>
//           </div>
//           <div className="space-y-3 text-sm">
//             {leaderboard.map((entry, index) => (
//               <div
//                 key={entry.user}
//                 className="flex items-center justify-between rounded-xl bg-slate-900/60 px-3 py-2"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-cyan-300">
//                     {index === 0 ? "①" : index === 1 ? "②" : "③"}
//                   </span>
//                   <span className="text-slate-100">{entry.user}</span>
//                 </div>
//                 <span className="text-xs text-slate-400">
//                   {entry.likes} likes
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-cyan-500/20 p-5 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
//           <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-400/50" />
//           <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full border border-fuchsia-400/40" />
//           <div className="relative space-y-3">
//             <h3 className="text-lg font-semibold text-slate-50">
//               Want your setup featured?
//             </h3>
//             <p className="max-w-md text-sm text-slate-200">
//               Upload high quality photos of your desk, PC, and peripherals. Add
//               your full part list and story behind the build. The best setups
//               get highlighted on the homepage.
//             </p>
//             <button className="mt-1 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.7)] hover:bg-cyan-300">
//               Upload my build 🚀
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
