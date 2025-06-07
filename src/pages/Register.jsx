import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function Register() {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    // Por ejemplo, redirigir al login tras registro exitoso
    navigate('/login');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Registrar usuario</h2>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
    </div>
  );
}

export default Register;
