@echo off
echo Iniciando servidor HTTP local para o site...
echo Acesse: http://localhost:8000
echo Para parar o servidor, pressione Ctrl+C
python -m http.server 8000
pause
