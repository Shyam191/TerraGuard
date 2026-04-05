// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const REPORTS_PATH = path.join(__dirname, 'data', 'reports.json');
const AI_BASE = process.env.AI_BASE || 'http://127.0.0.1:5001';

function loadReports() {
    try {
        return JSON.parse(fs.readFileSync(REPORTS_PATH));
    } catch (e) {
        return [];
    }
}
function saveReports(arr) {
    fs.writeFileSync(REPORTS_PATH, JSON.stringify(arr, null, 2));
}

// Proxy detection endpoint: forwards bbox to AI microservice
app.get('/api/detections', async (req, res) => {
    try {
        const params = {
            lat_min: req.query.lat_min,
            lat_max: req.query.lat_max,
            lng_min: req.query.lng_min,
            lng_max: req.query.lng_max
        };
        const resp = await axios.get(`${AI_BASE}/detect`, { params });
        return res.json(resp.data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'AI service error' });
    }
});

// Get reports
app.get('/api/reports', (req, res) => {
    res.json(loadReports());
});

// Submit a verification / new report
app.post('/api/report', (req, res) => {
    const body = req.body;
    if (!body || !body.lat || !body.lng) return res.status(400).json({ error: 'lat,lng required' });
    const reports = loadReports();
    const rec = {
        id: 'r' + Date.now(),
        lat: body.lat,
        lng: body.lng,
        verdict: body.verdict || 'unknown',
        notes: body.notes || '',
        reporter: body.reporter || 'anonymous',
        time: new Date().toISOString()
    };
    reports.push(rec);
    saveReports(reports);
    res.json({ ok: true, report: rec });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
