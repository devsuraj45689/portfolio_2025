import { ChevronRight } from 'lucide-react';
import CardImage  from '../components/CardImage';
import Link from 'next/link';
import { Fragment } from 'react';

const Projects: React.FC = () => {
     const projects = [
        {
          title: "E-commerce Platform",
          description: () => <Fragment>High-scale marketplace with <b>subscription flows, payment integration, and location-based search</b>, optimized to <b>reduce search latency by ~50%</b> through client-side caching and efficient filtering</Fragment>,
          images:['/loffre-project-home.png','/loffre-project-chat.png'],
          tech: ["Next.js", "React.js", "Payment Gateway", "REST API"],
          link: "https://loffre.ma"
        },
         {
          title: "Real-time Chat System",
          description: () => <Fragment>Frontend-heavy real-time messaging interface with <b>live updates, notifications, and presence indicators</b>, designed for low-latency UX and reliable state synchronization.</Fragment>,
          images:['/chat-ui.png','/loffre-project-chat.png'],
          tech: ["React","WebSockets", "Real-Time State Management"],
          link: "https://loffre.ma/fr/chat?type=product"
        },
        {
          title: "Satellite Tracking System",
          description: () => <Fragment>Data-intensive frontend application handling <b>20K+ live data points</b>, featuring real-time updates, optimized rendering, and background workers for smooth visualization at scale.</Fragment>,
          images:["https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"],
          tech: ["React", "WebSockets", "Web Workers", "Performance Optimization"],
          link: "#"
        },
        {
          title: "Matrimony Platform",
          description: () => <Fragment>Feature-rich matchmaking platform with <b>advanced search, dynamic filtering, and multi-step onboarding flows</b>, designed to handle <b>complex user journeys and role-based access</b> with a strong focus on UX consistency and performance.</Fragment>,
          images:['/sahi-saathi-homepage.png','/sahi-saathi-scondary.png'],
          tech: ["React", "Tailwind CSS", "Form State Management","Dynamic Filtering"],
          link: "https://www.sahisaathimatrimony.com/"
        },
        {
          title: "Component Library",
          description: () => <Fragment>Scalable <b>React component library</b> designed for reuse across multiple products, improving UI consistency and reducing development time.</Fragment>,
          images:["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"],
          tech: ["React", "TypeScript", "Storybook"],
          link: "#"
        },
        {
          title: "Admin Dashboard",
          description: () => <Fragment>Role-based admin interface with <b>complex data tables, caching, and interactive visualizations</b>, built to handle high-volume datasets efficiently.</Fragment>,
          images:['/admin-page.png'],
          tech: ["React", "Redux", "Data Visualization", "Performance Optimization"],
          link: "#"
        }
      ];
    

    return (
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }} id="projects">
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
                <CardImage images={project.images} title={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                    {project.description()}
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
                  <Link 
                    href={project.link}
                    target='_blank'
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif' }}
                  >
                    View Project <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;