import { ArrowLeft, MapPin, Navigation, Zap, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bus, BusStop } from "@/data/busData";
import { useState } from "react";
import BusCard from "./BusCard";

interface AvailableBusesProps {
  busStop: BusStop;
  onBack: () => void;
}

const AvailableBuses = ({ busStop, onBack }: AvailableBusesProps) => {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4">
        <div className="max-w-md mx-auto mb-4">
          <div className="flex items-center mb-4 animate-fade-in">
            <Button
              variant="outline"
              size="icon"
              onClick={onBack}
              className="mr-4 hover:scale-105 transition-transform"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              🚌 Available Buses
            </h1>
          </div>

          {/* Status Card */}
          <div className="p-5 bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-2xl shadow-card mb-4 animate-scale-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Live Tracking Active</div>
                <div className="text-xs text-muted-foreground">{busStop.name}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-foreground">
                {busStop.buses.length} buses
              </div>
              <div className="flex items-center gap-2 text-transit-success">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-semibold">Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Placeholder */}
        <div className="h-96 mx-4 mb-4 rounded-2xl overflow-hidden border-2 border-border shadow-elevated bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative animate-scale-in">
          {/* Map Header */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4">
            <div className="glass-effect rounded-xl p-3 flex items-center gap-3">
              <Navigation className="h-5 w-5 text-primary" />
              <div className="text-sm font-semibold text-foreground">Live GPS Tracking</div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">Interactive Map View</p>
              <p className="text-sm text-muted-foreground">
                Real-time positions of {busStop.buses.length} active buses
              </p>
            </div>
          </div>
          
          {/* Animated Bus Markers */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-transit-route1 to-transit-route1/80 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg animate-bus-float"
               onClick={() => setSelectedBus(busStop.buses[0])}>
            <span>🚌</span>
            <span className="absolute -bottom-1 text-xs">{busStop.buses[0]?.busNo}</span>
          </div>
          
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-transit-route2 to-transit-route2/80 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg animate-bus-float"
               style={{animationDelay: '0.5s'}}
               onClick={() => setSelectedBus(busStop.buses[1])}>
            <span>🚍</span>
            <span className="absolute -bottom-1 text-xs">{busStop.buses[1]?.busNo}</span>
          </div>
          
          <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-gradient-to-r from-transit-route3 to-transit-route3/80 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg animate-bus-float"
               style={{animationDelay: '1s'}}
               onClick={() => setSelectedBus(busStop.buses[2])}>
            <span>🚌</span>
            <span className="absolute -bottom-1 text-xs">{busStop.buses[2]?.busNo}</span>
          </div>
          
          {/* Bus Stop Marker */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-destructive to-destructive/80 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Bottom Status Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="glass-effect rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-transit-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">
                  {busStop.buses.length} buses approaching
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Updated live
              </div>
            </div>
          </div>
        </div>

        {/* Selected Bus Details */}
        {selectedBus && (
          <div className="max-w-md mx-auto mb-4 animate-slide-up">
            <Card className="p-5 border-2 border-primary/50 bg-gradient-to-r from-primary/5 to-primary/10 shadow-elevated">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-primary text-lg">Bus Selected</h3>
              </div>
              <BusCard 
                bus={selectedBus} 
                variant="map"
                onClick={() => setSelectedBus(null)}
              />
            </Card>
          </div>
        )}

        {/* Real-time Updates Footer */}
        <div className="max-w-md mx-auto text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            🔄 Updates every 30 seconds • 📡 GPS accuracy ±5 meters
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableBuses;