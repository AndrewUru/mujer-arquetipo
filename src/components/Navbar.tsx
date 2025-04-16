import { Home, CalendarDays, Settings, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setLoggedIn(!!session?.user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-pink-200 shadow-lg">
      <div className="max-w-md mx-auto flex justify-around items-center py-3 px-4 text-pink-700 text-sm">
        <a
          href="/"
          className="flex flex-col items-center hover:text-pink-900 transition"
        >
          <Home className="w-6 h-6 mb-1" />
          Inicio
        </a>

        <a
          href="/dashboard"
          className="flex flex-col items-center hover:text-pink-900 transition"
        >
          <CalendarDays className="w-6 h-6 mb-1" />
          Ciclo
        </a>

        <a
          href="/setup"
          className="flex flex-col items-center hover:text-pink-900 transition"
        >
          <Settings className="w-6 h-6 mb-1" />
          Configurar
        </a>

        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-pink-600 hover:text-pink-900 transition"
          >
            <LogOut className="w-6 h-6 mb-1" />
            Salir
          </button>
        ) : (
          <a
            href="/login"
            className="flex flex-col items-center hover:text-pink-900 transition"
          >
            <LogIn className="w-6 h-6 mb-1" />
            Iniciar
          </a>
        )}
      </div>
    </nav>
  );
}
