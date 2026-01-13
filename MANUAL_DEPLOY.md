# Manual Deployment Instructions

Since automated SSH connection is timing out, please follow these steps to deploy manually:

## Step 1: Connect to Your VM

Open a terminal/command prompt and SSH to your server:

```bash
ssh root@103.149.162.194
```

When prompted, enter password: `W6VITJXH7XPXQWjg`

## Step 2: Navigate to Project Directory

```bash
cd ~/test/saarthix-test
```

## Step 3: Stop and Clean Up

```bash
# Stop all containers
docker-compose down

# Remove any MongoDB containers that might be using port 27018
docker ps -a | grep mongo | awk '{print $1}' | xargs -r docker rm -f

# Kill any process using port 27018
lsof -ti:27018 | xargs -r kill -9 2>/dev/null || fuser -k 27018/tcp 2>/dev/null || true
```

## Step 4: Deploy

```bash
# Build and start all services
docker-compose up --build -d

# Wait a bit for services to start
sleep 20

# Check status
docker-compose ps
```

## Step 5: Verify Deployment

```bash
# Check if containers are running
docker ps

# Check logs if needed
docker-compose logs backend-test
docker-compose logs frontend-test
```

## Your App URLs

Once deployed, your app will be available at:
- **Frontend**: http://103.149.162.194:3001
- **Backend API**: http://103.149.162.194:8081
- **Health Check**: http://103.149.162.194:8081/health

## Troubleshooting

If containers fail to start:

```bash
# View detailed logs
docker-compose logs

# Check specific service
docker-compose logs backend-test

# Restart a service
docker-compose restart backend-test

# Rebuild a specific service
docker-compose up --build -d backend-test
```

## Quick Commands Reference

```bash
# Stop everything
docker-compose down

# Start everything
docker-compose up -d

# Rebuild and start
docker-compose up --build -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```
