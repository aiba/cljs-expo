// Build an expo bundle file so we can debug sourcemaps.

const Metro = require('metro');
const fs = require('fs');

const BUILD_DIR = 'build'
const PLATFORM = 'ios'

fs.mkdirSync(BUILD_DIR, {recursive: true});

async function build() {
  const config = await Metro.loadConfig();
  config.resetCache = true

  await Metro.runBuild(config, {
    entry: 'target/index.js',
    sourceMap: true,
    platform: PLATFORM,
    minify: true,
    out: `${BUILD_DIR}/expo-${PLATFORM}.js`,
  });

  // TODO: see if Babel is generating source maps correctly inside metro-babel-transformer
}

build()
