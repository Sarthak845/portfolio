import { GraduationCap, Trophy, Users, Cpu, Battery, Zap, Award, Calendar, Crown, Rocket, TrendingUp, Briefcase, CircuitBoard, Bot } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    icon: Bot,
    title: 'Actuator & Dexterity Intern',
    organization: 'Medh IQ Dynamics',
    period: 'September 2026 – Present',
    description: 'Working on an industrial humanoid robot, focusing on actuator selection, motor selection, and dexterity for the shoulder joints. Responsible for load and torque calculations to support a payload capacity of approximately 5.5 kg.',
    highlights: [
      'Motor & Actuator Selection',
      'Load & Torque Calculations',
      'Shoulder Joint Development',
      'MATLAB/Simulink, Robot Kinematics'
    ],
    achievements: [
      { icon: Zap, text: 'Actuator Selection' },
      { icon: Cpu, text: 'Physics-Based Calculations' },
      { icon: Users, text: 'Robot Dynamics' }
    ]
  },
  {
    type: 'internship',
    icon: CircuitBoard,
    title: 'Electronics Intern',
    organization: 'WL Dynamics LLP',
    period: 'February 2026 – August 2026',
    description: 'Designed and developed a 6000-lux LED module for a defense-grade UAV application. Took the PCB through the complete hardware development cycle, from design to deployment.',
    highlights: [
      'PCB Design (KiCad)',
      'PCB Manufacturing & Assembly',
      'Hardware Implementation & Testing',
      'Deployed on Defense Grade UAV',
      '6000 Lux Illumination Module'
    ],
    achievements: [
      { icon: Cpu, text: 'PCB Design (KiCad)' },
      { icon: Award, text: 'Hardware Deployment' },
      { icon: Rocket, text: 'Avionics & Drone Electronics' }
    ]
  },
  {
    type: 'Formula student & leadership',
    icon: Crown,
    title: 'Engineering & Leadership',
    organization: 'Team Pro-Karters, MIT-WPU',
    period: '2022 – 2026',
    description: 'Four-year journey from Junior Engineer to Vice Captain & Driver. Led EV powertrain, battery systems, and vehicle electronics development. Managed teams, mentored junior engineers, and represented the team in national competitions.',
    progression: [
      { role: 'Electronics & Powertrain Junior', period: '2022–2023' },
      { role: 'Electronics & Powertrain Lead', period: '2023–2024' },
      { role: 'Vice Captain & Driver', period: '2024–2026' }
    ],
    highlights: [
      'AIR 7 - Go-Kart Design Challenge 2023',
      'AIR 5 - Indian Karting Race 2024',
      'AIR 1 - Design Presentation (FKDC)',
      'AIR 2 - Skidpad (FKDC)',
      'AIR 6 - Formula Kart Design Challenge',
      'AIR 2 - Morphine Motorsports 2025',
      'Best Powertrain Award',
      'Innovation Award'
    ],
    achievements: [
      { icon: Battery, text: '6kW PMSM + 72V, 72Ah System' },
      { icon: Zap, text: '6kW BLDC + 72V, 90Ah System' },
      { icon: Users, text: 'Team Leadership & Mentoring' }
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
  
  const getStyles = (type: string) => {
    switch (type) {
      case 'leadership':
        return {
          gradient: 'from-purple-500 to-pink-600',
          borderColor: 'hover:border-purple-500/50',
          textColor: 'group-hover:text-purple-600',
          bgHover: 'group-hover:from-purple-500/5 group-hover:to-pink-500/5'
        };
      case 'internship':
        return {
          gradient: 'from-emerald-500 to-teal-600',
          borderColor: 'hover:border-emerald-500/50',
          textColor: 'group-hover:text-emerald-600',
          bgHover: 'group-hover:from-emerald-500/5 group-hover:to-teal-500/5'
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
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${styles.bgHover} rounded-2xl transition-all duration-500`}></div>

      <div className="relative">
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
              {exp.type === 'internship' ? 'Internship' : exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
            </span>
          </div>
        </div>

        {/* Progression for Pro-Karters */}
        {exp.progression && (
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              Career Progression
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {exp.progression.map((step: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${styles.gradient} rounded-full`}></div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{step.role}</p>
                      <p className="text-gray-500 text-xs">{step.period}</p>
                    </div>
                  </div>
                  {idx < exp.progression.length - 1 && (
                    <span className="text-purple-400 text-lg hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-gray-700 text-lg leading-relaxed mb-6 border-l-4 border-gray-200 pl-4">
          {exp.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${styles.gradient} transition-all duration-1000 ease-out`}
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      </div>

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
            From hands-on engineering to technical leadership — building, testing, and developing real-world electronic systems across multiple domains.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

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