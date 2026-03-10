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

export type CreateRawOptions = {
    url: string
    filter?: Array<ConfigFilter | `${ConfigFilter}`>
    language?: ConfigLanguage | `${ConfigLanguage}`
    platform?: ConfigPlatform | `${ConfigPlatform}`
}

export type FetchOptions = CreateOptions

export type FetchRawOptions = Pick<CreateRawOptions, "url" | "filter">

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

    /**
     * Creates a new Config instance by fetching data from the API with authentication.
    */
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

    /**
     * Creates a new Config instance by fetching a raw JSON file from a URL.
    */
    static async createRaw({
        url,
        filter,
        language,
        platform
    }: CreateRawOptions) {
        const data = await Config.fetchRaw({ url, filter })

        return new Config({
            data: data,
            filter: filter,
            language: language ?? ConfigLanguage.Default,
            platform: platform ?? ConfigPlatform.Default
        })
    }

    /**
     * Fetches configuration from the API with authentication.
    */
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

    /**
     * Fetches a raw config file from a URL and filters its contents.
    */
    static async fetchRaw({
        url,
        filter
    }: FetchRawOptions) {
        const response = await axios.get<GameConfigDto>(url)
        const fullData = response.data

        if (!filter || filter.length === 0) {
            return {
                game_data: {
                    config: fullData.game_data.config
                }
            } as GameConfigDto
        }

        const filteredData: Record<string, any> = {}

        filter.forEach((key) => {
            const value = (fullData as any).game_data?.config?.[key]
            if (value !== undefined) {
                filteredData[key] = value
            }
        })

        return {
            game_data: {
                config: filteredData
            }
        } as GameConfigDto
    }
}