import { Car, Plane, Bot, Cpu, Wrench } from 'lucide-react';

const domains = [
  {
    icon: Car,
    title: 'Electric Vehicles',
    description: 'Powertrain architecture, motor control algorithms, battery management systems, award winning EV designs',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Plane,
    title: 'UAVs & Drones',
    description: 'Flight control systems, advanced telemetry, autonomous navigation systems',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Bot,
    title: 'Robotics & IoT',
    description: 'Multi-sensor fusion, intelligent obstacle avoidance, real time embedded communication',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    icon: Wrench,
    title: 'Vehicle Mechanical Design',
    description: 'Complete vehicle systems: chassis design, steering geometry, braking systems, transmission integration',
    gradient: 'from-amber-500 to-red-500'
  },
  {
    icon: Cpu,
    title: 'VLSI & Semiconductors',
    description: 'CMOS design methodology, EDA tool flow, integrated circuit design',
    gradient: 'from-purple-600 to-cyan-500'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Domains of Expertise</h2>
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