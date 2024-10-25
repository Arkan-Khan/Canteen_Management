# Canteen Management System

## A MERN Stack Application
### Backend
Backend is build using Express Js which is a NodeJs framework and MongoDB as database

### Frontend
Frontend is buils using ReactJs. We've used Redux for global state management.

### Core features
* User can be student or teacher
* User has to create account
* User has to place order
* Order confirmed by admin, then user can go for payment
* Payment has to be done offline

### Project Setup Instructions
Follow the steps below to set up and run the project locally.

### Prerequisites
- Ensure you have [Node.js 14](https://nodejs.org/en/download/) installed on your machine. If you are using a different version, you can install `nvm` and switch to Node.js 14 using:
  ```bash
  nvm use 14
  ```
  When you close the terminal, it will switch back to your current Node.js version.
- Install MongoDB if you haven't already.
- Install [Git](https://git-scm.com/downloads) if you haven't already or download zip file.


## Steps to Set Up

1. **Clone the Repository**

    Open your terminal and run the following command to clone the repository:
    ```bash
    git clone https://github.com/Arkan-Khan/Canteen_Management.git
    ```
    Navigate into the project directory:
    ```bash
    cd canteen-management-system
    ```

2. **Install Dependencies**

    run this command in root folder:
    ```bash
    npm i 
    ```
    Navigate to the frontend folder and install the required packages:
    ```bash
    cd frontend
    npm i 
    ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root folder with the following details:

   ```plaintext
   MONGO_URI="mongodb+srv://<your-mongodb-username>:<your-mongodb-password>@cluster0.q3tlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   JWT_SECRET="<your-jwt-secret>"
   CLOUDINARY_API_SECRET="<your-cloudinary-api-secret>"
   CLOUDINARY_API_KEY="<your-cloudinary-api-key>"
   CLOUDINARY_CLOUD_NAME="<your-cloudinary-cloud-name>"

4. **Run the project**
    To start the project run the following command:
    ```bash
    npm start
    ```

    wait for a moment to get the backend connect with database and frontend will automatically open in your default browser