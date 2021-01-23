import webpack from 'webpack'

import { isProd } from '../utils'

const removeConsole = [
    'babel-plugin-transform-remove-console',
    { exclude: ['error', 'warn'] },
]

export const getBabelLoader = (ext: 'js' | 'ts'): webpack.RuleSetUseItem => ({
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        esmodules: true,
                    },
                },
            ],
            ext === 'ts' ? '@babel/preset-typescript' : undefined,
        ].filter(preset => !!preset),
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
            isProd ? removeConsole : undefined,
        ].filter(plugin => plugin),
    },
})
