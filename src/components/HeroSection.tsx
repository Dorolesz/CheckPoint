import { useEffect, useState } from "react";
import { Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import apiClient from "../config/apiCliens";

const HeroSection = () => {
  const [heroData, setHeroData] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await apiClient.get("/");
        setHeroData(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              {heroData?.title || "Intelligens beléptető rendszer a modern intézményeknek és vállalkozásoknak"}
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              {heroData?.description || "Az CheckPoint beléptető rendszerével biztosítsa épületei, irodái és létesítményei biztonságos hozzáférés-kezelését. Professzionális védelem, egyszerű használat."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/download">
                <Button variant="secondary" size="lg">
                  Alkalmazás letöltése
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://uploads-ssl.webflow.com/5a06fcae4056cc00011eec1e/5d0ba463f803b876d4d7241d_Mobile%20Unlock.jpg" 
                  alt="Beléptető rendszer" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="glass-card absolute -top-6 -right-6 p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-500 p-2">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Biztonságos</p>
                    <p className="text-xs text-gray-600">99.9% védelmi ráta</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card absolute -bottom-6 -left-6 p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-500 p-2">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">24/7 működés</p>
                    <p className="text-xs text-gray-600">Folyamatos elérés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">1500+</p>
              <p className="text-gray-600">Telepített rendszer</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Ügyfél elégedettség</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">15 év</p>
              <p className="text-gray-600">Szakmai tapasztalat</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-gray-600">Technikai támogatás</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;