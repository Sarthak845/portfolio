import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
          <span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">Portfolio</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Sarthak Rahate
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          Electronics & Communication Engineer | Electric Vehicles | Avionics | Embedded Systems | VLSI Design
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light italic">
          "Turning 'what if' into 'what is' with electronics."
        </p>

        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
          Download Resume
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
