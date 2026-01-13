@echo off
REM Fix port conflict and deploy
setlocal

set VM_IP=103.149.162.194
set VM_USER=root
set VM_PASS=W6VITJXH7XPXQWjg
set VM_PATH=~/test/saarthix-test

echo ========================================
echo Fixing Port Conflict and Deploying
echo ========================================
echo.

REM Check for PuTTY plink
where plink >nul 2>&1
if not errorlevel 1 (
    echo [*] Using PuTTY plink...
    echo [*] Stopping all containers and cleaning up...
    plink -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
        "cd %VM_PATH% && " ^
        "docker-compose down && " ^
        "docker ps -a | grep mongo | awk '{print $1}' | xargs -r docker rm -f && " ^
        "lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && " ^
        "echo '[*] Port cleaned. Starting deployment...' && " ^
        "docker-compose up --build -d && " ^
        "sleep 20 && " ^
        "docker-compose ps"
    goto :end
)

REM Check for sshpass
where sshpass >nul 2>&1
if not errorlevel 1 (
    echo [*] Using sshpass...
    sshpass -p "%VM_PASS%" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 %VM_USER%@%VM_IP% ^
        "cd %VM_PATH% && docker-compose down && docker ps -a | grep mongo | awk '{print \$1}' | xargs -r docker rm -f && lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && docker-compose up --build -d && sleep 20 && docker-compose ps"
    goto :end
)

REM Fallback: Use regular SSH
echo [*] Using SSH (you'll be prompted for password: %VM_PASS%)...
echo.
ssh -o StrictHostKeyChecking=no -o ConnectTimeout=30 %VM_USER%@%VM_IP% ^
    "cd %VM_PATH% && docker-compose down && docker ps -a | grep mongo | awk '{print \$1}' | xargs -r docker rm -f && lsof -ti:27018 | xargs -r kill -9 2>/dev/null || true && docker-compose up --build -d && sleep 20 && docker-compose ps"

:end
echo.
echo ========================================
echo Deployment process completed!
echo ========================================
echo.
echo Your app should be available at:
echo   Frontend: http://%VM_IP%:3001
echo   Backend: http://%VM_IP%:8081
echo   Health: http://%VM_IP%:8081/health
echo.
pause
