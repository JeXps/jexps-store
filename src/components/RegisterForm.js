import React, { useState } from 'react';

function RegisterForm({ apiUrl = 'http://localhost:4000/api/auth/register', onRegisterSuccess }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Usuario creado correctamente');
        if (onRegisterSuccess) onRegisterSuccess();
      } else {
        setErrorMsg(data.error || 'Error al registrar usuario');
      }
    } catch (error) {
      setErrorMsg('Error en la conexión con el servidor');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <input
        name="username"
        placeholder="Nombre de usuario"
        className="form-control mb-2"
        value={form.username}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        className="form-control mb-2"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        className="form-control mb-3"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-success w-100">Registrar</button>
    </form>
  );
}

export default RegisterForm;
