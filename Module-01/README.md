# Module 1 - express.js

In this module you will learn the basic usage of the [Express.js](http://expressjs.com/) framework.

## Excercise 01

Make this http server to return ```hello world``` to any request.

[TIP](http://nodejs.org/api/http.html#http_response_end_data_encoding)

## Excercise 02

Given the url of the request, respond with:

-  ```/hello```: __hello world__
-  ```/bye```: __bye world__
-  any other url, return 404

[TIP1](http://nodejs.org/api/http.html#http_message_url), [TIP2](http://nodejs.org/api/http.html#http_response_statuscode)

## Excercise 03

In the previous examples we used the ```http``` module only which is included on node.js out of the box. In this exercise we will use express.js: 

Create a single route to return the json representation of a document given a url like ```/doc/{ID}```. If the document does not exists return ```404```.

[TIP1](http://expressjs.com/api.html#req.params), [TIP2](http://expressjs.com/api.html#res.json)

## Excercise 04

In this exercise we have refactor some routes to a new file named ```routes.js```.

You should call this file.

[TIP](http://nodejs.org/api/modules.html)

## Excercise 05

We added some templates for our application. Modify the route ```/doc/:id``` to render and return an html created with this template.

[TIP](http://expressjs.com/api.html#res.render)

## Excercise 06

In this exercise we added a button in the UI to save the document. Implement a route in your server to handle PUT ```/doc/:id``` requests.
