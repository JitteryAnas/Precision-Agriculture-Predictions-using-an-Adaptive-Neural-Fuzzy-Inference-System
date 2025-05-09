from simpful import *

class AnfisModel:
    def __init__(self):
        # Create a fuzzy system
        self.FS = FuzzySystem()
        
        # Define fuzzy sets for temperature
        temp_low = FuzzySet(function=Triangular_MF(a=0, b=10, c=20), term="low")
        temp_medium = FuzzySet(function=Triangular_MF(a=15, b=25, c=35), term="medium")
        temp_high = FuzzySet(function=Triangular_MF(a=30, b=40, c=50), term="high")
        self.FS.add_linguistic_variable("Temperature", LinguisticVariable([temp_low, temp_medium, temp_high], universe_of_discourse=[0, 50]))
        
        # Define fuzzy sets for rainfall
        rain_low = FuzzySet(function=Triangular_MF(a=0, b=50, c=150), term="low")
        rain_medium = FuzzySet(function=Triangular_MF(a=100, b=200, c=300), term="medium")
        rain_high = FuzzySet(function=Triangular_MF(a=250, b=375, c=500), term="high")
        self.FS.add_linguistic_variable("Rainfall", LinguisticVariable([rain_low, rain_medium, rain_high], universe_of_discourse=[0, 500]))
        
        # Define fuzzy sets for humidity
        humidity_low = FuzzySet(function=Triangular_MF(a=0, b=20, c=40), term="low")
        humidity_medium = FuzzySet(function=Triangular_MF(a=30, b=50, c=70), term="medium")
        humidity_high = FuzzySet(function=Triangular_MF(a=60, b=80, c=100), term="high")
        self.FS.add_linguistic_variable("Humidity", LinguisticVariable([humidity_low, humidity_medium, humidity_high], universe_of_discourse=[0, 100]))
        
        # Define fuzzy sets for pH
        ph_acidic = FuzzySet(function=Triangular_MF(a=0, b=3.5, c=6.5), term="acidic")
        ph_neutral = FuzzySet(function=Triangular_MF(a=5.5, b=7, c=8.5), term="neutral")
        ph_alkaline = FuzzySet(function=Triangular_MF(a=7.5, b=10.5, c=14), term="alkaline")
        self.FS.add_linguistic_variable("pH", LinguisticVariable([ph_acidic, ph_neutral, ph_alkaline], universe_of_discourse=[0, 14]))
        
        # Define fuzzy sets for output (irrigation recommendation)
        water_low = FuzzySet(function=Triangular_MF(a=0, b=3, c=6), term="low")
        water_medium = FuzzySet(function=Triangular_MF(a=5, b=7.5, c=10), term="medium")
        water_high = FuzzySet(function=Triangular_MF(a=9, b=12, c=15), term="high")
        self.FS.add_linguistic_variable("Irrigation", LinguisticVariable([water_low, water_medium, water_high], universe_of_discourse=[0, 15]))
        
        # Add fuzzy rules
        self.FS.add_rules([
            "IF (Temperature IS high) AND (Rainfall IS low) AND (Humidity IS low) THEN (Irrigation IS high)",
            "IF (Temperature IS high) AND (Rainfall IS low) AND (Humidity IS medium) THEN (Irrigation IS high)",
            "IF (Temperature IS high) AND (Rainfall IS low) AND (Humidity IS high) THEN (Irrigation IS medium)",
            "IF (Temperature IS high) AND (Rainfall IS medium) AND (Humidity IS low) THEN (Irrigation IS medium)",
            "IF (Temperature IS high) AND (Rainfall IS medium) AND (Humidity IS medium) THEN (Irrigation IS medium)",
            "IF (Temperature IS high) AND (Rainfall IS medium) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS high) AND (Rainfall IS high) AND (Humidity IS low) THEN (Irrigation IS medium)",
            "IF (Temperature IS high) AND (Rainfall IS high) AND (Humidity IS medium) THEN (Irrigation IS low)",
            "IF (Temperature IS high) AND (Rainfall IS high) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS medium) AND (Rainfall IS low) AND (Humidity IS low) THEN (Irrigation IS high)",
            "IF (Temperature IS medium) AND (Rainfall IS low) AND (Humidity IS medium) THEN (Irrigation IS medium)",
            "IF (Temperature IS medium) AND (Rainfall IS low) AND (Humidity IS high) THEN (Irrigation IS medium)",
            "IF (Temperature IS medium) AND (Rainfall IS medium) AND (Humidity IS low) THEN (Irrigation IS medium)",
            "IF (Temperature IS medium) AND (Rainfall IS medium) AND (Humidity IS medium) THEN (Irrigation IS medium)",
            "IF (Temperature IS medium) AND (Rainfall IS medium) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS medium) AND (Rainfall IS high) AND (Humidity IS low) THEN (Irrigation IS low)",
            "IF (Temperature IS medium) AND (Rainfall IS high) AND (Humidity IS medium) THEN (Irrigation IS low)",
            "IF (Temperature IS medium) AND (Rainfall IS high) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS low) AND (Humidity IS low) THEN (Irrigation IS medium)",
            "IF (Temperature IS low) AND (Rainfall IS low) AND (Humidity IS medium) THEN (Irrigation IS medium)",
            "IF (Temperature IS low) AND (Rainfall IS low) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS medium) AND (Humidity IS low) THEN (Irrigation IS medium)",
            "IF (Temperature IS low) AND (Rainfall IS medium) AND (Humidity IS medium) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS medium) AND (Humidity IS high) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS high) AND (Humidity IS low) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS high) AND (Humidity IS medium) THEN (Irrigation IS low)",
            "IF (Temperature IS low) AND (Rainfall IS high) AND (Humidity IS high) THEN (Irrigation IS low)"
        ])
        
        # Set defuzzification method - Simpful v2.12.0 uses the parameter in inference()
        # Default is already centroid, so we don't need to specify it here
    
    def predict(self, temperature, rainfall, humidity, ph):
        # Set input variables
        self.FS.set_variable("Temperature", temperature)
        self.FS.set_variable("Rainfall", rainfall)
        self.FS.set_variable("Humidity", humidity)
        self.FS.set_variable("pH", ph)
        
        # Perform inference
        result = self.FS.inference()
        irrigation_value = result["Irrigation"]
        
        # Generate crop recommendations based on inputs
        crops = self._recommend_crops(temperature, rainfall, humidity, ph)
        
        # Generate planting schedule
        planting_schedule = self._recommend_planting_schedule(temperature, rainfall)
        
        # Generate soil amendment recommendations
        soil_amendment = self._recommend_soil_amendment(ph, temperature)
        
        # Calculate confidence (simplified demonstration)
        confidence = 85  # Fixed value for demonstration
        
        return {
            "irrigation": f"{irrigation_value:.1f} L/m²/day",
            "crops": crops,
            "plantingSchedule": planting_schedule,
            "soilAmendment": soil_amendment,
            "confidence": confidence
        }
    
    def _recommend_crops(self, temperature, rainfall, humidity, ph):
        # Simplified crop recommendation logic
        if temperature > 30:
            if rainfall < 100:
                return "Olives, Figs, Almonds"
            else:
                return "Citrus, Dates, Pomegranates"
        elif temperature > 20:
            if rainfall > 200:
                return "Wheat, Barley, Chickpeas"
            else:
                return "Corn, Sunflower, Sorghum"
        else:
            return "Potatoes, Carrots, Onions"
    
    def _recommend_planting_schedule(self, temperature, rainfall):
        # Simplified planting schedule logic
        if temperature > 30:
            if rainfall < 100:
                return "Late February to early April"
            else:
                return "Mid-March to late April"
        elif temperature > 20:
            if rainfall > 200:
                return "October to November"
            else:
                return "April to May"
        else:
            return "September to October"
    
    def _recommend_soil_amendment(self, ph, temperature):
        # Simplified soil amendment logic
        if ph < 6.5:
            return "Limestone addition + low nitrogen"
        elif ph > 7.5:
            return "Sulfur addition + organic matter"
        else:
            if temperature > 30:
                return "Moderate nitrogen + phosphorus"
            elif temperature > 20:
                return "Standard NPK fertilizer"
            else:
                return "Compost + potassium"

# Create an instance of the model
anfis_model = AnfisModel()
