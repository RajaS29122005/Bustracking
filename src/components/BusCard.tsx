import { Clock, MapPin, Bus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus as BusType } from "@/data/busData";

interface BusCardProps {
  bus: BusType;
  variant?: "arrival" | "map";
  onClick?: () => void;
}

const BusCard = ({ bus, variant = "arrival", onClick }: BusCardProps) => {
  const getRouteColor = (busNo: string) => {
    const num = parseInt(busNo);
    if (num <= 20) return "bg-transit-route1 text-white";
    if (num <= 30) return "bg-transit-route2 text-white"; 
    if (num <= 40) return "bg-transit-route3 text-white";
    return "bg-transit-route4 text-white";
  };

  const getArrivalUrgency = (arrival: string) => {
    const minutes = parseInt(arrival);
    if (minutes <= 5) return "text-transit-warning font-bold animate-pulse";
    if (minutes <= 10) return "text-transit-info font-semibold";
    return "text-muted-foreground font-medium";
  };

  const getBusEmoji = (busNo: string) => {
    const num = parseInt(busNo);
    return num <= 25 ? "🚌" : "🚍";
  };

  return (
    <Card 
      className={`p-5 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer border border-border/50 rounded-2xl backdrop-blur-sm ${
        onClick ? "hover:scale-[1.02] hover:bg-muted/20 active:scale-[0.98]" : ""
      } animate-scale-in`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-bus-float">
              {getBusEmoji(bus.busNo)}
            </span>
            <Badge 
              className={`${getRouteColor(bus.busNo)} font-bold px-4 py-2 text-base rounded-xl shadow-sm hover:scale-105 transition-transform`}
            >
              {bus.busNo}
            </Badge>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{bus.route}</span>
            </div>
            {variant === "map" && (
              <div className="text-xs text-muted-foreground mt-1 font-mono bg-muted/30 px-2 py-1 rounded">
                📍 {bus.coords.lat.toFixed(4)}, {bus.coords.lng.toFixed(4)}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-gradient-to-r from-muted/30 to-muted/10 px-4 py-2 rounded-xl">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div className="text-right">
            <div className={`text-lg font-bold ${getArrivalUrgency(bus.arrival)}`}>
              {bus.arrival}
            </div>
            <div className="text-xs text-muted-foreground">ETA</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusCard;