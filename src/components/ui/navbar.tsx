
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Для демонстрации, заменить на реальную авторизацию

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Для демонстрации, удалить в реальном проекте
  };

  const navLinks = [
    { title: "Главная", path: "/" },
    { title: "Сервера", path: "/servers" },
    { title: "Донат", path: "/donate" },
    { title: "Форум", path: "/forum" },
    { title: "Правила", path: "/rules" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-b.svg" 
              alt="CS2 Network" 
              className="h-10 w-auto" 
            />
            <span className="ml-2 text-xl font-bold hidden sm:block cs2-gradient bg-clip-text text-transparent">
              CS2 Network
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.path}>
                <Link 
                  to={link.path} 
                  className={cn(
                    "px-4 py-2 text-sm nav-link",
                    "hover:text-primary transition-colors"
                  )}
                >
                  {link.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} />
                  <span>Профиль</span>
                </Button>
              </Link>
              <Button variant="outline" onClick={toggleLogin}>
                Выйти
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={toggleLogin}>
                Войти
              </Button>
              <Button className="bg-primary">
                Регистрация
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-foreground hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              {isLoggedIn ? (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                      <User size={18} className="mr-2" />
                      Профиль
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={() => { toggleLogin(); setIsMenuOpen(false); }}>
                    Выйти
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => { toggleLogin(); setIsMenuOpen(false); }}>
                    Войти
                  </Button>
                  <Button className="bg-primary">
                    Регистрация
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
