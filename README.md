# TerraGuard: Protecting Earth through AI and Open Data

## Overview

TerraGuard is a web-based platform that detects and maps illegal waste dumping sites using satellite imagery and AI-assisted analysis, combined with community-driven verification.

Illegal dumping of e-waste, construction debris, and hazardous materials poses significant environmental and public health risks. TerraGuard leverages open satellite data to identify potential dump sites and enables citizens and organizations to take action efficiently.

---

## Problem Statement

Illegal waste dumping often occurs in remote or unmonitored areas, making detection and response difficult. Existing methods rely on manual inspections or expensive hardware solutions, resulting in delays and inefficiencies.

---

## Solution

TerraGuard provides a software-driven solution that:

* Uses satellite imagery to identify suspicious dump zones
* Applies AI-based pattern recognition to detect anomalies
* Displays results on an interactive map
* Enables users to verify and report dump sites

---

## Key Features

* AI-assisted detection using satellite imagery
* Interactive map with marked potential dump zones
* Severity index based on environmental risk factors
* Temporal tracking to detect new dump sites over time
* Crowdsourced verification and reporting system
* Explainable AI to justify flagged locations

---

## Technology Stack

Frontend:

* React.js
* Leaflet.js
* Tailwind CSS

Backend:

* Node.js (Express)

AI Module:

* Python (Flask)
* OpenCV / TensorFlow (prototype level)

Database:

* JSON-based storage (for prototype implementation)

---

## How It Works

1. Satellite imagery is processed using AI-based analysis
2. Potential dump sites are detected based on visual and contextual patterns
3. Identified locations are displayed on an interactive map
4. Users verify or report dump sites
5. Verified data can be shared with relevant authorities or organizations

---

## Demo Instructions

### Start AI Service

```bash
cd ai_service
python app.py
```

### Start Backend

```bash
cd backend
npm install
node server.js
```

### Start Frontend

```bash
cd frontend
npm install
npm start
```

Access the application at:

```
http://localhost:1234
```

---

## Impact

* Enables early detection of illegal dumping
* Reduces environmental and public health risks
* Encourages citizen participation in environmental monitoring
* Supports data-driven decision-making

---

## Future Scope

* Integration with real-time satellite APIs (Sentinel, Landsat)
* Advanced deep learning models for improved detection accuracy
* Dashboard for government and municipal authorities
* Mobile application for easier reporting

---

## Team

* Shyam Hussain
* (Add team members)

---

## License

This project is licensed under the MIT License.
