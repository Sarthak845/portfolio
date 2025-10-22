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
            I am an Electronics Engineer specializing in system-level design and integration for next-generation technology. My core competency is transforming concepts into functional hardware, with hands-on expertise in electric vehicle systems, drone avionics, and embedded communication. I combine this technical skill with leadership honed in national contests and the unique experience of contributing to research at an international level with NASA.


          </p>
        </div>
      </div>
    </section>
  );
}
