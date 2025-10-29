import { Award, Rocket, Trophy, Star, Zap, Users, Cpu, Flag } from 'lucide-react';

const achievements = [
  {
    title: 'AIR 2 - Morphine Motorsports',
    year: '2024',
    description: 'All India Rank 2 in prestigious national racing competition',
    icon: Trophy,
    category: 'racing',
    highlight: true
  },
  {
    title: 'AIR 6 - Formula Kart Design Challenge',
    year: '2024',
    description: 'All India Rank 6 in national-level kart design and engineering competition',
    icon: Cpu,
    category: 'design'
  },
  {
    title: 'AIR 5 - Indian Karting Race',
    year: '2024',
    description: 'All India Rank 5 with Best Powertrain Award in national racing championship',
    icon: Zap,
    category: 'racing',
    highlight: true
  },
  {
    title: 'AIR 7 - Go-Kart Design Challenge',
    year: '2023',
    description: 'All India Rank 7 in national engineering design competition',
    icon: Award,
    category: 'design'
  },
  {
    title: 'Roborace Winners - BVPU Techfest',
    year: '2024',
    description: 'First place in autonomous robotics racing competition',
    icon: Rocket,
    category: 'robotics'
  },
  {
    title: 'Ideathon Winners - BVPU Techfest',
    year: '2024',
    description: 'Top prize in innovation and idea pitching competition',
    icon: Users,
    category: 'innovation'
  },
  {
    title: 'Best Powertrain Award - IKR',
    year: '2024',
    description: 'Recognized for excellence in electric vehicle powertrain design',
    icon: Star,
    category: 'technical',
    highlight: true
  },
  {
    title: 'NASA Educational Program',
    year: '2019',
    description: 'International aerospace research program at Kennedy Space Center',
    icon: Flag,
    category: 'international'
  }
];

const getCategoryStyle = (category) => {
  switch (category) {
    case 'racing':
      return {
        gradient: 'from-red-500 to-orange-600',
        bgGradient: 'from-red-500/5 to-orange-500/5',
        border: 'hover:border-red-500/50',
        text: 'group-hover:text-red-600'
      };
    case 'design':
      return {
        gradient: 'from-blue-500 to-cyan-600',
        bgGradient: 'from-blue-500/5 to-cyan-500/5',
        border: 'hover:border-blue-500/50',
        text: 'group-hover:text-blue-600'
      };
    case 'robotics':
      return {
        gradient: 'from-purple-500 to-pink-600',
        bgGradient: 'from-purple-500/5 to-pink-500/5',
        border: 'hover:border-purple-500/50',
        text: 'group-hover:text-purple-600'
      };
    case 'innovation':
      return {
        gradient: 'from-green-500 to-emerald-600',
        bgGradient: 'from-green-500/5 to-emerald-500/5',
        border: 'hover:border-green-500/50',
        text: 'group-hover:text-green-600'
      };
    case 'technical':
      return {
        gradient: 'from-amber-500 to-yellow-600',
        bgGradient: 'from-amber-500/5 to-yellow-500/5',
        border: 'hover:border-amber-500/50',
        text: 'group-hover:text-amber-600'
      };
    case 'international':
      return {
        gradient: 'from-indigo-500 to-purple-600',
        bgGradient: 'from-indigo-500/5 to-purple-500/5',
        border: 'hover:border-indigo-500/50',
        text: 'group-hover:text-indigo-600'
      };
    default:
      return {
        gradient: 'from-gray-500 to-gray-600',
        bgGradient: 'from-gray-500/5 to-gray-500/5',
        border: 'hover:border-gray-500/50',
        text: 'group-hover:text-gray-600'
      };
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & <span className="bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            National rankings, technical awards, and international recognition in engineering competitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const styles = getCategoryStyle(achievement.category);
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-100 ${styles.border} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                {/* Highlight Badge */}
                {achievement.highlight && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${styles.bgGradient} rounded-2xl transition-all duration-500`}></div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${styles.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-lg font-bold text-gray-900 ${styles.text} transition-colors leading-tight`}>
                          {achievement.title}
                        </h3>
                        <span className="flex-shrink-0 ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold border border-gray-200">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {achievement.description}
                      </p>
                      
                      {/* Category Tag */}
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${styles.gradient}`}></div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${styles.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">4</div>
            <div className="text-gray-600 text-sm font-medium">National Ranks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600 text-sm font-medium">Techfest Wins</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-gray-600 text-sm font-medium">Award Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">1</div>
            <div className="text-gray-600 text-sm font-medium">International Program</div>
          </div>
        </div>
      </div>
    </section>
  );
}