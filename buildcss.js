const less = require('less')
const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')
// const cssPath = path.join(__dirname, 'src/bootstrap-custom.less')

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

const options = {
  filename: path.join(process.cwd(), 'css/bootstrap-custom.less'),
  rootpath: 'css/',
  relativeUrls: true
}


// readFile(options.filename)
// .then(str => { return less.render(str, options) })
// .then( data => {
//   const output = new CleanCSS({level: 1, returnPromise: true}).minify(data.css)
//   console.log(output.styles)
//   })


readFile(options.filename)
.then(str => { return less.render(str, options) })
.then( data => {
  new CleanCSS({level: 1, returnPromise: true})
  .minify(data.css)
  .then(output => {
    writeFile('css/main.css', output.styles)
  })
  .catch (err => { console.log(err) })
})
.catch (err => { console.log(err) })


// npm install less
// npm install less-plugin-clean-css
// ./node_modules/less/bin/lessc --rootpath=css/ --relative-urls --clean-css="--s1" css/bootstrap-custom.less css/main.css
