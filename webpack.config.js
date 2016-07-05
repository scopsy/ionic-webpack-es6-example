var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // Our entry file for the app,
    // You can specify multiple entry files using array.
    entry: "./www/js/app.js",

    // will output to our source files after budnled, very useful during development
    // Suggested to turn it of for production bundling
    devtool: 'source-map',

    // here we will output the bundled files
    output: {
        path: __dirname + '/www',
        filename: "bundle.js"
    },
    module: {
        // loaders allow you to preproccess file when your require them
        // you can manipulate manipulate and transform them
        loaders: [
            // we will start with babel-loader,
            // used to transpile es6 code to es5 code.
            {
                //will affect all .js files
                test: /.js$/,
                loader: 'babel-loader',
                // we will not transpile node_modules and bower files for performance
                exclude: [/www\/lib/, /node_modules/],
                // presets for the babel loader, supporting stage-2 es6 funcitonality
                query: {
                  presets: ['es2015', 'stage-2']
                }
            },
            {
                // we will proccess scss files when required
               test: /\.scss$/,
               // we will extract the output file to a different location and will inject it manualy to the page
               // used for performance boost and good for large apps.
               // we will also generate sourcemaps, disable in production
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
            // we will load all html files raw, it will allow your to require html files as string templates
            // inside your components, directives
            {
              test: /\.html$/,
              loader: "raw-loader"
            }
        ]
    },
    plugins: [
        // here we will specify the output css file name when etracted with all the scss compiled
       new ExtractTextPlugin('ionic.app.css', {
           allChunks: true
       })
   ],
   // When requiring modules in your code, require and import will first look in this directories
   // so you won't need to wrie relative paths to them
    resolve: {
        root: __dirname + "/www/",
        modulesDirectories: ["node_modules", "lib", "scss"],
        // you can add here scss extension if you want.
        // this will allow you to require('somejsfile') with out the .js extension
        extensions: ['', '.js']
    }
};
