// npm install less
// npm install less-plugin-clean-css
// ./node_modules/less/bin/lessc --rootpath=/css/build/ --relative-urls --clean-css="--s1" build/bootstrap.less build/main.min.css
// const buildcss = require('buildcss')
// buildcss(srcPath, dstPath, overwrite, extFilter, options)
// buildcss('_posts', '_site', true)

const less = require('less')
const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')
const mm = require('micromatch')

const options = {
  srcPath: 'build/', 
  dstPath: 'build/', 
  overwrite: false, 
  extFilter: ['*.less'],
  // filename: path.join(__dirname, 'build/bootstrap.less'),
  // filename: path.join(__dirname, 'build/bootstrap-vita.less'),
  // outFile: path.join('build/', 'main.min.css'),
  // outFile: path.join('build/', 'vita.css'),
  // rootpath: '/css/build/',
  relativeUrls: true,
  matchBase: false, 
  ignore: ['.git', 'node_modules', 'README.md', 'test', 'lib', 'css', 'bin']
}

// getFile: reads utf8 content from a file
const readFile = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      return reject(err)
    }
    resolve(data)
  })
})

const writeFile = (fileName, datain) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, datain, 'utf8', (err, data) => {
    if (err) reject(err)
    else resolve(data)
  })
})

const readdir = (srcPath) => new Promise((resolve, reject) => {
    fs.readdir(srcPath, (err, files) => {
        if (err) reject(err)
        else resolve(files)
    })
})

const processFiles = (options) => {
  //async process chain begin
  readdir(options.srcPath)
  .then(allfiles => { return mm(allfiles,options.extFilter,options) })
  .then(files => {
    files.forEach(file => {
      
      readFile(file)
      .then(str => { return less.render(str, options) })
      .then( data => {
        new CleanCSS({level: 1, returnPromise: true})
        .minify(data.css)
        .then(output => {
          writeFile(path.join(path.parse(file).name,'.min.css'), output.styles)
          // console.log(data.imports)
        })
        .catch (err => { console.log(err) })
      })
      .catch (err => { console.log(err) })

    })
  })
  .catch (err => { console.log(err) })
}

processFiles(options)
