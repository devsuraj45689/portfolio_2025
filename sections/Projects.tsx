import { Github, Linkedin, Mail, Code2, Briefcase, Award, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
     const projects = [
        {
          title: "Satellite Tracking System",
          description: "Advanced satellite tracking platform handling 20K+ data points with real-time WebSocket updates, video streaming, and classified data querying system.",
          image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
          tech: ["React.js", "WebSocket", "Node.js", "Python"],
          link: "#"
        },
        {
          title: "E-commerce Platform",
          description: "Full-featured marketplace with subscription models, payment gateway integration, and location-based filtering reducing search times by 50%.",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          tech: ["Next.js", "React.js", "Payment Gateway", "REST API"],
          link: "#"
        },
        {
          title: "Matrimony Platform",
          description: "Comprehensive matchmaking platform with advanced search, 70+ API integrations, role-based admin panel, and subscription features.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
          tech: ["React.js", "Tailwind CSS", "Multi-step Forms"],
          link: "#"
        },
        {
          title: "Component Library",
          description: "Custom component library built for scalability, enabling consistent UI and efficient code reuse across multiple applications.",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
          tech: ["React.js", "TypeScript", "Storybook"],
          link: "#"
        },
        {
          title: "Real-time Chat System",
          description: "Socket-based real-time communication system with notifications, presence indicators, and message persistence.",
          image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
          tech: ["React.js", "WebSocket", "Node.js"],
          link: "#"
        },
        {
          title: "Admin Dashboard",
          description: "Comprehensive admin panel with role-based access control, data visualization, and complex table management with caching.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          tech: ["React.js", "Redux", "Charts", "Performance"],
          link: "#"
        }
      ];
    

    return (
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
            Featured <span style={{ color: '#C6A667' }}>Projects</span>
          </h2>
          <p className="text-center mb-16 text-lg" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
            A selection of projects showcasing my expertise in frontend development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group rounded-xl overflow-hidden transition-all hover:shadow-2xl"
                style={{ backgroundColor: '#FCFCFC', border: '1px solid #EDEDED' }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: '#EDEDED',
                          color: '#666666',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif' }}
                  >
                    View Project <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;