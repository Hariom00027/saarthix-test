# Remote Deployment Guide

This guide helps you deploy the SaarthiX Test application to your remote VM.

## Prerequisites

1. **SSH Access**: You need SSH access to your VM
2. **Docker & Docker Compose**: Must be installed on the VM
3. **Project Files**: The project should already be on the VM (or we'll help transfer it)

## Option 1: Automated Deployment (Windows)

### Using PowerShell Script (Recommended)

1. **Install Posh-SSH module** (if not already installed):
```powershell
Install-Module -Name Posh-SSH -Scope CurrentUser
```

2. **Run the deployment script**:
```powershell
cd C:\Users\HariomSingh\Desktop\Testing\saarthix-test
.\deploy-to-vm.ps1
```

3. **Enter your VM details when prompted**:
   - VM IP address
   - Username (default: root)
   - Password
   - Project path (default: ~/test/saarthix-test)

### Using Batch Script

```cmd
cd C:\Users\HariomSingh\Desktop\Testing\saarthix-test
deploy-to-vm.bat
```

**Note**: For batch script, you may need to install `sshpass` or use PuTTY's `plink`.

## Option 2: Manual Deployment via SSH

### Step 1: Connect to your VM
```cmd
ssh root@YOUR_VM_IP
```

### Step 2: Navigate to project directory
```bash
cd ~/test/saarthix-test
```

### Step 3: Deploy the application
```bash
# Stop any running containers
docker-compose down

# Build and start all services
docker-compose up --build -d

# Check status
docker-compose ps

# View logs (if needed)
docker-compose logs -f backend-test
```

## Option 3: One-Line Deployment

If you have SSH access and want to deploy in one command:

```cmd
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose down && docker-compose up --build -d && docker-compose ps"
```

You'll be prompted for your password.

## Option 4: Using SSH Keys (Passwordless)

For better security, set up SSH keys:

### On Windows:
```cmd
# Generate SSH key (if you don't have one)
ssh-keygen -t rsa -b 4096

# Copy key to VM
ssh-copy-id root@YOUR_VM_IP
```

Then you can deploy without entering password:
```cmd
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose down && docker-compose up --build -d"
```

## Verification

After deployment, verify your services:

1. **Check container status**:
```bash
ssh root@YOUR_VM_IP "docker-compose ps"
```

2. **Test endpoints**:
   - Frontend: `http://YOUR_VM_IP:3001`
   - Backend: `http://YOUR_VM_IP:8081`
   - Health: `http://YOUR_VM_IP:8081/health`

3. **Check logs**:
```bash
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose logs --tail=50"
```

## Troubleshooting

### SSH Connection Issues

```cmd
# Test SSH connection
ssh root@YOUR_VM_IP

# If connection fails, check:
# 1. Firewall rules allow SSH (port 22)
# 2. VM is running and accessible
# 3. Correct IP address and credentials
```

### Docker Not Found on VM

```bash
# Install Docker on Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt-get update
apt-get install docker-compose-plugin
```

### Port Already in Use

```bash
# Check what's using the ports
netstat -tulpn | grep -E '3001|8081|27018'

# Stop conflicting services or change ports in docker-compose.yml
```

### Permission Denied

```bash
# Add user to docker group (if not root)
usermod -aG docker $USER
newgrp docker
```

## Quick Reference Commands

```bash
# Deploy
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose up --build -d"

# Stop
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose down"

# Restart
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose restart"

# View logs
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose logs -f"

# Check status
ssh root@YOUR_VM_IP "cd ~/test/saarthix-test && docker-compose ps"
```

## Security Notes

⚠️ **Important**: 
- Never share your VM credentials publicly
- Use SSH keys instead of passwords when possible
- Keep your VM's firewall properly configured
- Regularly update your system and Docker

## Need Help?

If deployment fails:
1. Check VM logs: `ssh root@YOUR_VM_IP "docker-compose logs"`
2. Verify Docker is running: `ssh root@YOUR_VM_IP "docker ps"`
3. Check disk space: `ssh root@YOUR_VM_IP "df -h"`
4. Verify network connectivity: `ssh root@YOUR_VM_IP "ping -c 3 8.8.8.8"`
