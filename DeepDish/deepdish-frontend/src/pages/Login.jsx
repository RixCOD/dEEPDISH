export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 p-6">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-6">Welcome Back to DeepDish</h2>
        <input className="w-full p-3 mb-4 bg-neutral-800 rounded-lg text-white" type="email" placeholder="Email" />
        <input className="w-full p-3 mb-6 bg-neutral-800 rounded-lg text-white" type="password" placeholder="Password" />
        <button className="w-full bg-orange-600 py-3 rounded-lg font-bold text-white">Login</button>
      </div>
    </div>
  );
}