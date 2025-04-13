import React from 'react';
import '../App.css';

function DownloadTrial() {
    return (
        <div className="download-container">
            <ul className="download-list">
                <li>✅ Alapvető beléptetési funkciók – Mobilalkalmazásos és QR-kódos azonosítás</li>
                <li>✅ Valós idejű naplózás – Belépési és kilépési események figyelése</li>
                <li>✅ Korlátozott számú felhasználó – Ideális kis csoportok számára</li>
                <li>✅ Egyszerű beállítás és telepítés – Pár kattintással aktiválható</li>
            </ul>
            <p className="download-description">
                Hogyan igényelheti a próbaverziót?
            </p>
            <ol className="download-list">
                <li>1️⃣ Regisztráljon weboldalunkon</li>
                <li>2️⃣ Töltse le a Checkpoint alkalmazást</li>
                <li>3️⃣ Aktiválja a próbaverziót és kezdje el tesztelni</li>
            </ol>
            <p className="download-description">
                🚀 Próbálja ki most ingyen, és tapasztalja meg a jövő beléptetési rendszerét!
            </p>
            <button className="download-button">Próbaverzió letöltése</button>
        </div>
    );
}

export default DownloadTrial;