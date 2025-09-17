import { ArrowLeft, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusCard from "./BusCard";
import { Bus } from "@/data/busData";

interface ArrivalTimesProps {
  buses: Bus[];
  stopName: string;
  onBack: () => void;
}

const ArrivalTimes = ({ buses, stopName, onBack }: ArrivalTimesProps) => {
  // Sort buses by arrival time
  const sortedBuses = [...buses].sort((a, b) => 
    parseInt(a.arrival) - parseInt(b.arrival)
  );

  const getNextBusInfo = () => {
    const nextBus = sortedBuses[0];
    const minutes = parseInt(nextBus.arrival);
    if (minutes <= 3) return { text: "Arriving Now!", color: "text-transit-warning", bg: "bg-transit-warning/10" };
    if (minutes <= 5) return { text: "Almost Here!", color: "text-transit-info", bg: "bg-transit-info/10" };
    return { text: "On Schedule", color: "text-transit-success", bg: "bg-transit-success/10" };
  };

  const nextBusInfo = getNextBusInfo();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center mb-6 animate-fade-in">
          <Button
            variant="outline"
            size="icon"
            onClick={onBack}
            className="mr-4 hover:scale-105 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            🕒 Arrival Times
          </h1>
        </div>

        {/* Status Summary Card */}
        <div className={`mb-6 p-5 ${nextBusInfo.bg} border border-border rounded-2xl shadow-card animate-scale-in`}>
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{stopName}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {sortedBuses.length} buses
              </div>
              <div className={`text-sm font-semibold ${nextBusInfo.color}`}>
                {nextBusInfo.text}
              </div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${nextBusInfo.color}`}>
                {sortedBuses[0]?.arrival}
              </div>
              <div className="text-xs text-muted-foreground">Next arrival</div>
            </div>
          </div>
        </div>

        {/* Performance Indicator */}
        <div className="mb-6 p-4 bg-muted/30 rounded-xl flex items-center gap-3 animate-slide-up">
          <TrendingUp className="h-5 w-5 text-transit-success" />
          <div>
            <div className="text-sm font-semibold text-foreground">Service Status</div>
            <div className="text-xs text-transit-success">All buses running on time</div>
          </div>
        </div>

        {/* Bus Cards */}
        <div className="space-y-4">
          {sortedBuses.map((bus, index) => (
            <div key={`${bus.busNo}-${index}`} className="animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <BusCard bus={bus} variant="arrival" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            ⏱️ Times are estimates based on current traffic conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrivalTimes;