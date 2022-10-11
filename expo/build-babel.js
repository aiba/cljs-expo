// taken from: metro-babel-transformer
// https://github.com/facebook/metro/blob/main/packages/metro-babel-transformer/src/index.js

// TODO: see if a simpler source file results in source maps being correctly generated here

const { transformSync, parseSync, transformFromAstSync } = require("@babel/core");

const HermesParser = require("hermes-parser");

const { generateFunctionMap } = require("metro-source-map");

const fs = require('fs')


const FILENAME = "target/index.js"

const src = fs.readFileSync(FILENAME, 'utf8')

const babelConfig = {
  ast: true,
  code: false,
  filename: FILENAME,
  sourceType: "module",
  inputSourceMap: true,
  sourceMaps: true,
};

const sourceAst = parseSync(src, babelConfig);
const result = transformFromAstSync(sourceAst, src, babelConfig);

console.log(result)
