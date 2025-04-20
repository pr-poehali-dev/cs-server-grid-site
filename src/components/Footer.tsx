
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm pt-10 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <img src="/logo-b.svg" alt="CS2 Network" className="h-8 w-auto mr-2" />
              <span className="cs2-gradient bg-clip-text text-transparent">CS2 Network</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Лучшая сеть серверов Counter-Strike 2 с уникальными режимами игры, ежедневными обновлениями и активным сообществом.
            </p>
            <div className="flex space-x-3">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path><path d="M7.5 16.5c3.5 1 5.5 1 9 0"></path><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7.5-.5-1.5-1.5-4.5-2.5-5.5-1.457-1.457-3-1.5-5-1.5-3 0-5 1-5.5 1.5-1 1-2.5 2.5-3.5 4.5-1.667 2.333-2.167 5.167-1.5 8.5.667 2.333 2.167 4.833 4.5 5.5 1.5.5 4.5.5 6 .5 1.5-.5 2.5-1.5 3-2.5"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Основное</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servers" className="text-muted-foreground hover:text-primary">Сервера</Link></li>
              <li><Link to="/donate" className="text-muted-foreground hover:text-primary">Донат</Link></li>
              <li><Link to="/rules" className="text-muted-foreground hover:text-primary">Правила</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/forum" className="text-muted-foreground hover:text-primary">Форум</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="text-muted-foreground">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-muted-foreground">support@cs2network.ru</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span className="text-muted-foreground">cs2network.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2024 CS2 Network. Все права защищены.</p>
          <p className="mt-1">
            Counter-Strike 2 и связанные логотипы являются товарными знаками Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
