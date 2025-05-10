from flask import Flask, request, jsonify
import os
import sys
from pathlib import Path

# Add current directory to path so we can import the models module
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))

# Import the model
from models.agri_model import AgriFuzzyProSystem

app = Flask(__name__)

# Initialize the model
model = AgriFuzzyProSystem(data_path="data/agriculture_data.csv")

# CORS handling for development
@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/api/predict', methods=['POST'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({})
        
    try:
        data = request.get_json()
        
        # Validate input data
        required_fields = [
            'temperature', 'rainfall', 'humidity', 'ph',
            'soil_type', 'region', 'previous_crop',
            'faosoil', 'domsoi', 'avg_temp', 'soil_moisture',
            'nitrogen_level', 'phosphorus_level'
        ]
        
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Get prediction from ANFIS model
        result = model.predict({
            'temperature': float(data['temperature']),
            'rainfall': float(data['rainfall']),
            'humidity': float(data['humidity']),
            'ph': float(data['ph']),
            'soil_type': data['soil_type'],
            'region': data['region'],
            'previous_crop': data['previous_crop'],
            'faosoil': data['faosoil'],
            'domsoi': data['domsoi'],
            'avg_temp': float(data['avg_temp']),
            'soil_moisture': float(data['soil_moisture']),
            'nitrogen_level': float(data['nitrogen_level']),
            'phosphorus_level': float(data['phosphorus_level'])
        })
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)
