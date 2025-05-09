import { Alert, AlertDescription } from "@/components/ui/alert";
import { PredictionResult } from "@/types";

interface ResultsDisplayProps {
  result: PredictionResult | null;
  isLoading: boolean;
  error?: string;
}

const ResultsDisplay = ({ result, isLoading, error }: ResultsDisplayProps) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-montserrat font-semibold text-gray-900 flex items-center">
          <i className="fas fa-chart-line text-[#4CAF50] mr-2"></i> AI Recommendations
        </h3>
        <p className="text-sm text-gray-500 mt-1">Based on ANFIS fuzzy logic system trained on Moroccan agricultural data</p>
      </div>
      
      {isLoading && (
        <div className="py-10 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
          <p className="mt-4 text-gray-600">Analyzing environmental conditions...</p>
        </div>
      )}
      
      {error && !isLoading && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {!isLoading && !error && (
        <div>
          <div className="rounded-lg overflow-hidden mb-6 h-48" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&h=400')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          
          {result ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F5DC] rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-1 flex items-center">
                  <i className="fas fa-tint text-[#4CAF50] mr-2"></i> Irrigation Recommendation
                </h4>
                <p className="text-2xl font-bold text-[#4CAF50]">{result.irrigation}</p>
                <p className="text-sm text-gray-600 mt-1">Optimal water amount for current conditions</p>
              </div>
              
              <div className="bg-[#F5F5DC] rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-1 flex items-center">
                  <i className="fas fa-seedling text-[#4CAF50] mr-2"></i> Recommended Crops
                </h4>
                <p className="text-lg font-medium text-gray-800">{result.crops}</p>
                <p className="text-sm text-gray-600 mt-1">Best suited for your conditions</p>
              </div>
              
              <div className="bg-[#F5F5DC] rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-1 flex items-center">
                  <i className="fas fa-calendar-alt text-[#4CAF50] mr-2"></i> Planting Schedule
                </h4>
                <p className="text-lg font-medium text-gray-800">{result.plantingSchedule}</p>
                <p className="text-sm text-gray-600 mt-1">Optimal planting window</p>
              </div>
              
              <div className="bg-[#F5F5DC] rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-1 flex items-center">
                  <i className="fas fa-flask text-[#4CAF50] mr-2"></i> Soil Amendment
                </h4>
                <p className="text-lg font-medium text-gray-800">{result.soilAmendment}</p>
                <p className="text-sm text-gray-600 mt-1">Based on soil pH and conditions</p>
              </div>
              
              <div className="md:col-span-2 mt-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-montserrat font-semibold text-blue-800 mb-1 flex items-center">
                  <i className="fas fa-info-circle text-blue-500 mr-2"></i> System Confidence
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-[#4CAF50] h-2.5 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Our system shows {result.confidence}% confidence in these recommendations based on available data and similar conditions
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-arrow-left text-xl mb-2"></i>
              <p>Enter your farm conditions and submit the form to get AI-powered recommendations</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
