import webpack from 'webpack'

import { env } from '../env'
import {
    configEntry,
    configOutput,
    configStats,
    configOptimization,
    configModule,
    configPlugins,
    configDevServer,
    configDevTool,
    configResolve,
} from './configs'

const config: webpack.Configuration = {
    mode: env.MODE,
    target: 'browserslist',
    devtool: configDevTool,
    devServer: configDevServer,
    entry: configEntry,
    output: configOutput,
    stats: configStats,
    optimization: configOptimization,
    module: configModule,
    plugins: configPlugins,
    resolve: configResolve,
}

export default config
