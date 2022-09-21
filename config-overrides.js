module.exports = function override (config, env) {
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        "net": false,
        // "url": false,// 이거 왜 추가된거
        "stream": require.resolve('stream-browserify'),
        "crypto": require.resolve('crypto-browserify'),
        "http": require.resolve('stream-http'),
        "https": require.resolve('https-browserify'),
        "os": require.resolve('os-browserify/browser'),
        "url": require.resolve("url")
    }
    
    return config;
}