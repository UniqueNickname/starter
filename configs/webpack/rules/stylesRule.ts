import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const commonLoaders = [MiniCssExtractPlugin.loader, 'css-loader']

export const stylesRules: webpack.RuleSetRule[] = [
    {
        test: /\.s[ac]ss$/,
        use: [...commonLoaders, 'sass-loader'],
    },
    {
        test: /\.css$/,
        use: [...commonLoaders],
    },
]
