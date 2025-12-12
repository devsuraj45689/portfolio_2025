
const Skills: React.FC = () => {
    const skills = {
    "Frontend": ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript"],
    "Styling": ["Tailwind CSS", "CSS3", "Styled Components",'Bootstrap','Ant Design','Material UI'],
    "State & Data": ["Redux", "Context API", "REST APIs", "WebSocket",'Socket Io'],
    "Backend": ["Node.js", "Python", "Express",'MongoDb','SQL'],
    "Tools": ["Git", "Docker", "Webpack", "Performance Optimization",'CI/CD'],
    "Architecture": ["Component Libraries", "Micro-frontends", "Scalable Systems"]
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