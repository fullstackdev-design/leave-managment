# 🚀 SaaS HR Leave Management System (Fullstack)

> A complete Leave Request Workflow for a SaaS HR platform — developed for the **Senior Full Stack Developer (SaaS HR Product)** screening test.

This project provides a **full-stack leave management workflow** that allows:
- Employees to submit leave requests
- Managers to approve or reject those requests

The application demonstrates clean architecture, role-based UI handling, and mock data-driven backend logic — all built in **TypeScript**, ready to deploy or extend.

---

## 🧩 Features

### 👩‍💼 Employee Portal
- Submit leave requests with:
  - Date validation (no past or overlapping leaves)
  - Reason for leave
- Receive feedback after successful submission

### 👨‍💼 Manager Dashboard
- View pending leave requests
- Approve or reject requests
- Automatic leave balance checks

### 🔐 Role-Based Access
- Mock login for Employee and Manager
- Different UI and routes per role

### 🧠 Business Logic
- Leave balance validation before approval
- No overlapping or backdated leaves
- Monthly summary API (Bonus)

---

## 🧱 Architecture Overview

| Layer | Description |
|-------|--------------|
| **Frontend** | React + Vite (TypeScript). Contains UI for Employee and Manager with mocked login. |
| **Backend** | Node.js + Express (TypeScript). Contains REST API endpoints for leave management. |
| **Data Store** | In-memory mock data for users and leave requests (no real DB). |
| **Testing** | Jest (backend unit test) + React Testing Library (frontend UI test). |

---

## ⚙️ Tech Stack

**Frontend**
- React 18
- Vite (for fast dev server and build)
- TypeScript
- React Testing Library
- Vitest

**Backend**
- Node.js (v18+)
- Express.js
- TypeScript
- Jest + ts-jest

---

## 🗂 Folder Structure

```
leave-management-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── controllers/        # API endpoints
│   │   ├── services/           # Core business logic
│   │   ├── utils/              # Validation helpers
│   │   ├── data.ts             # In-memory mock data
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── index.ts            # App entry point
│   ├── tsconfig.json
│   ├── jest.config.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.tsx
│   │   │   ├── EmployeeForm.tsx
│   │   │   └── ManagerDashboard.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   ├── index.html
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🧑‍💻 Local Setup

### 1️⃣ Prerequisites
- Node.js ≥ 18
- npm ≥ 9

---

### 2️⃣ Clone & Install

```bash
git clone https://github.com/<your-username>/leave-management-fullstack.git
cd leave-management-fullstack
```

---

### 3️⃣ Run Backend

```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:4000
```

---

### 4️⃣ Run Frontend

```bash
cd ../frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## 🧠 Mock Users

| Name | Role | ID |
|------|------|----|
| Alice Employee | Employee | `u-emp-1` |
| Bob Employee | Employee | `u-emp-2` |
| Carol Manager | Manager | `u-mgr-1` |

When you open the frontend, simply choose a mock user to log in.

---

## 🧵 API Reference

| Method | Endpoint | Description | Role |
|--------|-----------|--------------|------|
| `POST` | `/leave/apply` | Apply for a new leave | Employee |
| `GET` | `/leave/pending` | View pending leave requests | Manager |
| `POST` | `/leave/approve/:id` | Approve/Reject leave request | Manager |
| `GET` | `/leave/summary` | Monthly summary (bonus) | Manager |

---

## ✅ Validation Rules

- ❌ No past dates allowed  
- 🔁 No overlapping leaves for the same employee  
- 💰 Leave balance must be sufficient  
- 👑 Only managers can approve/reject  

---

## 🧪 Testing

### 🧩 Backend (Jest)
Tests core date validation and overlap logic.

```bash
cd backend
npm test
```

Example:
```
✓ daysBetween calculates inclusive days
✓ overlaps detects overlapping ranges
```

### 🧩 Frontend (React Testing Library)
Validates basic rendering and input handling for leave form.

```bash
cd frontend
npm test
```

---

## 📊 Bonus (Implemented)
✅ Monthly leave summary endpoint (`/leave/summary`)  
✅ TypeScript types for all API responses  

---

## 🧭 Assumptions

- No authentication system implemented (mock login only)
- All data resets on backend restart (in-memory storage)
- Single manager approval model
- Dates interpreted in local timezone

---

## 🧰 Future Enhancements

- ✅ Add database persistence (PostgreSQL / MongoDB)
- ✅ Add JWT authentication
- ✅ Add audit trail & notifications
- ✅ Add pagination and filtering on manager dashboard
- ✅ Deploy backend (Render/Heroku) & frontend (Vercel/Netlify)

---

## 📸 Screenshots (Add once running)
```
frontend/public/screenshots/
├── login.png
├── employee-form.png
└── manager-dashboard.png
```

---

## 🧱 Deployment
- **Backend**: Dockerfile or hosted via Render/Heroku  
- **Frontend**: Deployed via Vercel/Netlify (connected to GitHub repo)  

---

## 🏁 Conclusion

This project demonstrates:
- Full-stack TypeScript expertise  
- REST API design  
- React component architecture  
- Testing, validation, and role-based logic  
