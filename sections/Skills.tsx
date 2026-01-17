
const Skills: React.FC = () => {
    const skills = {
      "Frontend Core": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript"
  ],
  "UI & Styling": [
    "Tailwind CSS",
    "CSS3",
    "Ant Design",
    "Material UI",
    "Bootstrap"
  ],

  "State & Data Management": [
    "Redux",
    "React Query",
    "Zustand",
    "Context API",
    "REST APIs"
  ],

  "Real-Time & Performance": [
    "WebSockets",
    "Client-side Caching",
    "Lazy Loading",
    "Code Splitting",
    "Memoization"
  ],

  "Architecture & Systems": [
    "Component Architecture",
    "Reusable Component Libraries",
    "Scalable Frontend Systems"
  ],

  "Tooling": [
    "Git",
    "Webpack",
    "Vite",
    "CI/CD"
  ],

  "Backend (Working Knowledge)": [
    "Node.js",
    "REST APIs"
  ]
};


    return (
        <section className="py-20 px-6" style={{ backgroundColor: '#FCFCFC' }} id="skills">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-5xl font-bold mb-16 text-center" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
                    Technical <span style={{ color: '#C6A667' }}>Skills</span>
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                      <div 
                        key={category} 
                        className="p-6 rounded-xl transition-all hover:shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                      >
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif' }}>
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-default"
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

export default Skills;