export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Neev Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400">Credits</p>
          <h2 className="text-2xl font-bold mt-2">1240</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400">Projects</p>
          <h2 className="text-2xl font-bold mt-2">18</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400">Exports</p>
          <h2 className="text-2xl font-bold mt-2">342</h2>
        </div>
      </div>

      <div className="mt-10 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <div className="space-y-2 text-zinc-300">
          <p>• AI Product Video</p>
          <p>• Ad Campaign Visuals</p>
          <p>• Voiceover Pack</p>
        </div>
      </div>
    </div>
  );
}