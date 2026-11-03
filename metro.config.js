const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// 1. Get the default Expo config object
const config = getDefaultConfig(__dirname);

// 2. Safely extract transformer and resolver
const { transformer, resolver } = config;

// 3. Inject the SVG transformer pipeline
config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// 4. Update file extension arrays for SVG support
config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
};

// 5. Wrap the final configuration with NativeWind and export
module.exports = withNativeWind(config, { input: './global.css' });
