# Ejercicios Docker
---
1. Listar las imagenes en el sistema y limpiar las que no se están usando.


2. Crear una imagen a partir de un dockerfile que agregue un nuevo script al sistema (imagen base de fedora)


3. Un desarrollador les dio acceso a un repositorio GIT para que creen una imagen de docker del software. https://github.com/glynnbird/Node.js-Web-Server

- La aplicacion esta escrita en javascript y necesita de NodeJS
- Para instalar hay que correr el comando `npm install` en la carpeta del repositorio
- Para ejecturar la aplicacion hay que correr el comando `node apache.js`




4. A partir del archivo app.py cree un docker-compose con Redis y un volumen persistente para correr dicha aplicación.

5. Crear el mismo servicio del punto 4 en swarm.
6. Replicar el servicio dentro del swarm en distintos nodos del mismo.
