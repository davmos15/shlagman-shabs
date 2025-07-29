# Temporary Fix Instructions

If the Vercel environment variable isn't working, you can temporarily hardcode the API key:

1. In index.html, find line 326:
   ```javascript
   let apiKey = "FIREBASE_API_KEY_PLACEHOLDER";
   ```

2. Replace it with:
   ```javascript
   let apiKey = "YOUR_ACTUAL_FIREBASE_API_KEY";
   ```

3. Commit and push to deploy.

⚠️ **WARNING**: This exposes your API key in the source code. Only use this as a temporary fix while setting up proper environment variables.

## Proper Solution

The proper solution is to ensure Vercel has the environment variable set correctly:

1. Go to: https://vercel.com/[your-username]/shlagman-shabs/settings/environment-variables
2. Add `FIREBASE_API_KEY` with your key value
3. Redeploy the project