var levelup = require('levelup')
var sublevel = require('level-sublevel')
var Giffer = require('giffer')
var adapter9Gag = require('giffer-adapter-9gag')
var adapterReddit = require('giffer-adapter-reddit')
var observ = require('observ')
var attractor = require('attractor')
var openDir = require('nw-open-dir')

var config = require('./config')

var db = sublevel(levelup('giffer-desktop', {
  db: require('level-js'),
  keyEncoding: 'utf8',
  valueEncoding: 'json'
}))

var metaDb = db.sublevel('desktop-app')
var gifferDb = db.sublevel('giffer-data')

document.querySelector('#select-output-dir').onclick = openDir.bind(null, function(dir) {
  document.querySelector('#output-dir').textContent = dir
})

// var giffer = new Giffer({
//   db: gifferDb,
//   outputDir: '',
//   adapters: []
// })
