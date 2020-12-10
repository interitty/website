# Website assets #

This folder contain all the [JS ES-6](http://es6-features.org/) and [SASS](http://sass-lang.com/) source files that is compiled by the [Gulp](https://gulpjs.com/) into the `/www/assets/` folder

# Installation #

[Npm](https://www.npmjs.com/) packages defined in `package.json` are required for compilation all sources files.

If you have some of them installed globaly (* For example like by the `npm install --global gulp` command *), you can attach them before the install process (* For examp,e by the `npm link gulp` command*).

To install the dependencies, run the `npm install` command in this folder (*Where the `package.json` file is located*)

# Usages #

To recompile all these assets files into the browser compatible variant, simply run the command `gulp` in this folder (*Where the `gulpfile.js` file is located*)
