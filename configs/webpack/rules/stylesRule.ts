import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import { PATHS } from '../../paths'

const getLoaders = (extraLoaders: string[]) => [
    MiniCssExtractPlugin.loader,
    'css-loader',
    ...extraLoaders,
    {
        loader: 'postcss-loader',
        // options: {
        //     postcssOptions: {
        //         config: `${PATHS.root}/postcss.config.js`
        //     }
        // }
    },
]

export const stylesRules: webpack.RuleSetRule[] = [
    {
        test: /\.s[ac]ss$/,
        use: getLoaders(['sass-loader']),
    },
    {
        test: /\.css$/,
        use: getLoaders([]),
    },
]
