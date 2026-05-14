# Realtime Chat App

A full-stack real-time messaging application built with React Native (Expo), Node.js/Express backend, and WebSocket support for instant communication.

## 📋 Project Overview

This is a complete chat application with real-time messaging capabilities. Users can create chats, send messages instantly, and see online status of other users. The app features user authentication via Clerk, persistent data storage in MongoDB, and real-time updates using Socket.IO.

### Key Features
- ✅ **Real-time Messaging** - Instant message delivery using WebSockets (Socket.IO)
- ✅ **User Authentication** - Secure authentication with Clerk
- ✅ **Chat Management** - Create and manage multiple chat conversations
- ✅ **Online Status Tracking** - See who's online in real-time
- ✅ **User Profiles** - User profile management with avatars
- ✅ **Cross-Platform** - Works on iOS, Android, and Web (via Expo)
- ✅ **Type-Safe** - Full TypeScript implementation for both frontend and backend

---

## 🏗️ Project Structure

```
realtime-chat-app/
├── backend/                    # Node.js Express server
│   ├── src/
│   │   ├── app.ts             # Express app configuration & middleware setup
│   │   ├── config/
│   │   │   └── database.ts     # MongoDB connection configuration
│   │   ├── controllers/         # Business logic for routes
│   │   │   ├── authController.ts      # Auth & user registration
│   │   │   ├── chatController.ts      # Chat CRUD operations
│   │   │   ├── messageController.ts   # Message CRUD operations
│   │   │   └── userController.ts      # User profile operations
│   │   ├── middleware/          # Express middleware
│   │   │   ├── auth.ts         # Authentication verification
│   │   │   └── errorHandler.ts # Global error handling
│   │   ├── models/              # MongoDB Mongoose schemas
│   │   │   ├── User.ts         # User document schema
│   │   │   ├── Chat.ts         # Chat/conversation schema
│   │   │   └── Message.ts      # Message document schema
│   │   ├── routes/              # API route definitions
│   │   │   ├── authRoutes.ts
│   │   │   ├── chatRoutes.ts
│   │   │   ├── messageRoutes.ts
│   │   │   └── userRoutes.ts
│   │   ├── scripts/
│   │   │   └── seed.ts         # Database seed script
│   │   ├── utils/
│   │   │   └── socket.ts       # Socket.IO initialization & handlers
│   │   └── types/
│   │       └── globals.d.ts    # Global TypeScript type definitions
│   ├── index.ts                # Server entry point
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                    # React Native Expo app
│   ├── app/
│   │   ├── _layout.tsx         # Root navigation layout
│   │   ├── (auth)/             # Authentication screens group
│   │   │   ├── _layout.tsx
│   │   │   └── index.tsx       # Login/signup screen
│   │   └── (tabs)/             # Main app screens (tab-based)
│   │       ├── _layout.tsx     # Tab navigation setup
│   │       ├── index.tsx       # Chats list screen
│   │       ├── profile.tsx     # User profile screen
│   │       └── ...
│   ├── components/
│   │   └── AuthSync.tsx        # Clerk authentication sync component
│   ├── hooks/
│   │   ├── useAuth.ts          # Custom hook for auth context
│   │   └── useSocialAuth.ts    # Social authentication hook
│   ├── lib/
│   │   └── axios.ts            # Axios instance with API configuration
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── assets/images/          # App images and icons
│   ├── tailwind.config.js      # TailwindCSS configuration
│   ├── metro.config.js         # Metro bundler config
│   ├── babel.config.js         # Babel transpiler config
│   ├── package.json
│   └── tsconfig.json
│
├── Dockerfile                  # Docker configuration for backend
└── README.md                   # This file
```

---

## 🔧 Technology Stack

### Backend
- **Runtime**: Bun (fast JavaScript runtime)
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.IO 4.8
- **Authentication**: Clerk Express SDK
- **Language**: TypeScript

### Frontend
- **Framework**: React Native with Expo SDK 54
- **Routing**: Expo Router 6.x
- **Authentication**: Clerk Expo SDK
- **HTTP Client**: Axios
- **State Management**: TanStack React Query 5.x
- **Styling**: TailwindCSS with NativeWind
- **Language**: TypeScript & JSX/TSX

### DevOps
- **Containerization**: Docker with Bun runtime
- **Environment**: Node.js compatible with Bun

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun installed
- MongoDB Atlas account or local MongoDB instance
- Clerk account for authentication (free tier available)
- Expo CLI: `npm install -g expo-cli` or `bun install -g expo-cli`

### Environment Setup

#### 1. Clone and Install Dependencies

```bash
# Backend setup
cd backend
bun install

# Frontend setup
cd ../frontend
bun install
```

#### 2. Create `.env` files

**Backend** - Create `backend/.env`:
```env
# MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app

# Clerk authentication keys
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Server configuration
PORT=3000
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:8081
```

**Frontend** - Create `frontend/.env.local`:
```env
# Clerk publishable key (required for auth)
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API endpoint
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

### Running Locally

#### Backend
```bash
cd backend

# Development mode (with auto-reload)
bun run dev

# Production mode
bun run start
```

The backend will start on `http://localhost:3000`

