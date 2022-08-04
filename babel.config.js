module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
        ],
        'react-native-reanimated/plugin'
      ],
  };
};


