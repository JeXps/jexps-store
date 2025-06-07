import React, { useState } from 'react';

function LoginForm({ onAuthChange, onLoginSuccess, apiUrl = 'http://localhost:4000/api/auth/login' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Error desconocido');
        return;
      }

      // Guardar token
      localStorage.setItem('token', data.token);

      // Notificar cambio de autenticación
      if (onAuthChange) onAuthChange();

      // Ejecutar callback para redirigir o más acciones
      if (onLoginSuccess) onLoginSuccess();

    } catch (error) {
      setErrorMsg('Error al conectar con el servidor');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Entrar</button>
    </form>
  );
}

export default LoginForm;
