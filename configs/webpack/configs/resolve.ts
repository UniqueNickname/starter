import webpack from 'webpack'

import { PATHS } from '../../paths'

export const configResolve: webpack.Configuration['resolve'] = {
    modules: [PATHS.source, PATHS.nodeModules],
    extensions: ['.js', '.ts', '.vue'],
}
