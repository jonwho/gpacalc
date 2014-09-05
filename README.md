gpacalc
=======

Test AngularJS build onto GitHub

Steps to deploy AngularJS app with Yeoman
=========================================
These steps should be done from the root directory of your app.


1. grunt build
2. git add .
3. git commit -m 'your commit msg'
4. git subtree push --prefix dist origin gh-pages

These steps will build your dist folder which is the compiled and minified version of your app. Then your app will include this dist folder (if dist is ignored in .gitignore make sure to remove it from that file first) and you will commit it to your branch. The last step will only push the dist folder contents into gh-pages branch on GitHub. Doing so means that it can find the index.html file and now you have a working app hosted by GitHub.