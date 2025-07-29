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
        
        // Create a dist directory for the output
        const distDir = path.join(__dirname, 'dist');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir);
        }
        
        // Write the updated content to dist/index.html
        const outputPath = path.join(distDir, 'index.html');
        fs.writeFileSync(outputPath, content);
        console.log('✅ Firebase API key successfully injected into', outputPath);
        
        // Copy other files to dist
        const filesToCopy = ['styles.css', 'middleware.js', 'vercel.json'];
        filesToCopy.forEach(file => {
            const srcPath = path.join(__dirname, file);
            const destPath = path.join(distDir, file);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log('Copied', file, 'to dist');
            }
        });
    } else {
        console.log('⚠️ Placeholder not found in index.html');
    }
} catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
}