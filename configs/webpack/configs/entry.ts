import path from 'path'
import webpack from 'webpack'

import { PATHS } from '../../paths'

export const configEntry: webpack.Configuration['entry'] = {
    client: ['@babel/polyfill', path.resolve(PATHS.source, 'index.ts')],
}
