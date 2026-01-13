# Security Guide - Protecting Your Server Credentials

## Current Security Setup

Your server credentials are now stored in `.credentials` file which is:
- ✅ **Gitignored** - Won't be committed to GitHub
- ✅ **Centralized** - All scripts read from this one file
- ✅ **Easy to update** - Change password in one place

## Files Containing Credentials

The following files now load credentials from `.credentials`:
- `auto-deploy.bat`
- `deploy-frontend.bat`
- `deploy-backend.bat`
- `setup-domain.bat`

## Recommended: Switch to SSH Keys (More Secure)

Instead of using passwords, you can use SSH keys for passwordless authentication:

### Step 1: Generate SSH Key (on your Windows machine)
```cmd
ssh-keygen -t rsa -b 4096 -f %USERPROFILE%\.ssh\saarthix_deploy
```

Press Enter when asked for passphrase (or set one for extra security).

### Step 2: Copy Public Key to Server
```cmd
type %USERPROFILE%\.ssh\saarthix_deploy.pub | .\plink.exe -ssh root@103.194.228.182 -pw YOUR_PASSWORD "cat >> ~/.ssh/authorized_keys"
```

*Note: Replace `YOUR_PASSWORD` with the password from your `.credentials` file*

### Step 3: Update Scripts to Use Key Instead of Password

Replace `-pw %VM_PASS%` with `-i %USERPROFILE%\.ssh\saarthix_deploy` in all scripts.

Example:
```batch
REM Old (password):
.\plink.exe -ssh %VM_USER%@%VM_IP% -pw %VM_PASS% "docker ps"

REM New (SSH key):
.\plink.exe -ssh %VM_USER%@%VM_IP% -i %USERPROFILE%\.ssh\saarthix_deploy "docker ps"
```

### Step 4: Remove Password from .credentials
After SSH keys are working, you can remove the `VM_PASS` line from `.credentials`.

## Additional Security Best Practices

1. **Never commit `.credentials` to Git** - Already configured in `.gitignore`
2. **Use strong passwords** - Current password is visible in this file
3. **Rotate passwords regularly** - Change server password every 3-6 months
4. **Enable firewall** - Only allow necessary ports (22, 80, 443)
5. **Use SSH keys** - More secure than passwords
6. **Limit SSH access** - Consider disabling root login after setting up a regular user

## What to Do If Password is Exposed

If you accidentally commit the password to GitHub:

1. **Change server password immediately**:
   ```cmd
   .\plink.exe -ssh root@103.194.228.182 -pw OLD_PASSWORD -t "passwd"
   ```

2. **Update `.credentials` file** with new password

3. **Remove from Git history** (if committed):
   ```cmd
   git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .credentials" --prune-empty --tag-name-filter cat -- --all
   git push origin --force --all
   ```

## Current Password Location

⚠️ **IMPORTANT**: Your server password is stored in:
- `.credentials` file (safe - gitignored)

**Action Required**: Consider changing this password and switching to SSH keys for better security.

**To view your password**: Open the `.credentials` file in your project directory.
