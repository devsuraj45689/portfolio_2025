import {  ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
     const experiences = [
    {
      company: "Sunday Labs (Pidge.in)",
      role: "Front End SDE-2",
      period: "May 2025 - Present",
      duration: "8 mos",
      location: "Gurugram, Haryana, India · Hybrid",
      type: "Full-time",
      highlights: [
        "Scaled existing features and developed new functionalities in React.js and React Native",
        "Built a custom component library for consistent UI and efficient reuse",
        "Refactored complex table modules with generic column structures and caching",
        "Developed cached, reusable filtering system across multiple tables"
      ],
      skills: ["React.js", "React Native", "Component Architecture", "Performance Optimization"]
    },
    {
      company: "Loffre.ma",
      role: "Senior Frontend Developer",
      period: "Jan 2025 - May 2025",
      duration: "5 mos",
      location: "India · Remote",
      type: "Full-time",
      highlights: [
        "Led codebase refactoring and integration of scalable architecture",
        "Implemented robust theme management and error-handling mechanisms",
        "Developed auth, chat, notification, job, and product-selling flows",
        "Reduced search response times by 50% through caching mechanisms",
        "Integrated subscription models and payment gateway"
      ],
      skills: ["React.js", "Next.js", "Architecture Design", "Payment Integration"]
    },
    {
      company: "114 AI, Inc",
      role: "Senior Front End Consultant",
      period: "Nov 2024 - Mar 2025",
      duration: "5 mos",
      location: "India · Remote",
      type: "Part-time",
      highlights: [
        "Provided support to development team on critical features",
        "Implemented custom socket architecture for real-time features",
        "Contributed to notifications module development"
      ],
      skills: ["React.js", "WebSocket", "Git", "Consulting"]
    },
    {
      company: "114 AI, Inc",
      role: "Frontend Developer",
      period: "Jan 2022 - Oct 2024",
      duration: "2 yrs 10 mos",
      location: "Bengaluru, Karnataka, India · On-site",
      type: "Full-time",
      highlights: [
        "Handled large datasets for satellite tracking project with 20K+ data points",
        "Designed scalable front-end architecture using Git submodules",
        "Developed real-time tracking features with WebSockets",
        "Built advanced querying system for classified data",
        "Created UUID-based caching mechanisms for dynamic queries",
        "Enabled video and image streaming using Node.js",
        "Wrote Python scripts for data transformation and web scraping"
      ],
      skills: ["React.js", "Next.js", "WebSocket", "Node.js", "Python", "Data Visualization"]
    },
    {
      company: "Sahi Saathi Matrimony",
      role: "Front End Developer",
      period: "Aug 2024 - Oct 2024",
      duration: "3 mos",
      location: "Bengaluru, Karnataka, India · Remote",
      type: "Part-time",
      highlights: [
        "Developed robust authentication and multi-step profile creation",
        "Implemented advanced search, filtering, and matchmaking features",
        "Built admin panel with role-based access control",
        "Integrated 70+ APIs across the platform",
        "Implemented subscription-based premium features"
      ],
      skills: ["React.js", "Tailwind CSS", "API Integration"]
    }
  ];
    return (
       <section className="py-20 px-6" style={{ backgroundColor: '#EDEDED' }} id="experience">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
            Professional <span style={{ color: '#C6A667' }}>Experience</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-xl transition-all hover:shadow-xl"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif' }}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-2" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                      <span className="font-semibold">{exp.company}</span>
                      <span style={{ color: '#666666' }}>•</span>
                      <span className="text-sm" style={{ color: '#666666' }}>{exp.type}</span>
                    </div>
                    <div className="text-sm mb-1" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                      {exp.period} · {exp.duration}
                    </div>
                    <div className="text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                      {exp.location}
                    </div>
                  </div>
                  <ChevronRight className="transition-transform group-hover:translate-x-1" style={{ color: '#C6A667' }} />
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                      <span style={{ color: '#C6A667', marginTop: '6px' }}>▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: '#EDEDED',
                        color: '#666666',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Experience;