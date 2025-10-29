
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
            I’m an Electronics Engineer who builds systems that think and perform. I learn by doing from designing electric vehical powertrains and avionics systems to developing smart robotics and IoT hardware. I’ve led teams to national stages and gained global exposure through NASA’s educational program. For me innovation isn’t theory, it’s hands on, tested, and built to make a difference.

          </p>
        </div>
      </div>
    </section>
  );
}
