# Module 3 - Authentication

In this module we will add authentication using the [Passport.js library](http://passportjs.org/).

Before we start, `cd` to the Module-03 dir and run on the Module-03

    npm install 

This will read all the dependencies on `package.json` and install them.

## Exercise 01

Create a new account in [Auth0](http://developers.auth0.com). You will be asked to provide a subdomain for your account and then choose the authentication providers you want for your apps. Don't worry you can change them later.

![ss-2013-09-20T07-12-23.png](http://blog.auth0.com.s3.amazonaws.com/ss-2013-09-20T07-12-23.png)

Register a new __Node.js__ app in Auth0. 

![ss-2013-09-20T07-15-24.png](http://blog.auth0.com.s3.amazonaws.com/ss-2013-09-20T07-15-24.png)

You will be presented with a tutorial. Follow the steps `1` and `2` in the instructions to setup passport with Auth0. We've done step 3 already in the provided initial code. 
Finally on step 4 change the url to `http://localhost:8080/callback` which is where your local app is running.

![](https://dl.dropbox.com/s/6ca2ebv64m9022e/ss-2013-09-19T19-20-38.png)

Run the code and verify you can login with the login button or using [http://localhost:8080/login](http://localhost:8080/login). You can see in the console, the full profile in JSON.

## Exercise 02

Since we are going to enable other authentication providers besides google, we need to show the user a popup to choose the authentication mechanism.

Modify the `views/layout.jade` file to include this script (the client id can be copied from the `setup-passport.js` file).

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

Go to the Auth0 dashboard and enable other providers like Facebook or GitHub (you can enable up to two in the free plan).

Now, execute the application and verify you can login with these new identity providers.

![ss-2013-09-20T07-18-34.png](http://blog.auth0.com.s3.amazonaws.com/ss-2013-09-20T07-18-34.png)

You can do many other things with Auth0 like: 

* Setup enterprise providers like Google Apps, Windows Azure AD, or something like AD/LDAP running on your customer datacenter and allow single sign on for a whole company. 
* Associate different identities to the same account.
* Plug your own user database.
* Run arbitrary code on with rules to allow someone to enter.
* Analytics and auditing.

**Congratulations!**
