@echo off
REM Automated Deployment Script - Just double-click to deploy!
setlocal

set VM_IP=103.194.228.182
set VM_USER=root
set VM_PASS=W6VITJXH7XPXQWjg
set VM_PATH=~/test/saarthix-test

echo ========================================
echo SaarthiX Test - Automated Deployment
echo ========================================
echo.
echo Deploying to: %VM_USER%@%VM_IP%
echo.

REM Check for PuTTY plink (most reliable for Windows)
where plink >nul 2>&1
if not errorlevel 1 (
    echo [*] Using PuTTY plink...
    plink -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
        "cd %VM_PATH% && " ^
        "echo '[*] Stopping existing containers...' && " ^
        "docker-compose down && " ^
        "echo '[*] Cleaning up port conflicts...' && " ^
        "docker ps -a | grep mongo | awk '{print \$1}' | xargs -r docker rm -f 2>/dev/null || true && " ^
        "fuser -k 27018/tcp 2>/dev/null || lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && " ^
        "echo '[*] Building and starting services...' && " ^
        "docker-compose up --build -d && " ^
        "echo '[*] Waiting for services to start...' && " ^
        "sleep 20 && " ^
        "echo '[*] Checking service status...' && " ^
        "docker-compose ps && " ^
        "echo '' && " ^
        "echo '[*] Deployment complete! Services:' && " ^
        "echo '    Frontend: http://%VM_IP%:3001' && " ^
        "echo '    Backend: http://%VM_IP%:8081' && " ^
        "echo '    Health: http://%VM_IP%:8081/health'"
    
    if errorlevel 1 (
        echo.
        echo [!] Deployment may have encountered issues.
        echo [!] Check the output above for details.
    ) else (
        echo.
        echo [✓] Deployment completed successfully!
    )
    goto :end
)

REM Check for sshpass
where sshpass >nul 2>&1
if not errorlevel 1 (
    echo [*] Using sshpass...
    sshpass -p "%VM_PASS%" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 %VM_USER%@%VM_IP% ^
        "cd %VM_PATH% && docker-compose down && docker ps -a | grep mongo | awk '{print \$1}' | xargs -r docker rm -f 2>/dev/null || true && fuser -k 27018/tcp 2>/dev/null || lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && docker-compose up --build -d && sleep 20 && docker-compose ps"
    goto :end
)

REM Fallback: Use regular SSH (will prompt for password)
echo [*] Using SSH (you'll be prompted for password: %VM_PASS%)...
echo.
echo [!] If connection times out, please deploy manually:
echo [!] 1. SSH manually: ssh %VM_USER%@%VM_IP%
echo [!] 2. Run: cd %VM_PATH%
echo [!] 3. Run: docker-compose down
echo [!] 4. Run: docker-compose up --build -d
echo [!] 5. Run: docker-compose ps
echo.
echo Attempting connection (this may timeout)...
ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 -o ServerAliveInterval=5 %VM_USER%@%VM_IP% ^
    "cd %VM_PATH% && docker-compose down && docker ps -a | grep mongo | awk '{print \$1}' | xargs -r docker rm -f 2>/dev/null || true && fuser -k 27018/tcp 2>/dev/null || lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && docker-compose up --build -d && sleep 20 && docker-compose ps"

:end
echo.
echo ========================================
echo Deployment process completed!
echo ========================================
echo.
echo If you see errors above, you may need to:
echo 1. Install PuTTY (includes plink.exe)
echo 2. Or install sshpass for password authentication
echo 3. Or manually SSH and run: cd %VM_PATH% && docker-compose up --build -d
echo.
pause
