@echo off
REM Remote Deployment Script for SaarthiX Test Application
REM This script deploys the app to your VM via SSH

echo ========================================
echo SaarthiX Test - Remote Deployment
echo ========================================
echo.

REM Get VM details from user
set /p VM_IP="Enter your VM IP address: "
set /p VM_USER="Enter your VM username (default: root): "
if "%VM_USER%"=="" set VM_USER=root
set /p VM_PASS="Enter your VM password: "
set /p VM_PATH="Enter project path on VM (default: ~/test/saarthix-test): "
if "%VM_PATH%"=="" set VM_PATH=~/test/saarthix-test

echo.
echo Connecting to %VM_USER%@%VM_IP%...
echo.

REM Check if sshpass is available (for password authentication)
where sshpass >nul 2>&1
if errorlevel 1 (
    echo Note: sshpass not found. You may need to enter password manually.
    echo Installing sshpass or using alternative method...
    echo.
    
    REM Try using plink (PuTTY) if available, otherwise use regular SSH
    where plink >nul 2>&1
    if not errorlevel 1 (
        echo Using PuTTY plink...
        plink -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% "cd %VM_PATH% && docker-compose down && docker-compose up --build -d && docker-compose ps"
    ) else (
        echo Please install sshpass or use SSH keys for passwordless login.
        echo.
        echo Manual deployment steps:
        echo 1. SSH to your VM: ssh %VM_USER%@%VM_IP%
        echo 2. Run: cd %VM_PATH%
        echo 3. Run: docker-compose down
        echo 4. Run: docker-compose up --build -d
        echo 5. Run: docker-compose ps
        pause
        exit /b 0
    )
) else (
    echo Using sshpass for authentication...
    sshpass -p "%VM_PASS%" ssh -o StrictHostKeyChecking=no %VM_USER%@%VM_IP% "cd %VM_PATH% && docker-compose down && docker-compose up --build -d && docker-compose ps"
)

if errorlevel 1 (
    echo.
    echo ERROR: Deployment failed!
    echo.
    echo Troubleshooting:
    echo 1. Verify SSH access: ssh %VM_USER%@%VM_IP%
    echo 2. Check if Docker is installed on VM
    echo 3. Verify project path: %VM_PATH%
    echo 4. Check firewall settings
    pause
    exit /b 1
)

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your application should be running at:
echo   - Frontend: http://%VM_IP%:3001
echo   - Backend API: http://%VM_IP%:8081
echo   - Health Check: http://%VM_IP%:8081/health
echo.
pause
