import React from "react";

const Register = () => {
    
    const handleSubmit = (): void => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {};

  return (
    <main className="pt-16 min-h-screen bg-linear-to-r from-pink-400/80 to-indigo-500/80 flex justify-center items-center ">
      <div className="flex flex-col items-center text-center max-w-4xl p-8 border-4 border-pink-200 absolute z-20 rounded-3xl bg-linear-to-r from-indigo-800 to-purple-900 ">
        <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
          Register Your Name to the Site
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-white font-bold ml-1 text-2xl">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="alex@example.com"
              required
              className="px-5 py-3 rounded-2xl border-4 border-yellow-100 focus:outline-none focus:border-purple-950 bg-yellow-50/50 transition-colors"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-bold ml-1 text-2xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="px-5 py-3 rounded-2xl border-4 border-yellow-100 focus:outline-none focus:border-purple-950 bg-yellow-50/50 transition-colors"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white font-bold ml-1 text-2xl">
              Your Username
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Your GamerTag"
              required
              className="px-5 py-3 rounded-2xl border-4 border-yellow-100 focus:outline-none focus:border-purple-950 bg-yellow-50/50 transition-colors"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-4 hover:text-white bg-pink-600/50 text-white font-bold py-4 rounded-2xl hover:bg-yellow-500/80 active:scale-95 transition-all shadow-lg text-xl cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
