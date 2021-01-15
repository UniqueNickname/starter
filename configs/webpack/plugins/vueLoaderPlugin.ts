import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader/'

export const vuePlugin: webpack.WebpackPluginInstance = new VueLoaderPlugin()
