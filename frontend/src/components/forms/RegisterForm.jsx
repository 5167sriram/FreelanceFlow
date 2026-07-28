import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >

      <h2 className="text-3xl font-bold text-white">
        Create Account 🚀
      </h2>

      <p className="mt-2 text-slate-400">
        Start managing your freelance business today.
      </p>

      <form
  className="mt-8 space-y-5"
  onSubmit={(e) => e.preventDefault()}
>

        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

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
              placeholder="Enter password"
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

        {/* Confirm Password */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 pr-12 text-white outline-none transition focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-3 text-slate-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>
        </div>

        {/* Terms */}

        <label className="flex items-center gap-2 text-sm text-slate-400">

          <input type="checkbox" />

          I agree to the Terms & Privacy Policy

        </label>

        {/* Register Button */}

        <button
          className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400"
        >
          Create Account
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Sign In
        </Link>

      </p>

    </motion.div>
  );
}

export default RegisterForm;