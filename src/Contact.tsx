import React from 'react';
import './App.css'; // Ensure this import is present to apply styles

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Elérhetőségeink</h1>
            <p className="contact-item">📍 Cím: 1111 Budapest, Példa utca 12.</p>
            <p className="contact-item">📞 Telefon: +36 1 234 5678</p>
            <p className="contact-item">📧 E-mail: info@checkpoint.hu</p>
        </div>
    );
}

export default Contact;