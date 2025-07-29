#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the Firebase API key from environment variable
const firebaseApiKey = process.env.FIREBASE_API_KEY;

if (!firebaseApiKey) {
    console.error('Error: FIREBASE_API_KEY environment variable is not set');
    process.exit(1);
}

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace the placeholder with the actual API key
content = content.replace('FIREBASE_API_KEY_PLACEHOLDER', firebaseApiKey);

// Write the updated content back to index.html
fs.writeFileSync(indexPath, content);

console.log('✅ Firebase API key successfully injected into index.html');