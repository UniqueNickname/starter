import webpack from 'webpack'

import { scriptsRules, stylesRules } from '../rules'

export const configModule: webpack.Configuration['module'] = {
    rules: [...scriptsRules, ...stylesRules],
}
