import { env } from '../../env'

export const isProd = env.MODE === 'production'
export const isDev = !isProd
