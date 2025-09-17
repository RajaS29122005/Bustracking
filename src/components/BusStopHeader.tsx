interface BusStopHeaderProps {
  stopName: string;
}

const BusStopHeader = ({ stopName }: BusStopHeaderProps) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="glass-effect rounded-2xl p-6 mb-6">
        <h1 className="text-4xl font-bold text-foreground mb-3 drop-shadow-lg">
          {stopName}
        </h1>
        <div className="w-20 h-1.5 bg-gradient-primary rounded-full mx-auto mb-2"></div>
        <p className="text-muted-foreground text-sm">
          🔍 QR Code Scanned Successfully
        </p>
      </div>
    </div>
  );
};

export default BusStopHeader;