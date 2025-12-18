import { useState, useEffect } from 'react';
import MainLayout from "../layouts/MainLayout";

function Card({ title, text, icon }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Landing() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <div className="landing">
        <style>{`
          .landing {
            font-family: system-ui, -apple-system, sans-serif;
            color: #1f2937;
            background: #f8fafc;
          }

          /* ================= HERO ================= */
          .landing-hero {
            height: 100vh;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
          }

          .hero-title {
            margin: 0;
          }

          .buildcorp {
            font-size: clamp(5rem, 15vw, 12rem);
            font-weight: 900;
            background: linear-gradient(135deg, #60a5fa, #93c5fd, #dbeafe, #60a5fa);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 4s ease infinite;
            letter-spacing: -0.02em;
            display: block;
            line-height: 1.1;
          }

          .hero-subtitle {
            color: #cbd5e1;
            font-size: clamp(1.2rem, 2.5vw, 2rem);
            margin-top: 1rem;
            font-weight: 300;
            letter-spacing: 0.05em;
            animation: fadeInUp 1s ease 0.3s both;
          }

          /* Floating Icons */
          .hero-icon {
            position: absolute;
            font-size: 3rem;
            opacity: 0.15;
            animation: floatAndFade 15s ease-in-out infinite;
            pointer-events: all;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .hero-icon:hover {
            opacity: 0.4;
            transform: scale(1.2);
          }

          .hammer {
            top: 15%;
            left: 10%;
            animation-delay: 0s;
          }

          .ruler {
            top: 25%;
            right: 15%;
            animation-delay: 2s;
          }

          .helmet {
            bottom: 30%;
            left: 8%;
            animation-delay: 4s;
          }

          .blueprint {
            top: 60%;
            right: 10%;
            animation-delay: 1s;
          }

          .truck {
            bottom: 15%;
            left: 20%;
            animation-delay: 3s;
          }

          .wrench {
            top: 40%;
            right: 25%;
            animation-delay: 5s;
          }

          /* Scroll Indicator */
          .scroll-indicator {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            animation: fadeInUp 1s ease 1s both;
            cursor: pointer;
          }

          .scroll-arrow {
            color: #60a5fa;
            font-size: 2rem;
            animation: bounce 2s ease infinite;
          }

          /* Container */
          .landing-container {
            max-width: 1100px;
            margin: auto;
            padding: 0 1.5rem;
          }

          /* Sections */
          .landing-section {
            padding: 5rem 0;
          }

          .landing-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-align: center;
          }

          .landing-desc {
            max-width: 600px;
            margin: 0 auto 3rem;
            color: #475569;
            text-align: center;
          }

          /* ================= CARDS ================= */
          .landing-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .landing .card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            border-left: 4px solid #2563eb;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .landing .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .landing .card h3 {
            margin-bottom: 0.6rem;
            font-size: 1.25rem;
          }

          .landing .card p {
            color: #475569;
            line-height: 1.6;
          }

          .landing .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
          }

          /* ================= DARK SECTION ================= */
          .landing-dark {
            background: #0f172a;
            color: white;
          }

          .landing-dark .card {
            background: #1e293b;
            border-left-color: #60a5fa;
          }

          .landing-dark .card p {
            color: #cbd5e1;
          }

          /* ================= PROCESS ================= */
          .landing-process {
            max-width: 700px;
            margin: auto;
            list-style: none;
            counter-reset: process-counter;
          }

          .landing-process li {
            background: white;
            padding: 1.6rem 2rem 1.6rem 3rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid #2563eb;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            position: relative;
            counter-increment: process-counter;
          }

          .landing-process li::before {
            content: counter(process-counter);
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: #2563eb;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
          }

          .landing-process strong {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .landing-process p {
            color: #475569;
          }

          /* ================= CTA ================= */
          .landing-cta {
            background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
            color: white;
            text-align: center;
            padding: 5rem 0;
          }

          .landing-cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .landing-cta p {
            color: #dbeafe;
            margin: 1rem 0 2rem;
            font-size: 1.1rem;
          }

          /* ================= BUTTONS ================= */
          .landing .btn-primary {
            background: #2563eb;
            color: white;
            border: none;
            padding: 0.9rem 1.6rem;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1rem;
          }

          .landing .btn-primary:hover {
            background: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          }

          /* ================= ANIMATIONS ================= */
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes floatAndFade {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 0.15;
            }
            25% {
              transform: translate(30px, -30px) rotate(5deg);
              opacity: 0.25;
            }
            50% {
              transform: translate(-20px, -60px) rotate(-5deg);
              opacity: 0.2;
            }
            75% {
              transform: translate(40px, -40px) rotate(3deg);
              opacity: 0.18;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          /* ================= RESPONSIVE ================= */
          @media (max-width: 768px) {
            .landing-section {
              padding: 3rem 0;
            }

            .landing-cards {
              grid-template-columns: 1fr;
            }

            .landing-process li::before {
              left: -15px;
              width: 30px;
              height: 30px;
              font-size: 1rem;
            }
          }
        `}</style>

        {/* Hero */}
        <section className="landing-hero">
          <div className="hero-content">
            <div 
              className="hero-icon hammer" 
              onClick={() => scrollToSection('services')}
              title="Services"
            >
              🔨
            </div>
            <div 
              className="hero-icon ruler" 
              onClick={() => scrollToSection('services')}
              title="Services"
            >
              📏
            </div>
            <div 
              className="hero-icon helmet" 
              onClick={() => scrollToSection('why-us')}
              title="Why Choose Us"
            >
              ⛑️
            </div>
            <div 
              className="hero-icon blueprint" 
              onClick={() => scrollToSection('process')}
              title="Our Process"
            >
              📋
            </div>
            <div 
              className="hero-icon truck" 
              onClick={() => scrollToSection('why-us')}
              title="Why Choose Us"
            >
              🚛
            </div>
            <div 
              className="hero-icon wrench" 
              onClick={() => scrollToSection('services')}
              title="Services"
            >
              🔧
            </div>
            
            <h1 className="hero-title">
              <span className="buildcorp">BuildCorp</span>
            </h1>
            <p className="hero-subtitle">Building Tomorrow's Landmarks Today</p>
            
            <div 
              className="scroll-indicator" 
              onClick={() => scrollToSection('services')}
            >
              <div className="scroll-arrow">↓</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="landing-section">
          <div className="landing-container">
            <h2>Our Services</h2>
            <p className="landing-desc">
              End-to-end construction solutions tailored to your needs.
            </p>

            <div className="landing-cards">
              <Card
                icon="🏠"
                title="Residential Construction"
                text="Custom homes, villas, and apartments built for durability and comfort."
              />
              <Card
                icon="🏢"
                title="Commercial Buildings"
                text="Modern offices, warehouses, and industrial structures designed for efficiency."
              />
              <Card
                icon="🔄"
                title="Renovation & Remodeling"
                text="Transform existing structures with contemporary upgrades and improvements."
              />
              <Card
                icon="🎨"
                title="Interior Works"
                text="Functional and aesthetic interior solutions that bring your vision to life."
              />
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="landing-section landing-dark">
          <div className="landing-container">
            <h2>Why Choose Us</h2>

            <div className="landing-cards">
              <Card
                icon="⭐"
                title="10+ Years Experience"
                text="Proven expertise across multiple project types and industries."
              />
              <Card
                icon="💰"
                title="Transparent Pricing"
                text="Clear estimates with no hidden costs or surprise charges."
              />
              <Card
                icon="✅"
                title="Quality Materials"
                text="Certified materials meeting international safety standards."
              />
              <Card
                icon="⏰"
                title="On-Time Delivery"
                text="Strict planning and execution ensures deadlines are always met."
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="landing-section">
          <div className="landing-container">
            <h2>Our Process</h2>

            <ol className="landing-process">
              <li>
                <strong>Consultation</strong>
                <p>Understanding your requirements, vision, and budget constraints.</p>
              </li>
              <li>
                <strong>Planning & Design</strong>
                <p>Detailed architecture, approvals, and material selection.</p>
              </li>
              <li>
                <strong>Execution</strong>
                <p>Professional construction with continuous quality monitoring.</p>
              </li>
              <li>
                <strong>Delivery</strong>
                <p>Final inspection, documentation, and project handover.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="landing-cta">
          <div className="landing-container">
            <h2>Ready to Build Your Project?</h2>
            <p>Talk to our experts and get a clear construction plan tailored to your needs.</p>
            <button className="btn-primary">Contact Us Today</button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Landing;