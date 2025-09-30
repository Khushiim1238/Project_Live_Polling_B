
# Polling App - Backend

## Overview
This project is the backend for a real-time polling system that allows teachers to create live polls and students to participate in them. The backend is built with **Node.js**, **Express.js**, and **MongoDB** for data storage. **Socket.IO** is used for real-time communication.

## Tech Stack
- **Node.js** (Express.js for server-side logic)
- **MongoDB** (for database storage)
- **Socket.IO** (for real-time communication)

---

## Backend Setup

### Prerequisites
Make sure you have the following installed:
- Node.js (developed with 22.5.1)
- npm
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saran-mani/intervue-poll-backend.git
   cd intervue-poll-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install and start the MongoDB service:
   ```bash
   mongod
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

## Running the Application

1. The backend will be available at:
   ```
   http://localhost:3000
   ```

2. The frontend communicates with the backend via Socket.IO and API endpoints for poll management.
