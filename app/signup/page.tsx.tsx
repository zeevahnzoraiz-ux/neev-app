export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-bold mb-3">Start your free trial</h1>
        <p className="text-zinc-400 mb-6">
          Create your Neev account to start generating videos, images, voice, and content.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none"
          />
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
            Create account
          </button>
        </form>

        <p className="text-sm text-zinc-500 mt-6">
          Already have an account?{" "}
          <a href="/" className="text-white underline">
            Go back
          </a>
        </p>
      </div>
    </div>
  );
}