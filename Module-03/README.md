# Module 3 - Authentication

In this module we will add authentication using the [Passport.js library](http://passportjs.org/).

Before we start, run on the Module-03

    npm install 

This will read all the dependencies on `package.json` and install them.

## Exercise 01

Create a new account in Auth0 (we will provide you the instructions).

Once you have successfully logged in, go to the  [Auth0 Node.js Tutorial](https://docs.auth0.com/nodejs-tutorial).

> __NOTE:__ it is very important that you first log in, all the documentation will be tailored to your settings.

Copy the very first code snipet into the ```lib/setupPassport.js``` file.

Run the code and verify you can login with the login button or using [http://localhost:8080/login](http://localhost:8080/login). By default, Auth0 comes pre-configred with Google authentication, we will enable others later. You can see in the console, the full profile in JSON.

## Exercise 02

Since we are going to enable other authentication providers besides google, we need to show the user a popup to choose the authentication mechanism.

Modify the `views/layout.jade` file to include this script (the client id can be copied from the `setupPassport.js` file).

    script(src='https://sdk.auth0.com/auth0.js#client=[ YOUR AUTH0 CLIENT ID ]')

Now, to trigger the popup change the __/login__ button in the layout file to this:

    a#sign-in.sign-in.btn.btn-primary.pull-right(href="#", onclick="window.Auth0.signIn({onestep: true})") 

Execute the solution and verify the popup is working.

## Exercise 03

Now that we have succesfully implemented authentication we want to implement authorization. The documents a user create will be only availables for that particular user.

Edit ```/lib/docs.js``` to filter and/or store by the `user.id`.

Are you sure that is working? We have included a series of tests in this folder

~~~
# access this exercise directory:
$ cd Module-03

# you need to run this for the first time
$ npm install 

# run the test suite
$ npm test
~~~

Tests are included in the ```docs.tests.js```.

## Exercise 04

Some people want to login this application by using other identity providers. Go to the Auth0 dashboard and enable __Twitter__, __Facebook__ and __Github__.

Now, execute the application and verify you can login with these new identity providers.

![](http://puu.sh/2HMjs.png)

You can also setup enterprise connections like Google Apps, Windows Azure AD, or something like AD/LDAP running on your customer datacenter and allow single sign on for a whole company.

**Congratulations!**
