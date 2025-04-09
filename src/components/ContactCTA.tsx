
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Kész a biztonságot magasabb szintre emelni?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Hívjon minket, vagy kérjen árajánlatot még ma! Szakértőink segítenek megtalálni a vállalkozásának megfelelő beléptető rendszer megoldást.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Kapcsolat felvétele
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
