import React from 'react';
import '../App.css'; // Ensure this import is present to apply styles

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">Rólunk</h1>
            <p className="about-description">
                Cégünk innovatív beléptető rendszerek fejlesztésével és üzemeltetésével foglalkozik, amelyek biztonságos, gyors és egyszerű azonosítást biztosítanak iskolák, vállalatok és intézmények számára. Modern technológiáink segítségével automatizált megoldásokat kínálunk a belépési és kilépési folyamatok ellenőrzésére, csökkentve az emberi hibák lehetőségét és növelve a hatékonyságot.
            </p>
            <p className="about-text">
                Küldetésünk, hogy ügyfeleink számára egy megbízható és könnyen kezelhető rendszert biztosítsunk, amely garantálja a maximális biztonságot és kényelmet. Szakértő csapatunk folyamatosan dolgozik a legmodernebb megoldások fejlesztésén, hogy partnereink mindig a legjobb szolgáltatást kapják.
            </p>
            <p className="about-contact">
                📞 Lépjen velünk kapcsolatba, és ismerje meg, hogyan teheti biztonságosabbá és hatékonyabbá beléptetési folyamatait!
            </p>
        </div>
    );
}

export default About;