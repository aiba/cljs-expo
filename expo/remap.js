
const fs = require('fs')
const remapping = require('@ampproject/remapping')
const {AnyMap} = require('@jridgewell/trace-mapping')

const read = f => fs.readFileSync(f,'utf8')
const write = (f,v) => fs.writeFileSync(f,v)

// normalize a sourcemap that contains "sections" into one that doesn’t
// so trace-mapping doesn’t break
const normalize = s => JSON.stringify(AnyMap(JSON.parse(s)))

const target = 'target/index.js.map'
const targetNorm = 'target/index.js.map.norm'
const metro = 'build/metro-ios.map'
const fixed = 'build/metro-ios-fixed.map'

const remapped = remapping(read(metro),
  (file,ctx) => {
    if (file.endsWith('target/index.js')) {
      const text = normalize(read(target))
      write(targetNorm, text)
      return text
    }
  }
)

write(fixed, JSON.stringify(remapped))
