#!/bin/bash
# Simple script to start a local server for testing

echo "Starting local server..."
echo "Open your browser to:"
echo ""
echo "Test mode: http://localhost:8000/index.html?test=true"
echo "Live mode: http://localhost:8000/index.html"
echo ""
echo "Press Ctrl+C to stop the server"

python3 -m http.server 8000