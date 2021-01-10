/* eslint-disable no-process-env */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */

type Devtool =
    | 'eval'
    | 'source-map'
    | 'eval-source-map'
    | 'eval-cheap-source-map'
    | 'eval-cheap-module-source-map'
    | 'cheap-source-map'
    | 'inline-source-map'
    | 'hidden-source-map'
    | 'nosources-source-map'
    | 'cheap-module-source-map'
    | 'inline-cheap-source-map'
    | 'inline-cheap-module-source-map'
    | false

class Env {
    constructor(params: Record<string, any>) {
        Object.entries(params).forEach(([envKey, envValue]) => {
            const thisAny = this as any
            switch (typeof thisAny[envKey]) {
                case 'boolean':
                    thisAny[envKey] = envValue === true || envValue === 'true'
                    break
                case 'string':
                    thisAny[envKey] = (envValue || '').replace(/"/g, '').trim()
                    break
                case 'number':
                    thisAny[envKey] = Number(envValue || 0)
                    break
                default:
                    break
            }
        })
    }

    DEV_TOOL: Devtool = 'cheap-module-source-map'

    FILE_NAME_HASH = true

    MODE: 'development' | 'production' =
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'production'
            ? process.env.NODE_ENV
            : 'development'
}

export const env = new Env(process.env)
