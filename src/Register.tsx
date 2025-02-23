import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="container mt-5">
      <h2>Regisztráció</h2>
      <form>
        {/* Basic Information */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Teljes név</label>
          <input type="text" className="form-control" id="fullName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email cím</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefonszám</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Jelszó</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Jelszó megerősítése</label>
          <input type="password" className="form-control" id="confirmPassword" required />
        </div>

        {/* Company/Institution Information (Optional) */}
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Cégnév / Iskola neve</label>
          <input type="text" className="form-control" id="companyName" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Székhely címe</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label htmlFor="taxId" className="form-label">Adószám / Iskola azonosító</label>
          <input type="text" className="form-control" id="taxId" />
        </div>

        {/* User Type and Profile Picture */}
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">Felhasználói típus</label>
          <select className="form-control" id="userType" required>
            <option value="">Válasszon...</option>
            <option value="student">Diák</option>
            <option value="teacher">Tanár</option>
            <option value="employee">Alkalmazott</option>
            <option value="guest">Vendég</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">Profilkép (opcionális)</label>
          <input type="file" className="form-control" id="profilePicture" />
        </div>
        <div className="mb-3">
          <label htmlFor="idNumber" className="form-label">Azonosítószám (ha van)</label>
          <input type="text" className="form-control" id="idNumber" />
        </div>

        {/* Security Settings */}
        <div className="mb-3">
          <label htmlFor="2fa" className="form-label">Kétlépcsős hitelesítés (2FA)</label>
          <select className="form-control" id="2fa" required>
            <option value="">Válasszon...</option>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="newsletter" />
          <label className="form-check-label" htmlFor="newsletter">Hírlevél feliratkozás (opcionális)</label>
        </div>

        {/* Legal Acceptances */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="terms" required />
          <label className="form-check-label" htmlFor="terms">Általános Szerződési Feltételek (ÁSZF) elfogadása</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="privacy" required />
          <label className="form-check-label" htmlFor="privacy">Adatkezelési tájékoztató elfogadása</label>
        </div>

        <button type="submit" className="btn btn-primary">Regisztráció</button>
        <div className="mt-2">
            <small className="text-muted">
                Van már fiókja? <NavLink to="/login">Belépés</NavLink>
            </small>
            </div>
      </form>
    </div>
  );
}

export default Register;