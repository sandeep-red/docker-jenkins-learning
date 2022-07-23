#define what image you want to build from.
FROM node:16
#Create a working directory
WORKDIR /usr/src/app
#copy package.json file to the working directory
COPY package*.json ./
#install dependecies
RUN npm install
#copy the code to the working directory
COPY . .
#expose the port
EXPOSE 4000
#run command
CMD ["node","server.js"]