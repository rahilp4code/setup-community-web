
// BrowseBuildsPage.jsx
import React, { useState } from "react";

const allBuilds = [
  // ...same data as before
  {
    id: 1,
    name: "Razorline 4060 Setup",
    user: "@Rahil",
    parts: "i5-12400F • RTX 4060 • 16GB",
    type: "Gaming",
    priceTier: "Mid",
    likes: 132,
    comments: 12,
    image:
      "https://images.pexels.com/photos/7915355/pexels-photo-7915355.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Budget Battlestation",
    user: "@Alex",
    parts: "Ryzen 5 3600 • GTX 1660",
    type: "Budget",
    priceTier: "Low",
    likes: 68,
    comments: 4,
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Neon Creator Rig",
    user: "@Luna",
    parts: "Ryzen 9 • RTX 4080 • 64GB",
    type: "Workstation",
    priceTier: "High",
    likes: 241,
    comments: 22,
    image:
      "https://images.pexels.com/photos/8452551/pexels-photo-8452551.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Desk Minimal v3",
    user: "@FocusMode",
    parts: "Mac + PC hybrid desk",
    type: "Minimal",
    priceTier: "Mid",
    likes: 94,
    comments: 7,
    image:
      "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    name: "ITX Shadow Box",
    user: "@MiniBeast",
    parts: "SFF • 4070 • 32GB",
    type: "ITX",
    priceTier: "High",
    likes: 187,
    comments: 16,
    image:
      "https://images.pexels.com/photos/16041222/pexels-photo-16041222/free-photo-of-gaming-pc.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function BrowseBuildsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filtered = allBuilds
    .filter((build) => {
      const q = search.toLowerCase();
      const matchesSearch =
        build.name.toLowerCase().includes(q) ||
        build.user.toLowerCase().includes(q) ||
        build.parts.toLowerCase().includes(q);

      const matchesType =
        typeFilter === "All" || build.type === typeFilter;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "Most liked") return b.likes - a.likes;
      if (sortBy === "Most commented") return b.comments - a.comments;
      return b.id - a.id;
    });

  return (
    <>
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Browse community builds
        </h2>
        <p className="text-sm text-slate-400">
          Filter by category, search by parts or username, and find your next inspiration.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
        {/* Filters */}
        <aside className="space-y-5 rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_0_24px_rgba(15,23,42,1)]">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Search
            </h3>
            <div className="mt-2 relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                🔍
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Build name, user, parts..."
                className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/80 px-8 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Build type
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["All", "Gaming", "Budget", "Workstation", "Minimal", "ITX"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`rounded-full border px-3 py-1 text-[11px] ${
                      typeFilter === type
                        ? "border-cyan-400 bg-cyan-400 text-slate-950"
                        : "border-cyan-500/40 bg-slate-950/80 text-cyan-100 hover:border-cyan-300"
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Sort by
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mt-2 w-full rounded-xl border border-cyan-500/40 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
            >
              <option>Newest</option>
              <option>Most liked</option>
              <option>Most commented</option>
            </select>
          </div>

          <p className="text-[11px] text-slate-500">
            Tip: When you add your build, include a clear name and tags so others can find it easily.
          </p>
        </aside>

        {/* Results */}
        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <span className="text-cyan-300">{filtered.length}</span>{" "}
              of {allBuilds.length} builds
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/80 text-sm text-slate-400">
              No builds match that search yet. Try changing filters.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((build) => (
                <article
                  key={build.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 transition hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(34,211,238,0.45)]"
                >
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                    <img
                      src={build.image}
                      alt={build.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                    <span className="absolute left-2 top-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-cyan-200">
                      {build.type}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-3">
                    <h4 className="text-sm font-semibold text-slate-50">
                      {build.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {build.parts}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[11px] text-slate-400">
                      <span>{build.user}</span>
                      <span>
                        ❤️ {build.likes} • 💬 {build.comments}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
