export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-bold mb-3">Welcome back</h1>
        <p className="text-zinc-400 mb-6">
          Log in to continue to your Neev workspace.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-black rounded-xl px-4 py-3 font-medium"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-zinc-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-white underline">
            Start free trial
          </a>
        </p>
      </div>
    </div>
  );
}