import { Award, Rocket } from 'lucide-react';

const achievements = [
  {
    title: 'AIR 5 - Indian Kart Racing',
    year: '2024',
    description: 'Achieved All India Rank 5 in the prestigious Indian Kart Racing Championship',
    icon: Award
  },
  {
    title: 'AIR 7 - Go-Kart Design Challenge',
    year: '2023',
    description: 'Achieved All India Rank 7 in the National Go-Kart Design Challenge',
    icon: Award
  },
  {
    title: 'Winner - Electroquest',
    year: '2023',
    description: 'First place in Digital Electronics competition at BVPU',
    icon: Award
  },
  {
    title: 'NASA Kennedy Space Center',
    year: '2019',
    description: 'Academic research visit on aerospace robotics and autonomy',
    icon: Rocket
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-cyan-500/0 group-hover:from-amber-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-500"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="flex-shrink-0 ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
