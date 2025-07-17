// app.js - Tambahkan hardcoded secrets yang jelas
const express = require('express');
const app = express();

// Hardcoded secrets yang mudah terdeteksi
const API_KEY = "sk-1234567890abcdef1234567890abcdef";
const DATABASE_PASSWORD = "mySecretPassword123";
const JWT_SECRET = "super-secret-jwt-key-for-authentication";
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Atau dalam format objek
const config = {
    apiKey: "sk-prod-1234567890abcdef1234567890abcdef",
    dbPassword: "root:password123@localhost:3306/myapp",
    jwtSecret: "jwt-secret-key-12345678901234567890",
    awsAccessKey: "AKIAIOSFODNN7EXAMPLE"
};

app.get('/', (req, res) => {
    res.json({
        message: 'Hello DevSecOps!',
        // Jangan expose secret di response (ini untuk demo)
        // apiKey: API_KEY  // Ini akan terdeteksi sebagai masalah keamanan
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
