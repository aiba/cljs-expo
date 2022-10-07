module.exports = function(api) {
  api.cache(true);
  return {
    inputSourceMap: true,
    presets: ['babel-preset-expo'],
  };
};
