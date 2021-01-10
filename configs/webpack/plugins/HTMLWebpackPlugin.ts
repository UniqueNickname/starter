import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import { isProd } from '../utils'
import { PATHS } from '../../paths'

export const HTMLPlugin: webpack.WebpackPluginInstance = new HTMLWebpackPlugin({
    template: `${PATHS.templates}/index.html`,
    minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
    },
})
