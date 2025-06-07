import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login({ onAuthChange }) {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/productos');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      <LoginForm onAuthChange={onAuthChange} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default Login;
