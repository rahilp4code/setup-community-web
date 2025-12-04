// LeaderboardPage.jsx
import React, { useState } from "react";

const monthlyLeaders = [
  { user: "@VoltageLord", likes: 1245, builds: 6 },
  { user: "@SilentCooling", likes: 1022, builds: 4 },
  { user: "@PortableBeast", likes: 890, builds: 5 },
  { user: "@DeskSamurai", likes: 611, builds: 3 },
  { user: "@RGBWizard", likes: 540, builds: 4 },
];

const allTimeLeaders = [
  { user: "@VoltageLord", likes: 8542, builds: 31 },
  { user: "@PixelStream", likes: 7310, builds: 24 },
  { user: "@SilentCooling", likes: 6890, builds: 22 },
  { user: "@MiniBeast", likes: 6221, builds: 19 },
  { user: "@Rahil", likes: 5904, builds: 17 },
];

export default function LeaderboardPage() {
  const [tab, setTab] = useState("month");
  const data = tab === "month" ? monthlyLeaders : allTimeLeaders;

  return (
    <>
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Leaderboard
        </h2>
        <p className="text-sm text-slate-400">
          The most liked builders in the community. Upload high quality builds to climb the ranks.
        </p>
      </div>

      <section className="space-y-5 rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-4 sm:p-5 shadow-[0_0_30px_rgba(15,23,42,1)]">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-full bg-slate-900/80 p-1">
            <button
              onClick={() => setTab("month")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                tab === "month"
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                  : "text-slate-300"
              }`}
            >
              This month
            </button>
            <button
              onClick={() => setTab("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                tab === "all"
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
                  : "text-slate-300"
              }`}
            >
              All time
            </button>
          </div>

          <p className="text-[11px] text-slate-500">
            Ranking is based on total likes across all public builds.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/90">
          <div className="hidden sm:grid grid-cols-[60px,2fr,1fr,1fr] border-b border-slate-800 bg-slate-900/80 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <span>#</span>
            <span>User</span>
            <span className="text-right">Total likes</span>
            <span className="text-right">Builds</span>
          </div>

          {/* Desktop/tablet rows */}
          <div className="hidden sm:block">
            {data.map((entry, index) => (
              <div
                key={entry.user}
                className={`grid grid-cols-[60px,2fr,1fr,1fr] items-center px-4 py-3 text-sm ${
                  index === 0
                    ? "bg-gradient-to-r from-cyan-500/10 via-slate-950 to-slate-950"
                    : "odd:bg-slate-950 even:bg-slate-950/80"
                }`}
              >
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                      index === 0
                        ? "border-yellow-300/80 text-yellow-200"
                        : index === 1
                        ? "border-slate-300/70 text-slate-200"
                        : index === 2
                        ? "border-amber-500/70 text-amber-300"
                        : "border-slate-700 text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-slate-100">
                    {entry.user}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {index === 0
                      ? "👑 Community legend"
                      : index <= 2
                      ? "Top 3 builder"
                      : "Active contributor"}
                  </span>
                </div>

                <div className="text-right text-sm text-cyan-200">
                  {entry.likes.toLocaleString()}
                </div>

                <div className="text-right text-sm text-slate-200">
                  {entry.builds}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden divide-y divide-slate-800">
            {data.map((entry, index) => (
              <div
                key={entry.user}
                className="px-4 py-3 text-sm bg-slate-950"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                        index === 0
                          ? "border-yellow-300/80 text-yellow-200"
                          : index === 1
                          ? "border-slate-300/70 text-slate-200"
                          : index === 2
                          ? "border-amber-500/70 text-amber-300"
                          : "border-slate-700 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-slate-100">{entry.user}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {index === 0
                      ? "👑 Community legend"
                      : index <= 2
                      ? "Top 3 builder"
                      : "Contributor"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[12px] text-slate-300">
                  <span>Likes: {entry.likes.toLocaleString()}</span>
                  <span>Builds: {entry.builds}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[12px] text-slate-400">
          <span>
            Want to appear here? Keep posting clean, high-effort setups with full part lists.
          </span>
          <button className="rounded-xl bg-cyan-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.7)] hover:bg-cyan-300">
            Upload a new build 🚀
          </button>
        </div>
      </section>
    </>
  );
}
