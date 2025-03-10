# Usa una imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente de tu aplicación al contenedor
COPY . .

# Expone el puerto 3000 para acceder a la app
EXPOSE 3000

# Define el comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
