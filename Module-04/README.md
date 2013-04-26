# Módulo 4 - To the Cloud and Beyond...

![](http://2.bp.blogspot.com/-mcZg2vTqzLQ/TZ-Dg2lNtiI/AAAAAAAABqM/M-rPoRG0m18/s1600/buzz-lightyear-toy-story-murals.jpg)

In this exercise you will learn how to deploy the web site you've been working on. We will use git-based deploy, meaning that we will create 

For this lab you will need a Windows Azure Account (<http://www.windowsazure.com/en-us/pricing/free-trial/>)

## Excercise 1 - Create the Windows Azure Web Site

1. Open the Windows Azure Management Portal 

2. Create a Web Site (+ -> Compute -> Web Site -> Quick Create) and enter a subdomain for the website

    ![](http://puu.sh/2H310.png)

3. We will use git-based deployment, that means, that you will push your repo to a git repo hosted on Windows Azure.

    ![](http://puu.sh/2H36A.png)

4. Choose Local Git Repository.

    ![](http://puu.sh/2H3c5.png)

    > If the account is new, it will ask you to create a username/password credential to protect the Git Repository.
    ![](http://puu.sh/2H6kL.png)

5. Once the repo has been setup, follow the instructions to do the initial commit.

        git init
        git add .
        git commit -m "initial commit"
        ## COPY THE GIT URL FROM THE AZURE PORTAL
        git remote add azure https://YOUR_USER@YOUR-WEBSITE-NAME.scm.azurewebsites.net/YOUR-WEBSITE-NAME-woloski.git
        git push azure master

6. If you go to the **DEPLOYMENTS** menu in the Windows Azure portal, you should see the deployment in progress.

    ![](http://puu.sh/2HfVQ.png)

