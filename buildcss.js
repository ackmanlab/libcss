// npm install less
// npm install less-plugin-clean-css
// ./node_modules/less/bin/lessc --rootpath=css/build/ --relative-urls --clean-css="--s1" build/bootstrap.less build/main.min.css

const less = require('less')
const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')

const options = {
  filename: path.join(__dirname, 'build/bootstrap.less'),
  rootpath: 'css/build/',
  relativeUrls: true,
  outFile: path.join('build/', 'main.min.css')
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

readFile(options.filename)
.then(str => { return less.render(str, options) })
.then( data => {
  new CleanCSS({level: 1, returnPromise: true})
  .minify(data.css)
  .then(output => {
    writeFile(options.outFile, output.styles)
    // console.log(data.imports)
  })
  .catch (err => { console.log(err) })
})
.catch (err => { console.log(err) })
