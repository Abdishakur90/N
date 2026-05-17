@echo off
setlocal EnableDelayedExpansion

:: Claude Code Installer for Windows
:: Usage: curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd

set "REQUIRED_NODE_VERSION=18"
set "PACKAGE_NAME=@anthropic-ai/claude-code"

echo.
echo  Claude Code Installer
echo  =====================
echo.

:: Check for Node.js
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo.
    echo Please install Node.js %REQUIRED_NODE_VERSION% or later from https://nodejs.org/
    echo Then re-run this installer.
    echo.
    exit /b 1
)

:: Check Node.js version
for /f "tokens=1 delims=v" %%i in ('node --version 2^>nul') do set "NODE_VER_RAW=%%i"
for /f "tokens=1 delims=v" %%i in ('node --version 2^>nul') do set "NODE_VER=%%i"
for /f "tokens=1 delims=." %%i in ("%NODE_VER%") do set "NODE_MAJOR=%%i"

if %NODE_MAJOR% LSS %REQUIRED_NODE_VERSION% (
    echo [ERROR] Node.js version %NODE_MAJOR% detected. Version %REQUIRED_NODE_VERSION% or later is required.
    echo.
    echo Please upgrade Node.js from https://nodejs.org/
    echo.
    exit /b 1
)

echo [OK] Node.js %NODE_VER% detected.

:: Check for npm
where npm >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm is not installed or not in PATH.
    echo.
    echo Please install Node.js (which includes npm) from https://nodejs.org/
    echo.
    exit /b 1
)

echo [OK] npm detected.
echo.
echo Installing %PACKAGE_NAME%...
echo.

:: Install Claude Code globally
npm install -g %PACKAGE_NAME%

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Installation failed.
    echo.
    echo If you see a permissions error, try running this script as Administrator.
    echo.
    exit /b 1
)

echo.
echo [OK] Claude Code installed successfully!
echo.

:: Verify installation
where claude >nul 2>&1
if %ERRORLEVEL% equ 0 (
    for /f "tokens=*" %%i in ('claude --version 2^>nul') do set "CLAUDE_VER=%%i"
    echo Claude Code !CLAUDE_VER! is ready to use.
    echo.
    echo Get started by running:  claude
    echo Documentation:           https://docs.anthropic.com/claude-code
    echo.
) else (
    echo Claude Code has been installed.
    echo.
    echo You may need to restart your terminal for the 'claude' command to be available.
    echo.
)

endlocal
exit /b 0
