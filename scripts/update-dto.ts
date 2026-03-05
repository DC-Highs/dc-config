import { quicktype, InputData, jsonInputForTargetLanguage } from "quicktype-core"
import axios from "axios"
import path from "path"
import fs from "fs"


async function quicktypeJSON(targetLanguage: string, typeName: string, jsonString: string) {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage as any)

    await jsonInput.addSource({
        name: typeName,
        samples: [jsonString],
    })

    const inputData = new InputData()
    inputData.addInput(jsonInput)

    return await quicktype({
        inputData,
        lang: targetLanguage as any,
        rendererOptions: {
            "just-types": "true",
        },
    })
}

async function main() {
    const url = process.env.GAME_CONFIG_URL
    const userId = process.env.GAME_USER_ID
    const authToken = process.env.GAME_AUTH_TOKEN

    if (!url || !userId || !authToken) {
        console.error("Missing environment variables: GAME_CONFIG_URL, GAME_USER_ID, GAME_AUTH_TOKEN");
        process.exit(1);
    }

    console.log("Fetching config from:", url)

    const response = await axios.post(url, null, {
        params: {
            authToken: authToken,
            userId: userId,
        }
    })

    console.log("Generating types...")

    const { lines } = await quicktypeJSON(
        "typescript",
        "GameConfigDto",
        JSON.stringify(response.data)
    )

    const outputPath = path.join(__dirname, "../src/dtos/game-config.ts")

    const content = lines.map(l => l.replace(/;$/, "")).join("\n") + "\n"

    fs.writeFileSync(outputPath, content)

    console.log("Successfully updated src/dtos/game-config.ts")
}

main().catch((err) => {
    console.error("Error updating DTO:", err.message)
    process.exit(1)
})
