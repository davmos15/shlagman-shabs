# Shlagman Shabs Plan

A real-time web application for coordinating weekly Shabbat (Saturday) lunch gatherings among family members. The app allows families to RSVP, coordinate who brings what dishes, and share updates via WhatsApp.

## Features

### Real-time Synchronization
- All changes are instantly synced across all devices using Firebase Firestore
- Live status indicator shows connection status (Live/Saving/Offline)
- Multiple family members can update the plan simultaneously

### RSVP Management
- Family members can mark their attendance status (Coming/Not Coming/Not Sure)
- Specify number of guests for each family
- Real-time guest count totals

### Host Rotation
- Display current week's host
- Edit host assignment with a simple click
- Default rotation system between regular hosts

### Food Coordination
- Interactive list of items needed for Shabbat lunch
- Family members can claim items they'll bring
- Visual indicators for covered vs needed items
- Add/remove items from the list as needed

### WhatsApp Integration
- One-click summary generation for sharing in WhatsApp groups
- Formatted message includes date, host, guest count, and food assignments
- Includes direct link back to the app for easy access

## Technical Stack

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Backend**: Firebase Firestore for real-time data synchronization
- **Hosting**: Vercel with edge middleware for security headers
- **Styling**: Custom CSS with modern gradient backgrounds and card-based UI

## Project Structure

```
shalgman-shabs/
├── index.html      # Main application file
├── middleware.js   # Vercel edge middleware for security headers
├── package.json    # Node.js dependencies
└── README.md      # This file
```

## Setup

1. The app is designed to be hosted on Vercel
2. Firebase configuration is embedded in the index.html file
3. No build process required - pure HTML/CSS/JS

## Usage

1. Visit the hosted URL
2. RSVP by clicking your family's status button
3. Update guest count if bringing additional people
4. Click on food items to claim what you'll bring
5. Use "Share Update to WhatsApp" to notify the group

## Security

The app includes security headers via Vercel Edge Middleware:
- Referrer Policy
- X-Frame-Options
- X-Content-Type-Options
- DNS Prefetch Control
- Strict Transport Security

## Family Members

The app is pre-configured with specific family members from the WhatsApp group, displayed in alphabetical order for easy navigation.

## Mobile Responsive

The app is designed with a mobile-first approach, optimized for viewing and interaction on smartphones since most coordination happens via WhatsApp on mobile devices.