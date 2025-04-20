
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/Footer';
import ServerCard from '@/components/ServerCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Users, Trophy, Clock, Gift } from 'lucide-react';

// Временные данные для демонстрации
const serversMock = [
  {
    id: '1',
    name: 'CS2 Classic',
    description: 'Классический режим с улучшенным балансом и модификациями',
    players: { current: 18, max: 24 },
    map: 'de_dust2',
    image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=2832&h=1414&auto=format&fit=crop',
    rating: 4.5,
    isVip: true
  },
  {
    id: '2',
    name: 'CS2 Миссии',
    description: 'Уникальные миссии с прогрессией и наградами',
    players: { current: 12, max: 20 },
    map: 'de_inferno',
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2940&h=1654&auto=format&fit=crop',
    rating: 4.2
  },
  {
    id: '3',
    name: 'CS2 Зомби',
    description: 'Выживание против орд зомби с уникальными способностями',
    players: { current: 24, max: 32 },
    map: 'zm_pandemic',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&h=1654&auto=format&fit=crop',
    rating: 4.7
  }
];

const announcements = [
  {
    id: '1',
    title: 'Новый режим игры',
    date: '19.05.2024',
    content: 'Запуск нового режима "Штурм" с уникальным геймплеем и наградами'
  },
  {
    id: '2',
    title: 'Обновление серверов',
    date: '15.05.2024',
    content: 'Все серверы обновлены до последней версии, улучшена производительность'
  },
  {
    id: '3',
    title: 'Турнир по CS2',
    date: '10.05.2024',
    content: 'Анонс ежемесячного турнира с призовым фондом 50 000 рублей'
  }
];

const Index = () => {
  const [activeStatTab, setActiveStatTab] = useState('online');
  
  const statistics = {
    online: '1,234',
    players: '58,471',
    servers: '12'
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="cs2-gradient bg-clip-text text-transparent">CS2 Network</span>
              <br />Лучшие сервера для игры
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Погрузитесь в уникальные игровые режимы, зарабатывайте достижения и соревнуйтесь с игроками со всего мира
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary">
                Начать игру
              </Button>
              <Button size="lg" variant="outline">
                Открыть профиль
              </Button>
            </div>
            
            {/* Statistics Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <p className="text-3xl font-bold">{statistics.online}</p>
                  <p className="text-muted-foreground text-sm">Игроков онлайн</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Trophy className="h-10 w-10 text-primary mb-2" />
                  <p className="text-3xl font-bold">{statistics.players}</p>
                  <p className="text-muted-foreground text-sm">Всего игроков</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <p className="text-3xl font-bold">{statistics.servers}</p>
                  <p className="text-muted-foreground text-sm">Активных серверов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Servers Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Популярные серверы
            </h2>
            <Link to="/servers">
              <Button variant="outline" className="flex items-center gap-2">
                Все серверы <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serversMock.map(server => (
              <ServerCard key={server.id} {...server} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Почему выбирают наши сервера
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CS2 Network предлагает уникальный опыт для всех игроков с различными режимами и системами прогресса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 hover:bg-card/90 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Рейтинговая система</h3>
                <p className="text-muted-foreground">
                  Соревнуйтесь с другими игроками и поднимайтесь в глобальном рейтинге с эксклюзивными наградами
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 hover:bg-card/90 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальные предметы</h3>
                <p className="text-muted-foreground">
                  Разблокируйте эксклюзивные скины, модели и эффекты, доступные только на наших серверах
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 hover:bg-card/90 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Активное сообщество</h3>
                <p className="text-muted-foreground">
                  Присоединяйтесь к тысячам игроков, участвуйте в турнирах и специальных мероприятиях
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* News & Announcements */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Новости и объявления
            </h2>
            <Link to="/news">
              <Button variant="outline" className="flex items-center gap-2">
                Все новости <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map(announcement => (
              <Card key={announcement.id} className="hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{announcement.title}</h3>
                    <span className="text-xs text-muted-foreground">{announcement.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{announcement.content}</p>
                  <Button variant="link" className="px-0">Читать полностью</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Готовы начать игру?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Присоединяйтесь к тысячам игроков на наших серверах и откройте для себя новый опыт в CS2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary">
                Начать игру
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
