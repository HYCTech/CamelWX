var importer = require('postcss-import')
var cssnext = require('postcss-cssnext')
var px2rem = require('postcss-px2rem')
const vueLoaderOptions = {
    postcss: pack => {
        return [
            importer({
                // use webpack context
                addDependencyTo: pack
            }),
            cssnext({
                // see: https://github.com/ai/browserslist#queries
                browsers: 'Android >= 4, iOS >= 7',
                warnForDuplicates: false
            }),
            px2rem({
                remUnit: 100
            })
        ]
    },
    autoprefixer: {
        browsers: ["Android >= 4.0", "ChromeAndroid > 1%", "iOS >= 4"]
    }
}

module.exports = vueLoaderOptions