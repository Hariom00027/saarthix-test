@echo off
REM Quick deployment with pre-configured credentials
set VM_IP=103.149.162.194
set VM_USER=root
set VM_PASS=W6VITJXH7XPXQWjg
set VM_PATH=~/test/saarthix-test

echo Connecting to VM and deploying...
echo.

REM Try using plink (PuTTY) first
where plink >nul 2>&1
if not errorlevel 1 (
    echo Using PuTTY plink...
    plink -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch "cd %VM_PATH% && docker-compose down && docker-compose up --build -d && sleep 5 && docker-compose ps"
    goto :end
)

REM Try using sshpass if available
where sshpass >nul 2>&1
if not errorlevel 1 (
    echo Using sshpass...
    sshpass -p "%VM_PASS%" ssh -o StrictHostKeyChecking=no %VM_USER%@%VM_IP% "cd %VM_PATH% && docker-compose down && docker-compose up --build -d && sleep 5 && docker-compose ps"
    goto :end
)

REM Fallback to regular SSH (will prompt for password)
echo Using SSH (you'll be prompted for password)...
ssh -o StrictHostKeyChecking=no %VM_USER%@%VM_IP% "cd %VM_PATH% && docker-compose down && docker-compose up --build -d && sleep 5 && docker-compose ps"

:end
if errorlevel 1 (
    echo.
    echo Deployment completed. Check status above.
) else (
    echo.
    echo Deployment successful!
    echo Your app is available at:
    echo   Frontend: http://%VM_IP%:3001
    echo   Backend: http://%VM_IP%:8081
)
pause
