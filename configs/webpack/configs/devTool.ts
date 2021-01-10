import webpack from 'webpack'

import { env } from '../../env'
import { isDev } from '../utils'

export const configDevTool: webpack.Configuration['devtool'] = isDev
    ? env.DEV_TOOL || false
    : false
