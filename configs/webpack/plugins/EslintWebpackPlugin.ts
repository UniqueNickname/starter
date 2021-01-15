import webpack from 'webpack'
import EslintWebpackPlugin from 'eslint-webpack-plugin'

export const eslintPlugin: webpack.WebpackPluginInstance = new EslintWebpackPlugin()
