import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      const { access_token } = response.data;
      setMessage('Sikeres bejelentkezés!');
      localStorage.setItem('access_token', access_token); // Token mentése

      // Átirányítás a dashboardra
      navigate('/dashboard');
    } catch (error: any) {
      setMessage('Sikertelen bejelentkezés: ' + (error.response?.data?.message || 'Ismeretlen hiba'));
    }
  };

  return (
    <div className="container mt-5">
      <h2>Belépés</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email cím</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Jelszó</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Belépés</button>
        <div className="mt-2">
          <small className="text-muted">
            Még nincs fiókja? <NavLink to="/register">Regisztráció</NavLink>
          </small>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;