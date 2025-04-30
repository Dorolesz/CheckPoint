import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Az alapértelmezett űrlapküldés megakadályozása

    // Felugró üzenet
    alert("Az üzenet sikeresen elküldve!");

    // Konzolüzenet
    console.log("Kapcsolatfelvételi űrlap sikeresen elküldve!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Kapcsolatfelvétel</h1>
            <p className="text-gray-600 mb-8">
              Ha bármilyen kérdése van, vagy további információra van szüksége, kérjük, töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a kapcsolatot.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Név
                </label>
                <Input id="name" name="name" type="text" placeholder="Teljes név" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail cím
                </label>
                <Input id="email" name="email" type="email" placeholder="pelda@email.hu" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Üzenet
                </label>
                <Textarea id="message" name="message" rows={5} placeholder="Írja ide az üzenetét..." required />
              </div>
              <Button type="submit" className="w-full">
                Küldés
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;