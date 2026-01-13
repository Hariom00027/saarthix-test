@echo off
REM Quick Backend Deployment Script
setlocal

REM Load credentials from .credentials file
for /f "tokens=1,2 delims==" %%a in (.credentials) do (
    if "%%a"=="VM_IP" set VM_IP=%%b
    if "%%a"=="VM_USER" set VM_USER=%%b
    if "%%a"=="VM_PASS" set VM_PASS=%%b
    if "%%a"=="VM_PATH" set VM_PATH=%%b
)

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
