import { Code2, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Custom STM32 Flight Controller',
    description: 'Designed and developed a custom flight controller using STM32 microcontroller for enhanced drone autonomy and precision control.',
    tech: ['STM32', 'C/C++', 'PID Control', 'IMU Integration']
  },
  {
    title: 'FC-Drone v1 (Quadcopter)',
    description: 'Complete quadcopter build with custom firmware, telemetry systems, and autonomous flight capabilities.',
    tech: ['Flight Control', 'Telemetry', 'Autonomous Navigation', 'Sensor Fusion']
  },
  {
    title: 'EV Battery Pack (72V 90Ah)',
    description: 'Engineered high-capacity battery management system for electric vehicles with thermal monitoring and safety protocols.',
    tech: ['BMS', 'Battery Design', 'Thermal Management', 'Power Electronics']
  },
  {
    title: 'ADAS for Off-Road Vehicles',
    description: 'Implemented advanced driver assistance system using Jetson Nano and LiDAR for terrain mapping and obstacle detection.',
    tech: ['Jetson Nano', 'LiDAR', 'Computer Vision', 'Real-time Processing']
  },
  {
    title: 'Object Detection using YOLOv7',
    description: 'Developed real-time object detection system optimized for embedded platforms with high accuracy and low latency.',
    tech: ['YOLOv7', 'Python', 'Deep Learning', 'Edge Computing']
  },
  {
    title: 'Drone Transmitter-Receiver System',
    description: 'Custom RF communication system for long-range drone control with failsafe mechanisms and low-latency telemetry.',
    tech: ['RF Communication', 'Protocol Design', 'Embedded C', 'Signal Processing']
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <Zap className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
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
      </div>
    </section>
  );
}
