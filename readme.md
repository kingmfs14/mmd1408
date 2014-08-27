Deployment Plan
Matthew King August 26, 2014

Staging Environment

1. create and checkout a new branch
   - git branch staging
   - git checkout staging
   - git status
   - git push github staging
2. test updates locally
3. switch branches and merge files
   - git checkout master
   - git status
   - git merge staging
4. push update to staging server
   - git push mddStage master
5. test update

Production Environment

1. switch branches and merge files
   - git checkout master
   - git status
   - git merge staging
2. push updated files to production server
   - git push mddServer master

