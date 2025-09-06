# Angular Multi-App Workspace with Module Federation

This workspace contains two Angular applications (Host and Remote) that share user data through a shared library using Module Federation.

## Architecture

- **Host App** (Port 4200): Main application with user management
- **Remote App** (Port 4201): Microfrontend that can be loaded into Host
- **Shared Library**: Contains user models and service for data sharing

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the shared library:
```bash
npm run build:shared
```

3. Start both applications:
```bash
# Terminal 1 - Start Host App
npm run start:host

# Terminal 2 - Start Remote App  
npm run start:remote
```

## Features

- **Shared User Service**: Both apps use the same service for CRUD operations
- **Real-time Updates**: Changes in one app reflect immediately in the other
- **Tailwind CSS**: Consistent styling across applications
- **Module Federation**: Remote app can be loaded into Host app
- **Reactive Forms**: Form validation and user input handling

## Usage

1. Access Host App at http://localhost:4200
2. Access Remote App at http://localhost:4201
3. Navigate to "Remote App" tab in Host to see embedded remote app
4. Create/edit/delete users from either app - changes sync automatically

## Project Structure

```
projects/
├── shared-lib/          # Shared library with user service and models
├── host/               # Main host application
└── remote/             # Remote microfrontend application
```