import webpack from 'webpack'
import {
    cleanPlugin,
    copyPlugin,
    HTMLPlugin,
    pluginMiniCssExtract,
    eslintPlugin,
    WebpackbarPlugin,
} from '../plugins'

export const configPlugins: webpack.Configuration['plugins'] = [
    pluginMiniCssExtract,
    HTMLPlugin,
    cleanPlugin,
    copyPlugin,
    eslintPlugin,
    WebpackbarPlugin,
]
