import { useState } from 'react';
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="contact">
        <style>{`
          .contact {
            color: #1f2937;
          }

          .contact-container {
            max-width: 1100px;
            margin: auto;
            padding: 0 1.5rem;
          }

          /* Hero Section */
          .contact-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            color: white;
            text-align: center;
            padding: 5rem 0;
            position: relative;
            overflow: hidden;
          }

          .contact-hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
            animation: pulse 8s ease-in-out infinite;
          }

          .contact-hero h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
            animation: fadeInDown 0.8s ease;
          }

          .contact-hero p {
            max-width: 650px;
            margin: 1.2rem auto 0;
            color: #cbd5e1;
            font-size: 1.1rem;
            position: relative;
            z-index: 2;
            animation: fadeInUp 0.8s ease 0.2s both;
          }

          /* Sections */
          .contact-section {
            padding: 5rem 0;
          }

          .contact-section h2 {
            font-size: 2.3rem;
            margin-bottom: 1rem;
            color: #0f172a;
          }

          /* Contact Cards */
          .contact-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .contact-cards .card {
            animation: fadeInUp 0.6s ease both;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border-left: 4px solid #2563eb;
            transition: all 0.3s ease;
            text-align: center;
          }

          .contact-cards .card:nth-child(1) {
            animation-delay: 0.1s;
          }

          .contact-cards .card:nth-child(2) {
            animation-delay: 0.2s;
          }

          .contact-cards .card:nth-child(3) {
            animation-delay: 0.3s;
          }

          .contact-cards .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
            border-left-color: #1e40af;
          }

          .contact-cards .card::before {
            content: '';
            font-size: 2.5rem;
            display: block;
            margin-bottom: 1rem;
          }

          .contact-cards .card:nth-child(1)::before {
            content: '📞';
          }

          .contact-cards .card:nth-child(2)::before {
            content: '✉️';
          }

          .contact-cards .card:nth-child(3)::before {
            content: '📍';
          }

          .contact-cards .card h3 {
            color: #0f172a;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
          }

          .contact-cards .card p {
            color: #475569;
            font-size: 1rem;
          }

          /* Grid Layout */
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-grid > div:first-child {
            animation: fadeInLeft 0.8s ease;
          }

          .contact-grid p {
            color: #475569;
            line-height: 1.7;
            margin-top: 1rem;
          }

          /* Form */
          .contact-form {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
            animation: fadeInRight 0.8s ease;
          }

          .contact-form > div {
            margin-bottom: 1.5rem;
          }

          .contact-form label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #334155;
            font-size: 0.95rem;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 12px 15px;
            border-radius: 8px;
            border: 2px solid #e2e8f0;
            outline: none;
            font-size: 1rem;
            transition: all 0.3s;
            font-family: inherit;
          }

          .contact-form input:focus,
          .contact-form textarea:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
          }

          .contact-form textarea {
            min-height: 120px;
            resize: vertical;
          }

          .contact-form button {
            width: 100%;
            padding: 14px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
          }

          .contact-form button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .contact-form button:hover::before {
            width: 300px;
            height: 300px;
          }

          .contact-form button:hover {
            background: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          }

          .contact-form button:active {
            transform: translateY(0);
          }

          .contact-form button:disabled {
            background: #94a3b8;
            cursor: not-allowed;
            transform: none;
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

          @keyframes pulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.8;
            }
          }

          /* Loading State */
          .contact-form button.loading {
            pointer-events: none;
          }

          .contact-form button.loading::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 50%;
            margin-left: -8px;
            margin-top: -8px;
            border: 2px solid transparent;
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .contact-hero h1 {
              font-size: 2rem;
            }

            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .contact-section {
              padding: 3rem 0;
            }

            .contact-cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-container">
            <h1>Get in Touch</h1>
            <p>
              Have a project in mind? Talk to our team and get clear guidance,
              pricing, and timelines.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-cards">
              <Card title="Phone" text="+91 98765 43210" />
              <Card title="Email" text="info@buildcorp.com" />
              <Card title="Office" text="Kochi, Kerala, India" />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="contact-section">
          <div className="contact-container contact-grid">
            <div>
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form and our team will contact you within 24 hours.
                We're here to help bring your construction vision to life.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={isSubmitting ? 'loading' : ''}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Contact;