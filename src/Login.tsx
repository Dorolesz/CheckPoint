import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container mt-5">
      <h2>Belépés</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email cím</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Jelszó</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Belépés</button>
        <div className="mt-2">
          <small className="text-muted">
            Még nincs fiókja? <NavLink to="/register">Regisztráció</NavLink>
          </small>
        </div>
      </form>
    </div>
  );
}

export default Login;