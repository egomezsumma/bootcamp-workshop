# Módulo 1 - express.js

In this module you will learn the basic usage of the [Express.js](http://expressjs.com/) framework.

## Lab 01

Make this http server to return ```hello world``` to any request.

[CLUE](http://nodejs.org/api/http.html#http_response_end_data_encoding)

## Lab 02

Given the url of the request, respond with:

-  ```/hello```: __hello world__
-  ```/bye```: __bye world__
-  any other url, return 404

[PISTA 1](http://nodejs.org/api/http.html#http_message_url), [PISTA 2](http://nodejs.org/api/http.html#http_response_statuscode)

## Lab 03

In the previous examples we used the ```http``` module only which is included on node.js out of the box. In this exercise we will use express.js: 

Create a single route to return the json representation of a document given a url like ```/doc/{ID}```. If the document does not exists return ```404```.

[PISTA 1](http://expressjs.com/api.html#req.params), [PISTA 2](http://expressjs.com/api.html#res.json)

## Lab 04

In this exercise we have refactor some routes to a new file named ```routes.js```.

You should call this file.

[PISTA](http://nodejs.org/api/modules.html)

## Lab 05

We added some templates for our application. Modify the route ```/doc/:id``` to render and return an html created with this template.

[PISTA](http://expressjs.com/api.html#res.render)

## Lab 06

In this exercise we added a button in the UI to save the document. Implement a route in your server to handle PUT ```/doc/:id``` requests.
