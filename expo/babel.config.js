module.exports = function(api) {

  // Log a stack trace so we can see where and how Babel is being called:
  //
  // *  Called inside `metro-react-native-babel-transformer` when running `expo start`
  // *  Called inside `metro-babel-transformer` when running `node build.js`
  //
  console.trace('resolving config')

  api.cache(true);
  return {
    inputSourceMap: true, // NOTE: removing this line has no effect on the sourcemap file produced by Metro in `build.js`
    presets: ['babel-preset-expo'],
  };
};
