# Saarthi-Test

This is a test hosting version of SaarthiX with minimal functionality. It includes:
- A navbar displaying all services
- A homepage showing "Coming Soon" message fetched from MongoDB
- Separate backend and frontend with Docker support

## Services Displayed

### For Students
- Job Blueprint
- Resume Builder
- Career Counselling
- Apply to Jobs
- Courses
- Role Ready Training

### For Institutes
- Internship Management
- Expert Sessions
- Workshops
- Student Training (Role Ready)
- Placement Access

### For Industry
- Resume Access
- Role Ready Freshers
- Post Jobs & Hackathons
- AI Technical Interview
- Expert Sessions

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Spring Boot (Java 17)
- **Database**: MongoDB
- **Containerization**: Docker & Docker Compose

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed
- Java 17 (for local development)
- Node.js 22+ (for local development)

### Running with Docker

1. Navigate to the Saarthi-test directory:
```bash
cd Saarthi-test
```

2. Build and start all services:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost:3001
- Backend API: http://localhost:8081
- MongoDB: localhost:27018

### Local Development

#### Backend
```bash
cd backend
./gradlew bootRun
```

The backend will run on http://localhost:8081

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on http://localhost:5174

## API Endpoints

### Get Coming Soon Message
```
GET /api/test/coming-soon
```

Response:
```json
{
  "message": "We're coming soon! Stay tuned for exciting updates."
}
```

### Update Coming Soon Message
```
PUT /api/test/coming-soon
Content-Type: application/json

{
  "message": "Your custom message here"
}
```

Response:
```json
{
  "message": "Your custom message here"
}
```

## Notes

- This is a separate codebase from the main SaarthiX application
- Uses different ports (3001, 8081, 27018) to avoid conflicts
- MongoDB data is persisted in a Docker volume
- All services are accessible via the navbar but show "Coming Soon" on the homepage

