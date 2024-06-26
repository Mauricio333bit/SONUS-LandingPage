#!/bin/bash

# Actualizar dependencias
npm install

# Construir el proyecto
npm run build

# Mover los archivos construidos al directorio público
cp -R dist/* /home/u116696444/public_html/

# Opcional: Limpiar caché si es necesario
rm -rf /home/u116696444/public_html/cache/*

# Opcional: Establecer permisos
find /home/u116696444/public_html -type f -exec chmod 644 {} \;
find /home/u116696444/public_html -type d -exec chmod 755 {} \;

echo "Despliegue completado"