import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, ChevronDown, Check, Loader2 } from "lucide-react";
import { Download as DownloadIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DesktopDownload = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = (platform: string) => {
    setIsLoading(true);

    // Szimuláljuk a letöltést
    setTimeout(() => {
      toast({
        title: "Letöltés elindult!",
        description: `Az CheckPoint ${platform} verziójának letöltése hamarosan megkezdődik.`,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Windows verzió */}
        <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h7l-3 10 7-12h-7l3-10-7 12z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Windows</h3>
            <p className="text-gray-500 mb-6">Windows 10 vagy újabb verzió</p>
            <Button 
              onClick={() => handleDownload("Windows")}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Letöltés...
                </>
              ) : (
                <>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Letöltés (.exe)
                </>
              )}
            </Button>
          </div>
        </div>

        {/* macOS verzió */}
        <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">macOS</h3>
            <p className="text-gray-500 mb-6">macOS 10.15 vagy újabb verzió</p>
            <Button 
              onClick={() => handleDownload("macOS")}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Letöltés...
                </>
              ) : (
                <>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Letöltés (.dmg)
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold mb-2">Rendszerkövetelmények:</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>2 GHz vagy gyorsabb processzor</span>
          </li>
          <li className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>Minimum 4 GB RAM</span>
          </li>
          <li className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>500 MB szabad lemezterület</span>
          </li>
          <li className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>Internet kapcsolat</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Download = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold font-heading text-gray-900 mb-4">Alkalmazás letöltése</h1>
            <p className="text-lg text-gray-600">
              Töltse le az CheckPoint alkalmazást és kezelje beléptető rendszerét bárhonnan, bármikor. Válasszon az elérhető platformok közül.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="desktop" className="space-y-6">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="desktop" className="flex items-center justify-center">
                  <Monitor className="mr-2 h-4 w-4" />
                  Asztali alkalmazás
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="desktop">
                <DesktopDownload />
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 p-6 bg-white rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Gyakran Ismételt Kérdések</h3>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <button className="flex justify-between items-center w-full text-left font-medium">
                    <span>Hogyan telepíthetem az alkalmazást?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </button>
                  <div className="mt-2 text-gray-600">
                    <p>A letöltés után egyszerűen kövesse a telepítő lépéseit. Windows esetén futtassa az .exe fájlt, macOS esetén pedig nyissa meg a .dmg fájlt, és húzza az alkalmazást az Alkalmazások mappába.</p>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <button className="flex justify-between items-center w-full text-left font-medium">
                    <span>Mire lesz szükségem a használathoz?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </button>
                  <div className="mt-2 text-gray-600">
                    <p>Az alkalmazás használatához érvényes CheckPoint fiókra és licenszre van szükség. Ha még nincs fiókja, <Link to="/register" className="text-primary hover:underline">regisztráljon itt</Link>.</p>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <button className="flex justify-between items-center w-full text-left font-medium">
                    <span>Kompatibilis az alkalmazás a régebbi operációs rendszerekkel?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </button>
                  <div className="mt-2 text-gray-600">
                    <p>Régebbi verziók korlátozott támogatással érhetők el. Windows 7/8 és macOS 10.13 esetén <Link to="/contact" className="text-primary hover:underline">vegye fel velünk a kapcsolatot</Link> a kompatibilitással kapcsolatban.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Download;