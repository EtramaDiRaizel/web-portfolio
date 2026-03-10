"use client";

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrambleText from "@/components/ScrambleText";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="page-content">
            {/* HERO SECTION */}
            <section className="section section-hero" id="e-profile">
              <div className="container">
                <div className="hero-content">
                  <h1 className="hero-title">
                    <ScrambleText text="IKRAM" animateOnMount />
                  </h1>
                  <h1 className="hero-title">
                    <ScrambleText text="AFIQ" animateOnMount />
                  </h1>
                  <div className="hero-subtitle mono">
                    <p>
                      <ScrambleText text="FINAL YEAR NETWORK SECURITY STUDENT" animateOnMount />
                    </p>
                    <p>
                      <ScrambleText text="& CYBERSECURITY INTERN" animateOnMount />
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* E-PROFILE GALLERY */}
            <section className="section section-gallery">
              <div className="container">
                <div className="gallery-grid">
                  <div className="gallery-item item-1 reveal-up">
                    <div className="image-placeholder"></div>
                    <p className="gallery-caption mono">CYBERSECURITY OPS.</p>
                  </div>
                  <div className="gallery-item item-2 reveal-up">
                    <div className="image-placeholder"></div>
                    <p className="gallery-caption mono">THREAT HUNTING</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ACADEMICS */}
            <section className="section section-academics" id="academics">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="ACADEMICS" />
                </h2>

                <div className="timeline-list">
                  <div className="timeline-item reveal-up">
                    <div className="timeline-year mono">2022 — 2026</div>
                    <div className="timeline-content">
                      <h3 className="timeline-degree">BACHELOR OF COMPUTER SCIENCE (HONORS)</h3>
                      <p className="timeline-major mono">COMPUTER NETWORK SECURITY</p>
                      <p className="timeline-school">UNIVERSITI SULTAN ZAINAL ABIDIN (UNISZA)</p>
                    </div>
                  </div>
                  <div className="timeline-item reveal-up">
                    <div className="timeline-year mono">2021 — 2022</div>
                    <div className="timeline-content">
                      <h3 className="timeline-degree">FOUNDATION IN ENGINEERING</h3>
                      <p className="timeline-major mono">ENGINEERING</p>
                      <p className="timeline-school">UNIVERSITI TEKNOLOGI MARA (UITM)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CAREER & EXPERIENCE */}
            <section className="section section-experience" id="experience">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="CAREER & EXPERIENCE" />
                </h2>

                <div className="work-list">
                  <div className="work-item reveal-up">
                    <div className="work-meta mono">OCT '25 — APR '26</div>
                    <h3 className="work-company">GFIS (M) SDN. BHD.</h3>
                    <p className="work-role mono">CYBERSECURITY INTERN</p>
                    <ul className="work-details">
                      <li>Supported enterprise cybersecurity operations focusing on vulnerability management, SIEM integration.</li>
                      <li>Conducted authorized vulnerability assessments on corporate servers using Nmap, Metasploit, Hydra.</li>
                      <li>Implemented CIS Benchmarks and system hardening for Ubuntu/Windows Server using Wazuh.</li>
                      <li>Managed centralized logging and integrated VirusTotal API with Wazuh SIEM.</li>
                    </ul>
                  </div>

                  <div className="work-item reveal-up">
                    <div className="work-meta mono">JUN '21 — SEP '21</div>
                    <h1 className="work-company">ONNINE MARKETING</h1>
                    <p className="work-role mono">SALES ASSISTANT & TECHNICAL SUPPORT</p>
                    <ul className="work-details">
                      <li>Performed troubleshooting, repair, and maintenance of PCs and smartphones.</li>
                      <li>Provided technical guidance to customers on hardware and software issues.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS & TOOLS */}
            <section className="section section-skills" id="skills">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="SKILLS & TOOLS" />
                </h2>

                <div className="skills-grid">
                  <div className="skill-category reveal-up">
                    <h3>SECURITY FRAMEWORKS</h3>
                    <p className="mono">CIS BENCHMARKS, MITRE ATT&CK, ISO/IEC 27001, NIST SP 800-61.</p>
                  </div>
                  <div className="skill-category reveal-up">
                    <h3>TECHNICAL COMPETENCIES</h3>
                    <p className="mono">VULNERABILITY ASSESSMENT, PENETRATION TESTING, SIEM LOG CORRELATION, OWASP TOP 10 MITIGATION, CLOUD SECURITY (AWS, AZURE, GCP).</p>
                  </div>
                  <div className="skill-category reveal-up">
                    <h3>SYSTEMS & NETWORKING</h3>
                    <p className="mono">WINDOWS SERVER, LINUX HARDENING (UBUNTU), TCP/IP, SUBNETTING, FIREWALLS, DOCKER MANAGEMENT.</p>
                  </div>
                  <div className="skill-category reveal-up">
                    <h3>TOOLS & AUTOMATION</h3>
                    <p className="mono">WAZUH SIEM, ZABBIX, NMAP, METASPLOIT, HYDRA, WIRESHARK, PYTHON, BASH, FLASK, GIT.</p>
                  </div>
                  <div className="skill-category reveal-up">
                    <h3>REGULATORY</h3>
                    <p className="mono">ACT 854, PDPA, NACSA CNII, CAAM AVSEC.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTRIBUTIONS */}
            <section className="section section-projects" id="contributions">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="CONTRIBUTIONS" />
                </h2>

                <div className="project-list">
                  <div className="project-card reveal-up">
                    <h3>DDOS SIMULATION SCRIPT</h3>
                    <p className="mono">Developed Python scripts to simulate DDoS attacks for resilience testing and traffic analysis.</p>
                  </div>
                  <div className="project-card reveal-up">
                    <h3>WAZUH THREAT INTEL INTEGRATION</h3>
                    <p className="mono">Integrated VirusTotal API with Wazuh SIEM to automate IOC analysis and reduce response time.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* RESUME & FOOTER */}
            <section className="section section-resume" id="certificates">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="RESUME & CONTACT" />
                </h2>
                <div className="resume-content reveal-up" id="resume">
                  <p className="lead-text">FINAL-YEAR COMPUTER NETWORK SECURITY STUDENT AND CYBERSECURITY INTERN WITH HANDS-ON EXPERIENCE IN VULNERABILITY MANAGEMENT, SIEM ENGINEERING, AND SECURITY AUTOMATION.</p>

                  <div className="contact-links mono">
                    <a className="contact-link" href="mailto:ikramaafiq@gmail.com">
                      <ScrambleText text="IKRAMAAFIQ@GMAIL.COM" />
                    </a>
                    <a className="contact-link" href="tel:+60195323545">
                      <ScrambleText text="+60 19-532 3545" />
                    </a>
                    <span className="contact-link">
                      <ScrambleText text="KAJANG, SELANGOR" />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
