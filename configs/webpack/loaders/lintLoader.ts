import webpack from 'webpack'

import { isDev } from '../utils'

export const lintLoaders: webpack.RuleSetUseItem[] = isDev
    ? ['eslint-loader']
    : []
