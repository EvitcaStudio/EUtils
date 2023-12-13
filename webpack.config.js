const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');

module.exports = {
    entry: {
        logger: './src/utils.mjs',
    },
    output: {
      filename: '[name].min.mjs',
      path: path.resolve(__dirname, 'dist'),
      /**
       * Clean the directory before each build.
       */
      clean: true,
      library: {
        type: 'module'
      },
    },
    plugins: [
    new webpack.DefinePlugin({
        '__VERSION__': JSON.stringify(packageJSON.version),
    }),
    ],
    experiments: {
        outputModule: true
      },
    /**
     * development: This mode is optimized for development, and includes features like fast build times, easier debugging, and detailed error messages.
     * production: This mode is optimized for production, and includes features like minification, tree shaking, and other performance optimizations.
     * none: This mode disables all default optimizations and settings.
     */
    mode: 'none',
    /**
     * OPTIONAL
     * npx webpack --watch (can also enable it via this flag on the npx webpack command)
     * When you run webpack in watch mode, it will watch for changes in your source code and automatically trigger a new build whenever a change is detected. 
     * This means that you can simply make changes to your code and refresh your browser to see the changes in real time.
     */
    watch: false
};