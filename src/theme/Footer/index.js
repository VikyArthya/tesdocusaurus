import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'transparent',
        padding: '2rem',
      }}
    >
      <div
        style={{
          borderTop: '1px solid #94a3b8',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#94a3b8',
          display: 'flex',
          justifyContent: 'space-between',
            alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/docs/intro" style={{ color: '#94a3b8' }}>Homepage</Link>
            <Link to="/docs/pertama/page1" style={{ color: '#94a3b8' }}>Perancangan Pertama</Link>
            <Link to="/docs/Tutorial Ketiga/halo" style={{ color: '#94a3b8' }}>Test</Link> 
        </div>
        <div>
            <div >
                <a href='https://github.com/'> <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style={{ width: '20px', marginRight: '10px' }} /> </a>
                <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" style={{ width: '20px', marginRight: '10px' }} />
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" style={{ width: '20px', marginRight: '10px' }} />
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" style={{ width: '20px', marginRight: '10px' }} />
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" style={{ width: '20px', marginRight: '10px' }} />
            </div>

        </div>
      </div>
    </footer>
  );
}
