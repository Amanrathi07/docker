
# Dockerized Express Server

A simple Express.js server running inside a Docker container, written in TypeScript. This setup allows you to quickly build and run the server using Docker without installing Node.js or dependencies locally.

---



## Features

- TypeScript-based Express.js server  
- Fully Dockerized for easy deployment  
- Simple build and run commands  

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed  
 

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Amanrathi07/docker.git
cd docker

```
### Make docker image 
```bash
docker build -t express .
```
### Run the container with port mapping (3000)
```bash
docker run -p -d 3000:3000 express
```
##
[Open Localhost](http://localhost:3000/)

or go to ## http://localhost:3000/