#### Frontend
```bash
cd frontend

# Start development server
bun start

# Run on specific platform
bun run ios      # iOS simulator
bun run android  # Android emulator
bun run web      # Web browser
```

Expo Metro will start on `http://localhost:8081`

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /api/auth/register` - Register new user with Clerk
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Chat Routes (`/api/chats`)
- `GET /api/chats` - Get all chats for current user
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id` - Get specific chat
- `PUT /api/chats/:id` - Update chat
- `DELETE /api/chats/:id` - Delete chat

### Message Routes (`/api/messages`)
- `GET /api/messages/:chatId` - Get messages for a chat
- `POST /api/messages` - Send new message
- `PUT /api/messages/:id` - Edit message
- `DELETE /api/messages/:id` - Delete message

### User Routes (`/api/users`)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/online` - Get online users

---

## 🔌 Real-time Events (Socket.IO)

### Emitted by Server
- `online-users` - List of currently online users
- `user-online` - Notification when user comes online
- `user-offline` - Notification when user goes offline
- `message` - New message received
- `message-updated` - Message was edited
- `message-deleted` - Message was deleted
- `typing` - User is typing indicator

### Emitted by Client
- `message` - Send new message to chat
- `typing` - Notify others that you're typing
- `stop-typing` - Stop typing indicator
- `disconnect` - User disconnects

---

## 📦 Database Schema

### User Collection
```typescript
{
  _id: ObjectId
  clerkId: String (unique, from Clerk)
  name: String
  email: String (unique)
  avatar: String (URL)
  createdAt: Date
  updatedAt: Date
}
```

### Chat Collection
```typescript
{
  _id: ObjectId
  name: String
  participants: ObjectId[] (User IDs)
  lastMessage: ObjectId (Message ID)
  createdAt: Date
  updatedAt: Date
}
```

### Message Collection
```typescript
{
  _id: ObjectId
  chatId: ObjectId (Chat ID)
  senderId: ObjectId (User ID)
  content: String
  attachments: String[] (URLs)
  createdAt: Date
  updatedAt: Date
}
```

---

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t realtime-chat-app:latest .
```

### Run Container
```bash
docker run -p 3000:3000 \
  -e MONGODB_URI=your_mongodb_uri \
  -e CLERK_SECRET_KEY=your_clerk_secret \
  -e CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key \
  realtime-chat-app:latest
```

---

## 🔐 Authentication Flow

1. **Frontend**: User opens app, Clerk SDK checks for existing session
2. **Clerk Provider**: If not authenticated, user is redirected to Clerk's login/signup
3. **Token Generation**: After authentication, Clerk generates JWT token
4. **Socket Connection**: Frontend connects to Socket.IO server with token in `auth.token`
5. **Server Verification**: Backend verifies token using Clerk SDK
6. **User Lookup**: Backend finds/creates user in MongoDB using Clerk ID
7. **Access Granted**: Socket connection established, user can send/receive messages

---

## 📝 Development Notes

### Key Files to Know
- **[backend/src/app.ts](backend/src/app.ts)** - Entry point for Express app configuration
- **[backend/src/utils/socket.ts](backend/src/utils/socket.ts)** - Socket.IO initialization and real-time event handlers
- **[frontend/components/AuthSync.tsx](frontend/components/AuthSync.tsx)** - Frontend authentication synchronization
- **[frontend/lib/axios.ts](frontend/lib/axios.ts)** - API client configuration

### Common Tasks

#### Adding a New Feature
1. Create controller in `backend/src/controllers/`
2. Create route in `backend/src/routes/`
3. Add model in `backend/src/models/` if needed
4. Create corresponding API hook in frontend
5. Build UI component in frontend `app/` directory

#### Testing Sockets in Development
- Use [Socket.IO testing tools](https://socket.io/docs/v4/client-api/)
- Or use Postman with WebSocket support

#### Database Debugging
- Check MongoDB Atlas dashboard for data
- Run seed script: `bun src/scripts/seed.ts`

---

## 🐛 Troubleshooting

### Backend Issues
| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Change `PORT` in `.env` or kill process on port 3000 |
| MongoDB connection fails | Verify `MONGODB_URI` in `.env`, check IP whitelist in MongoDB Atlas |
| Clerk auth fails | Verify `CLERK_SECRET_KEY` matches your Clerk dashboard |
| Socket connection rejected | Ensure frontend token is valid, check `FRONTEND_URL` in CORS |

### Frontend Issues
| Issue | Solution |
|-------|----------|
| Blank screen on startup | Clear Expo cache: `expo start -c` |
| API calls fail | Check `EXPO_PUBLIC_API_URL` matches backend URL |
| Clerk login not working | Verify `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` is set |
| Messages not appearing | Check Socket.IO connection in network tab, verify token validity |

---

## 📚 Useful Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Socket.IO Documentation](https://socket.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [MongoDB Mongoose Docs](https://mongoosejs.com/)
- [TailwindCSS NativeWind](https://www.nativewind.dev/)

---

## 📄 License

This project is open source. Modify and use as needed for your purposes.

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## 📞 Support

For issues or questions:
1. Check existing issues in the repository
2. Review the troubleshooting section above
3. Check logs in backend/frontend for detailed error messages
4. Verify `.env` variables are correctly set

---

**Last Updated**: May 2026  
**Project Status**: Active Development
