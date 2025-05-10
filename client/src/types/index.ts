export interface PredictionParams {
  temperature: number;
  rainfall: number;
  humidity: number;
  ph: number;
  soil_type: string;
  region: string;
  previous_crop: string;
  faosoil: string;
  domsoi: string;
  avg_temp: number;
  soil_moisture: number;
  nitrogen_level: number;
  phosphorus_level: number;
}

export interface PredictionResult {
  water_requirement: number;
  irrigation_schedule: string;
  fertilizer_recommendation: string;
  soil_preparation: string;
  planting_date: string;
  harvesting_date: string;
  pest_risk: string;
  disease_risk: string;
}
