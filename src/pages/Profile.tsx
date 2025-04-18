import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar"; // Navbar importálása
import Footer from "@/components/Footer"; // Footer importálása

const Profile = () => {

  const { user } = useAuth(); // Hozzáférés a bejelentkezett felhasználó adataihoz
  
  return (
    <>
      <Navbar /> {/* Navbar megjelenítése */}
      <div className="container mx-auto mt-10 max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Profilom</h2>
        {user ? (
          <div className="space-y-4">
            <div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Név:</h3>
              <p className="text-gray-600">{user.name || "Nincs megadva"}</p>
            </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">E-mail cím:</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Szerepkör:</h3>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Nem található felhasználói adat. Kérjük, jelentkezzen be!</p>
        )}
      </div>
      <Footer /> {/* Footer megjelenítése */}
    </>
  );
};

export default Profile;