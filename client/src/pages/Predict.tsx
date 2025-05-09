import { useState } from "react";
import PredictionForm from "@/components/predict/PredictionForm";
import ResultsDisplay from "@/components/predict/ResultsDisplay";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { PredictionParams, PredictionResult } from "@/types";
import { Helmet } from "react-helmet";

const Predict = () => {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const predictionMutation = useMutation({
    mutationFn: async (data: PredictionParams) => {
      const response = await apiRequest("POST", "/api/predict", data);
      return response.json();
    },
    onSuccess: (data: PredictionResult) => {
      setPredictionResult(data);
    },
  });

  const handlePredict = (formData: PredictionParams) => {
    predictionMutation.mutate(formData);
  };

  return (
    <>
      <Helmet>
        <title>Prediction Tool - AgriFuzzy</title>
        <meta name="description" content="Get AI predictions for your farm based on temperature, rainfall, humidity, and soil pH using our ANFIS-powered tool." />
      </Helmet>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900">
              Get AI Predictions for Your Farm
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your environmental data to receive intelligent recommendations for irrigation and crop management.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              <div className="p-6 md:p-8 md:col-span-2 bg-[#F5F5DC] bg-opacity-30">
                <PredictionForm 
                  onSubmit={handlePredict} 
                  isLoading={predictionMutation.isPending} 
                />
              </div>
              
              <div className="p-6 md:p-8 md:col-span-3 border-t md:border-t-0 md:border-l border-gray-200">
                <ResultsDisplay 
                  result={predictionResult} 
                  isLoading={predictionMutation.isPending} 
                  error={predictionMutation.error ? String(predictionMutation.error) : undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Predict;
