export interface PredictionParams {
  temperature: number;
  rainfall: number;
  humidity: number;
  ph: number;
}

export interface PredictionResult {
  irrigation: string;
  crops: string;
  plantingSchedule: string;
  soilAmendment: string;
  confidence: number;
}
