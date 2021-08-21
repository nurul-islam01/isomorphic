const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpacekNodeExternals = require('webpack-node-externals');

const config = {
    //inform webpack that we're building a bundle
    //for nodeJS, reather then the browser
    target: 'node',
    //Tell webpack the root file of our server application
    entry: './src/index.js',
    
    //Tell webpack where the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals: [webpacekNodeExternals()]
}

module.exports = merge(baseConfig, config);