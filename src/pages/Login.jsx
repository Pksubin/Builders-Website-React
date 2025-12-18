import { useState } from 'react';
import MainLayout from "../layouts/MainLayout";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      alert(`Welcome back, ${formData.username}!`);
      setIsLoading(false);
      setFormData({ username: '', password: '' });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="login-page">
        <style>{`
          .login-page {
            min-height: calc(100vh - 64px);
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
            padding: 2rem 1rem;
            position: relative;
            overflow: hidden;
          }

          /* Animated Background Elements */
          .login-page::before,
          .login-page::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.15), transparent);
          }

          .login-page::before {
            width: 500px;
            height: 500px;
            top: -250px;
            right: -250px;
            animation: float 15s ease-in-out infinite;
          }

          .login-page::after {
            width: 400px;
            height: 400px;
            bottom: -200px;
            left: -200px;
            animation: float 12s ease-in-out infinite reverse;
          }

          /* Floating Icons */
          .floating-icon {
            position: absolute;
            font-size: 3rem;
            opacity: 0.1;
            animation: floatIcon 20s ease-in-out infinite;
          }

          .icon-1 {
            top: 10%;
            left: 15%;
            animation-delay: 0s;
          }

          .icon-2 {
            top: 70%;
            right: 20%;
            animation-delay: 3s;
          }

          .icon-3 {
            bottom: 20%;
            left: 10%;
            animation-delay: 6s;
          }

          /* Login Container */
          .login-container {
            width: 100%;
            max-width: 420px;
            padding: 3rem 2.5rem;
            background: white;
            border-radius: 16px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
            position: relative;
            z-index: 1;
            animation: slideInUp 0.6s ease;
          }

          /* Brand Header */
          .login-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .login-brand {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.7rem;
            margin-bottom: 1rem;
          }

          .login-brand-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #2563eb, #60a5fa);
            display: grid;
            place-items: center;
            border-radius: 12px;
            font-weight: bold;
            color: white;
            font-size: 1.5rem;
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          }

          .login-brand-text {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #2563eb, #60a5fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .login-container h1 {
            text-align: center;
            margin-bottom: 0.5rem;
            color: #0f172a;
            font-size: 1.8rem;
          }

          .login-subtitle {
            text-align: center;
            color: #64748b;
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }

          /* Form Groups */
          .form-group {
            margin-bottom: 1.5rem;
            position: relative;
          }

          .login-container label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #334155;
            font-size: 0.95rem;
          }

          .input-wrapper {
            position: relative;
          }

          .input-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
            font-size: 1.2rem;
            pointer-events: none;
            transition: color 0.3s;
          }

          .login-container input {
            width: 100%;
            padding: 14px 15px 14px 45px;
            border-radius: 10px;
            border: 2px solid #e2e8f0;
            outline: none;
            font-size: 1rem;
            transition: all 0.3s;
            background: #f8fafc;
            box-sizing: border-box;
          }

          .login-container input:focus {
            border-color: #2563eb;
            background: white;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
          }

          .input-wrapper:focus-within .input-icon {
            color: #2563eb;
          }

          .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #94a3b8;
            font-size: 1.2rem;
            padding: 5px;
            transition: color 0.3s;
          }

          .password-toggle:hover {
            color: #2563eb;
          }

          /* Error Messages */
          .error-message {
            color: #ef4444;
            font-size: 0.85rem;
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            animation: shake 0.3s;
          }

          .input-error {
            border-color: #ef4444 !important;
          }

          .input-error:focus {
            box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1) !important;
          }

          /* Remember Me */
          .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
          }

          .remember-me {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #475569;
            cursor: pointer;
          }

          .remember-me input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
          }

          .forgot-link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }

          .forgot-link:hover {
            color: #1e40af;
            text-decoration: underline;
          }

          /* Button */
          .login-container button[type="submit"] {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #2563eb, #1e40af);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
          }

          .login-container button[type="submit"]::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .login-container button[type="submit"]:hover::before {
            width: 300px;
            height: 300px;
          }

          .login-container button[type="submit"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
          }

          .login-container button[type="submit"]:active {
            transform: translateY(0);
          }

          .login-container button[type="submit"]:disabled {
            background: #94a3b8;
            cursor: not-allowed;
            transform: none;
          }

          .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid transparent;
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            margin-right: 8px;
          }

          /* Signup Link */
          .signup-link {
            text-align: center;
            margin-top: 1.5rem;
            color: #64748b;
            font-size: 0.95rem;
          }

          .signup-link a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
          }

          .signup-link a:hover {
            color: #1e40af;
            text-decoration: underline;
          }

          /* Divider */
          .divider {
            display: flex;
            align-items: center;
            margin: 1.5rem 0;
            color: #94a3b8;
            font-size: 0.9rem;
          }

          .divider::before,
          .divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e2e8f0;
          }

          .divider span {
            padding: 0 1rem;
          }

          /* Social Buttons */
          .social-login {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            background: white;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s;
          }

          .social-btn:hover {
            border-color: #2563eb;
            background: #f8fafc;
            transform: translateY(-2px);
          }

          /* Animations */
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, 30px); }
          }

          @keyframes floatIcon {
            0%, 100% { 
              transform: translate(0, 0) rotate(0deg);
              opacity: 0.1;
            }
            50% { 
              transform: translate(20px, -20px) rotate(5deg);
              opacity: 0.15;
            }
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }

          /* Responsive */
          @media (max-width: 480px) {
            .login-container {
              padding: 2rem 1.5rem;
            }

            .login-form h1 {
              font-size: 1.5rem;
            }

            .social-login {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="floating-icon icon-1">🏗️</div>
        <div className="floating-icon icon-2">🔨</div>
        <div className="floating-icon icon-3">📐</div>

        <form className="login-container" onSubmit={handleSubmit}>
          <div className="login-header">
            <div className="login-brand">
              <div className="login-brand-icon">B</div>
              <div className="login-brand-text">BuildCorp</div>
            </div>
          </div>

          <h1>Welcome Back</h1>
          <p className="login-subtitle">Enter your credentials to continue</p>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={errors.username ? 'input-error' : ''}
              />
              <span className="input-icon">👤</span>
            </div>
            {errors.username && (
              <div className="error-message">
                ⚠️ {errors.username}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? 'input-error' : ''}
              />
              <span className="input-icon">🔒</span>
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">
                ⚠️ {errors.password}
              </div>
            )}
          </div>

          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading && <span className="loading-spinner"></span>}
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn">
              <span>🔵</span> Google
            </button>
            <button type="button" className="social-btn">
              <span>📘</span> Facebook
            </button>
          </div>

          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;