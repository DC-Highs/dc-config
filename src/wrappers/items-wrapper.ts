import { groupBy } from "lodash"

import { Config } from "../dc-config"
import { GameConfigDto } from "../dtos/game-config"
import { recordKeysConversor } from "../utils/record-keys-conversor"
import { dragonSchema } from "../schemas/items/dragon"
import { DragonDto } from "../dtos/dragon"

export class ItemsWrapper {
    private readonly raw: GameConfigDto["game_data"]["config"]["items"]
    private readonly items: Record<string, any>

    constructor(config: Config) {
        this.raw = config.data.game_data.config.items

        console.log(Object.keys(groupBy(this.raw, "group_type")))

        this.items = recordKeysConversor.replace({
            oldString: " ",
            newString: "_",
            object: recordKeysConversor.toPlural(
                recordKeysConversor.toLowerCase(
                    groupBy(this.raw, "group_type")
                )
            )
        })
    }

    get dragons() {
        const rawDragons: DragonDto[] = this.items.dragons
        return rawDragons.map(dragon => dragonSchema.parse(dragon))
    }
}