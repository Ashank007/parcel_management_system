
# Parcel Management System

This is a fullstack Parcel Management System project with a Python Flask backend and React frontend using Material UI. It supports CRUD operations (Create, Read, Update, Delete) for managing parcels.

## Project Structure

My-project-folder/
├── backend/ # Flask backend code
└── frontend/ # React frontend code


## Backend

- Built with Python Flask
- Uses SQLite database
- REST API endpoints for parcels
- CORS enabled for frontend integration

## Docker Support (Beginner Friendly)

How to run the project using Docker — step by step

### Install Docker

- If you don’t have Docker installed, download and install it from https://docs.docker.com/get-docker/.

Open your terminal and go to the project folder

Start the app with Docker Compose

Run this command to build the Docker images (containers) and start both backend and frontend together:
```
docker-compose up --build
```

This command will:

- Build the backend and frontend containers

- Start both containers

- Make the frontend available on port 3000 and backend API on port 5000

### Open your browser

- Go to http://localhost:3000 to see the React frontend

- Backend API will be available at http://localhost:5000

### To stop the app

- Press Ctrl + C in the terminal running Docker Compose, or open a new terminal and run:
```
docker-compose down
```

### Running Backend

1. Navigate to the `backend` folder
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `python app.py`
4. Backend runs on `http://localhost:5000`

## Frontend

- Built with React and Material UI
- Axios for API calls
- Responsive and clean UI

### Running Frontend

1. Navigate to the `frontend` folder
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Frontend runs on `http://localhost:3000`

## Features

- List all parcels
- Add new parcel
- Edit existing parcel
- Delete parcel
- Snackbar notifications for actions

## Notes

- Make sure backend is running before starting frontend
- API base URL is `http://localhost:5000`

UI design 
![Screenshot 2025-07-01 155828](https://github.com/user-attachments/assets/11bc4bab-6461-4025-983e-aea2d782db25)
![Screenshot 2025-07-01 155917](https://github.com/user-attachments/assets/5b4e23fd-d1a7-4151-bdf7-db19eba6640f)
![Screenshot 2025-07-01 160058](https://github.com/user-attachments/assets/b0356a11-a302-443a-8a75-80e6152ab60f)




