@echo off
REM Quick Frontend Deployment Script
setlocal

REM Load credentials from .credentials file
for /f "tokens=1,2 delims==" %%a in (.credentials) do (
    if "%%a"=="VM_IP" set VM_IP=%%b
    if "%%a"=="VM_USER" set VM_USER=%%b
    if "%%a"=="VM_PASS" set VM_PASS=%%b
    if "%%a"=="VM_PATH" set VM_PATH=%%b
)

echo ========================================
echo Frontend Deployment
echo ========================================
echo.

REM Upload frontend source
echo [*] Uploading frontend code...
.\pscp.exe -batch -pw %VM_PASS% -r frontend/src %VM_USER%@%VM_IP%:%VM_PATH%/frontend/
if errorlevel 1 goto :error

REM Rebuild and restart frontend
echo [*] Rebuilding frontend container...
echo y | .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
    "cd %VM_PATH% && docker-compose build frontend-test && docker-compose up -d --no-deps frontend-test"
if errorlevel 1 goto :error

echo.
echo [✓] Frontend deployed successfully!
echo [*] Visit: http://saarthix.com
echo.
goto :end

:error
echo.
echo [!] Deployment failed. Check the output above.
echo.

:end
pause
