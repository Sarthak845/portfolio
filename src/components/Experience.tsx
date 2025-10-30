import { GraduationCap, Trophy, Users, Cpu, Battery, Zap, Award, Calendar, Crown, Rocket, TrendingUp } from 'lucide-react';

const experiences = [
  {
    type: 'leadership',
    icon: Crown,
    title: 'Vice Captain',
    organization: 'Team Pro-Karters, MIT-WPU',
    period: '2024 – 2025',
    description: 'Oversaw complete technical and management operations spanning electrical, mechanical, and design divisions. Served as racing driver and mentor for junior engineers.',
    highlights: [
      'AIR 2 - Morphine Motorsports 2025',
      'AIR 6 - Formula Kart Design Challenge',
      'AIR 1 - Design Presentation (FKDC)',
      'AIR 2 - Skidpad (FKDC)',
      'Team Leadership & Driver'
    ],
    achievements: [
      { icon: Trophy, text: 'Multiple Podium Finishes' },
      { icon: Users, text: 'Racing Driver' },
      { icon: Award, text: 'National Level Recognition' }
    ]
  },
  {
    type: 'technical',
    icon: Rocket,
    title: 'Electronics & Powertrain Lead',
    organization: 'Team Pro-Karters, MIT-WPU',
    period: '2023 – 2024',
    description: 'Led electronics and powertrain design for all-electric go-kart, focusing on BLDC motor control, energy optimization, and telemetry systems.',
    highlights: [
      'AIR 5 - Indian Karting Race 2024',
      'Best Powertrain Award',
      'Innovation Award',
      'Electrical System Officer (ESO)',
      
    ],
    achievements: [
      { icon: Battery, text: 'EV Dashboard Design' },
      { icon: Zap, text: 'Motor Tuning Algorithms' },
      { icon: Award, text: 'National Awards' }
    ]
  },
  {
    type: 'technical',
    icon: TrendingUp,
    title: 'Junior Electronics & Powertrain Engineer',
    organization: 'Team Pro-Karters, MIT-WPU',
    period: '2022 – 2023',
    description: 'Assisted in battery pack design, electrical layout, and manufacturing for first-generation electric kart. Gained hands-on vehicle assembly experience.',
    highlights: [
      'AIR 7 - Go-Kart Design Challenge',
      'Battery Pack Design',
      'Electrical System Layout',
      'Vehicle Assembly'
    ],
    achievements: [
      { icon: Battery, text: 'Battery Systems' },
      { icon: Zap, text: 'Electrical Layout' },
      { icon: Trophy, text: 'National Debut' }
    ]
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Trainee - VLSI & Semiconductor Systems',
    organization: 'IIT Jodhpur (National Technical Tour)',
    period: '2024',
    description: '10-day intensive hands-on training in chip design and semiconductor systems using industry-standard EDA tools.',
    highlights: [
      'VLSI Design Principles',
      'Altium Designer',
      'Proteus & KiCad',
      'Circuit Simulation'
    ],
    achievements: [
      { icon: Cpu, text: 'Chip Design' },
      { icon: Award, text: 'IIT Certification' },
      { icon: Zap, text: 'EDA Tools' }
    ]
  },
  {
    type: 'competitions',
    icon: Trophy,
    title: 'Technical & Competitive Exposure',
    organization: 'National Level Competitions',
    period: '2022 – Present',
    description: 'Active participation in hackathons, ideathons, robowars, roboraces, and circuit design challenges across India.',
    highlights: [
      'Multiple Hackathons',
      'Robowars & Roboraces',
      'Circuit Design Challenges',
      'Interdisciplinary Collaboration'
    ],
    achievements: [
      { icon: Users, text: 'Team Collaboration' },
      { icon: Award, text: 'Problem Solving' },
      { icon: Zap, text: 'Technical Presentations' }
    ]
  }
];

const ExperienceCard = ({ exp }: { exp: any; index: number }) => {
  const Icon = exp.icon;
  
  // Static gradient classes based on type
  const getStyles = (type: string) => {
    switch (type) {
      case 'leadership':
        return {
          gradient: 'from-purple-500 to-pink-600',
          borderColor: 'hover:border-purple-500/50',
          textColor: 'group-hover:text-purple-600',
          bgHover: 'group-hover:from-purple-500/5 group-hover:to-pink-500/5'
        };
      case 'technical':
        return {
          gradient: 'from-cyan-500 to-blue-600',
          borderColor: 'hover:border-cyan-500/50',
          textColor: 'group-hover:text-cyan-600',
          bgHover: 'group-hover:from-cyan-500/5 group-hover:to-blue-500/5'
        };
      case 'education':
        return {
          gradient: 'from-green-500 to-emerald-600',
          borderColor: 'hover:border-green-500/50',
          textColor: 'group-hover:text-green-600',
          bgHover: 'group-hover:from-green-500/5 group-hover:to-emerald-500/5'
        };
      case 'competitions':
        return {
          gradient: 'from-amber-500 to-orange-600',
          borderColor: 'hover:border-amber-500/50',
          textColor: 'group-hover:text-amber-600',
          bgHover: 'group-hover:from-amber-500/5 group-hover:to-orange-500/5'
        };
      default:
        return {
          gradient: 'from-cyan-500 to-amber-600',
          borderColor: 'hover:border-cyan-500/50',
          textColor: 'group-hover:text-cyan-600',
          bgHover: 'group-hover:from-cyan-500/5 group-hover:to-amber-500/5'
        };
    }
  };

  const styles = getStyles(exp.type);

  return (
    <div
      className={`group relative bg-white rounded-2xl p-8 border-2 border-gray-100 ${styles.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}
    >
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${styles.bgHover} rounded-2xl transition-all duration-500`}></div>

      <div className="relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${styles.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className={`text-2xl font-bold text-gray-900 ${styles.textColor} transition-colors mb-2`}>
                {exp.title}
              </h3>
              <p className="text-xl text-gray-700 font-semibold mb-1">{exp.organization}</p>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${styles.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}>
              <Award className="w-4 h-4" />
              {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 border-l-4 border-gray-200 pl-4">
          {exp.description}
        </p>

        {/* Highlights & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Highlights */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Key Highlights
            </h4>
            <div className="space-y-2">
              {exp.highlights.map((highlight: string, hIndex: number) => (
                <div
                  key={hIndex}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${styles.gradient} rounded-full`}></div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Core Competencies
            </h4>
            <div className="space-y-2">
              {exp.achievements.map((achievement: any, aIndex: number) => {
                const AchievementIcon = achievement.icon;
                return (
                  <div
                    key={aIndex}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${styles.gradient} rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300`}>
                      <AchievementIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${styles.gradient} transition-all duration-1000 ease-out`}
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r ${styles.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            From technical innovation to team leadership - building excellence in electric vehicle systems and embedded technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">4+</div>
            <div className="text-gray-600">National Ranks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Leadership Roles</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Engineers Mentored</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Competitions & Events</div>
          </div>
        </div>
      </div>
    </section>
  );
}