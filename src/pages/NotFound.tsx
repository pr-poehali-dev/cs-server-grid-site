
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold cs2-gradient bg-clip-text text-transparent mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Запрашиваемая страница не существует или была перемещена. Возможно, вы ввели неправильный URL.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
