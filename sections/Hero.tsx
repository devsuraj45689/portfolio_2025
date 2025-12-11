import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import Image from 'next/image';
const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: '#EDEDED' }}>
                <span className="text-sm font-medium" style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif' }}>
                  Available for opportunities
                </span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                Hi, I'm <span style={{ color: '#C6A667' }}>Suraj Sharma</span>
              </h1>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                Full Stack Developer
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                Specializing in React.js, Next.js, Nodejs and scalable frontend architectures. 
                Passionate about building performant, user-centric applications with modern web technologies.
              </p>
              <div className="flex gap-4">
                <button 
                  className="px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
                  style={{ 
                    backgroundColor: '#C6A667', 
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  View Work
                </button>
                <button 
                  className="px-8 py-3 rounded-lg font-medium transition-all hover:shadow-md"
                  style={{ 
                    border: '2px solid #EDEDED',
                    color: '#1B1B1C',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Contact Me
                </button>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="p-3 rounded-lg transition-colors" style={{ backgroundColor: '#EDEDED' }}>
                  <Github className="w-5 h-5" style={{ color: '#666666' }} />
                </a>
                <a href="#" className="p-3 rounded-lg transition-colors" style={{ backgroundColor: '#EDEDED' }}>
                  <Linkedin className="w-5 h-5" style={{ color: '#666666' }} />
                </a>
                <a href="#" className="p-3 rounded-lg transition-colors" style={{ backgroundColor: '#EDEDED' }}>
                  <Mail className="w-5 h-5" style={{ color: '#666666' }} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-10" style={{ backgroundColor: '#C6A667' }}></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <Image 
                  src='/mypi.jpeg' 
                  alt="Your Name - Senior Frontend Developer"
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)' }}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Code2 className="w-6 h-6" style={{ color: '#C6A667' }} />
                      <div>
                        <div className="text-3xl font-bold" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>4+</div>
                        <div className="text-xs" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;