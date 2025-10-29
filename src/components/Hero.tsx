import { Download, Cpu, Zap, Car, Plane } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-1/4 left-1/6 opacity-20 animate-float">
        <Cpu className="w-12 h-12 text-cyan-400" />
      </div>
      <div className="absolute top-1/3 right-1/5 opacity-20 animate-float delay-1000">
        <Zap className="w-10 h-10 text-amber-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20 animate-float delay-2000">
        <Car className="w-14 h-14 text-blue-400" />
      </div>
      <div className="absolute bottom-1/3 right-1/6 opacity-20 animate-float delay-1500">
        <Plane className="w-11 h-11 text-purple-400" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Portfolio Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-300">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 text-sm tracking-wider uppercase font-medium">Portfolio</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Sarthak <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">Rahate</span>
        </h1>

        {/* Professional Title - Optimized for One Line */}
        <div className="text-lg md:text-xl text-gray-300 mb-6 font-light tracking-wide max-w-4xl mx-auto leading-tight">
          Electronics & Communication Engineer | 
          <span className="text-cyan-400"> EV Systems</span> | 
          <span className="text-amber-400"> Avionics</span> | 
          <span className="text-purple-400"> Embedded</span> | 
          <span className="text-blue-400"> VLSI</span>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light italic border-l-4 border-cyan-500/50 pl-4">
          Turning 'what if' into 'what is' through electronics and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* Download Resume Button */}
          <a 
            href="/resume.pdf" 
            download="Sarthak_Rahate_Resume.pdf"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] border border-cyan-400/20"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          
          {/* View Projects Button */}
          <a 
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}