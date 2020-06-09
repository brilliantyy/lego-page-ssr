const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    css: {
        extract: isProd
    },
    // baseUrl: isProd? '' : 'http://127.0.0.1:8080',
    publicPath: '/dist/',
    configureWebpack: () =>({
        entry: `./src/entry-${target}.js`,
        devtool: 'source-map',
        target: TARGET_NODE ? 'node' : 'web',
        node: TARGET_NODE ? undefined : false,
        devServer: {
            headers: {'Access-Control-Allow-Origin': '*'}
        },
        
        output: {
            libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
        },
        externals: TARGET_NODE
            ? nodeExternals({
                whitelist: [/\.css$/]
            })
            : undefined,
        // optimization: {
        //     splitChunks: TARGET_NODE ? 'commonjs2' : false
        // },
        plugins: [ TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin() ]
    }),
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                merge(options, {
                    optimizeSSR: false
                })
            })

        if (TARGET_NODE) {
            config.plugins.delete('hmr')
        }
    }
}