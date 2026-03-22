"use client";

import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("landing");

  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOGGLE BUTTON (bottom) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-2 bg-gray-900 p-2 rounded-full border border-gray-700">
        <button
          onClick={() => setView("landing")}
          className={`px-4 py-2 rounded-full ${
            view === "landing" ? "bg-white text-black" : "text-white"
          }`}
        >
          Landing
        </button>
        <button
          onClick={() => setView("dashboard")}
          className={`px-4 py-2 rounded-full ${
            view === "dashboard" ? "bg-white text-black" : "text-white"
          }`}
        >
          Dashboard
        </button>
      </div>

      {view === "landing" ? <Landing /> : <Dashboard />}
    </div>
  );
}

function Landing() {
  return (
  <div className="p-10">

    {/* NAVBAR */}
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-xl font-bold">Neev</h1>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "/login"}
          className="text-white"
        >
          Login
        </button>

        <button
          onClick={() => window.location.href = "/signup"}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Start Free Trial
        </button>
      </div>
    </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="AI Video" desc="Create videos instantly from text" />
        <Card title="AI Images" desc="Generate visuals in seconds" />
        <Card title="AI Voice" desc="Realistic voiceovers & audio" />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
  <div className="p-10">

    {/* NAVBAR */}
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-xl font-bold">Neev</h1>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = "/login"}
          className="text-white"
        >
          Login
        </button>
<button
  onClick={() => window.location.href = "/dashboard"}
  className="text-white"
>
  Dashboard
</button>

        <button
          onClick={() => window.location.href = "/signup"}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Start Free Trial
        </button>
      </div>
    </div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Stat title="Credits" value="1240" />
        <Stat title="Projects" value="18" />
        <Stat title="Exports" value="342" />
      </div>

      <div className="mt-10">
        <h2 className="text-xl mb-4">Recent Projects</h2>

        <div className="bg-gray-900 p-4 rounded-xl">
          <p>• AI Product Video</p>
          <p>• Ad Campaign Visuals</p>
          <p>• Voiceover Pack</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc }: any) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}

function Stat({ title, value }: any) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}