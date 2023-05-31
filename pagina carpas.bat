@echo off
cd "C:\Users\LANCENTERSTORE\OneDrive\Desktop\Aplicacion-carpas-offline"
start cmd /k "npm run dev"
timeout /t 5  REM Retraso de 5 segundos
powershell -command "Start-Sleep -s 1; [System.Windows.Forms.SendKeys]::SendWait('^{c}')"
start chrome http://localhost:3000
