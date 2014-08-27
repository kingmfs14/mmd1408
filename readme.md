Deployment Plan
Matthew King August 26, 2014

Staging Environment

1. create and checkout a new branch
   - git branch staging
   - git checkout staging
   - git status
   - git push github staging
2. push update to staging server
   - git push mddStage staging
3. test update

Production Environment
1. switch branches and merge files
   - git checkout master
   - git status
   - git pull origin master
   - git merge staging
   - git push origin master
2. push updated files to production server
   - git push mddServer master

