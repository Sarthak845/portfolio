import { Cpu, Wrench, Code } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    skills: ['STM32', 'Arduino', 'ESP32', 'Raspberry Pi']
  },
  {
    icon: Wrench,
    title: 'Hardware Design',
    skills: ['Altium', 'Proteus', 'MATLAB', 'SolidWorks', 'Ansys']
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'YOLOv7', 'Computer Vision', 'C/C++']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-center text-gray-300 font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
