@echo off
REM Quick Backend Deployment Script
setlocal

set VM_IP=103.194.228.182
set VM_USER=root
set VM_PASS=W6VITJXH7XPXQWjg
set VM_PATH=/root/test/saarthix-test

echo ========================================
echo Backend Deployment
echo ========================================
echo.

REM Upload backend source
echo [*] Uploading backend code...
.\pscp.exe -batch -pw %VM_PASS% -r backend/src %VM_USER%@%VM_IP%:%VM_PATH%/backend/
if errorlevel 1 goto :error

REM Rebuild and restart backend
echo [*] Rebuilding backend container...
echo y | .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
    "cd %VM_PATH% && docker-compose build backend-test && docker-compose up -d --no-deps backend-test"
if errorlevel 1 goto :error

echo.
echo [✓] Backend deployed successfully!
echo [*] Test: http://saarthix.com/api/health
echo.
goto :end

:error
echo.
echo [!] Deployment failed. Check the output above.
echo.

:end
pause
