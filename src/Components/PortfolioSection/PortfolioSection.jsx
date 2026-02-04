import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Technical History</h2>
          <p className="section-subtitle">My professional journey and coding milestones.</p>
        </div>

        <div className="portfolio-grid">
          
          {/* LEFT COLUMN: Experience */}
          <div className="experience-column">
            <h3 style={{ color: 'var(--text-main);', marginBottom: '1.5rem', display:'flex', alignItems:'center', gap:'10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Experience
            </h3>

            {/* Experience Card: Technical Club */}
            <div className="tech-card">
              <span className="role-badge">Full Stack Developer</span>
              <h4 className="card-title"> College Technical Club</h4>
              <p className="card-desc">
                Spearheaded the development of the official club portal. Improved event registration workflows, and collaborated with cross-functional teams to organize technical events.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Certifications & Profiles */}
          <div className="certs-column">
            <h3 style={{ color: 'var(--text-main);', marginBottom: '1.5rem', display:'flex', alignItems:'center', gap:'10px' }}>
              {/* Award Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              Certifications & Profiles
            </h3>

            {/* LeetCode Special Card */}
            <a href="https://leetcode.com/u/Kritikam11/" target="_blank" rel="noreferrer" className="tech-card leetcode-card">
              <div className="leetcode-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div>
                <h4 className="card-title" style={{ color : "white", marginTop:0}}>LeetCode Profile</h4>
                <p className="card-desc" style={{ textDecoration : "none", marginBottom:0, color : "white"}}>Solved 400+ Problems  <br />Focused on Time & Space Complexity</p>
              </div>
            </a>

            {/* Certificate 1: Coursera (NEW based on your image) */}
            <div className="tech-card">
              <div className="card-header-flex">
                <h4 className="card-title" style={{margin:0}}>Data Structures & Backend with Java</h4>
                <a href='https://drive.google.com/file/d/1OmTBZDd4IfZBpsylH7yLrXqn9GutjXKT/view' className="provider-tag">Coursera</a>
              </div>
              <p className="card-desc">
                Implemented efficient backend algorithms and data structures, focusing on performance optimization.
              </p>
            </div>

            {/* Certificate 2: MERN */}
            <div className="tech-card">
              <div className="card-header-flex">
                <h4 className="card-title" style={{margin:0}}>MERN Stack Web Development</h4>
                <a href='https://drive.google.com/file/d/1PhhbKcKOURPHJNbmJHvk7vwaDLi0DXyB/view' className="provider-tag">Udemy</a>
              </div>
              <p className="card-desc">
                Built scalable full-stack apps with React.js, Node.js, and MongoDB. Mastered REST APIs and Git workflows.
              </p>
            </div>

            {/* Certificate 3: DSA Java */}
            <div className="tech-card">
              <div className="card-header-flex">
                <h4 className="card-title" style={{margin:0}}>DSA in Java Programming</h4>
                <a href='https://drive.google.com/file/d/1lgjFR1YID_RgZUThwniFvF3DGdZUxopI/view' className="provider-tag">Apna College</a>
              </div>
              <p className="card-desc">
                Mastered Core Java, OOPs, and problem-solving patterns.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;