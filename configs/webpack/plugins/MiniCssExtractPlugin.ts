import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { outputFileName } from '../utils'

export const pluginMiniCssExtract: webpack.WebpackPluginInstance = new MiniCssExtractPlugin(
    {
        filename: outputFileName('css'),
    },
)
