gpacalc
=======

Test AngularJS build onto GitHub

Try the app [here](http://jonwho.github.io/gpacalc/#/calculator)

After cloning this repo make sure you do the following!
```shell
npm install
bower install
```

To ensure dependencies aren't missing!

Steps to deploy AngularJS app onto gh-pages
===========================================
These steps should be done from the root directory of your app.


1. grunt build
2. git add .
3. git commit -m 'your commit msg'
4. git subtree push --prefix dist origin gh-pages


If dist is ignored in .gitignore, make sure to remove that line first or else git won't be able to track your built app in dist directory. The above 4 steps will compile and minify your app and push the contents of the dist directory to the gh-pages branch. This is the branch that will serve your static web page by finding your index.html file.

Further help can be found [here](http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages)
