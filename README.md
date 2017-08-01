---
author: James Ackman  
title: Custom bootstrap CSS  
date: 2017-08-01 13:38:09  
---

libcss– Screen and print styles for app/site content. Currently the styles are based off of customized [Bootstrap v3.3.7](http://getbootstrap.com) less configurations with no remote imports/dependencies.

## Install locally using npm

Install in a local directory-- an npm postinstall script will take care of prompting you on where to make a symlink (e.g. `ln -s ./libcss $mydir/mywebapp/css`) and creating it so that you will have an alias called 'css' the rootdir of your web app/site. This is useful for making custom local editing/configuration/testing of the less stylesheet:  

```bash
mydir='/path/to/my/projects'
cd $mydir
npm install https://github.com/ackmanlab/libcss.git
```


## Install directly from git repo

Clone to a local directory:

```bash
git clone https://github.com/ackmanlab/libcss.git
cd libcss
npm install #same as 'npm run buildcss' or node buildcss.js
```

## Re-build css from bootstrap.less

```bash
cd libcss
npm run buildcss
```
