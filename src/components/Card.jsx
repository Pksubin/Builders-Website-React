function Card({ title, text, icon }) {
  return (
    <div className="card">
      <style>{`
        .card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }

        /* Gradient border effect on hover */
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .card:hover::before {
          opacity: 1;
        }

        /* Shine effect on hover */
        .card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
          opacity: 0;
        }

        .card:hover::after {
          opacity: 1;
          left: 100%;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
        }

        /* Icon styling */
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
          animation: iconFloat 3s ease-in-out infinite;
        }

        .card h3 {
          color: #0f172a;
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }

        .card:hover h3 {
          color: #2563eb;
        }

        .card p {
          color: #475569;
          line-height: 1.7;
          font-size: 1rem;
          position: relative;
          z-index: 1;
        }

        /* Accent bar */
        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #2563eb, #60a5fa);
          border-radius: 0 0 4px 4px;
          transition: height 0.4s ease;
        }

        .card:hover .card-accent {
          height: 100%;
        }

        /* Float animation for icon */
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Pulse animation variant */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .card:hover .card-icon {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>

      <div className="card-accent"></div>
      {icon && <span className="card-icon">{icon}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;