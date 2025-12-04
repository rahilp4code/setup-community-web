// SubmitSetupPage.jsx
import React, { useState } from "react";
import img from "../assets/mysetup.jpeg";


export default function SubmitSetupPage() {
  const [form, setForm] = useState({
    name: "",
    user: "",
    mainImage: "",
    type: "Gaming",
    priceTier: "Mid",
    description: "",
    parts: "",
    tags: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Send to backend
    console.log("Submitted build:", form);
    alert("Build submitted! (Wire this to your backend later.)");
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50">
      {/* Glow background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pt-10">
        <div className="mb-6 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Submit your setup
          </h2>
          <p className="text-sm text-slate-400">
            Add your battlestation to the community gallery. Include clear photos and a full part list.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-5 shadow-[0_0_30px_rgba(15,23,42,1)]"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300">
                  Setup name <span className="text-cyan-300">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Neon Horizon Dual Monitor Rig"
                  required
                  className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300">
                  Your username <span className="text-cyan-300">*</span>
                </label>
                <input
                  type="text"
                  name="user"
                  value={form.user}
                  onChange={handleChange}
                  placeholder="@Rahil"
                  required
                  className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300">
                  Build type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
                >
                  <option>Gaming</option>
                  <option>Budget</option>
                  <option>Workstation</option>
                  <option>Minimal</option>
                  <option>ITX</option>
                  <option>Streaming</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300">
                  Price tier
                </label>
                <select
                  name="priceTier"
                  value={form.priceTier}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Low">Low / Budget</option>
                  <option value="Mid">Mid-range</option>
                  <option value="High">High-end</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-300">
                Main photo URL <span className="text-cyan-300">*</span>
              </label>
              <input
                type="url"
                name="mainImage"
                value={form.mainImage}
                onChange={handleChange}
                required
                placeholder="https://..."
                className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
              />
              <p className="text-[11px] text-slate-500">
                Later you can support multiple images / uploads. For now, use one good angle.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-300">
                Short description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                placeholder="Tell the story behind this setup. What do you use it for, what inspired the design?"
                className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-300">
                Full part list <span className="text-cyan-300">*</span>
              </label>
              <textarea
                name="parts"
                value={form.parts}
                onChange={handleChange}
                rows={5}
                required
                placeholder={
                  "CPU: Intel i5-12400F\nGPU: RTX 4060\nRAM: 16GB DDR4 3200MHz\nMotherboard: ...\nStorage: ...\nCase: ...\nPeripherals: ..."
                }
                className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-300">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="#RGB, #Budget, #DualMonitor..."
                className="w-full rounded-xl border border-cyan-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-[11px] text-slate-500">
                By submitting, you confirm all photos are yours and safe for work.
              </p>
              <button
                type="submit"
                className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.8)] hover:bg-cyan-300"
              >
                Submit my setup 
              </button>
            </div>
          </form>

          {/* Live preview card */}
          <aside className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Live preview
            </h3>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950/80 shadow-[0_0_28px_rgba(15,23,42,1)]">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={
                img
                  }
                  alt="Preview setup"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                <span className="absolute left-2 top-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-cyan-200">
                  {form.type || "Gaming"}
                </span>
              </div>
              <div className="space-y-1.5 p-4">
                <h4 className="text-sm font-semibold text-slate-50">
                  {form.name || "Neon Horizon Dual Monitor Rig"}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {form.description ||
                    "Your description will appear here. Share what makes this setup special."}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{form.user || "@username"}</span>
                  <span>❤️ 0 • 💬 0</span>
                </div>
                {form.tags && (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {form.tags
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-cyan-200"
                        >
                          {tag.startsWith("#") ? tag : `#${tag}`}
                        </span>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
