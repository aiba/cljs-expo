// Build an expo bundle file so we can debug sourcemaps.

const Metro = require('metro');
const fs = require('fs');

fs.mkdirSync('build', {recursive: true});

async function build() {
  const config = await Metro.loadConfig();
  config.resetCache = true

  await Metro.runBuild(config, {
    entry: 'target/index.js',
    sourceMap: true,
    platform: 'ios',
    minify: true,
    out: 'build/expo-ios.js',
  });

  // TODO: see if Babel is generating source maps correctly inside metro-babel-transformer
}

build()
