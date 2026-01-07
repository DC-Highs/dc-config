import { ConfigFilterItem, ConfigLanguage, ConfigPlatform } from "@dchighs/dc-core"
import axios from "axios"

import { ConfigFilter } from "./enums/config-filter"
import { GameConfigDto } from "./dtos/game-config"
import { ItemsWrapper } from "./wrappers/items-wrapper"

export type ConfigOptions = {
    language: ConfigLanguage | `${ConfigLanguage}`
    filter?: Array<ConfigFilterItem | `${ConfigFilter}`>
    platform: ConfigPlatform | `${ConfigPlatform}`
    data: any
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
    readonly items: ItemsWrapper

    constructor({ data, language, platform, filter }: ConfigOptions) {
        this.data = data
        this.langauge = language as ConfigLanguage
        this.platform = platform as ConfigPlatform
        this.filter = filter ? filter as ConfigFilter[] : undefined
        this.items = new ItemsWrapper(this)
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