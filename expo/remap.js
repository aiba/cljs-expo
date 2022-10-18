const fs = require('fs')
const remapping = require('@ampproject/remapping')
const {AnyMap} = require('@jridgewell/trace-mapping')

const read = f => fs.readFileSync(f,'utf8')
const write = (f,v) => fs.writeFileSync(f,v)
const writeJson = (f,v) => write(f,JSON.stringify(v))

// TARGET source map is:
// -> merged into METRO source map
// -> to produce the FIXED source map

// filenames
const targetFile = 'target/index.js.map'
const metroFile = 'build/metro-ios.map'
const fixedFile = 'build/metro-ios-fixed.map'

// source maps
const metroMap = read(metroFile)
const targetMap = AnyMap(read(targetFile)) // required: shadow-cljs "sections" need to be flattened

// determines how target file is identified in metro source map
const isTarget = file => file.endsWith('target/index.js')

// source map loader that returns the target map we wish to merge in
const loader = (file,ctx) => isTarget(file) ? targetMap : null

// produce a merged source map
const fixedMap = remapping(metroMap, loader)

writeJson(fixedFile, fixedMap)
