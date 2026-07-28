import RegisterForm from "../../components/forms/RegisterForm";
import {
  Rocket,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black flex">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl"
        />

      </div>

      {/* Left Side */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 hidden lg:flex w-1/2 flex-col justify-center px-16"
      >

        <h1 className="text-6xl xl:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Join FreelanceFlow
        </h1>

        <div className="mt-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          ✨ Build Your Freelance Business
        </div>

        <p className="mt-6 max-w-lg text-xl leading-relaxed text-slate-300">
          Create your workspace in minutes and start managing
          clients, projects, invoices, and productivity—all in one place.
        </p>

        <div className="mt-14 space-y-6">

          <div className="flex items-center gap-3 text-slate-300">
            <Rocket className="text-cyan-400" size={22} />
            <span>Launch your business quickly</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Users className="text-cyan-400" size={22} />
            <span>Organize unlimited projects</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <TrendingUp className="text-cyan-400" size={22} />
            <span>Track your business growth</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <ShieldCheck className="text-cyan-400" size={22} />
            <span>Secure cloud workspace</span>
          </div>

        </div>

      </motion.div>

      {/* Right Side */}

      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <RegisterForm />
      </div>

    </div>
  );
}

export default Register;