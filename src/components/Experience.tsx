import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Vice Captain',
    organization: 'Team Pro-Karters, MIT-WPU',
    period: '2022 - 2024',
    description: 'Led electronics and powertrain integration for electric go-karts. Mentored 10+ engineers and secured national ranks (AIR 5 in IKR 2024, AIR 7 in GKDC 2023).',
    highlights: ['AIR 5 - Indian Kart Racing 2024', 'AIR 7 - Go-Kart Design Challenge 2023', 'Team Leadership & Mentorship']
  },
  {
    icon: GraduationCap,
    title: 'Trainee',
    organization: 'IIT Jodhpur',
    period: '2023',
    description: 'Specialized in chip design and semiconductor systems using EDA tools (Altium, Proteus, KiCad).',
    highlights: ['VLSI Design', 'EDA Tools Mastery', 'Semiconductor Systems']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-x-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover:from-cyan-500/5 group-hover:to-amber-500/5 rounded-xl transition-all duration-500"></div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">{exp.organization}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-cyan-700 font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
