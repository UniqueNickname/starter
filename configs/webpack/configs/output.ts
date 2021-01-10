import webpack from 'webpack'

import { PATHS } from '../../paths'
import { outputFileName } from '../utils'

export const configOutput: webpack.Configuration['output'] = {
    path: PATHS.build,
    filename: outputFileName('js'),
    publicPath: '/',
}
