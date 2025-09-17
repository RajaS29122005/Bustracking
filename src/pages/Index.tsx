import { useNavigate } from "react-router-dom";
import BusStopHeader from "@/components/BusStopHeader";
import MainActions from "@/components/MainActions";
import { getCurrentBusStop } from "@/data/busData";
import busStopBackground from "@/assets/bus-stop-background.jpg";

const Index = () => {
  const navigate = useNavigate();
  const busStop = getCurrentBusStop();

  const handleArrivalTimeClick = () => {
    navigate("/arrivals");
  };

  const handleAvailableBusesClick = () => {
    navigate("/buses");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-fade-in"
        style={{ backgroundImage: `url(${busStopBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-bus-float"></div>
        <div className="absolute top-40 right-16 w-1 h-1 bg-secondary/40 rounded-full animate-bus-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent/30 rounded-full animate-bus-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-md">
          <BusStopHeader stopName={busStop.name} />
          <MainActions 
            onArrivalTimeClick={handleArrivalTimeClick}
            onAvailableBusesClick={handleAvailableBusesClick}
            busCount={busStop.buses.length}
          />
          
          {/* Features Preview */}
          <div className="mt-10 text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="glass-effect rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>🔄</span>
                <span>Live tracking</span>
                <span>•</span>
                <span>📍</span>
                <span>GPS accuracy</span>
                <span>•</span>
                <span>⚡</span>
                <span>Real-time updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
