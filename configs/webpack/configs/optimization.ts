import webpack from 'webpack'

export const configOptimization: webpack.Configuration['optimization'] = {
    minimize: true,
    splitChunks: {
        cacheGroups: {
            vendor: {
                name: 'vendors',
                test: /node_modules/,
                chunks: 'all',
                enforce: true,
                reuseExistingChunk: true,
            },
        },
    },
    runtimeChunk: {
        name: 'runtime',
    },
}
