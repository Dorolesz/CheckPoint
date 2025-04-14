import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validáció
    if (Object.values(formData).some((val) => val === "")) {
      toast({
        title: "Hiba történt",
        description: "Kérjük töltse ki az összes mezőt!",
        variant: "destructive",
      });
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Hiba történt",
        description: "A megadott jelszavak nem egyeznek!",
        variant: "destructive",
      });
      return;
    }
  
    if (!acceptTerms) {
      toast({
        title: "Hiba történt",
        description: "Kérjük fogadja el a felhasználási feltételeket!",
        variant: "destructive",
      });
      return;
    }
  
    setIsLoading(true);
  
    try {
      // API hívás a regisztrációhoz
      await axios.post("http://localhost:3000/register", {
        name: `${formData.firstName} ${formData.lastName}`, // Név összeállítása
        email: formData.email,
        password: formData.password,
      });
  
      toast({
        title: "Sikeres regisztráció!",
        description: "Fiókja létrehozva. Most már bejelentkezhet.",
      });
  
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Sikertelen regisztráció",
        description: error.response?.data?.message || "Hiba történt a regisztráció során.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-heading">Regisztráció</h2>
        <p className="text-gray-600 mt-2">Hozzon létre fiókot az CheckPoint rendszerhez</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Keresztnév</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="János"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Vezetéknév</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Kovács"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail cím</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="pelda@email.hu"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Jelszó</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
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
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Jelszó megerősítése</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(!!checked)}
            disabled={isLoading}
          />
          <Label htmlFor="terms" className="text-sm cursor-pointer">
            Elfogadom a <Link to="/terms" className="text-primary hover:underline">felhasználási feltételeket</Link> és az <Link to="/privacy" className="text-primary hover:underline">adatkezelési tájékoztatót</Link>
          </Label>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Regisztráció...
            </>
          ) : (
            "Regisztráció"
          )}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">Már van fiókja?</span>{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Bejelentkezés
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;