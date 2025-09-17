export interface Bus {
  busNo: string;
  route: string;
  arrival: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export interface BusStop {
  name: string;
  background_image: string;
  location: {
    lat: number;
    lng: number;
  };
  buses: Bus[];
}

export const busStops: Record<string, BusStop> = {
  YELLANALLI: {
    name: "Yellanalli Bus Stop",
    background_image: "/src/assets/bus-stop-background.jpg",
    location: { lat: 12.9716, lng: 77.5946 },
    buses: [
      {
        busNo: "21",
        route: "Main Market → City Mall",
        arrival: "5 mins",
        coords: { lat: 12.9650, lng: 77.5900 }
      },
      {
        busNo: "30", 
        route: "City Hospital → City Mall",
        arrival: "12 mins",
        coords: { lat: 12.9600, lng: 77.5850 }
      },
      {
        busNo: "45",
        route: "Yellanalli → City Hospital", 
        arrival: "20 mins",
        coords: { lat: 12.9500, lng: 77.5800 }
      },
      {
        busNo: "12",
        route: "Main Market → City Hospital",
        arrival: "3 mins", 
        coords: { lat: 12.9700, lng: 77.5900 }
      },
      {
        busNo: "19",
        route: "City Mall → City Hospital",
        arrival: "10 mins",
        coords: { lat: 12.9650, lng: 77.5850 }
      },
      {
        busNo: "28", 
        route: "Yellanalli → City Mall",
        arrival: "15 mins",
        coords: { lat: 12.9600, lng: 77.5800 }
      }
    ]
  }
};

// Simulate QR scan - for prototype, we'll use YELLANALLI
export const getCurrentBusStop = (): BusStop => {
  return busStops.YELLANALLI;
};