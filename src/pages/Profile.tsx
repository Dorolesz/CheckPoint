import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {

  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto mt-10 max-w-md p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Profilom</h2>
          {user && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Név:</h3>
                <p className="text-gray-600">{user?.name || 'Nincs név megadva'}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">E-mail cím:</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Role:</h3>
                <p className="text-gray-600">{user?.role || 'Nincs role megadva'}</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;