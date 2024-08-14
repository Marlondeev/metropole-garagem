import { useState } from "react";
import VehicleCard from "./components/Vehicle/VehicleCard/VehicleCard";
import VehicleDetails from "./components/Vehicle/VehicleDetails/VehicleDetails";
import ferrariImage from "../../assets/images/carro1.png";
import lambo from "../../assets/images/carro2.png";
import moto from "../../assets/images/moto.png";

export default function Garage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [vehicles] = useState<Vehicle[]>([
    {
      id: 1,
      plate: "ABC1234",
      model: "Ferrari 488",
      color: "Red",
      customization: '{"spoiler": "high", "wheels": "sport"}',
      owner: "player1",
      image: ferrariImage,
    },
    {
      id: 2,
      plate: "XYZ5678",
      model: "Lamborghini",
      color: "Yellow",
      customization: '{"spoiler": "low", "wheels": "classic"}',
      owner: "player1",
      image: lambo,
    },
    {
      id: 3,
      plate: "JKL9101",
      model: "Porsche 911",
      color: "Black",
      customization: '{"spoiler": "none", "wheels": "race"}',
      owner: "player1",
      image: moto,
    },
  ]);
  return (
    <div className="garage-container">
      <div className="vehicle-details">
        {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
      </div>
      <div className="vehicle-cards-container">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onSelect={() => setSelectedVehicle(vehicle)}
          />
        ))}
      </div>
    </div>
  );
}
