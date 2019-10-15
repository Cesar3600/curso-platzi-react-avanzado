

const HtmlWP = require('html-webpack-plugin')

module.exports = {
    output:{
        filename:'bundle.js'

    },
    plugins: [
        new HtmlWP({
            template:"src/index.html"
        })
    ]
}
