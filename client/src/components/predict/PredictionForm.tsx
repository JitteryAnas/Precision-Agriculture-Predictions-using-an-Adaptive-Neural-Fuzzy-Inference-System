import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PredictionParams } from "@/types";

interface PredictionFormProps {
  onSubmit: (data: PredictionParams) => void;
  isLoading: boolean;
}

const PredictionForm = ({ onSubmit, isLoading }: PredictionFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<PredictionParams>({
    temperature: 0,
    rainfall: 0,
    humidity: 0,
    ph: 0,
    soil_type: "",
    region: "",
    previous_crop: "",
    faosoil: "",
    domsoi: "",
    avg_temp: 0,
    soil_moisture: 0,
    nitrogen_level: 0,
    phosphorus_level: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Environmental Data Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <i className="fas fa-cloud-sun text-green-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.form.environmentalData.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.form.environmentalData.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label htmlFor="temperature" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-green-600 transition-colors">
              {t('predict.form.environmentalData.temperature')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="temperature"
                id="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-temperature-high absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="rainfall" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-green-600 transition-colors">
              {t('predict.form.environmentalData.rainfall')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="rainfall"
                id="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-cloud-rain absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="humidity" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-green-600 transition-colors">
              {t('predict.form.environmentalData.humidity')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="humidity"
                id="humidity"
                value={formData.humidity}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-tint absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="avg_temp" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-green-600 transition-colors">
              {t('predict.form.environmentalData.avgTemp')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="avg_temp"
                id="avg_temp"
                value={formData.avg_temp}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-thermometer-half absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Soil Data Section */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 p-2 rounded-lg mr-3">
            <i className="fas fa-mountain text-amber-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.form.soilData.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.form.soilData.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label htmlFor="soil_type" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-amber-600 transition-colors">
              {t('predict.form.soilData.soilType')}
            </label>
            <div className="relative">
              <select
                name="soil_type"
                id="soil_type"
                value={formData.soil_type}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm pl-8 transition-all duration-200"
                required
              >
                <option value="">{t('predict.form.soilData.selectType')}</option>
                <option value="clay">{t('predict.form.soilData.types.clay')}</option>
                <option value="sandy">{t('predict.form.soilData.types.sandy')}</option>
                <option value="loamy">{t('predict.form.soilData.types.loamy')}</option>
                <option value="silt">{t('predict.form.soilData.types.silt')}</option>
              </select>
              <i className="fas fa-layer-group absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-amber-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="ph" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-amber-600 transition-colors">
              {t('predict.form.soilData.ph')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="ph"
                id="ph"
                value={formData.ph}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-flask absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-amber-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="soil_moisture" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-amber-600 transition-colors">
              {t('predict.form.soilData.moisture')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="soil_moisture"
                id="soil_moisture"
                value={formData.soil_moisture}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-water absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-amber-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="nitrogen_level" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-amber-600 transition-colors">
              {t('predict.form.soilData.nitrogen')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="nitrogen_level"
                id="nitrogen_level"
                value={formData.nitrogen_level}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-atom absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-amber-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="phosphorus_level" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-amber-600 transition-colors">
              {t('predict.form.soilData.phosphorus')}
            </label>
            <div className="relative">
              <input
                type="number"
                name="phosphorus_level"
                id="phosphorus_level"
                value={formData.phosphorus_level}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-flask absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-amber-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Location and History Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <i className="fas fa-map-marker-alt text-blue-600 text-lg"></i>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{t('predict.form.locationHistory.title')}</h3>
            <p className="text-xs text-gray-500">{t('predict.form.locationHistory.description')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label htmlFor="region" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
              {t('predict.form.locationHistory.region')}
            </label>
            <div className="relative">
              <input
                type="text"
                name="region"
                id="region"
                value={formData.region}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-globe absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="previous_crop" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
              {t('predict.form.locationHistory.previousCrop')}
            </label>
            <div className="relative">
              <input
                type="text"
                name="previous_crop"
                id="previous_crop"
                value={formData.previous_crop}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-seedling absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="faosoil" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
              {t('predict.form.locationHistory.faoClassification')}
            </label>
            <div className="relative">
              <input
                type="text"
                name="faosoil"
                id="faosoil"
                value={formData.faosoil}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-book absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500"></i>
            </div>
          </div>

          <div className="group">
            <label htmlFor="domsoi" className="block text-xs font-medium text-gray-700 mb-1 group-hover:text-blue-600 transition-colors">
              {t('predict.form.locationHistory.dominantSoil')}
            </label>
            <div className="relative">
              <input
                type="text"
                name="domsoi"
                id="domsoi"
                value={formData.domsoi}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm pl-8 transition-all duration-200"
                required
              />
              <i className="fas fa-mountain absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-[1.02]"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('predict.form.processing')}
            </>
          ) : (
            <>
              <i className="fas fa-magic mr-2"></i>
              {t('predict.form.submit')}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default PredictionForm;
