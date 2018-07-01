// /*
//  * The first thing that webpack needs to know is an entry point. 
//  * The entry point is the file that Webpack will transform. 
//  * Your entry point should be the outermost component class of 
//  * your React project. 
//  **/
let HTMLWebpackPlugin = require('html-webpack-plugin');

// // When webpack makes a new JavaScript file, it needs to make a new HTML file as well. 
// // There is a tool for this, and you've already installed it: html-webpack-plugin.
// let HTMLWebpackPlugin =  require('html-webpack-plugin');  // Return value is a constructor() function

// // We do our HTMLPluginWork using the instance of the returned constructor function
// // This instance will have an object with 3 properties:
// // TEMPLATE: The object's first property should be named template. 
// // template's value should be a filepath to the current HTML file, 
// // the one that you're trying to copy and move

// // filename: the name of the newly created HTML file. It's fine to name it index.html. 
// // Since the new HTML file will be located in the build folder

// // inject value should be be a string: either 'head' or 'body'.

// // When HTMLWebpackPlugin creates a new HTML file, that new HTML file will 
// // contain a <script> tag linking to webpack's new JavaScript file. 
// // This <script> tag can appear in either the HTML file's <head> or <body>. 
// // You choose which one via the inject property.

// /**
//  * To specify an entry point, give module.exports a property named entry. 
//  * entry's value can be a filepath, or an array of filepaths if you would 
//  * like to have more than one entry point. 
//  */


// /**
//  * In Node.js, __dirname refers to the currently executing file. 
//  * __dirname + /app/index.js will create a filepath pointing to the 
//  * currently executing file, down into a folder named app, and landing on 
//  * a file named index.js.
//  */

//  /**
//   * Webpack can now successfully grab your outermost component class file, 
//   * and therefore grab your entire React app. Now that webpack can grab all 
//   * of this code, you need to explain what webpack should do with it once 
//   * it's been grabbed. You can tell webpack what to do with the code that 
//   * it's grabbed by adding a second property to module.exports. 
//   * 
//   * This property should have a name of module and a value of an object 
//   * literal containing a loaders array. 
//   * 
//   * Each "loader" that you add to the loaders array will represent a 
//   * transformation that your code will go through before reaching the 
//   * browser.
//   */
module.exports  = {
    entry: __dirname + '/app/app.js',
    // env: {
    //     browser: true,
    //     es6: true
    // },

//     // Each loader transformation should be written as object literal
//     // Each loader object needs a property called test. 
//     // The test property specifies which files will be affected by the loader
       module: {

//         // The regular expression /\.js$/ represents all strings that end with the pattern, ".js". 
//         // That means that this loader will perform a transformation on all ".js" files.
            rules: [{

//             // each loader transformation can have a property named include or exclude. 
//             // You can use "exclude" to specify files that match the "test" criteria, 
//             // that you don't want to be transformed. Similarly you can use "include" to specify files 
//             // that don't fit the "test" criteria, that you do want to be transformed

//             // you have a loader with three properties: test, exclude, and loader. 
//             // Your loader will search for all files ending in ".js", 
//             // excluding files in the node_modules folder. 
//             // Whatever files it finds, it will run through the 'babel-loader' transformation.

//             // Webpack will grab your React app and run it through babel-loader, 
//             // translating all of your JSX into JavaScript.
            test: /\.js$/,
            exclude: /node_modules/,
            use: {   
                loader: 'babel-loader'
               
            }
        }],
//         // The final property of each loader is what transformation that loader should perform! 
//         // You specify a particular transformation with a property named loader
     },
    
//     // Where will the transformed JS files go
//     // There is another property with modulel.exports
//     // Name of property is Output. It has 2 more properties (file name) and (path)
//     // filename is name of new transformed JS files
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build '
    },
    // externals: {
    //     "React": "React",
    //     "ReactDOM": "ReactDOM"
    // },

//     // Adding HTMLWebpackPlugin instance to module.exports object
//     // The propert name is Plugin
//     // plugins value should be an array, containing your configured HTMLWebpackPlugin instance
    plugins: [new HTMLWebpackPlugin(
        {
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        }
    )]
};
