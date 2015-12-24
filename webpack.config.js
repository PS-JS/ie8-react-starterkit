/* global __dirname */
var webpack = require('webpack');
var path = require('path');

const alias = {
    utils:path.join(__dirname,'src','utils')
};




module.exports = {
    context: __dirname,
    entry: [
        "./src/index"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:alias
    },
    output: {
        path: __dirname + "/dest",
        filename: "bundle.js",
        publicPath: "/dest/",
        sourceMapFilename: "[file].map?hash=[hash]"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel"
			}
		]
	}
};