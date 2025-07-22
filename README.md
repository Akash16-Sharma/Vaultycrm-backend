# VaultlyCRM Backend

VaultlyCRM is a robust and modular backend application built using Node.js, Express.js, and MongoDB. It provides secure JWT-based authentication and full-featured RESTful APIs for managing clients and projects.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 Client CRUD APIs
- 📁 Project CRUD APIs
- 🧠 Auto Slug Generation for Projects
- 🔒 Middleware Protected Routes
- 🧱 Scalable Folder Structure

---

## 📁 Project Structure

VaultlyCRM-backend/
├── controllers/
│ ├── authController.js
│ ├── clientController.js
│ └── projectController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ ├── Client.js
│ └── Project.js
├── routes/
│ ├── authRoutes.js
│ ├── clientRoutes.js
│ └── projectRoutes.js
├── utils/
│ └── slugify.js
├── .env
├── server.js
└── package.json



## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Environment**: dotenv
- **Utilities**: Slugify for URLs

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Akash16-Sharma/Vaultlycrm-backend.git
cd Vaultlycrm-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory:


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run the Development Server
bash
npm run dev
📬 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

👤 Client Routes (Protected)
Method	Endpoint	Description
POST	/api/clients	Create new client
GET	/api/clients	Get all clients
PUT	/api/clients/:id	Update client
DELETE	/api/clients/:id	Delete client

📁 Project Routes (Protected)
Method	Endpoint	Description
POST	/api/projects	Create new project
GET	/api/projects	Get all projects
PUT	/api/projects/:id	Update project
DELETE	/api/projects/:id	Delete project

📬 Postman Collection
You can test the API using Postman. Download the collection: VaultlyCRM.postman_collection.json

👤 Author
Aakash Sharma
Twitter: @SilentDev_
GitHub: Akash16-Sharma

📄 License
This project is licensed under the MIT License.
