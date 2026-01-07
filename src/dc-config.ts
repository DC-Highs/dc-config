import axios from "axios"

import { ConfigFilter, ConfigLanguage, ConfigPlatform } from "./enums"
import { GameConfigDto } from "./dtos/game-config"

export type ConfigOptions = {
    language: ConfigLanguage | `${ConfigLanguage}`
    filter?: Array<ConfigFilter | `${ConfigFilter}`>
    platform: ConfigPlatform | `${ConfigPlatform}`
    data: GameConfigDto
}

export type CreateOptions = Omit<
    Omit<ConfigOptions, "platform" | "language"> &
    {
        authToken: string
        userId: string
        url: string
        language?: ConfigLanguage | `${ConfigLanguage}`
        platform?: ConfigPlatform | `${ConfigPlatform}`
    }
, "data">

export type FetchOptions = CreateOptions

export class Config {
    readonly platform: ConfigPlatform
    readonly langauge: ConfigLanguage
    readonly filter?: ConfigFilter[]
    readonly data: GameConfigDto

    constructor({ data, language, platform, filter }: ConfigOptions) {
        this.data = data
        this.langauge = language as ConfigLanguage
        this.platform = platform as ConfigPlatform
        this.filter = filter ? filter as ConfigFilter[] : undefined
    }

    static async create({
        authToken,
        userId,
        filter,
        language,
        platform,
        url
    }: CreateOptions) {
        const data = await Config.fetch({
            authToken: authToken,
            userId: userId,
            filter: filter,
            language: language,
            platform: platform,
            url: url
        })

        return new Config({
            data: data,
            filter: filter,
            language: language ?? ConfigLanguage.Default,
            platform: platform ?? ConfigPlatform.Default
        })
    }

    static async fetch({
        authToken,
        userId,
        filter,
        language,
        platform,
        url
    }: FetchOptions) {
        const response = await axios.post(url, null, {
            params: {
                authToken: authToken,
                userId: userId,
                filter: filter?.join(","),
                platform: platform,
                language: language
            }
        })

        const data = response.data as GameConfigDto

        return data
    }
}