# React + Vite

# SoleMotive - E-Commerce Shoe Store

SoleMotive is a fully functional e-commerce shoe store built using **React.js, Vite, Tailwind CSS, MongoDB, Firebase Authentication, and Shippo API**. The project is deployed with **Netlify (Frontend) and Render (Backend)**.

## 🚀 Live Demo
[SoleMotive on Netlify](https://solemotive.netlify.app)


## 🛠️ Tech Stack
- **Frontend:** React.js (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** Firebase Authentication
- **Shipping:** like Shippo API  but it fake 
- **Deployment:** Netlify (Frontend), Render (Backend)

## 📌 Features
✅ User Authentication (Sign Up, Login via Firebase)
✅ Product Listings (Men, Women, Kids)
✅ Shopping Cart with Discounts
✅ Secure Checkout & Payment Integration
✅ Real-time Shipping Calculation (Shippo API)
✅ Fully Responsive UI

## 🔧 Installation & Setup
Clone the repository:
```bash
  git clone https://github.com/yourusername/solemotive.git
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend
```bash
cd backend
npm install
node server.js
```

## 📄 Environment Variables
Create a `.env` file in the backend directory and add:
```env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
SHIPPO_API_KEY=your_shippo_api_key
```

## 🚀 Deployment
### Deploy Frontend on Netlify
1. Push frontend code to GitHub
2. Go to [Netlify](https://www.netlify.com/) and connect your repo
3. Set the build command: `npm run build`
4. Deploy 🚀

### Deploy Backend on Render
1. Push backend code to GitHub
2. Go to [Render](https://dashboard.render.com/)
3. Create a new Web Service and connect the repo
4. Set the environment variables
5. Deploy 🚀

## 🤝 Contributing
Pull requests are welcome! Feel free to open an issue for suggestions.

## 📩 Contact
For any inquiries, feel free to reach out at **azharshaikh40198@gmail.com**.
