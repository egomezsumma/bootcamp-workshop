# Module 5 - GitHub

In this module, we will learn one way of using GitHub that has proven effective when working in teams. This same technique is being used by large development teams like GitHub themselves to build GitHub (and ourselves of course :)).

In this workflow your repo might look like this:

* **master**: production code (code here can be deployed anytime)
* **feature_branch_1**: some feature you are are working on
* **feature_branch_2**: some other feature you are are working on

You work on a branch, when you are done you'll push it to GitHub and open a Pull Request. Someone of your team can review what you've done and merge it. Pull requests are an excellent tool for fostering code review. These are usually heavy used on open source project. You fork someone else repository, work on your own, then pull request. Something that you might not realize is that you can also make pull requests between two branches of the same repository (as oposed to fork the repo), which works fine when members of the team all share the same repository.

> IMPORTANT: For these exercises, we will make teams of two people. Pick someone else from the attendees to be your buddy.

## Exercise 0 - Push your code to GitHub

First thing is to create a repo in GitHub and push the your source code. You can use the folder from the previous exercise.

Once you created the repo, you can add a remote to the folder and push

    cd Module-03 # or cd Module-04 if you didn't do that lab
    git remote add origin git@github.com:your_user/your_repo.git
    git push -u origin master

## Exercise 1 - Adding a new feature

Now that your code is in GitHub, the person you picked will be contributing to your repo and viceversa with a small improvement (make sure that is small so you implement this quickly).

1. First thing, add your team member to your GitHub repo (in Settings -> Collaborators)

2. Then, clone your team member repo

        git clone git@github.com:team_member_user/team_member_repo.git
        cd team_member_repo

    > e.g. if I am working with user `woloski` and repo `bootcamp` this would be git clone `git@github.com:woloski/bootcamp.git`

3. You are ready to start working on the new feature. Create a branch for the feature:

        git checkout -b some-feature

    > This will create a branch on your local git repo and then switch to that branch.

4. Implement it and commit what you did into the feature branch

        git add .
        git commit -m "feature is complete"

## Exercise 2 - Asking for feedback with Pull Requests

> As a rule of thumb: before pushing your branch to GitHub, it is a good practice to bring the latest changes from the `master` branch into your branch and merge/solve conflictss locally. This will make your Pull Request automtically mergeable from GitHub. In this case, there were no changes because there was no time for that. But otherwise you would have to do `git fetch origin` and `git rebase origin/master` (sitting on top of your branch "some-feature")

1. You can now push your branch to your buddy repo. 

        git push -u origin some-feature

    > What you are doing here is pushing your branch to the `origin` (i.e. GitHub) and tracking changes so that next time you can do just `git push` without the remote and branch.

2. Once you did that, you can go to your buddy's GitHub repo page and you will see a "Pull Request" button.

    ![](http://puu.sh/2GfGz.png)

    Click on Pull Request and add a meaningful message of what you just did. You can also review the full change set in the other tabs.

3. Your buddy will get an email notifying him/her about the pull request and hopefully you will get an email with your buddy's pull request. Click on the link to see the pull request of your buddy.

> Pull requests are useful to do a code review, you can add comments to the files changed, ask questions, etc. It is important to always keep the pull request updated with master.

## Exercise 3 - Merge the pull request to the master branch

Now you have two options

* Merge the pull request on GitHub
* Merge the pull request locally and push to GitHub

If you follow the advice of having your branch always "mergeable" it is safe to use the **Merge pull request** button.

![](http://puu.sh/2GWfU.png)

Notice also that GitHub give you instructions to merge it locally

![](http://puu.sh/2GWhQ.png)

Once you did that, your master branch has the latest code ready to be deployed.

---

In the next lab we will see how to create a continous integration environment and how to connect it to GitHub so that every time someone pushes to the master branch, the test suite can be run and if everything works, deploy to the cloud automatically.
