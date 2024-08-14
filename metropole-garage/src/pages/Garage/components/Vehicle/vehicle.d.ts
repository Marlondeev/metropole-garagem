interface Vehicle {
  id: number;
  plate: string;
  model: string;
  color: string;
  customization: string;
  owner: string;
  image: string;
}

interface VehicleDetailsProps {
  vehicle: Vehicle;
}
