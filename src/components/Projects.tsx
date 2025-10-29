import { Code2, Zap, Car, Cpu, Battery, Radio, Plane, CpuIcon } from 'lucide-react';

const projects = [
  {
    title: 'BLDC & PMSM Powertrain Design',
    description: 'Designed and implemented complete BLDC and Permanent Magnet Synchronous Motor powertrains for racing EV Go-Kart with optimized motor control algorithms.',
    tech: ['BLDC/PMSM', 'Motor Control', 'Power Electronics', 'Embedded Systems'],
    icon: <Car className="w-6 h-6 text-white" />,
    award: true
  },
  {
    title: 'Racing EV Dashboard',
    description: 'Multiple-featured digital dashboard displaying real-time telemetry including speed, battery parameters, motor RPM, and rear-view camera feed.',
    tech: ['Embedded Programming', 'Display Systems', 'Hardware', 'Real-time Data'],
    icon: <Cpu className="w-6 h-6 text-white" />,
    award: true
  },
  {
    title: '72V 90Ah Racing EV Battery',
    description: 'Custom designed and manufactured high-performance 72V 90AH battery packs with integrated BMS for racing electric vehicles.',
    tech: ['Battery Design', 'BMS', 'Thermal Management', 'Power Systems', 'Battery manufacturing'],
    icon: <Battery className="w-6 h-6 text-white" />,
    award: true
  },
  {
    title: 'FC-Quadcopter V1',
    description: 'Complete quadcopter system with custom flight controller, telemetry, and autonomous capabilities for research and practical applications.',
    tech: ['UAV Design', 'Flight Dynamics', 'Sensor Fusion', 'Aerodynamics'],
    icon: <Plane className="w-6 h-6 text-white" />,
    award: false
  },
  {
    title: 'NRF Transmitter & Receiver',
    description: 'Custom wireless communication system using NRF modules for reliable low-latency remote control and telemetry data transmission.',
    tech: ['RF Communication', 'Embedded', 'Protocol Design', 'Wireless Systems'],
    icon: <Radio className="w-6 h-6 text-white" />,
    award: false
  },
  {
    title: 'STM32 Flight Controller',
    description: 'Advanced custom flight controller using STM32 microcontroller with sensor fusion, PID control, and precise navigation capabilities.',
    tech: ['STM32', 'Sensor Fusion', 'PID Control', 'Real time Systems'],
    icon: <CpuIcon className="w-6 h-6 text-white" />,
    award: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing my key projects in electric vehicles, drones, and embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.award && (
                      <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-xs text-amber-300">
                        Award Winner
                      </span>
                    )}
                    <Zap className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore All Projects</h3>
            <p className="text-gray-400 mb-6">
              Discover my complete portfolio featuring projects across Robotics, EV Systems, Drones, and Power Electronics
            </p>
            <a
              href="https://sart-portfolio.netlify.app/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-amber-600 hover:from-cyan-500 hover:to-amber-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Code2 className="w-5 h-5" />
              View Complete Project Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}