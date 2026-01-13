# Deployment Guide - How to Update Your Website

This guide covers how to deploy changes to your live website at `saarthix.com`.

## Quick Reference

**For Frontend Changes:**
```cmd
.\deploy-frontend.bat
```

**For Backend Changes:**
```cmd
.\deploy-backend.bat
```

**For Full Deployment (All Changes):**
```cmd
.\auto-deploy.bat
```

---

## Detailed Step-by-Step Guide

### Option 1: Deploy from Local Changes (Recommended for Quick Updates)

#### Step 1: Make Your Changes
Edit your code locally in `c:\Users\HariomSingh\Desktop\Testing\saarthix-test`

#### Step 2: Choose What to Deploy

**A. Frontend Only (React/UI Changes)**
```cmd
cd c:\Users\HariomSingh\Desktop\Testing\saarthix-test
.\deploy-frontend.bat
```

**B. Backend Only (API/Database Changes)**
```cmd
cd c:\Users\HariomSingh\Desktop\Testing\saarthix-test
.\deploy-backend.bat
```

**C. Everything (Frontend + Backend + Database)**
```cmd
cd c:\Users\HariomSingh\Desktop\Testing\saarthix-test
.\auto-deploy.bat
```

#### Step 3: Verify
Open your browser and visit:
- Frontend: http://saarthix.com
- Backend Health: http://saarthix.com/api/health

---

### Option 2: Deploy from GitHub (For Team Collaboration)

#### Step 1: Push Your Changes to GitHub
```cmd
cd c:\Users\HariomSingh\Desktop\Testing\saarthix-test
git add .
git commit -m "Your change description"
git push origin main
```

#### Step 2: Deploy from GitHub on Server
Run this command from your **local terminal**:

```cmd
.\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg -t "cd ~/test/saarthix-test && git pull origin main && docker-compose down && docker-compose up --build -d"
```

#### Step 3: Verify
Visit http://saarthix.com to see your changes.

---

## Troubleshooting

### Site Shows 502 Bad Gateway
**Fix:** Restart containers
```cmd
echo y | .\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg "cd ~/test/saarthix-test && docker-compose restart"
```

### Changes Not Showing Up
**Fix:** Clear browser cache or hard refresh (Ctrl + Shift + R)

### Check Container Status
```cmd
echo y | .\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg "docker ps"
```

### View Container Logs
```cmd
echo y | .\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg "cd ~/test/saarthix-test && docker-compose logs --tail=50 frontend-test"
```

Replace `frontend-test` with `backend-test` or `mongodb-test` as needed.

---

## Important Notes

1. **API Endpoints**: Always use relative paths (`/api/...`) in your frontend code, never `localhost:8081`.

2. **Environment Variables**: If you add new environment variables, update `docker-compose.yml` and redeploy.

3. **Database Changes**: MongoDB data persists in a Docker volume. To reset the database:
   ```cmd
   echo y | .\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg "cd ~/test/saarthix-test && docker-compose down -v && docker-compose up -d"
   ```
   ⚠️ **Warning**: This deletes all data!

4. **SSL Certificate**: Renews automatically. If issues occur, run:
   ```cmd
   .\plink.exe -ssh root@103.194.228.182 -pw W6VITJXH7XPXQWjg -t "certbot renew"
   ```
