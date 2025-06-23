# Shlagman Shabs Plan

A real-time web application for coordinating weekly Shabbat gatherings among family members. The app allows families to RSVP, coordinate menu items, track history, and share updates via WhatsApp.

## ✨ Features

### 🕯️ Event Management
- **Friday Night Focus**: Defaults to Friday night dinners with automatic July 4th detection
- **Flexible Scheduling**: Support for both Friday night dinners and Saturday lunches
- **One-Click Date/Time**: Click directly on date or time to edit (no separate buttons)
- **Smart Time Picker**: 12-hour format with AM/PM selection

### 👥 RSVP Management
- Family members can mark attendance status (Coming/Not Coming/Pending)
- Specify number of guests for each family
- Track additional non-family guests
- **Smart Guest Count**: Shows confirmed families and pending count
- Real-time synchronization across all devices

### 🍽️ Menu Coordination
- Interactive menu planning with collapsible sections
- Family members can claim items they'll bring
- Visual indicators for assigned vs needed items
- Add/remove items from the menu as needed

### 📅 History & Archive
- **Automatic Archiving**: Events auto-archive Saturday night after Friday events
- **History Browser**: View past events with dropdown selection
- **Complete Records**: See who came and what was brought for each event
- **Auto-Reset**: All data resets for new week after archiving

### 📱 WhatsApp Integration
- **Share Update**: Streamlined sharing with clean message format
- Includes event type, date, host, time, and app link
- Formatted for easy WhatsApp group sharing

### 🔄 Real-time Synchronization
- All changes instantly synced across devices using Firebase
- Live status indicator (Live/Saving/Offline)
- Multiple users can update simultaneously

### 📱 Collapsible Interface
- **Space-Saving Design**: "Who's Coming" and "Menu" sections can be collapsed
- Clean, organized mobile-first interface
- Easy navigation on all device sizes

## 🏗️ Technical Stack

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Database**: Firebase Firestore for real-time data and history storage
- **Hosting**: Vercel with edge middleware for security
- **Architecture**: Single-page application with component-based sections

## 📁 Project Structure

```
shalgman-shabs/
├── index.html          # Main application
├── index.backup.html   # Backup of previous version
├── middleware.js       # Vercel security middleware
├── firebase.json       # Firebase hosting config
├── start-server.sh     # Local development server script
├── package.json        # Dependencies
└── README.md          # Documentation
```

## 🚀 Usage

### Basic Flow
1. **RSVP**: Click your family's status to mark attendance
2. **Guest Count**: Adjust number of guests if needed
3. **Menu Planning**: Click menu items to assign who brings what
4. **Share**: Use "Share Update" to notify the WhatsApp group
5. **History**: Click "History" to view past events

### Key Features
- **Automatic Reset**: Data clears automatically for new week
- **Smart Defaults**: Friday night with proper time suggestions
- **Mobile Optimized**: Works seamlessly on phones
- **Real-time Updates**: Everyone sees changes instantly

## 🔒 Security

Security headers via Vercel Edge Middleware:
- Content Security Policy
- X-Frame-Options protection
- HTTPS enforcement
- DNS prefetch control

## 👨‍👩‍👧‍👦 Family Configuration

Pre-configured family members:
- Adi & Gabe
- Bobba
- Gilla
- Meyerowitz
- Mosbergs
- Moskow 29b
- Moskow Carlingford
- PBs

## 📱 Mobile-First Design

Optimized for smartphone use with:
- Touch-friendly buttons and inputs
- Readable text and proper spacing
- Collapsible sections for better organization
- WhatsApp integration for mobile sharing

## 🔄 Data Flow

1. **Current Event**: Active planning in `shabbat-plans/current`
2. **Auto-Archive**: Triggers Saturday night after Friday events
3. **History Storage**: Archived in `shabbat-history/` collection
4. **Reset**: All data clears for new week planning

## 🌟 Recent Updates

- Enhanced Friday night focus with July 4th detection
- Collapsible sections for better mobile experience
- Complete history and archive system
- Improved sharing message format
- Smart guest count with pending families indicator
- One-click date and time editing