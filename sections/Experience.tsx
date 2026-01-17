import {  ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

const Experience: React.FC = () => {
     const experiences = [
  {
    company: "Sunday Labs (Pidge.in)",
    role: "Frontend Software Engineer (SDE-II)",
    period: "May 2025 - Nov 2025",
    duration: "7 months",
    location: "Gurugram, Haryana, India · Hybrid",
    type: "Full-time",
    highlights: [
      <Fragment>
        <strong>Owned and scaled</strong> core frontend features using <strong>React</strong> in a <strong>product-scale application</strong>
      </Fragment>,
      <Fragment>
        <strong>Designed and implemented</strong> a <strong>custom, reusable component library</strong>, improving <strong>UI consistency</strong> and reducing development effort
      </Fragment>,
      <Fragment>
        Refactored <strong>complex table modules</strong> with <strong>generic column structures</strong> and <strong>caching</strong>
      </Fragment>,
      <Fragment>
        Refactored <strong>data-heavy table modules</strong> using <strong>generic column abstractions</strong> and <strong>client-side caching</strong> to improve <strong>rendering performance</strong>
      </Fragment>,
      <Fragment>
        Built a <strong>shared, reusable filtering system</strong> leveraged across <strong>multiple high-traffic data views</strong>, improving <strong>maintainability</strong> and <strong>performance</strong>
      </Fragment>
    ],
    skills: ["React", "Component Architecture", "Performance Optimization"]
  },

  {
    company: "Loffre.ma",
    role: "Senior Frontend Developer",
    period: "Jan 2025 - April 2025",
    duration: "5 months",
    location: "India · Remote",
    type: "Contract",
    highlights: [
      <Fragment>
        <strong>Took ownership</strong> of a partially built product and <strong>restructured the frontend architecture</strong> for <strong>stable, scalable delivery</strong>
      </Fragment>,
      <Fragment>
        Implemented <strong>robust theme management</strong>, <strong>global error handling</strong>, and <strong>consistent UX patterns</strong>
      </Fragment>,
      <Fragment>
        Built and shipped <strong>core user flows</strong> including <strong>authentication</strong>, <strong>chat</strong>, <strong>notifications</strong>, job listings, and product-selling features
      </Fragment>,
      <Fragment>
        <strong>Optimized search and listing performance</strong> using <strong>client-side caching</strong>, reducing response times by <strong>~50%</strong>
      </Fragment>,
      <Fragment>
        Integrated <strong>subscription workflows</strong> and <strong>payment gateways</strong> for <strong>B2B use cases</strong>
      </Fragment>
    ],
    skills: ["React", "Next.js", "Frontend Architecture", "Payment Integration"]
  },

  {
    company: "114 AI, Inc",
    role: "Senior Front End Consultant",
    period: "Nov 2024 - Mar 2025",
    duration: "5 mos",
    location: "India · Remote",
    type: "Part-time",
    highlights: [
      <Fragment>
        Provided <strong>consultative support</strong> on <strong>critical frontend features</strong>
      </Fragment>,
      <Fragment>
        Implemented <strong>custom socket architecture</strong> for <strong>real-time features</strong>
      </Fragment>,
      <Fragment>
        Contributed to <strong>notification system development</strong>
      </Fragment>
    ],
    skills: ["React", "WebSockets", "Consulting"]
  },

  {
    company: "114 AI, Inc",
    role: "Frontend Developer",
    period: "Jan 2022 - Oct 2024",
    duration: "2 yrs 10 months",
    location: "Bengaluru, Karnataka, India · On-site",
    type: "Full-time",
    highlights: [
      <Fragment>
        Built and maintained <strong>data-intensive frontend applications</strong> handling <strong>20K+ live data points</strong>
      </Fragment>,
      <Fragment>
        Developed <strong>real-time tracking interfaces</strong> using <strong>WebSockets</strong> with <strong>optimized rendering</strong>
      </Fragment>,
      <Fragment>
        Designed <strong>scalable frontend architecture</strong> supporting <strong>modular feature development</strong>
      </Fragment>,
      <Fragment>
        Implemented <strong>client-side caching strategies</strong> using <strong>UUID-based keys</strong> to reduce redundant data fetching
      </Fragment>,
      <Fragment>
        Collaborated with <strong>backend and product teams</strong> to deliver <strong>secure, high-performance UI solutions</strong>
      </Fragment>
    ],
    skills: ["React", "Real-Time UI", "WebSockets", "Frontend Architecture", "Performance Optimization"]
  },

  {
    company: "Sahi Saathi Matrimony",
    role: "Front End Developer",
    period: "Aug 2024 - Oct 2024",
    duration: "3 mos",
    location: "Bengaluru, Karnataka, India · Remote",
    type: "Part-time",
    highlights: [
      <Fragment>
        Built <strong>authentication flows</strong> and <strong>multi-step profile creation</strong> with strong validation and UX consistency
      </Fragment>,
      <Fragment>
        Implemented <strong>advanced search</strong>, <strong>dynamic filtering</strong>, and <strong>matchmaking interfaces</strong>
      </Fragment>,
      <Fragment>
        Developed an <strong>admin dashboard</strong> with <strong>role-based access control</strong>
      </Fragment>,
      <Fragment>
        Integrated <strong>subscription-based premium features</strong>, handling <strong>gated UI states</strong> and user entitlements
      </Fragment>
    ],
    skills: ["React", "Form State Management", "Dynamic Filtering", "Role-Based UI"]
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