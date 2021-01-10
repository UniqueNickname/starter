import path from 'path'

const root = path.resolve(__dirname, '..')
const source = path.resolve(root, 'src')

export const PATHS = {
    root,
    source,
    static: path.resolve(source, 'static'),
    styles: path.resolve(source, 'assets/scss'),
    templates: path.resolve(source, 'templates'),
    build: path.resolve(root, 'build'),
    server: path.resolve(root, 'server'),
    nodeModules: path.resolve(root, 'node_modules'),
}
