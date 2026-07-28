import LoginForm from "../../components/forms/LoginForm";
import {
  Briefcase,
  Clock3,
  FileText,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
function Login() {
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

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
  />

</div>    {/* Left Side */}
     <motion.div
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       whileHover={{
           scale: 1.02,
           y: -4,
        }}
  className="relative z-10 hidden lg:flex w-1/2 flex-col justify-center px-16"
>
    <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
     FreelanceFlow
   </h1>

    <div className="mt-6">
  <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
    🚀 Freelancer Workspace
  </span>
</div>

    <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-lg">

        The complete workspace for freelancers.
        <br />
        Manage clients, projects, invoices,
        <br />
        time tracking, and business growth
        <br />
        from one beautiful dashboard.

    </p>

    <div className="mt-14 space-y-6">

        <div className="flex items-center gap-3 text-slate-300">
               <Briefcase
                size={22}
                className="text-cyan-400 flex-shrink-0"
                />
               <span>Client Management</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
             <Clock3 className="text-cyan-400" size={22} />
            <span>Smart Time Tracking</span>
         </div>

        <div className="flex items-center gap-3 text-slate-300">
             <FileText className="text-cyan-400" size={22} />
              <span>PDF Invoice Generator</span>
         </div>

          <div className="flex items-center gap-3 text-slate-300">
               <BarChart3 className="text-cyan-400" size={22} />
              <span>Business Analytics</span>
            </div>

    </div>

</motion.div>

      {/* Right Side */}
<div className="relative z-10 flex flex-1 items-center justify-center px-6"   >     <LoginForm />
      </div>
    </div>
  );
}

export default Login;