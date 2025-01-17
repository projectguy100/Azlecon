@echo off
:: Search for Lively Wallpaper
winget search "Lively Wallpaper" --source="msstore"

:: Install Lively Wallpaper if found
winget install --id 9NTXR16HNW1T --source msstore --accept-package-agreements --accept-source-agreements

:: Indicate completion
echo Installation process completed!
pause
