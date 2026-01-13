@echo off
REM Setup Domain and Nginx Script
setlocal

set VM_IP=103.194.228.182
set VM_USER=root
set VM_PASS=W6VITJXH7XPXQWjg
set VM_PATH=/root/test/saarthix-test
set NGINX_CONF=/etc/nginx/sites-available/saarthix.com

echo ========================================
echo SaarthiX - Domain Setup (saarthix.com)
echo ========================================
echo.

REM 1. Upload Modified Frontend Code
echo [*] Uploading modified frontend code...
.\pscp.exe -batch -pw %VM_PASS% -r frontend/src %VM_USER%@%VM_IP%:%VM_PATH%/frontend/
if errorlevel 1 (
    echo [!] Failed to upload frontend code.
    goto :error
)

REM 2. Rebuild Frontend Container
echo [*] Rebuilding frontend container (this may take a minute)...
echo y | .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
    "cd %VM_PATH% && docker-compose build frontend-test && docker-compose up -d --no-deps frontend-test"
if errorlevel 1 goto :error

REM 3. Install Nginx and Certbot
echo [*] Installing Nginx and Certbot...
echo y | .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
    "apt-get update && apt-get install -y nginx certbot python3-certbot-nginx ufw"

REM 4. Create Nginx Configuration
echo [*] Creating Nginx configuration for saarthix.com...
echo y | .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -batch ^
    "echo 'server {' > %NGINX_CONF% && " ^
    "echo '    listen 80;' >> %NGINX_CONF% && " ^
    "echo '    server_name saarthix.com www.saarthix.com;' >> %NGINX_CONF% && " ^
    "echo '    ' >> %NGINX_CONF% && " ^
    "echo '    location / {' >> %NGINX_CONF% && " ^
    "echo '        proxy_pass http://localhost:3001;' >> %NGINX_CONF% && " ^
    "echo '        proxy_http_version 1.1;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header Host \$host;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Real-IP \$remote_addr;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Forwarded-Proto \$scheme;' >> %NGINX_CONF% && " ^
    "echo '    }' >> %NGINX_CONF% && " ^
    "echo '    ' >> %NGINX_CONF% && " ^
    "echo '    location /api/ {' >> %NGINX_CONF% && " ^
    "echo '        proxy_pass http://localhost:8081/api/;' >> %NGINX_CONF% && " ^
    "echo '        proxy_http_version 1.1;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header Host \$host;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Real-IP \$remote_addr;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;' >> %NGINX_CONF% && " ^
    "echo '        proxy_set_header X-Forwarded-Proto \$scheme;' >> %NGINX_CONF% && " ^
    "echo '    }' >> %NGINX_CONF% && " ^
    "echo '}' >> %NGINX_CONF% && " ^
    "ln -sf %NGINX_CONF% /etc/nginx/sites-enabled/ && " ^
    "nginx -t && " ^
    "systemctl reload nginx && " ^
    "ufw deny 3001 && " ^
    "ufw allow 'Nginx Full'"

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Now please run the following command MANUALLY to set up SSL:
echo.
echo .\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% -t "certbot --nginx -d saarthix.com -d www.saarthix.com"
echo.
goto :end

:error
echo.
echo [!] An error occurred during setup.
echo.

:end
pause
