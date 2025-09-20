# Demand Xpress Assigment - Contact Book

A full-stack MERN application to manage and store contacts with pagination, CRUD functionality, and cloud deployment.

## 🚀 Tech Stack

- Frontend:
React.js
Axios
Tailwind CSS

- Backend:
Node.js,
Express.js,
MongoDB Atlas (via Mongoose)

- Deployment:

   - Frontend: Vercel

   - Backend: Render

# ⚙️ Setup Instructions

1️⃣ Clone the Repository

```bash
git clone https://github.com/Mehulposh/DemandXpress-Assignment-Contact-Book
cd DemandXpress-Assignment-Contact-Book
```

2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a .env file inside backend/ and add your MongoDB Atlas connection string:

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ContactBook?retryWrites=true&w=majority
```

Run the server:

```bash
npm start
```

3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Update the API endpoint in your Axios calls (e.g., src/ApiCall/ApiCall.js):

```bash
export const backend = {
  endpoint: "https://<your-backend-url>.onrender.com"
};
```

Run the frontend:

```bash
npm run dev
```

Deploy frontend on Vercel and backend on Render (or any other platform).


# ✨ Features

➕ Add new contacts

📃 View paginated contact list

✏️ Edit existing contact

❌ Delete contact

⏭️ Next / Previous pagination

☁️ Cloud database (MongoDB Atlas)


# 🔮 Future Improvements

🔍 Search contacts by name/email

📱 Responsive design improvements

🔑 Authentication (login/logout, JWT)

📤 Import/Export contacts (CSV/Excel)

🖼️ Add profile pictures for contacts

🌐 Multi-language support


# 🛠️ Scripts

- Backend
```bash
npm start     # Run with nodemon
```

- Frontend

```bash
npm run dev     # Run dev server
```
