FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Exponer el puerto de desarrollo de Next.js
EXPOSE 3000

# Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
