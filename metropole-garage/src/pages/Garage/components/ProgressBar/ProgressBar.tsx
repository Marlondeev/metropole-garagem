import React from "react";

interface ProgressBarProps {
  label: string;
  value: number;
}

export default function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <label>{label}</label>
      <div className="progress">
        <div className="progress-value" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
