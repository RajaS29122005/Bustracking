import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainActionsProps {
  onArrivalTimeClick: () => void;
  onAvailableBusesClick: () => void;
  busCount: number;
}

const MainActions = ({ onArrivalTimeClick, onAvailableBusesClick, busCount }: MainActionsProps) => {
  return (
    <div className="space-y-6 animate-slide-up">
      <Button
        onClick={onArrivalTimeClick}
        className="w-full h-20 bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-bold text-xl shadow-transit transition-all duration-300 hover:scale-[1.02] hover:shadow-elevated ripple-effect rounded-2xl"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl">🕒</span>
          <div className="flex flex-col items-start">
            <span>Arrival Times</span>
            <span className="text-sm font-normal opacity-90">Check when buses arrive</span>
          </div>
        </div>
      </Button>
      
      <Button
        onClick={onAvailableBusesClick}
        className="w-full h-20 bg-gradient-secondary hover:bg-secondary-hover text-secondary-foreground font-bold text-xl shadow-transit transition-all duration-300 hover:scale-[1.02] hover:shadow-elevated ripple-effect rounded-2xl"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl">🚌</span>
          <div className="flex flex-col items-start">
            <span>Available Buses ({busCount})</span>
            <span className="text-sm font-normal opacity-90">View live locations</span>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default MainActions;