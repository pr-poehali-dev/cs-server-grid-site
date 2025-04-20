
import { FC } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";

interface ServerCardProps {
  id: string;
  name: string;
  description: string;
  players: {
    current: number;
    max: number;
  };
  map: string;
  image: string;
  rating: number;
  isVip?: boolean;
}

const ServerCard: FC<ServerCardProps> = ({
  name,
  description,
  players,
  map,
  image,
  rating,
  isVip = false,
}) => {
  return (
    <Card className={`overflow-hidden game-card hover:border-primary/50 ${isVip ? 'border-primary/30' : ''}`}>
      <div className="relative">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {isVip && (
          <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-xs font-semibold">
            VIP
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div>
            <span className="text-muted-foreground">Карта:</span>
            <p className="font-medium">{map}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Игроки:</span>
            <div className="flex items-center">
              <Users size={14} className="mr-1 text-primary" />
              <p className="font-medium">{players.current}/{players.max}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-primary fill-primary" : "text-muted-foreground"} 
            />
          ))}
          <span className="ml-2 text-sm">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
        <Button className="w-full bg-primary">
          Подключиться
        </Button>
        <Button variant="outline" className="flex-shrink-0">
          ⓘ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServerCard;
