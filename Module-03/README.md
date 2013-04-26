# Module 3 - Authentication

In this module we will add authentication using the [Passport.js library](http://passportjs.org/).

## Exercise 01

Create a new account in Auth0 (we will provide you the instructions).

Once you have successfully logged in, go to the  [Auth0 Node.js Tutorial](https://docs.auth0.com/nodejs-tutorial).

__NOTE:__ it is very important that you first log in, all the documentation will be tailored to your settings.

Copy the very first code snipet into the ```lib/setupPassport.js``` file.

Run the code and verify you can login with the login button or using [http://localhost:8080/login](http://localhost:8080/login)

## Exercise 02

Since we are going to enable other authentication providers besides google, we need to show the user a popup to choose the authentication mechanism.

Modify the layout.jade file to include this script

    script(src='https://sdk.auth0.com/auth0.js#client=[ YOUR AUTH0 CLIENT ID ]')

Copy the client id from the setupPassport file.

Now, to trigger the popup change the __/login__ link in the layout file to this:

    a#sign-in.sign-in.btn.btn-primary.pull-right(href="/login", onclick="window.Auth0.signIn()") 

Execute the solution and verify the popup is working.

## Exercise 03

Now that we have succesfully implemented authentication we want to implement authorization. The documents a user create will be only availables for that particular user.

Edit ```/lib/docs.js``` to filter and/or store by the `user.id`.

Are you sure that is working? We have included a series of tests in this folder

~~~
# access this exercise directory:
$ cd Module-03/03

# you need to run this for the first time
$ npm install 

# run the test suite
$ npm test
~~~

Tests are included in the ```docs.tests.js```.


## Exercise 04

Some people want to login this application by using other identity providers. Go to the Auth0 dashboard and enable __Twitter__, __Facebook__ and __Github__.

Now, execute the application and verify you can login with these new identity providers.

