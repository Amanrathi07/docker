
---

# 🚀 Dockerized Express Server (TypeScript)

A lightweight **Express.js server** built with **TypeScript** and fully **Dockerized** for seamless setup and deployment.
Run it anywhere — no need to install Node.js or dependencies locally.

---

## ✨ Features

* ⚙️ **TypeScript** for cleaner and safer code
* 🐳 **Dockerized** — isolate dependencies, run anywhere
* ⚡ **Simple commands** to build, run, and connect to MongoDB

---

## 🧩 Prerequisites

Make sure you have [Docker](https://www.docker.com/get-started) installed on your system.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Amanrathi07/docker.git
cd docker
```

### 2️⃣ Build the Docker Image

```bash
docker build -t express .
```

### 3️⃣ Run the Container (Port 3000)

```bash
docker run -d -p 3000:3000 express
```

### 🌐 Access the Server

Open in your browser → [http://localhost:3000/](http://localhost:3000/)

---

## 🗄️ Connect with MongoDB (Using Docker Network)

### 1️⃣ Create a Network

```bash
docker network create myNetwork
```

### 2️⃣ Run MongoDB on the Network

```bash
docker run -d --name mongodb --network myNetwork mongo
```

### 3️⃣ Run Express Server on the Same Network

```bash
docker run --network myNetwork -p 3000:3000 express
```

---

## 🐙 Pull from Docker Hub (Optional)

You can skip building locally and directly pull the image:

```bash
docker run --network myNetwork -p 3000:3000 amanrathi07/express-server:latest
```

---

## 🧱 Run All Containers with Docker Compose

```bash
docker compose up
```

---

