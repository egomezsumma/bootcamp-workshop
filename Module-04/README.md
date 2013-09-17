# Módulo 4 - To the Cloud and Beyond...

We will continue working on the Module-03 directory.

Before you start, you will need to setup some things for the first time. Skip these steps if you already have git and heroku working.

1.  Setup GIT as explained [here](https://help.github.com/articles/set-up-git).
2.  Create an account in [heroku](http://heroku.com/).
3.  Install heroku toolbelt as explained [here](https://toolbelt.heroku.com/).


Deploy your app:

1.  Initialize a git repository in Module-03 directory by running `git init`.
2.  Do your first commit as follows `git add -A` then `git commit -m "initial commit"`.
3.  Create an heroku application by running `heroku create`. Take note of the name and url of your heroku app at this point
4.  Provision a new mongodb database to your heroku application in the cloud by running `heroku addons:add mongolab`.
5.  Push your application to heroku with `git push heroku master`. 
6.  Verify your application is working on the heroku url.
7.  In order to make authentication works, you will have to add a new callback url in the settings of your app in Auth0 dashboard.


Finished early?

Have a look to the different tools of heroku like `heroku logs --tail`.