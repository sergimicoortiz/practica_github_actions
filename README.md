# Practica final eslint

## Eslint:

He creado el workflow con un job llamado Linter_job el cual instala las dependencias del proyecto y ejecuta npm run lint.

<img src="./pic/Screenshot_20230113_185347.png"/>
<img src="./pic/Screenshot_20230113_185556.png"/>


## Cypress:

He realizdo los test en local para verificar su funcionamiento.

<img src='./pic/Screenshot_20230113_195634.png' />

He añadido el job al workflow, debemos de ponerle id al step del cypress para más tarde poder subir el resultado del job a un artefacto. Además debemos de usar *continue-on-error* para que aunque el step falle los resultados se guarden. Por último debemos de pasarle como parámetros de entrada el *start* con el comando de *npm run dev* para que el preoyecto de Next inicie además del *wait-on* con la URL de Next para que cypress se espere a que el servicio de Next esté listo para realizar los test.

<img src='./pic/Captura de pantalla 2023-01-13 204718.png' />
<img src='./pic/Captura de pantalla 2023-01-13 204754.png' />