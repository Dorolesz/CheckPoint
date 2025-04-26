import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name?: string;
  email: string;
  organization?: string;
  role?: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (storedUser) {
      console.log("Betöltött felhasználó:", JSON.parse(storedUser));
      setUser(JSON.parse(storedUser));
    }
    console.log("AuthContext user (useEffect):", user);
    console.log("AuthContext isLoggedIn (useEffect):", isLoggedIn);
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
  
    const userData = {
      name: data.name, // A név hozzáadása
      email: data.email,
      role: data.role,
      token: data.token,
    };
  
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      sessionStorage.setItem('user', JSON.stringify(userData));
    }
  
    setUser(userData); // Frissítjük a `user` állapotot
    console.log("AuthContext user (login):", userData);
    console.log("AuthContext isLoggedIn (login):", !!userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    setUser(null); // A `user` állapotot null-ra állítjuk
    console.log("AuthContext user (logout):", null);
    console.log("AuthContext isLoggedIn (logout):", false);
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};