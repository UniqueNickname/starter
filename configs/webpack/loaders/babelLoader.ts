import webpack from 'webpack'

import { isProd } from '../utils'

const removeConsole = [
    'babel-plugin-transform-remove-console',
    { exclude: ['error', 'warn'] },
]

export const getBabelLoader = (ext: 'js' | 'ts'): webpack.RuleSetUseItem => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loader: any = {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTSX: false,
                        allExtensions: true,
                        allowDeclareFields: true,
                    },
                ],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
        },
    }
    if (ext === 'ts') loader.options.presets.push('@babel/preset-typescript')
    if (isProd) loader.options.plugins.push(removeConsole)
    return loader
}
