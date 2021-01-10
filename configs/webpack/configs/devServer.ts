import WebpackDevServer from 'webpack-dev-server'

import { PATHS } from '../../paths'
import { isDev } from '../utils'

export const configDevServer: WebpackDevServer.Configuration = {
    contentBase: PATHS.source,
    watchContentBase: true,
    port: 3030,
    hot: isDev,
    overlay: {
        warnings: false,
        errors: true,
    },
}
