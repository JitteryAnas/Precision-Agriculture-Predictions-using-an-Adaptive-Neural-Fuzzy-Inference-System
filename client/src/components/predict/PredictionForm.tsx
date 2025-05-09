import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PredictionParams } from "@/types";

interface PredictionFormProps {
  onSubmit: (formData: PredictionParams) => void;
  isLoading: boolean;
}

const PredictionForm = ({ onSubmit, isLoading }: PredictionFormProps) => {
  const [temperature, setTemperature] = useState(25);
  const [rainfall, setRainfall] = useState(150);
  const [humidity, setHumidity] = useState(40);
  const [ph, setPh] = useState(7.0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      temperature,
      rainfall,
      humidity,
      ph
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
          <i className="fas fa-temperature-high text-[#4CAF50] mr-2"></i> Temperature (°C)
        </label>
        <Slider
          id="temperature"
          min={0}
          max={50}
          step={1}
          defaultValue={[temperature]}
          onValueChange={(value) => setTemperature(value[0])}
          showValue={true}
          unit="°C"
        />
      </div>
      
      <div>
        <label htmlFor="rainfall" className="block text-sm font-medium text-gray-700 mb-1">
          <i className="fas fa-cloud-rain text-[#4CAF50] mr-2"></i> Rainfall (mm)
        </label>
        <Slider
          id="rainfall"
          min={0}
          max={500}
          step={1}
          defaultValue={[rainfall]}
          onValueChange={(value) => setRainfall(value[0])}
          showValue={true}
          unit="mm"
        />
      </div>
      
      <div>
        <label htmlFor="humidity" className="block text-sm font-medium text-gray-700 mb-1">
          <i className="fas fa-water text-[#4CAF50] mr-2"></i> Humidity (%)
        </label>
        <Slider
          id="humidity"
          min={0}
          max={100}
          step={1}
          defaultValue={[humidity]}
          onValueChange={(value) => setHumidity(value[0])}
          showValue={true}
          unit="%"
        />
      </div>
      
      <div>
        <label htmlFor="ph" className="block text-sm font-medium text-gray-700 mb-1">
          <i className="fas fa-vial text-[#4CAF50] mr-2"></i> Soil pH
        </label>
        <Slider
          id="ph"
          min={0}
          max={14}
          step={0.1}
          defaultValue={[ph]}
          onValueChange={(value) => setPh(value[0])}
          showValue={true}
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition shadow-md flex justify-center items-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <i className="fas fa-robot mr-2"></i> Generate Recommendations
          </>
        )}
      </Button>
    </form>
  );
};

export default PredictionForm;
