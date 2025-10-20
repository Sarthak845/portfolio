import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Open to opportunities in EV systems, avionics, and embedded technologies
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:sarthakroff@gmail.com"
            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>

            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">Email</h3>
              <p className="text-gray-600 text-sm break-all">sarthakroff@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sarthak-rahate-b450a9253/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>

            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Linkedin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </div>
          </a>

          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>

            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">Location</h3>
              <p className="text-gray-600 text-sm">Pune, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
