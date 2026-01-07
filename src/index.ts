
import { env } from "@marcuth/env"
import fs from "node:fs/promises"

import { ConfigFilter, ConfigLanguage, ConfigPlatform } from "./enums"
import { Config } from "./dc-config"
import { dragonSchema } from "./schemas/items/dragon"
import { Localization } from "@dchighs/dc-localization"

async function main() {
    const localization = await Localization.create("br")

    const config = await Config.create({
        authToken: env("AUTH_TOKEN"),
        userId: env("USER_ID"),
        url: env("URL"),
        filter: [ConfigFilter.Items],
        language: ConfigLanguage.BrazilianPortuguese,
        platform: ConfigPlatform.Windows
    })

    // console.dir(config.items.dragons, { depth: null })

    const dragons = config.items.dragons.map((dragon) => localization.translate(dragon))

    const fileName = "dragons.json"
    const fileContent = JSON.stringify(dragons)
    await fs.writeFile(fileName, fileContent)
}

main()