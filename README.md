# **Inity – Airbnb Clone (Node.js + Express + MongoDB)**

A minimal Airbnb-style listing web application built using **Node.js**, **Express.js**, **EJS**, **MongoDB Atlas**, and **Cloudinary** for image uploads.

🔗 **Live Demo:**
👉 [https://inity-first-1.onrender.com/listings](https://inity-first-1.onrender.com/listings)

---

## 📌 **Features**

* User-friendly Airbnb-like interface
* Create, Read, Update, Delete Listings
* Upload images using **Cloudinary**
* EJS templating with dynamic pages
* MongoDB Atlas integration
* Sessions & authentication ready (if added later)
* Fully responsive layout

---

## 🛠 **Tech Stack**

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **EJS Templates**
* **Cloudinary** (Image hosting)
* **Mongoose**

---

## 🚀 **Run Locally**

### 1️⃣ **Clone the repo**

```sh
git clone https://github.com/your-username/Inity.git
cd Inity
```

### 2️⃣ **Install dependencies**

```sh
npm install
```

### 3️⃣ **Set environment variables**

Create a `.env` file:

```
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
ATLASDB_URL=your_mongodb_atlas_uri
SESSION_SECRET=your_session_secret
```

### 4️⃣ **Start the server**

```sh
node app.js
```

Server runs at:

```
http://localhost:8080
```

---

## 📂 **Project Structure**

```
Inity/
│── public/
│── views/
│── models/
│── routes/
│── app.js
│── package.json
│── .env
```

---

## 📸 **Image Uploads**

All uploaded images are stored in **Cloudinary**, and the app uses multer + cloudinary storage.

---

## 🌐 **Deployed On**

* **Render** (Backend Hosting)
* **Cloudinary** (Image CDN)
* **MongoDB Atlas** (Database)

🔗 Live Link: [https://inity-first-1.onrender.com/listings](https://inity-first-1.onrender.com/listings)

---

## 📜 **License**

This project is open-source and free to use.
