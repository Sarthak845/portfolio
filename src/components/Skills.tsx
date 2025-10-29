import { Cpu, Zap, Battery, Car, Bot, Wifi, Cog, Users, Wrench, Plane } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Embedded Systems & Microcontrollers',
    skills: ['Arduino', 'STM32', 'ESP32', 'Raspberry Pi', 'Jetson Nano', 'Embedded C', 'Python'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Power Electronics & EV Systems',
    skills: ['Power Electronics', 'Motor Control', 'BMS Design', 'EV Powertrain', 'Battery Systems', 'Energy Management'],
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Car,
    title: 'EV Powertrain & Integration',
    skills: ['Powertrain Design', 'Motor Tuning', 'Vehicle Dynamics', 'Performance Optimization'],
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Plane,
    title: 'Avionics & UAV Systems',
    skills: ['Telemetry Systems', 'Stability Tuning', 'Sensor Fusion', 'UAV Design'],
    gradient: 'from-purple-500 to-fuchsia-500'
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    skills: ['Actuator Control', 'Sensor Integration', 'PID Control', 'Automation'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Wifi,
    title: 'IoT & Communication Protocols',
    skills: ['UART', 'I²C', 'SPI', 'CAN Bus', 'NRF', 'Wi-Fi', 'Bluetooth', 'IoT Integration'],
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Wrench,
    title: 'CAD & Engineering Software',
    skills: ['SolidWorks', 'AutoCAD', 'MATLAB', 'Simulink', 'Ansys', 'Altium', 'Proteus', 'KiCad'],
    gradient: 'from-slate-500 to-gray-500'
  },
  {
    icon: Cog,
    title: 'Prototyping & Manufacturing',
    skills: ['PCB Design', 'Circuit Design', 'PCB Soldering', 'TIG Welding', 'Stick Welding', 'Precise Soldering'],
    gradient: 'from-rose-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Leadership & Technical Management',
    skills: ['Team Leadership', 'Technical Mentorship', 'Project Management', 'Documentation', 'Presentation'],
    gradient: 'from-green-500 to-emerald-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skills spanning embedded systems, power electronics, robotics, and engineering leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-700/40 border border-gray-600 rounded-lg px-3 py-2 text-center text-gray-300 text-sm font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group/skill"
                      >
                        <span className="group-hover/skill:text-cyan-300 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Software Proficiency Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Software & Tools <span className="text-cyan-400">Proficiency</span>
            </h3>
            <p className="text-gray-400">Industry-standard tools for design, simulation, and development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'MATLAB', 'Simulink', 'Proteus', 'Multisim', 'KiCad', 'Altium',
              'EasyEDA', 'SolidWorks', 'AutoCAD', 'OptimumLap', 'MotorETS', 'Ansys',
              'Arduino IDE', 'STM32CubeIDE', 'VS Code', 'Python'
            ].map((software, index) => (
              <div
                key={index}
                className="bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-center text-gray-300 text-sm font-medium hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300 transition-all duration-300 transform hover:scale-105"
              >
                {software}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400 font-medium">Technical Domains</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-gray-400 font-medium">Tools & Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
            <div className="text-gray-400 font-medium">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
}