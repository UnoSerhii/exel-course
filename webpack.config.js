const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.jss'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}
