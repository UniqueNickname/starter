import webpack from 'webpack'

import { PATHS } from '../../paths'
import { getBabelLoader, vueLoader } from '../loaders'

type ScriptExtType = 'js' | 'ts' | 'vue'
const scriptExt: ScriptExtType[] = ['js', 'ts', 'vue']

const getLoaders = (ext: ScriptExtType) =>
    ext === 'vue' ? vueLoader : [getBabelLoader(ext)]

const getRule = (ext: ScriptExtType): webpack.RuleSetRule => ({
    test: new RegExp(`\\.${ext}$`),
    use: getLoaders(ext),
    exclude: [PATHS.nodeModules],
})

export const scriptsRules: webpack.RuleSetRule[] = [...scriptExt.map(getRule)]
