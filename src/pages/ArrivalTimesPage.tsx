import { useNavigate } from "react-router-dom";
import ArrivalTimes from "@/components/ArrivalTimes";
import { getCurrentBusStop } from "@/data/busData";

const ArrivalTimesPage = () => {
  const navigate = useNavigate();
  const busStop = getCurrentBusStop();

  return (
    <ArrivalTimes
      buses={busStop.buses}
      stopName={busStop.name}
      onBack={() => navigate("/")}
    />
  );
};

export default ArrivalTimesPage;