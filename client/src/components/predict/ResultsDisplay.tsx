import { useTranslation } from "react-i18next";
import { PredictionResult } from "@/types";

interface ResultsDisplayProps {
  result: PredictionResult | null;
  isLoading: boolean;
  error: string | null;
}

const ResultsDisplay = ({ result, isLoading, error }: ResultsDisplayProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
        <p className="text-gray-600 text-sm">{t('predict.results.analyzing')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-xl border border-red-100">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <i className="fas fa-exclamation-circle text-red-500 text-2xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{t('common.error')}</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
        <i className="fas fa-chart-line text-gray-400 text-4xl mb-4"></i>
        <p className="text-gray-600 text-sm text-center">{t('predict.results.noPredictions')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Water Management Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-blue-100">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <i className="fas fa-water text-blue-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.results.waterManagement.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.results.waterManagement.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.waterManagement.waterRequirement')}</span>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {result.water_requirement} mm
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.waterManagement.waterRequirementDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.waterManagement.irrigation')}</span>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {result.irrigation_schedule}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.waterManagement.irrigationDesc')}</p>
          </div>
        </div>
      </div>

      {/* Soil Management Section */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 shadow-sm border border-amber-100">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 p-2 rounded-lg mr-3">
            <i className="fas fa-mountain text-amber-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.results.soilManagement.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.results.soilManagement.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.soilManagement.fertilizer')}</span>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                {result.fertilizer_recommendation}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.soilManagement.fertilizerDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.soilManagement.soilPrep')}</span>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                {result.soil_preparation}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.soilManagement.soilPrepDesc')}</p>
          </div>
        </div>
      </div>

      {/* Crop Management Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 shadow-sm border border-green-100">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <i className="fas fa-seedling text-green-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.results.cropManagement.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.results.cropManagement.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.cropManagement.planting')}</span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {result.planting_date}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.cropManagement.plantingDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.cropManagement.harvesting')}</span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {result.harvesting_date}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.cropManagement.harvestingDesc')}</p>
          </div>
        </div>
      </div>

      {/* Risk Assessment Section */}
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-5 shadow-sm border border-red-100">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-2 rounded-lg mr-3">
            <i className="fas fa-exclamation-triangle text-red-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.results.riskAssessment.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.results.riskAssessment.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.riskAssessment.pests')}</span>
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                {result.pest_risk}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.riskAssessment.pestsDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{t('predict.results.riskAssessment.diseases')}</span>
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                {result.disease_risk}
              </span>
            </div>
            <p className="text-xs text-gray-500">{t('predict.results.riskAssessment.diseasesDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
