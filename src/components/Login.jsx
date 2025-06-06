import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onAuthChange }) {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contraseña }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error desconocido');
        return;
      }

      // Guardar token y notificar el cambio de sesión
      localStorage.setItem('token', data.token);

      if (onAuthChange) onAuthChange(); // actualiza el estado global del auth

      // Redirige a productos
      navigate('/productos');

    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          className="form-control mb-2" 
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          className="form-control mb-2" 
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
