import { Car, Bot, Cpu, Plane, Wrench } from 'lucide-react';

const domains = [
  {
    icon: Car,
    title: 'Electric Vehicles',
    description: 'Hands-on experience with EV powertrain systems, PMSM/BLDC motors, battery systems, motor controllers, and vehicle electronics through electric racing-kart projects.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Bot,
    title: 'Robotics & Embedded Systems',
    description: 'Experience with embedded hardware, microcontrollers, sensors, and actuator-related engineering. Currently working on actuator selection and load/torque calculations for an industrial humanoid robot.',
    gradient: 'from-purple-500 to-fuchsia-600'
  },
  {
    icon: Cpu,
    title: 'Power Electronics & Semiconductor Technology',
    description: 'Developing knowledge in power electronics, semiconductor device fundamentals, MOSFETs, and GaN/SiC technology through structured learning and simulation-based design projects.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Plane,
    title: 'UAVs & Avionics',
    description: 'Worked on flight-controller hardware, drone electronics, and PCB development. Designed a 6000-lux LED PCB from scratch in KiCad, from manufacturing to deployment in a defense-grade UAV application.',
    gradient: 'from-sky-500 to-blue-600'
  },
  {
    icon: Wrench,
    title: 'Vehicle Systems & Integration',
    description: 'Experience with vehicle electrical architecture, system integration, testing, and cross-disciplinary development through hands-on work with electric racing karts.',
    gradient: 'from-amber-500 to-orange-600'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Engineering Domains</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-cyan-500/50 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl from-cyan-500 to-amber-500"></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${domain.gradient} rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {domain.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}