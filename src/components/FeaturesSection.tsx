
import { Shield, Key, Clock, Users, Building, BadgeCheck, Zap, BarChart } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Biztonsági védelem",
    description: "Többszintű hozzáférés-kezelés, részletes jogosultságkezelés és behatolásvédelem a biztonság maximalizálása érdekében."
  },
  {
    icon: <Key className="h-8 w-8 text-primary" />,
    title: "Többféle azonosítás",
    description: "RFID, PIN-kód, ujjlenyomat, QR-kód, arcfelismerés - válassza a vállalkozásához illő megoldást."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Munkaidő-nyilvántartás",
    description: "Automatizált jelenléti nyilvántartás, szabadság- és távolléti adatok kezelése, integrálva a bérszámfejtő rendszerekkel."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Vendégkezelés",
    description: "Látogatók előzetes regisztrációja, érkeztetése, követése és távoztatása egyszerűen, integrált megoldással."
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Több telephelyes működés",
    description: "Központilag kezelhető, de lokálisan is konfigurálható rendszerek több telephelyes vállalkozások számára."
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Megfelelőségi jelentések",
    description: "Előre konfigurált GDPR és egyéb jogszabályi megfelelőségi riportok automatikus generálása."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Gyors telepítés",
    description: "Plug-and-play telepítés és könnyű bővíthetőség, minimális karbantartási igénnyel."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Részletes elemzések",
    description: "Valós idejű monitoring, testreszabható dashboardok és automatizált jelentések a döntéshozatal támogatására."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Miért válassza az CheckPoint rendszerét?</h2>
          <p className="text-lg text-gray-600">
            Komplex beléptető rendszerünk minden igényt kielégít - a kisebb irodáktól kezdve a nagy létesítményekig, egyedi szükségletekre szabva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300 animate-fadeIn"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="rounded-full bg-blue-50 p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
