import { env } from '../../env'

export const outputFileName = (ext: string): string =>
    env.FILE_NAME_HASH
        ? `${ext}/[name].[contenthash].${ext}`
        : `${ext}/[name].${ext}`
