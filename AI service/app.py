# ai_service/app.py
from flask import Flask, request, jsonify
import json, os

app = Flask(__name__)
BASE = os.path.dirname(__file__)
DETECTIONS_FILE = os.path.join(BASE, 'detections.json')

with open(DETECTIONS_FILE) as f:
    DETECTIONS = json.load(f)

@app.route('/detect', methods=['GET'])
def detect():
    """
    Query params (optional):
      - lat_min, lat_max, lng_min, lng_max
    Returns simulated detections inside bounding box; in real system replace with model inference.
    """
    lat_min = float(request.args.get('lat_min', -90))
    lat_max = float(request.args.get('lat_max', 90))
    lng_min = float(request.args.get('lng_min', -180))
    lng_max = float(request.args.get('lng_max', 180))

    out = []
    for d in DETECTIONS:
        if lat_min <= d['lat'] <= lat_max and lng_min <= d['lng'] <= lng_max:
            out.append(d)
    return jsonify({"detections": out})

@app.route('/health')
def health():
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
