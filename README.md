# Angular Multi-App Workspace with Real-Time Data Sharing

This workspace demonstrates real-time data sharing between two Angular applications using a shared library and service.

## 🚀 Live Demo

- **Host App**: [https://your-host-app.netlify.app](https://your-host-app.netlify.app) *(Update after deployment)*
- **Remote App**: [https://your-remote-app.netlify.app](https://your-remote-app.netlify.app) *(Update after deployment)*

## 🏗️ Architecture

- **Host App**: Main application with user form, cards listing, and embedded remote table
- **Remote App**: Standalone app with responsive user table
- **Shared Library**: Contains user models and service for real-time data synchronization

## ✨ Features

- **Real-time Data Sync**: Changes in one app instantly reflect in the other
- **Shared User Service**: Both apps use the same service instance for CRUD operations
- **Responsive Design**: Mobile-friendly layouts for both applications
- **Form Validation**: Reactive forms with proper validation
- **Card & Table Views**: Different UI patterns for displaying user data

## 🛠️ Local Development Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Build the shared library:**
```bash
npm run build:shared
```

3. **Start both applications:**
```bash
# Terminal 1 - Start Host App
npm run start:host

# Terminal 2 - Start Remote App  
npm run start:remote
```

4. **Access the applications:**
   - Host App: http://localhost:4200
   - Remote App: http://localhost:4201

## 🚀 Deployment to Netlify

### Build for Production
```bash
# Build shared library
npm run build:shared

# Build both apps
ng build host
ng build remote
```

### Deploy Steps
1. Go to [Netlify](https://netlify.com)
2. **Deploy Host App:**
   - Drag & drop the `dist/host` folder
   - Note the generated URL
3. **Deploy Remote App:**
   - Drag & drop the `dist/remote` folder  
   - Note the generated URL
4. **Update iframe URL** in host app's demo component with remote app's Netlify URL
5. **Redeploy host app** with updated URL

## 📱 Usage

1. **Add Users**: Use the form at the top to add new users
2. **Edit Users**: Click "Edit" from either cards or table view
3. **Delete Users**: Click "Delete" from either view
4. **Real-time Sync**: Watch changes appear instantly in both views

## 📁 Project Structure

```
projects/
├── shared-lib/                 # Shared library
│   ├── src/lib/
│   │   ├── user.model.ts      # User interfaces
│   │   ├── user.service.ts    # Shared service
│   │   └── shared-lib.module.ts
│   └── public-api.ts
├── host/                      # Host application
│   ├── src/app/
│   │   ├── demo/              # Main demo component
│   │   ├── user-form-simple/  # User form component
│   │   ├── user-cards/        # User cards listing
│   │   ├── user-table/        # User table component
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   └── ...
└── remote/                    # Remote application
    ├── src/app/
    │   ├── user-table/        # Responsive user table
    │   ├── app.component.ts
    │   └── app.module.ts
    └── ...
```

## 🔧 Technologies Used

- **Angular 17**: Frontend framework
- **RxJS**: Reactive programming for real-time updates
- **TypeScript**: Type-safe development
- **CSS3**: Custom styling with responsive design
- **Netlify**: Deployment platform

## 📝 Notes

- Both applications share the same UserService instance when running locally
- For production deployment, consider using a backend API for true cross-application data sharing
- The current setup demonstrates the concept of shared services in Angular workspaces

## 📦 Built Files

After running the build commands, you'll find the deployable files in:
- `dist/host/` - Host application files for deployment
- `dist/remote/` - Remote application files for deployment

Simply drag and drop these folders to Netlify for instant deployment!