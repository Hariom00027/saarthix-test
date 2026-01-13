# Deployment Guide - SaarthiX Test Application

## Quick Start (Windows CMD)

### Option 1: Using the Deployment Script
```cmd
cd saarthix-test
deploy.bat
```

### Option 2: Manual Deployment
```cmd
cd saarthix-test
docker-compose down
docker-compose up --build -d
docker-compose ps
```

## Deployment Commands (Windows CMD)

### 1. Navigate to Project Directory
```cmd
cd C:\Users\HariomSingh\Desktop\Testing\saarthix-test
```

### 2. Stop Existing Containers (if any)
```cmd
docker-compose down
```

### 3. Build and Start All Services
```cmd
docker-compose up --build -d
```

### 4. Check Service Status
```cmd
docker-compose ps
```

### 5. View Logs
```cmd
REM View all logs
docker-compose logs -f

REM View specific service logs
docker-compose logs -f backend-test
docker-compose logs -f frontend-test
docker-compose logs -f mongodb-test
```

### 6. Stop Services
```cmd
docker-compose down
```

### 7. Stop and Remove Volumes (Clean Slate)
```cmd
docker-compose down -v
```

## Deployment Commands (Linux Server)

If deploying to your Linux server (`root@vm557900137`):

```bash
# Navigate to project directory
cd ~/test/saarthix-test

# Stop existing containers
docker-compose down

# Build and start services
docker-compose up --build -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f backend-test

# Stop services
docker-compose down
```

## Service URLs

Once deployed, access your services at:

- **Frontend**: http://localhost:3001 (or http://your-server-ip:3001)
- **Backend API**: http://localhost:8081 (or http://your-server-ip:8081)
- **MongoDB**: localhost:27018 (or your-server-ip:27018)

## Health Check Endpoints

- **Backend Health**: http://localhost:8081/health
- **Coming Soon API**: http://localhost:8081/api/test/coming-soon

## Troubleshooting

### Check if services are running
```cmd
docker-compose ps
```

### View detailed logs
```cmd
docker-compose logs backend-test
docker-compose logs frontend-test
docker-compose logs mongodb-test
```

### Restart a specific service
```cmd
docker-compose restart backend-test
```

### Rebuild a specific service
```cmd
docker-compose up --build -d backend-test
```

### Check container health
```cmd
docker ps
docker inspect saarthix-test_backend-test_1
```

### Access container shell (for debugging)
```cmd
docker exec -it saarthix-test_backend-test_1 sh
docker exec -it saarthix-test_mongodb-test_1 mongosh
```

## Production Deployment Checklist

- [ ] Ensure Docker and Docker Compose are installed
- [ ] Verify ports 3001, 8081, and 27018 are available
- [ ] Check firewall rules allow traffic on these ports
- [ ] Verify DNS settings (8.8.8.8, 8.8.4.4) if needed
- [ ] Monitor logs during first startup
- [ ] Test health endpoints after deployment
- [ ] Verify frontend can connect to backend
- [ ] Check MongoDB connection

## Monitoring Commands

```cmd
REM Real-time logs
docker-compose logs -f

REM Resource usage
docker stats

REM Container details
docker-compose config
```

## Backup MongoDB Data

```cmd
REM Create backup
docker exec saarthix-test_mongodb-test_1 mongodump --out /data/backup

REM Restore backup
docker exec saarthix-test_mongodb-test_1 mongorestore /data/backup
```
