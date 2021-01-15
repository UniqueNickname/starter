import webpack from 'webpack'

import { PATHS } from '../../paths'
import { getBabelLoader } from '../loaders'

type ScriptExtType = 'js' | 'ts'
const scriptExt: ScriptExtType[] = ['js', 'ts']

const getLoaders = (ext: ScriptExtType) => [getBabelLoader(ext)]

const getRule = (ext: ScriptExtType): webpack.RuleSetRule => ({
    test: new RegExp(`\\.${ext}$`),
    use: getLoaders(ext),
    exclude: [PATHS.nodeModules],
})

export const scriptsRules: webpack.RuleSetRule[] = [...scriptExt.map(getRule)]
