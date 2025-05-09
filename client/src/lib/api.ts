import { apiRequest } from "./queryClient";
import { PredictionParams, PredictionResult } from "@/types";

export const predictIrrigation = async (params: PredictionParams): Promise<PredictionResult> => {
  const response = await apiRequest("POST", "/api/predict", params);
  return response.json();
};
