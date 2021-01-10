import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export const cleanPlugin: webpack.WebpackPluginInstance = new CleanWebpackPlugin()
