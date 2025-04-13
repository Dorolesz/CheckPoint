import React from 'react';
import '../App.css'; // Ensure this import is present to apply styles

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Üdvözöljük a Checkpoint oldalán!</h1>
            <p className="home-description">
                A Checkpoint egy innovatív beléptető rendszer, amelyet iskolák, vállalatok és intézmények számára fejlesztettünk ki. Célunk, hogy biztonságosabbá és gördülékenyebbé tegyük a belépési folyamatokat, csökkentve a sorban állás idejét és minimalizálva az emberi hibák lehetőségét.
            </p>
            <h2 className="home-subtitle">Miért válassza a Checkpointot?</h2>
            <ul className="home-list">
                <li>✔ Automatizált beléptetés – Gyors és pontos jogosultság-ellenőrzés</li>
                <li>✔ Mobilalkalmazásos azonosítás – Kényelmes és korszerű beléptetés</li>
                <li>✔ Valós idejű naplózás – Belépési és kilépési adatok azonnali szinkronizálása</li>
                <li>✔ Biztonságos működés – Megbízható rendszer az intézmények védelméért</li>
            </ul>
            <h2 className="home-subtitle">Szolgáltatásaink</h2>
            <ul className="home-list">
                <li>🔹 Iskolai beléptetés – Automatikus diák- és tanárazonosítás</li>
                <li>🔹 Vállalati beléptetés – Biztonságos és hatékony munkahelyi hozzáférés</li>
                <li>🔹 Rendezvénybeléptetés – Gyors és egyszerű jegykezelési megoldások</li>
                <li>🔹 Sportlétesítmények – Edzőtermek, uszodák és stadionok számára optimalizálva</li>
            </ul>
            <p className="home-illustrations">
                📌 Illusztrációk<br />
                Az oldalon található képek és ábrák segítségével könnyen megismerheti rendszerünk működését!
            </p>
        </div>
    );
}

export default Home;