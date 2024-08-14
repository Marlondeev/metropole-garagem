import React from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const handleRemoveVehicle = async () => {
    try {
      const response = await fetch("/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plate: vehicle.plate,
          model: vehicle.model,
          color: vehicle.color,
          customization: vehicle.customization,
          owner: vehicle.owner,
        }),
      });

      if (response.ok) {
        console.log("Veículo removido com sucesso!");
      } else {
        console.error("Erro ao remover o veículo");
      }
    } catch (error) {
      console.error("Erro ao se comunicar com o servidor:", error);
    }
  };

  return (
    <>
      <div className="vehicle-details-container">
        <div className="vehicle-details-content">
          <h2>{vehicle.model}</h2>
          <ProgressBar label="Engine Health" value={80} />
          <ProgressBar label="Light Health" value={70} />
          <ProgressBar label="Vehicle Health" value={50} />
          <button className="custom-button" onClick={handleRemoveVehicle}>
            Retire o veículo da garagem
          </button>
        </div>
      </div>
      <div className="vehicle-image-principal">
        <img
          src={vehicle.image}
          alt={vehicle.model}
          className="vehicle-image-detalhes"
        />
      </div>
    </>
  );
}
