import { useNavigate } from "react-router-dom";
import AvailableBuses from "@/components/AvailableBuses";
import { getCurrentBusStop } from "@/data/busData";

const AvailableBusesPage = () => {
  const navigate = useNavigate();
  const busStop = getCurrentBusStop();

  return (
    <AvailableBuses
      busStop={busStop}
      onBack={() => navigate("/")}
    />
  );
};

export default AvailableBusesPage;