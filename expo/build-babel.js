// taken from: metro-babel-transformer
// https://github.com/facebook/metro/blob/main/packages/metro-babel-transformer/src/index.js

const { transformSync, parseSync, transformFromAstSync } = require("@babel/core");

// const HermesParser = require("hermes-parser");

// const { generateFunctionMap } = require("metro-source-map");


const fs = require('fs')

const INFILE = "target/index.js"
const OUTFILE = "target/babel-index.js"

const src = fs.readFileSync(INFILE, 'utf8')

const babelConfig = {
  ast: true,
  // code: false,         // <-- set by metro-babel-transformer
  filename: INFILE,
  sourceType: "module",
  inputSourceMap: true,
  sourceMaps: true,
};

const sourceAst = parseSync(src, babelConfig);
const result = transformFromAstSync(sourceAst, src, babelConfig);

console.log(`writing ${OUTFILE}…`)
fs.writeFileSync(`${OUTFILE}`, result.code)
fs.writeFileSync(`${OUTFILE}.map`, JSON.stringify(result.map, null, 2))
