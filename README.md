---
author: James Ackman  
title: Custom css
date: 2017-08-01 13:38:09  
---

Screen and print styles for post and article web app/site content. Currently the styles based off of customized [Bootstrap v3.3.7](http://getbootstrap.com) less configurations. 

## Install for use within web app/site

Clone to root of your app's site directory:  

```bash
rootdir='/path/to/my/webapp'
cd $rootdir
git clone https://github.com/ackmanlab/libcss.git
```

Build css from bootstrap.less

```bash
cd css
npm run buildcss
```


## Install for custom local editing/configuration of less stylesheet

If you want to edit the bootstrap.less file or add other work then install in a local directory and then add a symlink to your web app/site:  

```bash
rootdir='/path/to/my/webapp'
cd $rootdir
npm install https://github.com/ackmanlab/libcss.git
ln -s ./node_modules/libcss ./css
```

Or install libcss in a sibling or parent directory relative to your webapp folder (since the node_modules folder won't be tracked for changes in your app's git repo):  

```
rootdir='/path/to/my/webapp'
cd $rootdir
cd ..
npm install https://github.com/ackmanlab/libcss.git
ln -s ./libcss $rootdir/css
```

