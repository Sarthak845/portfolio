export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            I'm an Electronics & Communication Engineer who builds systems that think and perform. My work spans embedded systems, PCB and hardware development, EV powertrains, power electronics, avionics, robotics, IoT, and semiconductor technology. I learn by doing- designing, testing, and iterating on real hardware until it works. Through national engineering competitions and team based projects, I've gained hands on experience turning concepts into functional systems. For me, engineering isn't just theory, it's about building things that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
