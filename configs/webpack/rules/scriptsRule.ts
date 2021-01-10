import webpack from 'webpack'

import { PATHS } from '../../paths'
import { getBabelLoader, lintLoaders } from '../loaders'

const setRule = (ext: 'js' | 'ts') => ({
    test: ext === 'js' ? /\.js$/ : /\.ts$/,
    use: [getBabelLoader(ext), ...lintLoaders],
    exclude: [PATHS.nodeModules],
})

export const scriptsRules: webpack.RuleSetRule[] = [
    setRule('js'),
    setRule('ts'),
]
