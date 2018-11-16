Una vez descargado el proyecto instalas node y tras asegurarte que tienes Node.js y npm instalado, instalas node:
En una consola, en la ubicación del proyecto:
      ·npm install -g
      .npm install -g sass
Entonces dispondremos de dos comandos para ejecutar y trabajar con la solucion
npm run serve :: Compilará los archivos scss y arrancara el servidor http-server en localhost:8080, que es la dirección por defecto. 
npm run build :: Compilará los archivos necesario sin levantar el servidor. De momento sólo ejecutará el comando sass con las direcciones de los archivos, 
                  pero se le irán añadiendo opciones según se necesite 