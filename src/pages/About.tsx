import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Star, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Rólunk</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Több mint 15 éve nyújtunk professzionális beléptető rendszereket és hozzáférés-kezelési megoldásokat, hogy ügyfeleink biztonságát és hatékonyságát garantáljuk.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Miért válasszon minket?</h2>
              <p className="text-lg text-gray-600">
                Innováció, szakértelem és ügyfélközpontúság – ezek a sikerünk alapjai.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Biztonság</h3>
                <p className="text-gray-600">
                  Többszintű hozzáférés-kezelés és fejlett biztonsági megoldások.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ügyfélközpontúság</h3>
                <p className="text-gray-600">
                  Több mint 1500 elégedett ügyfél és 98%-os elégedettségi arány.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tapasztalat</h3>
                <p className="text-gray-600">
                  15 év szakmai tapasztalat a beléptető rendszerek területén.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innováció</h3>
                <p className="text-gray-600">
                  Folyamatos fejlesztések és modern technológiák alkalmazása.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Csapatunk</h2>
              <p className="text-lg text-gray-600">
                Ismerje meg a szakértői csapatunkat, akik elkötelezettek az Ön sikere iránt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Csillag Csaba</h3>
                <p className="text-gray-600">Ügyvezető igazgató</p>
              </div>
              <div className="text-center">
                
                <h3 className="text-xl font-semibold">Nagy Dorina Laura</h3>
                <p className="text-gray-600">Marketing vezető</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;