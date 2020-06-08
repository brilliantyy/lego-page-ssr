const VueSSrServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSrClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const merge = ;
const isNode = process.env.TARGET === 'node'
const target = isNode ? 'server' : 'client'

module.exports = {
    outputDir: './dist' + target,
    configreWebpack: () => ({
        entry: `./src/entry-${target}.js`,
        devtool: 'source-map',
        target: isNode ? 'node' : 'web',
        node: isNode ? undefined : false,
        output: {
            libraryTarget: isNode ? 'commonjs2' : undefined
        },
        externals: isNode ?
            {
                nodeExternals({
                    whitelist: []
                })
            }
    })
}