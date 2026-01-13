# Remote Deployment Script for SaarthiX Test Application (PowerShell)
# This script deploys the app to your VM via SSH

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "SaarthiX Test - Remote Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get VM details from user
$VM_IP = Read-Host "Enter your VM IP address"
$VM_USER = Read-Host "Enter your VM username (default: root)"
if ([string]::IsNullOrWhiteSpace($VM_USER)) { $VM_USER = "root" }
$VM_PASS = Read-Host "Enter your VM password" -AsSecureString
$VM_PATH = Read-Host "Enter project path on VM (default: ~/test/saarthix-test)"
if ([string]::IsNullOrWhiteSpace($VM_PATH)) { $VM_PATH = "~/test/saarthix-test" }

# Convert secure string to plain text (for sshpass)
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($VM_PASS)
$PlainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

Write-Host ""
Write-Host "Connecting to ${VM_USER}@${VM_IP}..." -ForegroundColor Yellow
Write-Host ""

# Check if sshpass is available
$sshpassPath = Get-Command sshpass -ErrorAction SilentlyContinue

if ($null -eq $sshpassPath) {
    Write-Host "Note: sshpass not found. Attempting alternative methods..." -ForegroundColor Yellow
    Write-Host ""
    
    # Try using Posh-SSH module
    $poshSSH = Get-Module -ListAvailable -Name Posh-SSH
    if ($null -ne $poshSSH) {
        Write-Host "Using Posh-SSH module..." -ForegroundColor Green
        Import-Module Posh-SSH
        
        $credential = New-Object System.Management.Automation.PSCredential($VM_USER, $VM_PASS)
        $session = New-SSHSession -ComputerName $VM_IP -Credential $credential -AcceptKey
        
        if ($session) {
            $commands = @(
                "cd $VM_PATH",
                "docker-compose down",
                "docker-compose up --build -d",
                "docker-compose ps"
            )
            
            foreach ($cmd in $commands) {
                $result = Invoke-SSHCommand -SessionId $session.SessionId -Command $cmd
                Write-Host $result.Output
                if ($result.ExitStatus -ne 0) {
                    Write-Host "Error: $($result.Error)" -ForegroundColor Red
                }
            }
            
            Remove-SSHSession -SessionId $session.SessionId | Out-Null
        }
    } else {
        Write-Host "Please install one of the following:" -ForegroundColor Red
        Write-Host "1. sshpass (for Linux/WSL): sudo apt-get install sshpass" -ForegroundColor Yellow
        Write-Host "2. Posh-SSH module: Install-Module -Name Posh-SSH" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Or use manual deployment:" -ForegroundColor Yellow
        Write-Host "ssh ${VM_USER}@${VM_IP}" -ForegroundColor Cyan
        Write-Host "cd $VM_PATH" -ForegroundColor Cyan
        Write-Host "docker-compose down && docker-compose up --build -d" -ForegroundColor Cyan
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "Using sshpass for authentication..." -ForegroundColor Green
    
    $deployCommands = @(
        "cd $VM_PATH",
        "docker-compose down",
        "docker-compose up --build -d",
        "docker-compose ps"
    )
    
    $fullCommand = $deployCommands -join " && "
    
    $env:SSHPASS = $PlainPassword
    sshpass -e ssh -o StrictHostKeyChecking=no "${VM_USER}@${VM_IP}" $fullCommand
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "ERROR: Deployment failed!" -ForegroundColor Red
        Write-Host ""
        Write-Host "Troubleshooting:" -ForegroundColor Yellow
        Write-Host "1. Verify SSH access: ssh ${VM_USER}@${VM_IP}" -ForegroundColor Cyan
        Write-Host "2. Check if Docker is installed on VM" -ForegroundColor Cyan
        Write-Host "3. Verify project path: $VM_PATH" -ForegroundColor Cyan
        Read-Host "Press Enter to exit"
        exit 1
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your application should be running at:" -ForegroundColor Cyan
Write-Host "  - Frontend: http://${VM_IP}:3001" -ForegroundColor White
Write-Host "  - Backend API: http://${VM_IP}:8081" -ForegroundColor White
Write-Host "  - Health Check: http://${VM_IP}:8081/health" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
