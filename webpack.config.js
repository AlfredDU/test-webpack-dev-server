/** Webpack configure file. */
// imports
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Pack css
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            // Pack images
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {loader: 'url-loader', options: {limit: 8192}}
                ]
            }
        ]
    },

    // large assets are necessary and need no worry
    performance: {
        hints: false
    },

    // generate index.lodash.html entry
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            // Load a custom template (lodash syntax by default)
            template: 'index.lodash.html'
        })
    ],

    // dev server
    devServer: {
        hot: true,
        port: 10050
    }

}
