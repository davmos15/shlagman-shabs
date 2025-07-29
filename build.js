#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Build script starting...');
console.log('Current directory:', process.cwd());
console.log('Environment variables:', Object.keys(process.env).filter(key => key.includes('FIREBASE')));

// Get the Firebase API key from environment variable
const firebaseApiKey = process.env.FIREBASE_API_KEY;

if (!firebaseApiKey) {
    console.error('Error: FIREBASE_API_KEY environment variable is not set');
    console.error('Available env vars:', Object.keys(process.env).sort().join(', '));
    process.exit(1);
}

console.log('Firebase API key found, length:', firebaseApiKey.length);

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
console.log('Reading file from:', indexPath);

try {
    let content = fs.readFileSync(indexPath, 'utf8');
    console.log('File read successfully, length:', content.length);
    
    // Check if placeholder exists
    if (content.includes('FIREBASE_API_KEY_PLACEHOLDER')) {
        console.log('Placeholder found, replacing...');
        // Replace the placeholder with the actual API key
        content = content.replace(/FIREBASE_API_KEY_PLACEHOLDER/g, firebaseApiKey);
        
        // Write the updated content back to index.html
        fs.writeFileSync(indexPath, content);
        console.log('✅ Firebase API key successfully injected into index.html');
    } else {
        console.log('⚠️ Placeholder not found in index.html');
    }
} catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
}