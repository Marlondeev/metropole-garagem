interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: () => void;
}

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <div className="vehicle-card" onClick={onSelect}>
      <div className="vehicle-image-container">
        <img
          src={vehicle.image}
          alt={vehicle.model}
          className="vehicle-image"
        />
      </div>
      <div className="vehicle-info">
        <h3 className="vehicle-model">{vehicle.model}</h3>
        <p className="vehicle-type">Civil Car</p>
        <div className="vehicle-plate-container">
          <p className="vehicle-plate">{vehicle.plate}</p>
        </div>
      </div>
      <div className="vehicle-actions">
        <span className="favorite-icon">★</span>
        {/* Aqui você pode adicionar mais ícones se necessário */}
      </div>
    </div>
  );
}
