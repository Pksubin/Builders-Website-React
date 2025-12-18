import { useState, useEffect, useRef } from 'react';
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function About() {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    professionals: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { years: 10, projects: 150, professionals: 50, satisfaction: 100 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        professionals: Math.floor(targets.professionals * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <MainLayout>
      <div className="about">
        <style>{`
          .about {
            color: #1f2937;
          }

          .about-container {
            max-width: 1100px;
            margin: auto;
            padding: 0 1.5rem;
          }

          /* Hero Section */
          .about-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            color: white;
            text-align: center;
            padding: 5rem 0;
            position: relative;
            overflow: hidden;
          }

          .about-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: shimmer 3s infinite;
          }

          .about-hero h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
            animation: fadeInDown 0.8s ease;
          }

          .about-hero p {
            max-width: 700px;
            margin: 1.5rem auto 0;
            color: #cbd5e1;
            font-size: 1.1rem;
            position: relative;
            z-index: 2;
            animation: fadeInUp 0.8s ease 0.2s both;
          }

          /* Sections */
          .about-section {
            padding: 5rem 0;
          }

          .about-section h2 {
            font-size: 2.3rem;
            margin-bottom: 1.5rem;
            color: #0f172a;
            position: relative;
            display: inline-block;
          }

          .about-section h2::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #2563eb, #60a5fa);
            border-radius: 2px;
          }

          /* Grid Layout */
          .about-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .about-grid > div:first-child {
            animation: fadeInLeft 0.8s ease;
          }

          .about-grid p {
            margin-bottom: 1.2rem;
            color: #475569;
            line-height: 1.8;
            font-size: 1.05rem;
          }

          /* Image */
          .about-image {
            height: 400px;
            border-radius: 16px;
            background-image: url("https://wallpaperaccess.com/full/3434349.jpg");
            background-size: cover;
            background-position: center;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
            animation: fadeInRight 0.8s ease;
          }

          .about-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.5s;
          }

          .about-image:hover::before {
            opacity: 1;
          }

          .about-image::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
            opacity: 0;
            transition: opacity 0.5s;
          }

          .about-image:hover::after {
            opacity: 1;
            animation: rotate 20s linear infinite;
          }

          /* Stats Section */
          .about-stats {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            padding: 5rem 0;
            position: relative;
          }

          .about-stats::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
            background-size: 30px 30px;
            opacity: 0.3;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            text-align: center;
            gap: 3rem;
            position: relative;
            z-index: 1;
          }

          .stats-grid > div {
            padding: 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            animation: scaleIn 0.6s ease both;
          }

          .stats-grid > div:nth-child(1) { animation-delay: 0.1s; }
          .stats-grid > div:nth-child(2) { animation-delay: 0.2s; }
          .stats-grid > div:nth-child(3) { animation-delay: 0.3s; }
          .stats-grid > div:nth-child(4) { animation-delay: 0.4s; }

          .stats-grid > div:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
          }

          .stats-grid h3 {
            font-size: 3rem;
            background: linear-gradient(135deg, #2563eb, #60a5fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-weight: 800;
          }

          .stats-grid p {
            color: #475569;
            font-size: 1.1rem;
            font-weight: 500;
          }

          /* Cards */
          .about-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 2.5rem;
          }

          .about-cards .card {
            animation: fadeInUp 0.6s ease both;
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border-top: 4px solid #2563eb;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .about-cards .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.05), transparent);
            transition: left 0.5s;
          }

          .about-cards .card:hover::before {
            left: 100%;
          }

          .about-cards .card:nth-child(1) { animation-delay: 0.1s; }
          .about-cards .card:nth-child(2) { animation-delay: 0.2s; }
          .about-cards .card:nth-child(3) { animation-delay: 0.3s; }

          .about-cards .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
            border-top-color: #1e40af;
          }

          .about-cards .card h3 {
            color: #0f172a;
            margin-bottom: 0.8rem;
            font-size: 1.4rem;
          }

          .about-cards .card p {
            color: #475569;
            line-height: 1.7;
          }

          /* CTA Section */
          .about-cta {
            background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
            color: white;
            text-align: center;
            padding: 5rem 0;
            position: relative;
            overflow: hidden;
          }

          .about-cta::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
            top: -250px;
            right: -250px;
            animation: float 15s ease-in-out infinite;
          }

          .about-cta::after {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent);
            bottom: -200px;
            left: -200px;
            animation: float 12s ease-in-out infinite reverse;
          }

          .about-cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            position: relative;
            z-index: 1;
          }

          .about-cta p {
            max-width: 600px;
            margin: 1rem auto 2.5rem;
            color: #dbeafe;
            font-size: 1.1rem;
            position: relative;
            z-index: 1;
          }

          .about-cta button {
            position: relative;
            z-index: 1;
            background: white;
            color: #1e40af;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
          }

          .about-cta button:hover {
            background: #f1f5f9;
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          }

          /* Animations */
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, 30px); }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .about-hero h1 {
              font-size: 2rem;
            }

            .about-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .about-image {
              height: 300px;
            }

            .about-section {
              padding: 3rem 0;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }

            .stats-grid h3 {
              font-size: 2.5rem;
            }

            .about-cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        {/* Hero */}
        <section className="about-hero">
          <div className="about-container">
            <h1>Building With Trust & Precision</h1>
            <p>
              For more than a decade, we have delivered reliable, safe, and
              high-quality construction projects that stand the test of time.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="about-section">
          <div className="about-container about-grid">
            <div>
              <h2>Who We Are</h2>
              <p>
                We are a professional construction company specializing in
                residential, commercial, and industrial projects. Our team
                combines technical expertise with transparent communication
                to ensure every project is delivered on time and within budget.
              </p>
              <p>
                From planning to execution, we focus on safety, durability,
                and long-term value.
              </p>
            </div>

            <div className="about-image"></div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats" ref={statsRef}>
          <div className="about-container stats-grid">
            <div>
              <h3>{counters.years}+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>{counters.projects}+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>{counters.professionals}+</h3>
              <p>Skilled Professionals</p>
            </div>
            <div>
              <h3>{counters.satisfaction}%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-section">
          <div className="about-container">
            <h2>Our Core Values</h2>

            <div className="about-cards">
              <Card
                title="Quality First"
                text="We follow strict quality and safety standards in every project."
              />
              <Card
                title="Transparency"
                text="Clear communication, honest pricing, and no hidden costs."
              />
              <Card
                title="Timely Delivery"
                text="Well-planned execution ensures on-time completion."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-container">
            <h2>Let's Build Something Strong Together</h2>
            <p>
              Partner with a construction team that values quality, safety,
              and long-term relationships.
            </p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default About;