# Module 02 - Using MongoDB

In this module you will learn in these labs how to store documents in mongodb and query collections. If you don't have MongoDB installed locally, you can create one in the cloud using <http://mongolab.com>.

Go to <http://mongolab.com>, login or create an account and then create a database like shown here.

![](http://puu.sh/2HsJv.png)

Finally, make sure to change in each exercise to point to the mongodb just created.

        getDb.init('mongodb://....from mongolabs....'});

## Exercise 01

We have added a new route ```/new``` that creates a document and redirects to ```/doc/{id}```. 

Implement the __GET__ ```/doc/{id}``` route to fetch the document from the database and render the doc page.

[TIP](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#findone)

## Exercise 02

Now is time to save updates in the database.

Create a handler for __PUT__ ```/doc/{id}``` to update the document with the new content.

[TIP](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#update)

## Exercise 03

Now, let's add a list of documents to the home. Implement the __GET__ ```/``` handler to fetch the first 10 documents from the collection.

_Extra points_: implement the search search box (i.e. __GET__ ```/?search=something```)

[TIP](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find), [TIP](http://docs.mongodb.org/manual/reference/operator/regex/)

## Exercise 04

We have added a new feature to edit the title of the document by clicking it. It will do a __PATCH__ request to ```/doc/:id``` with ```{title: 'new title'}```.

The __PATCH__ ```/doc/:id``` route is already implemented and it is being used to change the content of the document. Make sure that editing the content doesn't erases the title and viceversa.

_Extra points_: modify the search in the index to search by title also.


## Finished?

So you are awesome and __you finished ahead of time__, clone the last lab of this Module and extract every document-related operation to a new module.
