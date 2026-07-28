import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-md rounded-3xl bg-slate-900 p-10 shadow-2xl border border-slate-800"
   >  

      <h2 className="text-3xl font-bold text-white">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-slate-400">
        Sign in to continue using FreelanceFlow.
      </p>

      <form className="mt-8 space-y-6">

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm text-slate-300">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-12 text-white outline-none transition focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-slate-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-slate-400">

            <input type="checkbox" />

            Remember Me

          </label>

          <button
            type="button"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Forgot Password?
          </button>

        </div>

        {/* Button */}

        <button
          className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400"
        >
          Sign In
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Register
        </Link>

      </p>

    </motion.div>
  );
}

export default LoginForm;