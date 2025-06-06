import React, { useState } from 'react';
import { registerUser } from '../services/auth';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error en registro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Usuario" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
      <p>{message}</p>
    </form>
  );
}

export default Register;
