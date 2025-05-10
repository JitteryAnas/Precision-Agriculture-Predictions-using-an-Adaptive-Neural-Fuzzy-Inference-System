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
        <meta name="description" content="Get AI predictions for your farm using our advanced ANFIS-powered tool with 13 input parameters for precise agricultural recommendations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Agriculture Predictions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our advanced AI model to get precise recommendations for your farm's optimal performance
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-600">
                <h2 className="text-2xl font-semibold text-white">Input Parameters</h2>
                <p className="text-green-100 mt-1">Fill in your farm's data to get AI-powered insights</p>
              </div>
              <div className="p-6">
                <PredictionForm 
                  onSubmit={handlePredict} 
                  isLoading={predictionMutation.isPending} 
                />
              </div>
            </div>
            
            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                <h2 className="text-2xl font-semibold text-white">AI Analysis Results</h2>
                <p className="text-blue-100 mt-1">Your personalized recommendations will appear here</p>
              </div>
              <div className="p-6">
                <ResultsDisplay 
                  result={predictionResult} 
                  isLoading={predictionMutation.isPending} 
                  error={predictionMutation.error ? String(predictionMutation.error) : undefined}
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-green-600 mb-4">
                <i className="fas fa-robot text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Our advanced ANFIS model processes multiple parameters to provide accurate predictions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-green-600 mb-4">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Insights</h3>
              <p className="text-gray-600">Get detailed recommendations for water, soil, and crop management</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-green-600 mb-4">
                <i className="fas fa-leaf text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Farming</h3>
              <p className="text-gray-600">Optimize resource usage and improve crop yield with data-driven decisions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Predict;
