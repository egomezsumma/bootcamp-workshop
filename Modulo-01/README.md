# Módulo 1 - express.js

En este módulo aprenderemos a utilizar el modulo Express.js para aplicaciones web.

## Ejercicio 01

Hacer que el servidor http de este ejercicio devuelva un mensaje de ```hello world``` a cualquier request.

[PISTA](http://nodejs.org/api/http.html#http_response_end_data_encoding)

## Ejercicio 02

Dependiendo de la url del request:

-  para ```/hello``` devolver __hola mundo__
-  para ```/bye``` devolver __chau mundo__
-  para todo lo demás devolver status code 404

[PISTA 1](http://nodejs.org/api/http.html#http_message_url), [PISTA 2](http://nodejs.org/api/http.html#http_response_statuscode)

## Ejercicio 03

En los ejemplos anteriores usamos solamente el módulo ```http``` que viene incluído en node.js. En este ejercicio vamos a utilizar express.js. 

Agregar una ruta que:  

-  para ```/doc/{ID}``` devolver un objeto JSON con el docuento con dicho id.
-  si el ID no existe, devolver 404.

[PISTA 1](http://expressjs.com/api.html#req.params), [PISTA 2](http://expressjs.com/api.html#res.json)

## Ejercicio 04

En este ejercicio hemos extraído las rutas a un nuevo archivo. 
Agregar la llamada a la función del modulo ```routes.js```.

[PISTA](http://nodejs.org/api/modules.html)

## Ejercicio 05

En este ejercicio hemos agregado templates para nuestra aplicación. Modificar la ruta ```/doc/:id``` para que devuelve una página creada a partir del template ```doc```.

[PISTA](http://expressjs.com/api.html#res.render)

## Ejercicio 06

En este ejercicio agregamos un botón que permite guardar el documento, implementar la ruta PUT ```/doc/:id``` que modifica el contenido del documento.
