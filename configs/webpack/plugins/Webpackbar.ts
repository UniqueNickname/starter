import webpack from 'webpack'
import Webpackbar from 'webpackbar'

export const WebpackbarPlugin: webpack.WebpackPluginInstance = new Webpackbar({
    name: 'client',
})
