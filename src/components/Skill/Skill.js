import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
      const texts = [
        'Wireshark',
        'Cisco Packet Tracer',
        'Nmap',
        'Burp Suite',
        'BGP & NFS Exploits',
        'Malware Analysis',
        'Social Engineering Toolkit',
        'Cryptographic Tools',
        'SQL INjection',
        'Java',
        'Python',
        'C/C++',
        'Linux',
        'GIT',
        'HTML',
        'CSS',
        'Javascript',
        'React js',
        'Webpack',
        'Node.js',
        'SQL',
        'LT Spice',
        'Multisim',
        'AWS',
        'Word',
        'Powerpoint',
        'Excel',
        'R',
        'Power BI'
      ];


      // Decrasing 'radius' value for small screen devices  
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 350;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Programming Languages</h4>
                  <ul>
                    <li>
                      <span>Java</span>
                    </li>
                    <li>
                      <span>C/C++</span>
                    </li>
                    <li>
                      <span>Linux Shell</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Data Analytics</h4>
                  <ul>
                    <li>
                      <span>SQL</span>
                    </li>
                    <li>
                      <span> R</span>
                    </li>
                    <li>
                      <span>Python</span>
                    </li>
                    <li>
                      <span>Power BI</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Cybersecurity</h4>
                  <ul>
                    <li>
                      <span>Wireshark</span>
                    </li>
                    <li>
                      <span> Cisco Packet Tracer</span>
                    </li>
                    <li>
                      <span>Nmap</span>
                    </li>
                    <li>
                      <span>Burp Suite</span>
                    </li>
                    <li>
                      <span>BGP & NFS Exploits</span>
                    </li>
                    <li>
                      <span>Malware Analysis</span>
                    </li>
                    <li>
                      <span>Social Engineering Toolkit</span>
                    </li>
                    <li>
                      <span>Cryptographic Tools</span>
                    </li>
                    <li>
                      <span>SQL Injection</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Web - Development</h4>
                  <ul>
                    <li>
                      <span>HTML</span>
                    </li>
                    <li>
                      <span>CSS</span>
                    </li>
                    <li>
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <span>React js</span>
                    </li>
                    <li>
                      <span>Webpack</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Office Tools</h4>
                  <ul>
                    <li>
                      <span>Word</span>
                    </li>
                    <li>
                      <span>Powerpoint</span>
                    </li>
                    <li>
                      <span>Excel</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Cloud Tools</h4>
                  <ul>
                    <li>
                      <span>AWS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
