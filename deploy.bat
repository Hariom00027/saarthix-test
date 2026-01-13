@echo off
REM Deployment script for SaarthiX Test Application
REM This script builds and starts all Docker containers

echo ========================================
echo SaarthiX Test - Deployment Script
echo ========================================
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not running or not installed!
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo [1/4] Stopping any existing containers...
docker-compose down

echo.
echo [2/4] Building and starting all services...
echo This may take several minutes on first run...
docker-compose up --build -d

if errorlevel 1 (
    echo.
    echo ERROR: Failed to start services!
    echo Checking logs...
    docker-compose logs --tail=50
    pause
    exit /b 1
)

echo.
echo [3/4] Waiting for services to be healthy...
timeout /t 30 /nobreak >nul

echo.
echo [4/4] Checking service status...
docker-compose ps

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Services are running on:
echo   - Frontend: http://localhost:3001
echo   - Backend API: http://localhost:8081
echo   - MongoDB: localhost:27018
echo.
echo To view logs: docker-compose logs -f
echo To stop services: docker-compose down
echo.
pause
