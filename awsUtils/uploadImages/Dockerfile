# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 5000

# Define las variables de entorno (asegúrate de que el archivo .env se incluya en la imagen)
COPY .env .env

# Comando para iniciar la aplicación
CMD ["npm", "start"]
