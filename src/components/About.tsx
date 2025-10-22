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
            Electronics & Communication Engineering undergraduate with expertise in electric vehicle systems,
            avionics, drones, and VLSI. Experienced in hands on embedded system design, real-time communication,
            and system integration. Strong leadership background through national competitions and international
            research exposure at NASA. Passionate about building intelligent systems that bridge hardware and
            software to solve real world challenges in mobility, autonomy, and advanced electronics.
          </p>
        </div>
      </div>
    </section>
  );
}
