import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import { PATHS } from '../../paths'

export const copyPlugin: webpack.WebpackPluginInstance = new CopyWebpackPlugin({
    patterns: [
        {
            noErrorOnMissing: true,
            from: `${PATHS.source}/static/`,
            to: PATHS.build,
        },
    ],
})
