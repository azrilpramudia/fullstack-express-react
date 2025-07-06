# 🚀 fullstack-express-react

Fullstack web application built with:

- 🖥️ **Frontend**: React.js (Vite + Tailwind CSS)
- 🔧 **Backend**: Node.js + Express + Prisma ORM
- 🛢️ **Database**: MySQL / PostgreSQL
- 🔐 **Authentication**: JWT
- ✅ **Validation**: express-validator

---

## 📁 Project Structure

```
fullstack-express-react/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── prisma/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
├── .env
├── README.md
└── package.json
```

---

## 🧪 Features

### ✅ Backend (Express)

- RESTful API endpoints
- JWT Authentication
- User CRUD (create, read, update, delete)
- Input validation with express-validator
- Prisma ORM for database access

### 🎨 Frontend (React)

- React functional components
- Tailwind CSS styling
- React Router DOM
- Axios integration with backend
- Authenticated routes (optional)

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/fullstack-express-react.git
cd fullstack-express-react
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

### Backend `.env` example:

```
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/db_name
JWT_SECRET=your_jwt_secret
```

---

## 🛠️ Usage

### 🧾 Start Backend (Express)

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

> Uses `nodemon` to auto-restart on changes

---

### 🌐 Start Frontend (React)

```bash
cd frontend
npm run dev
```

> Access at: `http://localhost:5173`

---

## 🧹 Scripts

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `npm run dev`            | Start dev server (React / Express)  |
| `npm run build`          | Build React frontend for production |
| `npx prisma studio`      | View & edit DB in browser           |
| `npx prisma migrate dev` | Run DB migrations                   |

---

## This Project Course <a href="www.santrikoding.com">
