import React from 'react';
import {Mail} from 'lucide-react';

const CTA: React.FC = () => {
    return (
         <section className="py-20 px-6" style={{ backgroundColor: '#EDEDED' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#1B1B1C', fontFamily: 'Inter, sans-serif' }}>
            Let's Build Something <span style={{ color: '#C6A667' }}>Amazing</span>
          </h2>
          <p className="text-xl mb-10" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-10 py-4 rounded-lg font-medium text-lg transition-all hover:shadow-lg flex items-center gap-2"
              style={{ 
                backgroundColor: '#C6A667',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500
              }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    );
};

export default CTA;