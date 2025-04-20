
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ServerCard from "@/components/ServerCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar";

interface Server {
  id: number;
  name: string;
  ip: string;
  map: string;
  online: number;
  maxPlayers: number;
  rating: number;
  tags: string[];
}

const serversData: Server[] = [
  {
    id: 1,
    name: "Public #1 | Dust2 Only",
    ip: "185.248.85.21:27015",
    map: "de_dust2",
    online: 25,
    maxPlayers: 32,
    rating: 4.8,
    tags: ["128tick", "No Cheats"]
  },
  {
    id: 2,
    name: "Миражи Only | Classic",
    ip: "185.248.85.22:27015",
    map: "de_mirage",
    online: 18,
    maxPlayers: 32,
    rating: 4.5,
    tags: ["128tick", "Classic"]
  },
  {
    id: 3,
    name: "AWP Lego | Pro Mode",
    ip: "185.248.85.23:27015",
    map: "awp_lego",
    online: 31,
    maxPlayers: 32,
    rating: 4.9,
    tags: ["128tick", "AWP"]
  },
  {
    id: 4,
    name: "Retake | Inferno Only",
    ip: "185.248.85.24:27015",
    map: "de_inferno",
    online: 15,
    maxPlayers: 20,
    rating: 4.2,
    tags: ["Retake", "Inferno"]
  },
  {
    id: 5,
    name: "Arena 1v1 | Aim Maps",
    ip: "185.248.85.25:27015",
    map: "aim_map",
    online: 12,
    maxPlayers: 16,
    rating: 4.7,
    tags: ["1v1", "Aim"]
  },
  {
    id: 6,
    name: "Deathrun | Fun Maps",
    ip: "185.248.85.26:27015",
    map: "deathrun_arctic",
    online: 22,
    maxPlayers: 32,
    rating: 4.4,
    tags: ["Fun", "Deathrun"]
  }
];

export default function Servers() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  
  const filteredServers = serversData.filter(server => {
    if (search && !server.name.toLowerCase().includes(search.toLowerCase()) && 
        !server.map.toLowerCase().includes(search.toLowerCase()) &&
        !server.ip.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    if (filter !== "all" && !server.tags.includes(filter)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Наши серверы CS2
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Выбирайте из наших серверов с разными режимами игры, картами и модификациями. 
            Мы предлагаем стабильные серверы с защитой от читеров и профессиональной администрацией.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Input
              placeholder="Поиск по имени, карте или IP"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Фильтр" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">Все серверы</SelectItem>
                <SelectItem value="128tick">128 Tick</SelectItem>
                <SelectItem value="Classic">Классика</SelectItem>
                <SelectItem value="AWP">Только AWP</SelectItem>
                <SelectItem value="Retake">Retake</SelectItem>
                <SelectItem value="1v1">1v1</SelectItem>
                <SelectItem value="Fun">Развлекательные</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.length > 0 ? (
            filteredServers.map(server => (
              <ServerCard 
                key={server.id}
                name={server.name}
                ip={server.ip}
                map={server.map}
                online={server.online}
                maxPlayers={server.maxPlayers}
                rating={server.rating}
                tags={server.tags}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-400">Серверы не найдены</h3>
              <p className="text-gray-500 mt-2">Попробуйте изменить параметры поиска</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
