var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./www/js/app.js",
    devtool: 'source-map',
    output: {
        path: __dirname + '/www',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [/www\/lib/, /node_modules/],
                query: {
                  presets: ['es2015', 'stage-2']
                }
            },
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap', {
                   allChunks: true
               })
            },
            {
                test   : /\.woff/,
                loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
            },
            {
                test   : /\.ttf/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.eot/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.svg/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
              test: /\.html$/,
              loader: "raw-loader"
            }
        ]
    },
    plugins: [
       new ExtractTextPlugin('ionic.app.css', {
           allChanks: true
       })
   ],
    resolve: {
        root: __dirname + "/www/",
        modulesDirectories: ["node_modules", "lib", "scss"],
        extensions: ['', '.js']
    }
};
