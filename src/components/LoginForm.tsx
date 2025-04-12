import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth(); // AuthContext használata

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Hiba történt",
        description: "Kérjük töltse ki az összes mezőt!",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const data = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      toast({
        title: "Sikeres bejelentkezés!",
        description: "Üdvözöljük az CheckPoint rendszerben.",
      });

      // Token mentése
      if (rememberMe) {
        localStorage.setItem("token", data.data.accessToken);
      } else {
        sessionStorage.setItem("token", data.data.accessToken);
      }

      login(); // Állapot frissítése
      navigate("/"); // Átirányítás a főoldalra
    } catch (error: any) {
      toast({
        title: "Sikertelen bejelentkezés",
        description: error.response?.data?.message || "Hiba történt a bejelentkezés során.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-heading">Bejelentkezés</h2>
        <p className="text-gray-600 mt-2">Adja meg adatait a bejelentkezéshez</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail cím</Label>
          <Input
            id="email"
            type="email"
            placeholder="pelda@email.hu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Jelszó</Label>
            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
              Elfelejtett jelszó?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked: boolean) => setRememberMe(!!checked)}
            disabled={isLoading}
          />
          <Label htmlFor="remember" className="text-sm cursor-pointer">Emlékezz rám</Label>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Bejelentkezés...
            </>
          ) : "Bejelentkezés"}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">Még nincs fiókja?</span>{" "}
          <Link to="/register" className="text-primary hover:underline font-medium">
            Regisztráció
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;