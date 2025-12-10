
interface FooterProps {
    // Add your props here
}

export const Footer: React.FC<FooterProps> = ({ }) => {
    return (
       <footer className="py-8 px-6" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #EDEDED' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
          <p>© 2025 Portfolio. Built with Next.js & React.</p>
        </div>
      </footer>
    );
};

export default Footer;