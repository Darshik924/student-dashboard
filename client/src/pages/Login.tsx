import React, { useState } from "react";
import type { loginDataType } from "../Types/propsType";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/useAuth";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [formData, setData] = useState<loginDataType>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    try {
      const result = await fetch("http://localhost:7890/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await result.json();

      if (!result.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      console.log("Login In Successful:", data.user);

      if (data.token) {
        login(data.token);
        navigate("/");
      }
    } catch (err) {
      setError("Server Error, Please Try Again");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-16 min-h-screen bg-linear-to-r from-pink-400/80 to-indigo-500/80 flex justify-center items-center ">
      <div className="flex flex-col items-center text-center max-w-4xl p-8 border-4 border-pink-200 absolute z-20 rounded-3xl bg-linear-to-r from-indigo-800 to-purple-900 ">
        <h1 className="text-5xl font-bold text-red-200 tracking-tight leading-tight">
          Login In to your account
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

          {loading && (
            <div className="mt-6 flex items-center gap-3 px-6 py-3 rounded-2xl bg-purple-800/60 border-2 border-pink-400 shadow-lg shadow-pink-500/40">
              <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>

              <span className="text-white font-semibold text-lg tracking-wide">
                Logging In Please Wait...
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 hover:text-white bg-pink-600/50 text-white font-bold py-4 rounded-2xl hover:bg-yellow-500/80 active:scale-95 transition-all shadow-lg text-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {error && (
            <div className="mt-6 px-6 py-4 rounded-2xl border-2 border-red-400 bg-red-900/70 shadow-lg shadow-red-500/40 text-white text-lg font-semibold animate-pulse">
              ❌ {error}
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Login;
