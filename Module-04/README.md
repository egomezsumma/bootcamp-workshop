# Módulo 4 - To the Cloud and Beyond...

![](http://2.bp.blogspot.com/-mcZg2vTqzLQ/TZ-Dg2lNtiI/AAAAAAAABqM/M-rPoRG0m18/s1600/buzz-lightyear-toy-story-murals.jpg)

In this exercise you will learn how to deploy the web site you've been working on. We will use git-based deploy, meaning that we will be pushing a local repository to a remote one, running on the cloud.

For this lab you will need a Windows Azure Account (<http://www.windowsazure.com/en-us/pricing/free-trial/>)

## Excercise 1 - Create the Windows Azure Web Site

1. Open the [Windows Azure Management Portal](http://manage.windowsazure.com)

2. Create a Web Site (+ -> Compute -> Web Site -> Quick Create) and enter a subdomain for the website

    ![](http://puu.sh/2H310.png)

3. Click on the website just created. We will use git-based deployment, that means, that you will push your repo to a git repo hosted on Windows Azure, so click on **Setup deployment from source control**.

    ![](http://puu.sh/2H36A.png)

4. Choose Local Git Repository.

    ![](http://puu.sh/2H3c5.png)

    > If the account is new, it will ask you to create a username/password credential to protect the Git Repository.
    ![](http://puu.sh/2H6kL.png)

5. Once the repo has been setup, follow the instructions to create the local repo, then commit and push to Azure.

    > IMPORTANT: make sure you are currently sitting on the `Module-03` directory, with the previous exercise working (if you didn't finish that one, use Module-04/app)

        cd Module-03
        git init
        git add .
        git commit -m "initial commit"
        ## COPY THE GIT URL FROM THE AZURE PORTAL
        git remote add azure https://YOUR-WEBSITE-NAME.scm.azurewebsites.net/YOUR-WEBSITE-NAME-woloski.git
        git push azure master

    > You will have to enter the user and password created in Step 4. The deployment status will be shown in the command line.

6. If you go to the **DEPLOYMENTS** menu in the Windows Azure portal, you should see the deployment in progress.

    ![](http://puu.sh/2HfVQ.png)

If the deployment worked fine you can now browse to the website. However, it should fail because of various things: first of all, the port where node.js will start listening (8080) won't work in the cloud. Also the callback configured in Auth0 is localhost (not the cloud) and also it is pointing to the dev mongo db. We will fix that in the next exercise.

## Exercise 2 - Configuration management

If you notice, your code has the database connection string and Auth0 configuration fixed in the code. Usually you want to keep those things in a configuration file so you can apply different values in dev and production (or other environments). In node.js the way you do that is using Environmnet variables that can be accesed through `process.env.VARIABLE_NAME`. Then, depending on the cloud you are deploying, you can set those environment variables somehow. In that way, only the administrator of the app will have the production configuration.

In this exercise we will change the current code to use those variables and then configure them in Windows Azure Web Site.

1. First, modify the way we open the http server, by passing the PORT environment variable. Every cloud PaaS will set this variable to the internal port where it is listening. If that variable is not defined, we'll use 8080 (in development)

        http.createServer(app)
            .listen(process.env.PORT || 8080, function () {
              console.log('listening on http://localhost:' + process.env.PORT || 8080);
            });

1. Now let's do the same with the database. Go to `server.js` and modify the `getDb.init` line with:

        getDb.init({url: process.env.DB || 'mongodb://localhost/mymdocs'})

    > This is equivalent of "If there is an environment variable named DB, use that if not use mongodb://localhost..."

2. Then, modify the `clientID` and `clientSecret` on `lib/setupPassort.js` to use the same approach.

        clientID:     process.env.AUTH0_CLIENTID || 'HERE IS YOUR DEV CLIENT ID',
        clientSecret: process.env.AUTH0_CLIENTSECRET || 'HERE IS YOUR DEV CLIENT SECRET',

2. Finally, we have the client id on the master layout page. Open `layout.jade` and change the line where the auth0.js file was added.

        script(src='https://sdk.auth0.com/auth0.js#client=#{env.AUTH0_CLIENTID || "HERE IS YOUR DEV CLIENT ID" }')

3. Commit and push to Windows Azure

        git commit -am "change to use env vars"
        git push azure master

4. Now, let's crate a database for production. Go to <http://mongolab.com>, login or create an account and then create a database like shown here.

    ![](http://puu.sh/2HsJv.png)

5. Select the database just created and get the connection string, copy it to a text file somewhere

    ![](http://puu.sh/2HsM1.png)   
    > IMPORTANT: make sure to replace it with the right user and password.

6. Do the same for Auth0. Create a new application. 

    ![](http://puu.sh/2HsU8.png)

7. This time, set the callback URL to Windows Azure (`http://your-app.azurewebsites.net`)

    ![](http://puu.sh/2Ht0R.png)

8. Grab the Client ID and Secret from **Settings** and copy it to a text file.

    ![](http://puu.sh/2Hts4.png)

7. Now, go to your Windows Azure Web Site, to the **CONFIGURE** menu and paste the mongo DB connection string and Auth0 settings and click SAVE.

    ![](http://puu.sh/2HtS2.png)

Wait till the app is saved and browse it again.

> If for some reason it is not working, click on the RESTART button.

**Congratulations!**

## Finshed early?

Windows Azure has a command line version to manage many aspects of the service. You can install it like this:

        npm install -g azure-cli

And you will be able to see realtime logs streamed. Every `console.log` in your app. You have to create a file on the root of your repo called `iisnode.yml` with the following content

        loggingEnabled: true
        debuggingEnabled: true

Add it using `git add .` and commit it with `git commit -am "logging"`, and deploy with `git push azure master`. Once you did that, you can do the following and you will get a stream of the logs in the console.

        azure site log tail YOUR-APP

> If for some reason it is not working, click on the RESTART button on Azure console.

You can explore the rest of the things in the Windows Azure Web Site (like config your own domain, how to scale it, etc.)
