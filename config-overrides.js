const { addWebpackPlugin, override } = require('customize-cra');
const { ProvidePlugin } = require('webpack');

module.exports = override(overrideForCaver, addWebpackPlugin(
    new ProvidePlugin({
        process: 'process/browser',
    }),
))

function overrideForCaver (config, env) {
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        "net": false,
        "stream": require.resolve('stream-browserify'),
        "crypto": require.resolve('crypto-browserify'),
        "http": require.resolve('stream-http'),
        "https": require.resolve('https-browserify'),
        "os": require.resolve('os-browserify/browser'),
        "url": require.resolve("url"),
        "path": require.resolve("path-browserify"),
    }
    
    return config;
}