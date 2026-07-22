@echo off
cd /d "%~dp0"
echo Starting VALERIIA - A UNIVERSE MADE OF LOVE...
echo.
echo If the browser does not open automatically, use:
echo http://localhost:5173/
echo.
start "" "http://localhost:5173/"
npm.cmd run dev
pause
