export interface GameConfigDto {
    game_data: GameData
}

export interface GameData {
    config: GameDataConfig
}

export interface GameDataConfig {
    chests:               Chests
    items:                Item[]
    levels:               Level[]
    treasure_items:       { [key: string]: TreasureItem }
    sanctuary_breeding:   SanctuaryBreeding
    help_views:           HelpView[]
    deity_world_dragons:  DeityWorldDragons
    news:                 News
    dragonarium:          Dragonarium
    grid_island:          GridIsland
    dragon_book:          DragonBook
    dragon_tournaments:   DragonTournaments
    fog_island:           FogIsland
    heroic_races:         HeroicRaces
    special_breeding:     ConfigSpecialBreeding
    maze_island:          MazeIsland
    tower_island:         TowerIsland
    dragon_collections:   DragonCollections
    event_island:         EventIsland
    skills:               Skills
    tree_of_life:         TreeOfLife
    tree_of_life_recall:  TreeOfLifeRecall
    tree_of_life_powerup: TreeOfLifePowerup
    habitat_tokens:       HabitatTokens
    max_dragon_levels:    MaxDragonLevels
    collectibles:         Collectibles
    puzzle_island:        PuzzleIsland
    dragon_skins:         DragonSkins
    dragon_wars:          DragonWars
    farm_crops:           FarmCrops
    breeding:             ConfigBreeding
    liveops_challenges:   LiveopsChallenges
    asset_versioning:     AssetVersioning
    battle_pass:          ConfigBattlePass
    dragon_mastery:       DragonMastery
    runner_island:        RunnerIsland
    perks:                Perks
}

export interface AssetVersioning {
    dragons:   BuildingElement[]
    generics:  BuildingElement[]
    attacks:   BuildingElement[]
    buildings: BuildingElement[]
    chests:    BuildingElement[]
    particles: BuildingElement[]
    pets:      BuildingElement[]
}

export interface BuildingElement {
    name:          string
    format:        Format
    asset_version: number
}

export enum Format {
    Efk = "efk",
    Spine = "spine",
    Tween = "tween",
}

export interface ConfigBattlePass {
    battle_pass:          BattlePassElement[]
    purchase_popup:       PurchasePopup[]
    purchase_popup_elite: PurchasePopupElite[]
    nodes:                BattlePassNode[]
    extra_nodes:          ExtraNode[]
    parameters:           BattlePassParameter[]
    elite_pass:           ElitePass[]
    goals:                BattlePassGoal[]
    collectible_actions:  CollectibleAction[]
    rewards:              BattlePassReward[]
    rewards_config:       BattlePassRewardsConfig[]
    rewards_tiers:        RewardsTier[]
}

export interface BattlePassElement {
    id:                                                        number
    type:                                                      TypeElement
    availability:                                              BattlePassAvailability[]
    nodes:                                                     number[]
    extra_node:                                                number
    daily_goals:                                               number[]
    weekly_goals:                                              number[]
    main_reward_node:                                          number
    iap_uid:                                                   IapUid
    iap_discount_uid:                                          IapDiscountUid[]
    webstore_iap_discount_uid:                                 DiscountUid[]
    iap_elite_uid:                                             IapEliteUid
    iap_elite_discount_uid:                                    DiscountUid[]
    webstore_iap_elite_discount_uid:                           DiscountUid[]
    iap_elite_upgrade_uid:                                     IapEliteUpgradeUid
    iap_elite_upgrade_discount_uid:                            DiscountUid[]
    webstore_iap_elite_upgrade_discount_uid:                   DiscountUid[]
    name_tid:                                                  string
    season_tid:                                                string
    description_tid:                                           string
    icon_id:                                                   IconID
    purchase_popup:                                            number
    elite_purchase_popup:                                      number
    asset:                                                     string
    sound_tag:                                                 BattlePassSoundTag
    orbs_producing_habitat_id:                                 number
    elite_extra_reward:                                        number
    webstore_iap_uid?:                                         IapUid
    webstore_iap_uid_product_id?:                              number
    webstore_iap_uid_bonus_percentage?:                        number
    webstore_iap_discount_uid_product_id?:                     number
    webstore_iap_discount_uid_bonus_percentage?:               number
    webstore_iap_elite_uid?:                                   IapEliteUid
    webstore_iap_elite_uid_product_id?:                        number
    webstore_iap_elite_uid_bonus_percentage?:                  number
    webstore_iap_elite_discount_uid_product_id?:               number
    webstore_iap_elite_discount_uid_bonus_percentage?:         number
    webstore_iap_elite_upgrade_uid?:                           IapEliteUpgradeUid
    webstore_iap_elite_upgrade_uid_product_id?:                number
    webstore_iap_elite_upgrade_uid_bonus_percentage?:          number
    webstore_iap_elite_upgrade_discount_uid_product_id?:       number
    webstore_iap_elite_upgrade_discount_uid_bonus_percentage?: number
}

export interface BattlePassAvailability {
    from: string
    to:   string
}

export interface IapDiscountUid {
    iap:            IapDiscountUidIap
    availabilities: IapDiscountUidAvailability[]
}

export interface IapDiscountUidAvailability {
    from: string
    dur?: string
    to?:  string
}

export enum IapDiscountUidIap {
    BattlePass19_99 = "battle_pass_19_99",
    BattlePass7_99 = "battle_pass_7_99",
    BattlePassTier9_99 = "battle_pass_tier_9_99",
    Blackfriday9_99 = "blackfriday_9_99",
}

export interface DiscountUid {
    iap:            IapEliteDiscountUidIap
    availabilities: IapEliteDiscountUidAvailability[]
}

export interface IapEliteDiscountUidAvailability {
    from: string
    dur:  Dur
}

export enum Dur {
    The10D = "10d",
    The14D = "14d",
    The15D = "15d",
    The28D = "28d",
    The42D = "42d",
    The7D = "7d",
}

export enum IapEliteDiscountUidIap {
    BattlePass19_99 = "battle_pass_19_99",
    BattlePass7_99 = "battle_pass_7_99",
    Blackfriday21_99 = "blackfriday_21_99",
    Blackfriday31_99 = "blackfriday_31_99",
    ElitePass59_99 = "elite_pass_59_99",
    ElitePassPromo31_99 = "elite_pass_promo_31_99",
    EliteUpgradePromo23_99 = "elite_upgrade_promo_23_99",
    SpecialEbpUpgradeDiscount39_99 = "special_ebp_upgrade_discount_39_99",
}

export enum IapEliteUid {
    BattlePass29_99 = "battle_pass_29_99",
    Blackfriday49_99 = "blackfriday_49_99",
    ElitePass39_99 = "elite_pass_39_99",
    ElitePass89_99 = "elite_pass_89_99",
    ElitePassPromo31_99 = "elite_pass_promo_31_99",
    EliteUpgrade19_99 = "elite_upgrade_19_99",
}

export enum IapEliteUpgradeUid {
    BattlePass19_99 = "battle_pass_19_99",
    BattlePass39_99 = "battle_pass_39_99",
    Blackfriday34_99 = "blackfriday_34_99",
    ElitePassPromo23_99 = "elite_pass_promo_23_99",
    EliteUpgrade29_99 = "elite_upgrade_29_99",
    SpecialEbpUpgrade59_99 = "special_ebp_upgrade_59_99",
}

export enum IapUid {
    BattlePass29_99 = "battle_pass_29_99",
    BattlePassTier9_99 = "battle_pass_tier_9_99",
    Blackfriday14_99 = "blackfriday_14_99",
    MktOffer199 = "mkt_offer_199",
    NguBp6_99 = "ngu_bp_6_99",
    NguBp7_99 = "ngu_bp_7_99",
    NguBp9_99 = "ngu_bp_9_99",
}

export enum IconID {
    Icon1 = "icon_1",
    Icon10 = "icon_10",
    Icon11 = "icon_11",
    Icon12 = "icon_12",
    Icon13 = "icon_13",
    Icon14 = "icon_14",
    Icon15 = "icon_15",
    Icon16 = "icon_16",
    Icon17 = "icon_17",
    Icon18 = "icon_18",
    Icon19 = "icon_19",
    Icon2 = "icon_2",
    Icon3 = "icon_3",
    Icon4 = "icon_4",
    Icon5 = "icon_5",
    Icon6 = "icon_6",
    Icon7 = "icon_7",
    Icon8 = "icon_8",
    Icon9 = "icon_9",
}

export enum BattlePassSoundTag {
    Holy = "HOLY",
    Mysterious = "MYSTERIOUS",
}

export enum TypeElement {
    Global = "global",
    Ngu = "ngu",
}

export interface CollectibleAction {
    id:     number
    amount: number
    type:   CollectibleActionType
    rules?: Rules
}

export interface Rules {
    all_of_elements?:  ElementType[]
    parents_elements?: ElementType[]
    level?:            number
    rarity?:           Rarity
}

export enum ElementType {
    BT = "bt",
    Ch = "ch",
    D = "d",
    DR = "dr",
    E = "e",
    El = "el",
    ElementType = "*",
    Empty = "-",
    F = "f",
    HP = "hp",
    I = "i",
    L = "l",
    Large = "LARGE",
    Li = "li",
    M = "m",
    Medium = "MEDIUM",
    Mg = "mg",
    N = "n",
    P = "p",
    PR = "pr",
    Ph = "ph",
    Pu = "pu",
    Small = "SMALL",
    So = "so",
    Super = "SUPER",
    TI = "ti",
    W = "w",
    Wd = "wd",
    Wr = "wr",
}

export enum Rarity {
    C = "C",
    E = "E",
    H = "H",
    L = "L",
    M = "M",
    R = "R",
    V = "V",
}

export enum CollectibleActionType {
    ActivateDragonTower = "ACTIVATE_DRAGON_TOWER",
    Breed = "BREED",
    ClaimAllianceChest = "CLAIM_ALLIANCE_CHEST",
    CollectFood = "COLLECT_FOOD",
    CollectGold = "COLLECT_GOLD",
    CombatArena = "COMBAT_ARENA",
    CombatLeague = "COMBAT_LEAGUE",
    CombatQuest = "COMBAT_QUEST",
    CompleteHeroicNode = "COMPLETE_HEROIC_NODE",
    CompleteMdrNode = "COMPLETE_MDR_NODE",
    DragonPowerUpUpgrade = "DRAGON_POWER_UP_UPGRADE",
    Feed = "FEED",
    FinishTraining = "FINISH_TRAINING",
    HatchEgg = "HATCH_EGG",
    LevelupDragon = "LEVELUP_DRAGON",
    ReachStageOnWizardsCave = "REACH_STAGE_ON_WIZARDS_CAVE",
    RecallDragon = "RECALL_DRAGON",
    RenameDragon = "RENAME_DRAGON",
    SpendEventPoints = "SPEND_EVENT_POINTS",
    SpendGemsOnWizardsCave = "SPEND_GEMS_ON_WIZARDS_CAVE",
    SpendPuzzleTokens = "SPEND_PUZZLE_TOKENS",
    SpendRunnerTokens = "SPEND_RUNNER_TOKENS",
    StartWizardsCaveTry = "START_WIZARDS_CAVE_TRY",
    SummonDragon = "SUMMON_DRAGON",
    UpgradeHabitat = "UPGRADE_HABITAT",
    WatchDragontvAd = "WATCH_DRAGONTV_AD",
}

export interface ElitePass {
    id:    number
    name:  string
    value: number
}

export interface ExtraNode {
    id:              number
    iteration_score: number
    free_reward:     number
    premium_reward:  number
    elite_reward:    number
}

export interface BattlePassGoal {
    id:                  number
    collectible_actions: number[]
    reward:              number
    eligibility?:        Eligibility
    icon_id:             IconID
}

export interface Eligibility {
    week: number
}

export interface BattlePassNode {
    id:                 number
    completion_score:   number
    premium_reward:     number
    free_reward?:       number
    limit_bp_discount?: boolean
}

export interface BattlePassParameter {
    id:    number
    name:  string
    value: TypeElement[] | boolean | ValueClass | number | string
}

export interface ValueClass {
    canvas?:  number[] | string
    ios?:     number[]
    android?: number[]
    amazon?:  number[]
    windows?: number[]
    volume?:  number
    c?:       number
    huawei?:  number[]
    seeds?:   Seed[]
}

export interface Seed {
    id:     number
    amount: number
}

export interface PurchasePopup {
    id:                               number
    main_reward_id:                   number
    right_reward_id:                  number
    small_left_reward_id:             number
    medium_left_reward_id:            number
    big_left_reward_id:               number
    use_right_reward_asset_bundle:    number
    use_big_left_reward_asset_bundle: number
    table_reward_1_quantity:          number
    table_reward_2_quantity:          number
    table_reward_3_quantity:          number
    table_reward_4_quantity:          number
    table_reward_5_quantity:          number
    left_rewards_description_tid:     LeftRewardsDescriptionTid
    main_title_style:                 PurchasePopupMainTitleStyle
    description_elements_style:       DescriptionElementsStyleEnum
    more_title_style:                 MoreTitleStyle
    quantity_label_style:             QuantityLabelStyleEnum
    discount:                         number
    offer_discount_percentage:        number
    show_on_startup:                  boolean
    right_rewards_description_tid?:   RightRewardsDescriptionTid
    popup_frequency?:                 string
}

export enum DescriptionElementsStyleEnum {
    H7 = "H7",
}

export enum LeftRewardsDescriptionTid {
    TidBattlePassLeftRewardsDescGeneric = "tid_battle_pass_left_rewards_desc_generic",
    TidBattlePassLeftRewardsDescNGU28 = "tid_battle_pass_left_rewards_desc_NGU28",
}

export enum PurchasePopupMainTitleStyle {
    H6 = "H6",
}

export enum MoreTitleStyle {
    B4 = "B4",
}

export enum QuantityLabelStyleEnum {
    B6 = "B6",
}

export enum RightRewardsDescriptionTid {
    TidBattlePassRightRewardsDescGeneric = "tid_battle_pass_right_rewards_desc_generic",
    TidBattlePassRightRewardsDescNGU7 = "tid_battle_pass_right_rewards_desc_NGU7",
}

export interface PurchasePopupElite {
    id:                                number
    premium_reward_1_tid:              string
    premium_reward_2_tid:              PremiumReward2_Tid
    premium_reward_2_quantity?:        number
    premium_reward_3_tid:              string
    premium_reward_4_tid:              string
    premium_reward_5_tid:              string
    premium_reward_6_tid:              string
    elite_reward_1_tid:                EliteReward1_Tid
    elite_reward_2_tid:                string
    elite_reward_3_tid:                EliteReward3_Tid
    main_title_style:                  PurchasePopupEliteMainTitleStyle
    premium_rewards_description_style: QuantityLabelStyleEnum
    premium_description_style:         PremiumDescriptionStyle
    premium_price_style:               PremiumPriceStyle
    premium_discount_price_style:      PremiumDiscountPriceStyle
    elite_description_style:           QuantityLabelStyleEnum
    elite_reward_description_style:    QuantityLabelStyleEnum
    elite_price_style:                 ElitePriceStyle
    elite_discount_price_style:        DescriptionElementsStyleEnum
    offer_discount_percentage:         number
    badge_tid:                         BadgeTid
    show_on_startup:                   boolean
}

export enum BadgeTid {
    BestValue = "BEST VALUE",
}

export enum ElitePriceStyle {
    S7 = "S7",
}

export enum EliteReward1_Tid {
    The02 = "0.2",
    The20 = "+20%",
}

export enum EliteReward3_Tid {
    The03 = "0.3",
    The20 = "+20%",
    The30 = "+30%",
}

export enum PurchasePopupEliteMainTitleStyle {
    T3 = "T3",
}

export enum PremiumDescriptionStyle {
    H1 = "H1",
}

export enum PremiumDiscountPriceStyle {
    H4 = "H4",
}

export enum PremiumPriceStyle {
    S1 = "S1",
}

export enum PremiumReward2_Tid {
    The1M = "1 M+",
    TidChestName643 = "tid_chest_name_643",
}

export interface BattlePassReward {
    id:      number
    reward:  PurpleReward[]
    type_id: number
}

export interface PurpleReward {
    b?:                         number
    g?:                         number
    chest?:                     number
    pp?:                        number
    egg?:                       number
    c?:                         number
    f?:                         number
    "rank_up_coin.common"?:     number
    oph_token?:                 number
    seeds?:                     Seed[]
    perks?:                     RewardPerk[]
    w_token?:                   number
    li_token?:                  number
    i_token?:                   number
    pr_token?:                  number
    f_token?:                   number
    wr_token?:                  number
    p_token?:                   number
    l_token?:                   number
    wd_token?:                  number
    e_token?:                   number
    el_token?:                  number
    d_token?:                   number
    m_token?:                   number
    pu_token?:                  number
    n_token?:                   number
    skin?:                      number
    trade_tickets?:             TradeTicket[]
    rarity_seeds?:              RewardRaritySeed[]
    "album_pack.s"?:            number
    "album_pack.m"?:            number
    "album_pack.l"?:            number
    "album_pack.xl"?:           number
    "album_pack_aces.4"?:       number
    "album_pack_aces.1"?:       number
    "album_pack_aces.3"?:       number
    "album_pack_aces.2"?:       number
    "album_pack_aces.5"?:       number
    "album_pack_aces.generic"?: number
    "rank_up_coin.legendary"?:  number
    "pet_food_pack.s"?:         number
    "pet_food_pack.m"?:         number
    "pet_food_pack.l"?:         number
}

export interface RewardPerk {
    id:       number
    quantity: number
}

export interface RewardRaritySeed {
    rarity: Rarity
    amount: number
}

export interface TradeTicket {
    rarity: Rarity
    amount: number
    limit:  boolean
}

export interface BattlePassRewardsConfig {
    id:              number
    background:      Background
    title_tid:       string
    description_tid: string
    button_tid:      string
}

export enum Background {
    BgBattleHalloween = "bg-battle-halloween",
    BgLoChallengesBlackFriday = "bg-lo-challenges-black-friday",
    BgLoChallengesDeepSpace = "bg-lo-challenges-deep-space",
    BgLoChallengesTest = "bg-lo-challenges-test",
}

export interface RewardsTier {
    name:  string
    value: number[] | number
}

export interface ConfigBreeding {
    breeding:          BreedingElement[]
    incompatibilities: Incompatibility[]
    boost:             Boost[]
    parameters:        BreedingParameter[]
    soulmates:         Soulmate[]
}

export interface Boost {
    id:        number
    rarity:    Rarity
    boost_0:   number
    boost_1:   number
    boost_2:   number
    boost_3:   number
    boost_4:   number
    boost_5:   number
    boost_6:   number
    category?: number
}

export interface BreedingElement {
    id:           number
    element_one:  ElementType
    element_two:  ElementType
    dragon_id_1:  number
    empower_1:    number
    dragon_id_2:  number
    empower_2:    number
    dragon_id_3:  number
    empower_3:    number
    dragon_id_4?: number
    empower_4?:   number
    dragon_id_5?: number
    empower_5?:   number
    dragon_id_6?: number
    empower_6?:   number
    dragon_id_7?: number
    empower_7?:   number
}

export interface Incompatibility {
    id:          number
    element_one: ElementType
    element_two: ElementType
}

export interface BreedingParameter {
    id:    number
    name:  string
    value: number | string
}

export interface Soulmate {
    id:            number
    dragon_id:     number
    parent_1_id:   number
    parent_2_id:   number
    chance:        number
    level_parents: number
}

export interface Chests {
    chests:  Chest[]
    rewards: ChestsReward[]
}

export interface Chest {
    id:               number
    type:             ChestType
    rewards:          number[]
    img_name:         string
    chest_name_key:   string
    type_name_key:    string
    level_tiers:      number[]
    description_key?: string
    default_reward:   number
    pool_size:        number
    gatcha_ids?:      number[]
    instant?:         boolean | AnimatedCanvas
}

export enum AnimatedCanvas {
    Empty = "\u000d",
}

export enum ChestType {
    BrandChest = "BRAND_CHEST",
    Chest = "CHEST",
}

export interface ChestsReward {
    id:         number
    reward:     FluffyReward
    tier_multi: number
    weight:     number
}

export interface FluffyReward {
    resource?:          CostsElement
    buildings?:         number[]
    eggs?:              number[]
    seeds?:             Seed[]
    moves?:             number
    rarity_seeds?:      RewardRaritySeed[]
    skin?:              number[]
    battleground_keys?: BattlegroundKey[]
}

export interface BattlegroundKey {
    battleground_id: number
    key_id:          number
    amount:          number
}

export interface CostsElement {
    g?:         number
    f?:         number
    c?:         number
    ep?:        number
    x?:         number
    el_token?:  number
    pu_token?:  number
    l_token?:   number
    li_token?:  number
    f_token?:   number
    e_token?:   number
    i_token?:   number
    p_token?:   number
    wr_token?:  number
    w_token?:   number
    d_token?:   number
    m_token?:   number
    pr_token?:  number
    kg_token?:  number
    wd_token?:  number
    n_token?:   number
    oph_token?: number
    chest?:     number
    egg?:       number
    seeds?:     Seed[]
    en_runner?: number
}

export interface Collectibles {
    collectibles: CollectiblesCollectible[]
    rewards:      CollectiblesReward[]
}

export interface CollectiblesCollectible {
    id:        number
    item_id:   number
    x:         number
    y:         number
    reward_id: number
    island_id: number
}

export interface CollectiblesReward {
    id:          number
    reward:      TentacledReward[]
    category:    CategoryEnum
    subcategory: number
}

export enum CategoryEnum {
    PremiumIsland = "premium_island",
}

export interface TentacledReward {
    chest?:        number
    c?:            number
    f?:            number
    egg?:          number
    b?:            number
    rarity_seeds?: RewardRaritySeed[]
}

export interface DeityWorldDragons {
    dragons: Dragon[]
}

export interface Dragon {
    id:                           number
    name:                         string
    name_tid:                     string
    first_name:                   string
    second_name:                  string
    group_type:                   DragonGroupType
    order:                        number
    level:                        number
    attributes:                   AttributeElement[]
    production_per_hour:          ProductionPerHour
    summon_enabled:               number
    summon_min_level:             number
    summon_crystal_cost:          { [key: string]: number }
    summon_period:                number
    fusion_dragon_cost:           { [key: string]: number }
    fusion_dragon_gem_conversion: { [key: string]: number }
    fusion_crystal_cost:          { [key: string]: number }
    fusion_xp_gain:               number
    fusion_next_id:               number
    breeding_base_chance:         number
    breeding_added_chance:        number
    store_price:                  number
    img_name:                     string
    img_name_mobile:              string
    img_name_android:             string
    summon_asset:                 string
    summon_canvas_asset:          string
    fly:                          number
    in_store:                     number
    description:                  string
    description_tid:              string
}

export enum AttributeElement {
    An = "an",
    BT = "bt",
    Ch = "ch",
    D = "d",
    DR = "dr",
    E = "e",
    El = "el",
    F = "f",
    HP = "hp",
    I = "i",
    Li = "li",
    M = "m",
    Mg = "mg",
    P = "p",
    So = "so",
    W = "w",
}

export enum DragonGroupType {
    Dwdragon = "DWDRAGON",
}

export interface ProductionPerHour {
    p: number
}

export interface DragonBook {
    collection_numbers: { [key: string]: number }[]
    badges_config:      ElitePass[]
}

export interface DragonCollections {
    collections: Collection[]
    parameters:  DragonCollectionsParameter[]
    rewards:     DragonCollectionsReward[]
}

export interface Collection {
    id:                       number
    tid_name:                 string
    dragons:                  number[]
    num_dragons:              number
    order:                    number
    is_new:                   number
    reward:                   StickyReward | string
    reward_grade0:            number[]
    image:                    CustomForeground
    custom_background:        CustomBackground
    canvas_image:             string
    canvas_bg:                CanvasBg
    custom_foreground?:       CustomForeground
    step_background?:         CustomForeground[]
    unknown_step_background?: CustomForeground[]
    icon?:                    CustomForeground
    tid_family_name?:         string
    availability?:            BattlePassAvailability | number
}

export enum CanvasBg {
    GrColectHrV1PNG = "gr-colect-hr_v1.png",
    GrColectRegularV1PNG = "gr-colect-regular_v1.png",
    GrColectVipV1PNG = "gr-colect-vip_v1.png",
}

export interface CustomBackground {
    local?:  Local
    remote?: string
}

export enum Local {
    UIGraphicsLablesICDragonSkinBadgePNG = "/ui/graphics/lables/ic-dragon-skin-badge.png",
    UIRetakeGraphicsDragonBookGrColectHrPNG = "UIRetake/Graphics/DragonBook/gr-colect-hr.png",
    UIRetakeGraphicsDragonBookGrColectRegularPNG = "UIRetake/Graphics/DragonBook/gr-colect-regular.png",
    UIRetakeGraphicsDragonBookGrColectVipPNG = "UIRetake/Graphics/DragonBook/gr-colect-vip.png",
}

export interface CustomForeground {
    remote: string
}

export interface StickyReward {
    egg?:                       number
    c?:                         number
    g?:                         number
    f?:                         number
    x?:                         number
    b?:                         number
    d_token?:                   number
    skin?:                      number
    dcp?:                       number
    "album_pack_aces.generic"?: number
}

export interface DragonCollectionsParameter {
    id:    number
    name:  string
    value: number[] | boolean | ValueClass
}

export interface DragonCollectionsReward {
    id:     number
    reward: StickyReward
}

export interface DragonMastery {
    goals:               DragonMasteryGoal[]
    collectible_actions: CollectibleAction[]
    loops:               Loop[]
    parameters:          DragonMasteryParameter[]
    rewards:             DragonMasteryReward[]
    rewards_config:      DragonMasteryRewardsConfig[]
    rewards_tiers:       RewardsTier[]
}

export interface DragonMasteryGoal {
    id:                   number
    collectible_actions:  number[]
    rewards:              number
    master_points_earned: number
    next_in_chain:        number
    title_tid:            TitleTid
    desc_tid:             DescTid
    task_type:            TaskType
    task_increase:        TaskIncrease
}

export enum DescTid {
    TidDmGoalDesc1 = "tid_dm_goal_desc_1",
}

export enum TaskIncrease {
    Mid = "mid",
}

export enum TaskType {
    Breeding = "breeding",
    Volume = "volume",
}

export enum TitleTid {
    TidDmGoalTitle1 = "tid_dm_goal_title_1",
}

export interface Loop {
    id:                number
    loop:              number
    task_requirements: TaskRequirements
    point_increase:    number
}

export interface TaskRequirements {
    low:  number
    mid:  number
    high: number
}

export interface DragonMasteryParameter {
    id:    number
    name:  string
    value: Array<DifficultyEnum | number> | boolean | ValueClass | number | number
}

export enum DifficultyEnum {
    Easy = "easy",
    Hard = "hard",
    Impossible = "impossible",
    Normal = "normal",
}

export interface DragonMasteryReward {
    id:      number
    reward:  RewardsArrayElement[]
    type_id: number
}

export interface RewardsArrayElement {
    chest?: number
    egg?:   number
}

export interface DragonMasteryRewardsConfig {
    id:                      number
    background:              string
    title_tid:               string
    title_show_tid:          string
    description_tid:         string
    description_show_tid:    string
    button_tid:              string
    button_claim_double_tid: string
    animated_dragon?:        boolean
    adult_dragon?:           boolean
}

export interface DragonSkins {
    dragon_skins:                    DragonSkin[]
    items_units_attribute_modifiers: ItemsUnitsAttributeModifier[]
    parameters:                      BattlesConfigElement[]
    skin_ui:                         SkinUI[]
}

export interface DragonSkin {
    id:                                   number
    dragon_id:                            number
    img_name_mobile:                      string
    spritesheet_id_canvas?:               string
    img_name_canvas?:                     string
    skin_description_tid:                 string
    skin_name_tid:                        string
    skin_locked_description_tid:          string
    achievement?:                         Achievement
    items_units_attribute_modifiers_ids?: number[]
    skin_ui_id:                           number
    cost?:                                CostElement
    start_ts?:                            number
}

export interface Achievement {
    type: AchievementType
    goal: number
}

export enum AchievementType {
    BreedingByType = "breeding_by_type",
    DragonLevelUp = "dragon_level_up",
}

export interface CostElement {
    c: number
}

export interface ItemsUnitsAttributeModifier {
    id:               number
    behaviour:        Behaviour
    attribute:        ItemsUnitsAttributeModifierAttribute
    value:            number[] | number
    only_if_equipped: boolean
    index?:           number
}

export enum ItemsUnitsAttributeModifierAttribute {
    Attacks = "attacks",
    BackgroundVfx = "background_vfx",
    BaseAttack = "base_attack",
    BaseLife = "base_life",
    ForegroundVfx = "foreground_vfx",
    PassiveSkills = "passive_skills",
    PostSkills = "post_skills",
    Speed = "speed",
    TrainableAttacks = "trainable_attacks",
}

export enum Behaviour {
    Multiply = "MULTIPLY",
    Replace = "REPLACE",
    ReplaceByIndex = "REPLACE_BY_INDEX",
}

export interface BattlesConfigElement {
    id:    number
    name:  string
    value: ValueClass | number | number
}

export interface SkinUI {
    id:             number
    frame_color:    number[]
    icon_asset:     CustomForeground
    type_tid:       string
    portrait_asset: CustomBackground
}

export interface DragonTournaments {
    tournaments:    Tournament[]
    matches:        Match[]
    parameters:     DragonMasteryParameter[]
    difficulties:   DifficultyElement[]
    categories:     CategoryElement[]
    rewards:        DragonTournamentsReward[]
    rewards_config: BattlePassRewardsConfig[]
    rewards_tiers:  RewardsTier[]
}

export interface CategoryElement {
    id:           number
    name:         string
    tid:          string
    priority:     number
    ui_asset:     string
    layout:       string
    unlock_level: number
    show_level:   number
}

export interface DifficultyElement {
    id:                  number
    base_strength_range: number[]
    easy_range:          number[]
    normal_range:        number[]
    hard_range:          number[]
    impossible_range:    number[]
}

export interface Match {
    id:                number
    enemy1:            Enemy1Class
    enemy2:            Enemy1Class
    enemy3:            Enemy1Class
    requirements1:     Requirements1
    requirements2:     Requirements
    requirements3:     Requirements
    battle_cooldown:   number
    speedup_cost_hour: number
    reward:            MatchReward
    rewards_id:        number
}

export interface Enemy1Class {
    dragonId:     number | string
    staticLevel?: number
    grade?:       number
    level?:       number
}

export interface Requirements1 {
    level?:          number
    elements?:       ElementType[]
    rarity?:         Rarity
    dragonId?:       number | string
    noRequirements?: boolean
    staticLevel?:    number
}

export interface Requirements {
    level?:          number
    rarity?:         Rarity
    elements?:       ElementType[]
    dragonId?:       number
    noRequirements?: boolean
}

export interface MatchReward {
    x?:                         number
    egg?:                       number
    chest?:                     number
    elp?:                       number
    ep?:                        number
    f?:                         number
    trade_tickets?:             TradeTicket[]
    en_runner?:                 number
    c?:                         number
    seeds?:                     Seed[]
    "rank_up_coin.mythical"?:   number
    rarity_seeds?:              RewardRaritySeed[]
    skin?:                      number
    n_token?:                   number
    d_token?:                   number
    "rank_up_coin.heroic"?:     number
    b?:                         number[] | number
    moves?:                     number
    pr_token?:                  number
    "album_pack.s"?:            number
    "album_pack.m"?:            number
    "album_pack.l"?:            number
    "album_pack.xl"?:           number
    l_token?:                   number
    g?:                         number
    "album_pack_aces.2"?:       number
    "album_pack_aces.4"?:       number
    wr_token?:                  number
    e_token?:                   number
    "album_pack_aces.1"?:       number
    "album_pack_aces.3"?:       number
    "album_pack_aces.generic"?: number
    "rank_up_coin.legendary"?:  number
    p_token?:                   number
    pu_token?:                  number
    "album_pack.temp"?:         number
    w_token?:                   number
    keys?:                      number
    wd_token?:                  number
    el_token?:                  number
    m_token?:                   number
    li_token?:                  number
    "rank_up_coin.common"?:     number
    "rank_up_coin.rare"?:       number
    "rank_up_coin.very_rare"?:  number
    "rank_up_coin.epic"?:       number
    i_token?:                   number
    perks?:                     RewardPerk[]
    "album_pack_aces.5"?:       number
}

export interface DragonTournamentsReward {
    id:      number
    reward:  MatchReward[]
    type_id: number
}

export interface Tournament {
    id:                     number
    name_key:               string
    matches:                number[]
    difficulty:             DifficultyEnum
    order:                  number
    mobile_background:      string
    canvas_background?:     string
    allow_island_tutorial?: number
    show_reward_button:     number
    multiplier:             number
    min_level:              number
    ui_asset:               UIAsset
    category_id:            number
    availability?:          TimerIntervalElement
}

export interface TimerIntervalElement {
    from: number
    to:   number
}

export enum UIAsset {
    EventTournaments = "event_tournaments",
    PermanentTournaments = "permanent_tournaments",
}

export interface DragonWars {
    battles_config: BattlesConfigElement[]
}

export interface Dragonarium {
    config: ConfigElement[]
    prices: DragonariumPrice[]
}

export interface ConfigElement {
    free_slots: number
    max_slots:  number
}

export interface DragonariumPrice {
    slot:  number
    price: CostElement
}

export interface EventIsland {
    islands:    EventIslandIsland[]
    parameters: EventIslandParameter[]
}

export interface EventIslandIsland {
    id:                        number
    building_id:               number
    mobile_building_position:  number[]
    news_to_display_id:        number[]
    canvas_news_to_display_id: number[]
    availability:              TimerIntervalElement
    timer_interval:            TimerIntervalElement[]
    timer_position_mobile:     number[]
    timer_scale_mobile:        number
    timer_position_canvas:     number[]
    timer_scale_canvas:        number
    min_level:                 number
    active_platforms:          ValueClass
    canvas_building_position?: number[]
}

export interface EventIslandParameter {
    id:    number
    name:  string
    value: ValueClass
}

export interface FarmCrops {
    farm_crops: FarmCrop[]
}

export interface FarmCrop {
    id:                 number
    seconds:            number
    price:              MultipleSellPriceElement
    values:             number
    xp:                 number
    order:              number
    alliance_available: number
    icon:               CustomForeground
    image:              CustomForeground
    regrow_image:       CustomForeground
    tid_name:           string
    unlock_building_id: number
    farm_level:         number
    available:          number
}

export interface MultipleSellPriceElement {
    g?: number
}

export interface FogIsland {
    islands:    FogIslandIsland[]
    squares:    FogIslandSquare[]
    currencies: Currency[]
    rewards:    FogIslandReward[]
    actions:    Action[]
    hints:      Hint[]
    parameters: FogIslandParameter[]
}

export interface Action {
    id:                number
    type:              ActionType
    tid_name:          TidName
    image:             Image
    pool_percent:      number
    max_points:        number
    extra_parameters?: ExtraParameters
}

export interface ExtraParameters {
    cooldown?:          number
    max_control_level?: number
    max_production?:    number
    max_level?:         number
    max_time?:          number
}

export enum Image {
    ICInfoActionBreedPNG = "ic-info-action-breed.png",
    ICInfoActionCollectFoodPNG = "ic-info-action-collect-food.png",
    ICInfoActionCollectGoldPNG = "ic-info-action-collect-gold.png",
    ICInfoActionFeedPNG = "ic-info-action-feed.png",
    ICInfoActionHatch2ElPNG = "ic-info-action-hatch-2-el.png",
    ICInfoActionHatch3ElPNG = "ic-info-action-hatch-3-el.png",
    ICInfoActionHatchLegendaryPNG = "ic-info-action-hatch-legendary.png",
    ICInfoActionPvpPNG = "ic-info-action-pvp.png",
}

export enum TidName {
    TidGridIslandsBreedDragons = "tid_grid_islands_breed_dragons",
    TidGridIslandsCollectFarmFood = "tid_grid_islands_collect_farm_food",
    TidGridIslandsCollectGold = "tid_grid_islands_collect_gold",
    TidGridIslandsFeedDragons = "tid_grid_islands_feed_dragons",
    TidGridIslandsHatching2_El = "tid_grid_islands_hatching_2_el",
    TidGridIslandsHatching3_El = "tid_grid_islands_hatching_3_el",
    TidGridIslandsHatchingLegendary = "tid_grid_islands_hatching_legendary",
    TidGridIslandsPvpBattle = "tid_grid_islands_pvp_battle",
}

export enum ActionType {
    BreedDragons = "BREED_DRAGONS",
    CollectFarmFood = "COLLECT_FARM_FOOD",
    CollectGold = "COLLECT_GOLD",
    CollectGreenhouseFood = "COLLECT_GREENHOUSE_FOOD",
    FeedDragons = "FEED_DRAGONS",
    Hatch2 = "HATCH_2",
    Hatch3 = "HATCH_3",
    HatchLegend = "HATCH_LEGEND",
    Pvp = "PVP",
}

export interface Currency {
    id:       number
    tid_name: string
    actions:  number[]
}

export interface Hint {
    id:               number
    type:             string
    tid_name:         string
    icon:             string
    price:            CostClass
    duration_time:    number
    area:             number
    square_selection: number
    increment_price:  number
    tutorial_id:      number
}

export interface CostClass {
    ep: number
}

export interface FogIslandIsland {
    id:                         number
    analytics_id:               string
    tid_name:                   string
    tutorial_id:                number
    tutorial_claimable_cell_id: number
    board_size:                 number[]
    cell_size?:                 number[]
    origin_offset?:             number[]
    initial_square_id:          number
    pool_points:                number
    pool_time:                  number
    initial_points:             number
    start_ts:                   number
    end_ts:                     number
    currency_id:                number
    min_level:                  number
    building_id:                number
    building_position:          number[]
    zip_file:                   string
    sound_tag:                  string
    canvas_assets_url:          string
    background_plist:           string
    foregrounds_plists:         any[]
    particles_position?:        number[]
    tutorial_claim_cells?:      number[]
    ui_configuration?:          UIConfiguration
    active_platforms?:          PurpleActivePlatforms
    episodes?:                  number[]
    backgrounds?:               number[]
    foregrounds?:               any[]
}

export interface PurpleActivePlatforms {
    ios:     number
    canvas:  string
    android: number
    amazon:  number
    windows: number
}

export interface UIConfiguration {
    cell_contents_config:            CellContentsConfig
    cell_highlight_asset:            string
    cell_highlight_index:            number
    cell_size:                       number[]
    cells_label_config:              CellsLabelConfig
    dragon_evolution:                number
    grey_scale_blocked_cells:        boolean
    island_title_config:             IslandTitleConfig
    layers_z_indexes:                LayersZIndexes
    origin_offset:                   number[]
    tutorial_scroll_duration:        number
    tutorial_scroll_duration_base:   number
    tutorial_scroll_duration_factor: number
}

export interface CellContentsConfig {
    blocked_dragon_position_offset:   number[]
    blocked_opacity:                  number
    claimable_dragon_position_offset: number[]
    default_dragon_scale:             number[]
    dragon_scale:                     number[]
    dragon_scale_by_id:               { [key: string]: number[] }
    icon_position_offset:             number[]
    label_position_offset:            number[]
}

export interface CellsLabelConfig {
    claimable:   Claimable
    unclaimable: Claimable
}

export interface Claimable {
    color:        number[]
    size:         number
    stroke_color: number[]
    stroke_width: number
}

export interface IslandTitleConfig {
    down_color:         number[]
    size:               number
    small_stroke_color: number[]
    small_stroke_width: number
    upper_color:        number[]
}

export interface LayersZIndexes {
    additional_layer: number
    cell_backgrounds: number
    cell_contents:    number
    decorations:      number
    player_token:     number
    walls:            number
}

export interface FogIslandParameter {
    id:    number
    name:  string
    value: number[] | ValueClass | number | number
}

export interface FogIslandReward {
    id:              number
    type:            RewardType
    island_id:       number
    reward_id:       number
    last_piece_cost: number
    num_pieces:      number
    show_new_badge:  number
}

export enum RewardType {
    Chest = "CHEST",
    DragonPiece = "DRAGON_PIECE",
    None = "NONE",
    Step = "STEP",
}

export interface FogIslandSquare {
    id:             number
    type:           RewardType
    type_id?:       number
    highlight:      number
    x:              number
    y:              number
    island_id:      number
    claim_cost:     number
    come_back_cost: number
    reward_id?:     number
}

export interface GridIsland {
    islands:     FogIslandIsland[]
    episodes:    Episode[]
    squares:     GridIslandSquare[]
    decorations: Decoration[]
    encounters:  Encounter[]
    enemies:     GridIslandEnemy[]
    currencies:  Currency[]
    actions:     Action[]
    parameters:  FogIslandParameter[]
}

export interface Decoration {
    id:         number
    file:       File
    x:          number
    y:          number
    island_id:  number
    episode_id: number
}

export enum File {
    The1X1Slot1 = "1x1_slot1",
    The1X1Slot2 = "1x1_slot2",
}

export interface Encounter {
    id:                      number
    enemies:                 number[]
    speed_up_price_per_hour: number
    fight_background?:       string
    fight_background_id:     FightBackgroundID
}

export enum FightBackgroundID {
    BgBattleBackgroundGiTreasurehunt = "bg_battle_background_gi_treasurehunt",
    BgBattleBackgroundHrFallFriday = "bg_battle_background_hr_fall_friday",
    BgBattleBackgroundHrNewBeginnings = "bg_battle_background_hr_new_beginnings",
    BgBattleBackgroundHrSaintvalentine26 = "bg_battle_background_hr_saintvalentine_26",
    BgBattleBackgroundMiCarnival = "bg_battle_background_mi_carnival",
    BgBattleBackgroundMiDragonmysteries = "bg_battle_background_mi_dragonmysteries",
    BgBattleBackgroundMiMidsummerMisery = "bg_battle_background_mi_midsummer_misery",
    BgBattleBackgroundMiMysteryInParadise = "bg_battle_background_mi_mystery_in_paradise",
    BgBattleBackgroundMiRebornRetold = "bg_battle_background_mi_reborn_retold",
    BgBattleBackgroundMiValentinesVault = "bg_battle_background_mi_valentines_vault",
    BgBattleBackgroundMr101_MythicalElixir = "bg_battle_background_mr_101_mythical_elixir",
    BgBattleBackgroundMr102_MythicalCryogenic = "bg_battle_background_mr_102_mythical_cryogenic",
    BgBattleBackgroundMr103_MythicalDracarticpredator = "bg_battle_background_mr_103_mythical_dracarticpredator",
    BgBattleBackgroundMr104_MythicalUnfaethful = "bg_battle_background_mr_104_mythical_unfaethful",
}

export interface GridIslandEnemy {
    id:                 number
    dragon_ids:         number[]
    handicaps:          number[]
    view_type:          ViewTypeEnum
    elements_view_type: any[]
    cooldown:           number
}

export enum ViewTypeEnum {
    Chest = "CHEST",
    Dragon = "DRAGON",
    None = "NONE",
    Resource = "RESOURCE",
}

export interface Episode {
    id:                       number
    island_id:                number
    board_size:               number[]
    initial_square_id:        number
    final_square_id:          number
    tid_title:                string
    mobile_begin_tutorial_id: number
    mobile_end_tutorial_id:   number
    canvas_background:        CanvasBackground
    backgrounds:              string[]
    background_plist:         string
    foregrounds:              any[]
    foregrounds_plists:       any[]
    squares:                  number[]
}

export enum CanvasBackground {
    F = "f",
    G = "g",
    O = "o",
    S = "s",
    W = "w",
    X = "x",
}

export interface GridIslandSquare {
    id:           number
    type:         ViewTypeEnum
    type_id?:     number
    highlight:    number
    x:            number
    y:            number
    island_id:    number
    episode_id:   number
    claim_cost:   number
    wall?:        Wall
    wall_suffix?: WallSuffix
    resource?:    SquareResource
}

export interface SquareResource {
    "pet_food_pack.s"?: number
    "pet_food_pack.m"?: number
    "pet_food_pack.l"?: number
}

export enum Wall {
    H = "H",
    HV = "H+V",
    V = "V",
}

export enum WallSuffix {
    Rock = "rock",
}

export interface HabitatTokens {
    multipliers: Multiplier[]
}

export interface Multiplier {
    id:                number
    applicable_tokens: number
    multiplier:        number
}

export interface HelpView {
    id:                  number
    assets_name?:        string
    popup_type:          PopupType
    size:                PopupType
    title_localized_key: string
    slides:              HelpViewSlide[]
}

export enum PopupType {
    Default = "Default",
    DefaultCustomSlides = "DefaultCustomSlides",
    HelpViewDeityWorld = "/HelpView/DeityWorld",
}

export interface HelpViewSlide {
    header_localized_key?:          string
    content_localized_key?:         ContentLocalizedKey
    image_url?:                     string
    custom_title_localized_key?:    string
    slide_type:                     string
    image_path?:                    string
    custom_title_localized_tidkey?: string
    animatedAssetName?:             string
    animationName?:                 AnimationNameEnum
}

export enum AnimationNameEnum {
    Anim1 = "anim1",
}

export enum ContentLocalizedKey {
    Empty = "",
    TidDBCollectionsHelpScreen1 = "tid_db_collections_help_screen_1",
    TidDBCollectionsHelpScreen2 = "tid_db_collections_help_screen_2",
    TidDBMasteryHelpScreen1 = "tid_db_mastery_help_screen_1",
    TidPiggyBankBestDealMessage = "tid_piggy_bank_best_deal_message",
}

export interface HeroicRaces {
    islands:        HeroicRacesIsland[]
    rewards:        HeroicRacesReward[]
    laps:           Lap[]
    nodes:          HeroicRacesNode[]
    nodes_position: NodesPosition[]
    missions:       HeroicRacesMission[]
    encounters:     Encounter[]
    enemies:        HeroicRacesEnemy[]
    parameters:     HeroicRacesParameter[]
    spin_rewards:   SpinReward[]
    lap_rewards:    LapRewardElement[]
}

export interface HeroicRacesEnemy {
    id:                 number
    dragon_ids:         Array<number | string>
    handicaps:          number[]
    view_type:          ViewTypeEnum
    elements_view_type: any[]
    cooldown:           number
}

export interface HeroicRacesIsland {
    id:                                 number
    active_platforms:                   ValueClass
    min_level:                          number
    start_ts:                           number
    end_ts:                             number
    end_ts_threshold:                   number
    secs_before_cache_freeze:           number
    min_qualifying_laps:                number
    laps:                               number[]
    building_id:                        number
    building_id_96:                     number
    building_claim_id:                  number
    building_free_spin_id:              number
    building_position:                  number[]
    dragon_building_position:           number[]
    dragon_building_scale:              number
    zip_file:                           string
    canvas_assets_url:                  string
    island_title_tid:                   IslandTitleTid
    sound_tag:                          PurpleSoundTag
    level_tiers:                        number[]
    rewards:                            number[]
    dragon_race_id:                     number
    dragon_race_scale:                  number
    dragon_race_offset:                 number[]
    dragon_reward_scale:                number
    dragon_reward_offset:               number[]
    help_id:                            number
    dragon_is_new:                      number
    spinner_enabled:                    number
    spin_rewards:                       number[]
    spin_cooldown:                      number
    buy_spin_price:                     number
    notification_anim_remaining_time:   number
    notification_anim_per_day:          number
    notification_anim_duration:         number
    lap_completed_to_hide_notification: number
}

export enum IslandTitleTid {
    TidHeroicRaceTitle = "tid_heroic_race_title",
    TidHrMythicalraceName = "tid_hr_mythicalrace_name",
}

export enum PurpleSoundTag {
    Heaven = "HEAVEN",
}

export interface LapRewardElement {
    id:          number
    lap_rewards: { [key: string]: LapRewardValue }
}

export interface LapRewardValue {
    id:                   number
    island_id:            number
    claim_popup_id:       number
    lap:                  number
    wait_until_race_ends: number
    reward:               LapRewardReward[]
    reward_cell_type:     RewardCellType
    limited_time?:        number
    limited_reward?:      LimitedReward[]
    multiplier?:          number
    omit_if_winner?:      number
}

export interface LimitedReward {
    chest?:               number
    "album_pack_aces.1"?: number
    b?:                   number[]
    trade_tickets?:       TradeTicket[]
    "pet_food_pack.l"?:   number
    "album_pack_aces.5"?: number
    seeds?:               Seed[]
    rarity_seeds?:        RewardRaritySeed[]
}

export interface LapRewardReward {
    "rank_up_coin.mythical"?:   number
    "album_pack.s"?:            number
    "pet_food_pack.s"?:         number
    b?:                         number[]
    chest?:                     number
    "album_pack_aces.1"?:       number
    "album_pack.m"?:            number
    "album_pack.l"?:            number
    "album_pack_aces.2"?:       number
    "pet_food_pack.m"?:         number
    "album_pack.xl"?:           number
    "album_pack_aces.3"?:       number
    "album_pack_aces.generic"?: number
    trade_tickets?:             TradeTicket[]
    "pet_food_pack.l"?:         number
    "album_pack_aces.4"?:       number
    egg?:                       number[] | number
    seeds?:                     Seed[]
    "album_pack_aces.5"?:       number
    skin?:                      number
    rarity_seeds?:              RewardRaritySeed[]
}

export enum RewardCellType {
    Big = "big",
    Medium = "medium",
    Small = "small",
}

export interface Lap {
    id:    number
    nodes: number[]
}

export interface HeroicRacesMission {
    id:                      number
    type:                    MissionType
    goal_points:             number
    price:                   number
    price_increment:         number
    pool_size:               number
    spawn_time:              number
    collect_chance:          number
    collect_chance_modifier: number
    encounter?:              number
    energy?:                 number
}

export enum MissionType {
    Breed = "breed",
    Feed = "feed",
    Fight = "fight",
    Food = "food",
    Gold = "gold",
    Hatch = "hatch",
    Pvp = "pvp",
}

export interface HeroicRacesNode {
    id:               number
    buy_all_discount: number
    missions:         number[]
}

export interface NodesPosition {
    id:        number
    island_id: number
    type:      NodesPositionType
    x:         number
    y:         number
}

export enum NodesPositionType {
    Node = "node",
    Path = "path",
}

export interface HeroicRacesParameter {
    id:    number
    name:  string
    value: number[] | boolean | ValueClass | number | string
}

export interface HeroicRacesReward {
    id:        number
    positions: number[]
    rewards:   IndigoReward[]
}

export interface IndigoReward {
    egg?: number[]
    c?:   number
}

export interface SpinReward {
    id:           number
    type:         SpinRewardType
    value:        number
    analytics_id: string
    weight:       number
    image:        string
}

export enum SpinRewardType {
    ExtraSpin = "extra_spin",
    Mission = "mission",
    MissionPoint = "mission_point",
    Node = "node",
}

export interface Item {
    id:                            number
    name:                          string
    group_type:                    ItemGroupType
    animated?:                     number
    build_time?:                   number
    mobile_version:                number
    android_version:               number
    show_on_mobile?:               number
    type?:                         ItemType
    element_type?:                 ElementType
    xp:                            number
    min_level?:                    number
    costs:                         any[] | CostsElement
    display_order:                 number
    boost_modifier?:               BoostModifierClass | number
    gift_level:                    number
    giftable?:                     number
    cost_unit_cash?:               number
    collect?:                      number
    collect_xp?:                   number
    category_id?:                  number
    subcategory_id?:               number
    building_limit_same_id?:       number
    in_store:                      number
    width?:                        number
    height?:                       number
    new_item:                      number
    img_name?:                     string
    img_name_mobile?:              string
    img_name_android?:             string
    activation?:                   number
    upgrades_to?:                  number
    collect_type?:                 CanvasBackground | number
    velocity?:                     number
    description?:                  string
    properties?:                   Properties
    building_ownership_id?:        number
    sell_price?:                   any[] | MultipleSellPriceElement
    deco_seg_id?:                  number
    inventory_ids?:                number
    elements?:                     ElementType[]
    multiple_costs?:               MultipleCost[]
    costs_array?:                  CostElement[]
    sell_price_array?:             MultipleSellPriceElement[]
    multiple_sell_prices?:         MultipleSellPriceElement[]
    scale?:                        number
    animated_canvas?:              AnimatedCanvas
    speed?:                        number
    hatching_time?:                number
    breeding_time?:                number
    lvl?:                          number
    starting_coins?:               number
    coins_added?:                  number
    can_breed?:                    number
    breedable?:                    number
    deity_breeding?:               number
    difficulty?:                   number
    category?:                     number
    rarity?:                       number
    dragon_rarity?:                Rarity
    attacks?:                      number[]
    attributes?:                   ElementType[]
    trainable_attacks?:            number[]
    upgrade_levels?:               number[]
    background_vfx?:               number[]
    foreground_vfx?:               number[]
    in_store_min_level?:           number
    flying_level?:                 number
    swim?:                         number
    seeds_to_summon?:              number
    hatching_time_10?:             number
    breeding_time_40?:             number
    breeding_time_10?:             number
    hatching_time_40?:             number
    base_attack?:                  number
    base_life?:                    number
    in_store_ch?:                  number
    costs_ch_1?:                   CostsCh
    costs_ch_2?:                   CostsCh
    hatching_time_reawaken?:       number
    breeding_time_reawaken?:       number
    hatching_time_ngu_aggressive?: number
    breeding_time_ngu_aggressive?: number
    hatching_time_ngu_soft?:       number
    breeding_time_ngu_soft?:       number
    dragon_ownership_id?:          number
    tags?:                         Tag[]
    speed_override?:               number
    passive_skills?:               number[]
    post_skills?:                  number[]
}

export interface BoostModifierClass {
    p?:  number
    e?:  number
    f?:  number
    i?:  number
    el?: number
    w?:  number
    d?:  number
    l?:  number
    m?:  number
    pu?: number
    li?: number
    pr?: number
    wd?: number
    wr?: number
}

export interface CostsCh {
    g?: number
    c?: number
}

export enum ItemGroupType {
    AlliancePortal = "ALLIANCE_PORTAL",
    AllianceRace = "ALLIANCE_RACE",
    Atrezzo = "ATREZZO",
    Booster = "BOOSTER",
    BrandDeco = "BRAND_DECO",
    BreedingIsland = "BREEDING_ISLAND",
    Building = "BUILDING",
    Burrow = "BURROW",
    Chestcontainer = "CHESTCONTAINER",
    Collectible = "COLLECTIBLE",
    Collectisland = "COLLECTISLAND",
    CollectorsHunt = "COLLECTORS_HUNT",
    Crosspromotion = "CROSSPROMOTION",
    CumCalendarIsland = "CUM_CALENDAR_ISLAND",
    Deco = "DECO",
    Deusisland = "DEUSISLAND",
    Dragon = "DRAGON",
    DragonCinema = "DRAGON_CINEMA",
    DragonObstacle = "DRAGON_OBSTACLE",
    DragonPets = "DRAGON_PETS",
    DragonTrails = "DRAGON_TRAILS",
    DragonTv = "DRAGON_TV",
    Dragonarium = "DRAGONARIUM",
    Dwportal = "DWPORTAL",
    EventIsland = "EVENT_ISLAND",
    Farm = "FARM",
    FogIsland = "FOG_ISLAND",
    GdTower = "GD_TOWER",
    Greenhouse = "GREENHOUSE",
    GridIsland = "GRID_ISLAND",
    Habitat = "HABITAT",
    HalloweenIsland = "HALLOWEEN_ISLAND",
    HeroicRace = "HEROIC_RACE",
    Kindergarten = "KINDERGARTEN",
    Land = "LAND",
    Lostitem = "LOSTITEM",
    MageShrine = "MAGE_SHRINE",
    MazeIsland = "MAZE_ISLAND",
    MemeGenerator = "MEME_GENERATOR",
    MisteryEgg = "MISTERY_EGG",
    ORBHabitat = "ORB_HABITAT",
    Obstacle = "OBSTACLE",
    Offerwall = "OFFERWALL",
    Popup = "POPUP",
    ProgressiveIsland = "PROGRESSIVE_ISLAND",
    Promo = "PROMO",
    Promoisland = "PROMOISLAND",
    PuzzleIsland = "PUZZLE_ISLAND",
    RunnerIsland = "RUNNER_ISLAND",
    SocialBuilding = "SOCIAL BUILDING",
    TeaserIsland = "TEASER_ISLAND",
    TowerIsland = "TOWER_ISLAND",
    TraderIsland = "TRADER_ISLAND",
    TreeOfLife = "TREE_OF_LIFE",
    Unit = "UNIT",
    WizardsCave = "WIZARDS_CAVE",
}

export interface MultipleCost {
    g?:        number
    c?:        number
    d_token?:  number
    pu_token?: number
}

export interface Properties {
    capacity?:          number
    incubator?:         number
    bulldozable?:       number
    range?:             number
    max_dragon_level?:  number
    required_items?:    number[]
    multiCollectable?:  number
    friend_assistable?: number
    upgrade_from?:      number
    workingBuilding?:   number
    breeding?:          number
    breeding_factor?:   number
    max_gold?:          number
    habitat?:           number
    demolishable?:      number
    lost_item?:         number
    floating?:          number
    crosspromotion?:    number
    habitat_pure?:      number
    fixed_position?:    number[]
    is_fixed?:          number
    ft_flying?:         number
}

export enum Tag {
    Apocalypse = "Apocalypse",
    Armor = "Armor",
    Astro = "Astro",
    Berserker = "Berserker",
    CritCrew = "CritCrew",
    Critcrew = "Critcrew",
    Divinepass = "Divinepass",
    Doom = "Doom",
    Dual = "Dual",
    Eternal = "Eternal",
    Evader = "Evader",
    HasSkill = "hasSkill",
    Karma = "Karma",
    Mythical = "Mythical",
    Originals = "Originals",
    Plasma = "Plasma",
    Silencer = "Silencer",
    Spikes = "Spikes",
    Strategist = "Strategist",
    Titan = "Titan",
    TitanVamp = "TitanVamp",
    Twd = "TWD",
    Vampire = "Vampire",
    Vip = "VIP",
    Youtuber = "Youtuber",
}

export enum ItemType {
    B = "b",
    L = "l",
    U = "u",
}

export interface Level {
    id:          number
    level:       number
    name:        string
    xp_required: number
    reward:      CostElement
    xp_needed:   number
    offer_item:  OfferItem
}

export interface OfferItem {
    id:   number
    cost: CostElement
}

export interface LiveopsChallenges {
    parameters:     LiveopsChallengesParameter[]
    challenges:     Challenge[]
    goals:          LiveopsChallengesGoal[]
    collectibles:   LiveopsChallengesCollectible[]
    rewards:        LiveopsChallengesReward[]
    rewards_config: BattlePassRewardsConfig[]
    rewards_tiers:  RewardsTier[]
}

export interface Challenge {
    id:               number
    availability:     IapDiscountUidAvailability[]
    goals:            number[]
    title_tid:        string
    hud_icon_tid:     string
    background:       Background
    displayed_reward: number
    title_color?:     string
    awning_color?:    string
    icon_color?:      string
    ribbon_color?:    string
    user_min_level:   number
    weight?:          number
}

export interface LiveopsChallengesCollectible {
    id:               number
    collectible_type: CollectibleType
    item_id:          number
    amount:           number
}

export enum CollectibleType {
    Dragon = "DRAGON",
    Item = "ITEM",
}

export interface LiveopsChallengesGoal {
    id:             number
    collectibles:   number[]
    rewards:        number
    claim_limit:    number
    title_tid:      string
    next_in_chain?: number
}

export interface LiveopsChallengesParameter {
    id:    number
    name:  string
    value: ValueClass | number | string
}

export interface LiveopsChallengesReward {
    id:      number
    reward:  IndecentReward[]
    type_id: number
}

export interface IndecentReward {
    b?:                        number[] | number
    chest?:                    number
    seeds?:                    Seed[]
    egg?:                      number
    keys?:                     number
    g?:                        number
    seggs?:                    Segg[]
    rarity_seeds?:             RewardRaritySeed[]
    c?:                        number
    f?:                        number
    trade_tickets?:            TradeTicket[]
    skin?:                     number
    l_token?:                  number
    d_token?:                  number
    li_token?:                 number
    n_token?:                  number
    wd_token?:                 number
    f_token?:                  number
    p_token?:                  number
    perks?:                    RewardPerk[]
    pr_token?:                 number
    wr_token?:                 number
    el_token?:                 number
    w_token?:                  number
    i_token?:                  number
    m_token?:                  number
    pu_token?:                 number
    kg_token?:                 number
    "rank_up_coin.legendary"?: number
    e_token?:                  number
    "rank_up_coin.very_rare"?: number
    "rank_up_coin.heroic"?:    number
}

export interface Segg {
    id:    number
    grade: number
    rank:  number
}

export interface MaxDragonLevels {
    max_levels_by_grade: MaxLevelsByGrade[]
}

export interface MaxLevelsByGrade {
    id:             number
    grade:          number
    max_level:      number
    empower_asset?: string
}

export interface MazeIsland {
    islands:        MazeIslandIsland[]
    paths:          Path[]
    nodes:          MazeIslandNode[]
    encounters:     Encounter[]
    enemies:        GridIslandEnemy[]
    happy_hours:    any[]
    actions:        Action[]
    clouds:         Cloud[]
    currencies:     Currency[]
    parameters:     FogIslandParameter[]
    rewards:        MazeIslandReward[]
    rewards_config: DragonMasteryRewardsConfig[]
    rewards_tiers:  RewardsTier[]
}

export interface Cloud {
    id:       number
    position: number[]
}

export interface MazeIslandIsland {
    id:                               number
    tid_name:                         string
    name:                             string
    availability:                     TimerIntervalElement
    paths:                            number[]
    happy_hours:                      any[]
    currency_id:                      number
    pool_size:                        number
    pool_time:                        number
    initial_points:                   number
    clouds:                           any[]
    cloud_radius:                     number
    dragon_radius:                    number
    min_level:                        number
    building_id:                      number
    mobile_tutorial_id:               number
    tutorial_path_id:                 number
    tutorial_initial_camera_position: number[]
    tutorial_initial_zoom:            number
    tutorial_final_zoom:              number
    zip_file:                         string
    mobile_building_position:         number[]
    active_platforms:                 ValueClass
    help_view_id:                     number
    sound_tag:                        string
}

export interface MazeIslandNode {
    id:                   number
    position:             number[]
    cost?:                CostClass
    reward_id?:           number
    reward?:              NodeReward[]
    highlighted?:         boolean
    key?:                 number
    encounter?:           number
    encounter_skip_cost?: CostClass
}

export interface NodeReward {
    g?:                         number
    b?:                         number[] | number
    chest?:                     number
    f?:                         number
    "pet_food_pack.s"?:         number
    "pet_food_pack.l"?:         number
    "pet_food_pack.m"?:         number
    skin?:                      number
    "album_pack.s"?:            number
    "album_pack.m"?:            number
    "album_pack.l"?:            number
    "album_pack.xl"?:           number
    "album_pack_aces.generic"?: number
    "album_pack_aces.2"?:       number
    "album_pack_aces.4"?:       number
    egg?:                       number
}

export interface Path {
    id:                   number
    color:                number[]
    visibility:           number
    dragon_type:          number
    new_badge:            number
    mobile_dragon_scale:  number
    mobile_dragon_offset: number[]
    nodes:                number[]
    availability?:        TimerIntervalElement
}

export interface MazeIslandReward {
    id:                    number
    reward:                NodeReward[]
    type_id:               number
    double_with_video_ad?: number
}

export interface News {
    "0":    The0
    "1":    The1
    "2":    The10
    "3":    The3
    "4":    The4
    "5":    The5
    "6":    The11
    "7":    The10
    "8":    The10
    "9":    The10
    "10":   The10
    "11":   The11
    "12":   The10
    canvas: Canva[]
}

export interface The0 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    filter_category:       null
    hud_button:            The0_HudButton
    id:                    number
    label_text_tid:        null
    label_title_tid:       null
    min_level:             number
    popup_frequency:       string
    popup_type:            string
    priority:              null
    show_on_startup:       number
    slides:                The0_Slide[]
    start_ts:              string
}

export interface The0_HudButton {
    file:            string
    title:           string
    viral_icon_tier: number
}

export interface The0_Slide {
    content_localized_key?:     string
    custom_title_localized_key: string
    forceClose?:                boolean
    header_localized_key:       string
    image_url:                  string
    multiple_buttons:           MultipleButton[]
    times_to_show:              number
    type:                       SlideType
}

export interface MultipleButton {
    animation:          AnimationNameEnum
    animationPlace:     AnimationPlace
    forceClose:         boolean
    glint:              boolean
    key:                Key
    link:               string
    normalizedPosition: NormalizedPosition
    size:               Size
    spineAsset:         SpineAsset
    style:              Style
    linkItemId?:        number | string
}

export enum AnimationPlace {
    Foreground = "Foreground",
}

export enum Key {
    Empty = "",
    TidNewsApocalypsepathButton = "tid_news_apocalypsepath_button",
}

export interface NormalizedPosition {
    x: number
    y: number
}

export interface Size {
    h: number
    w: number
}

export enum SpineAsset {
    Empty = "",
    PointerAnimationV2 = "pointer_animation_v2",
}

export enum Style {
    BlueLarge = "BlueLarge",
    Transparent = "Transparent",
}

export enum SlideType {
    FullImage = "FullImage",
}

export interface The1 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    id:                    number
    min_level:             number
    popup_frequency:       string
    popup_is_critical:     boolean
    popup_type:            string
    show_on_startup:       number
    slides:                The1_Slide[]
    start_ts:              string
}

export interface The1_Slide {
    content_localized_key?:     string
    custom_title_localized_key: string
    header_localized_key?:      string
    image_url:                  string
    link:                       string
    link_button_key:            string
    slide_type:                 string
    slide_type_2:               string
    timer?:                     string
    times_to_show?:             number
}

export interface The10 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    id:                    number
    min_level:             number
    popup_frequency:       string
    popup_type:            string
    show_on_startup:       number
    slides:                The0_Slide[]
    start_ts:              string
}

export interface The11 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    filter_category:       null
    id:                    number
    label_text_tid:        null
    label_title_tid:       null
    min_level:             number
    popup_type:            string
    priority:              null
    show_on_startup:       number
    slides:                The0_Slide[]
    start_ts:              string
}

export interface The3 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    filter_category:       null
    hud_button:            The0_HudButton
    id:                    number
    label_text_tid:        null
    label_title_tid:       null
    min_level:             number
    popup_type:            string
    priority:              null
    show_on_startup:       number
    slides:                The0_Slide[]
    start_ts:              string
}

export interface The4 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    end_ts:                string
    hud_button:            The4_HudButton
    id:                    number
    min_level:             number
    popup_type:            string
    show_on_startup:       number
    slides:                The1_Slide[]
    start_ts:              string
}

export interface The4_HudButton {
    file:  string
    title: string
}

export interface The5 {
    active_platforms:      ValueClass
    allow_island_tutorial: number
    assets_name:           string
    direct_to_shop:        number
    end_ts:                string
    hud_button:            The0_HudButton
    id:                    number
    min_level:             number
    popup_type:            string
    show_on_startup:       number
    slides:                The1_Slide[]
    start_ts:              string
}

export interface Canva {
    id:              number
    assets_name:     string
    start_ts:        number
    end_ts:          number
    min_level:       number
    slides:          The0_Slide[]
    show_on_startup: number
}

export interface Perks {
    abilities:      Ability[]
    parameters:     PerksParameter[]
    perks:          PerksPerk[]
    slots:          Slot[]
    rewards:        PerksReward[]
    rewards_config: DragonMasteryRewardsConfig[]
}

export interface Ability {
    id:         number
    type:       string
    parameters: AbilityParameters
    asset:      CustomForeground
}

export interface AbilityParameters {
    value:           number
    passiveSkillId?: number
}

export interface PerksParameter {
    id:    number
    name:  string
    value: Array<PurpleValue | number> | boolean | FluffyValue | number
}

export interface PurpleValue {
    reward_id:   number
    tutorial_id: number
}

export interface FluffyValue {
    ios?:     number[]
    android?: number[]
    amazon?:  number[]
    canvas?:  number[]
    windows?: number[]
    new?:     number | string
    old?:     number | string
}

export interface PerksPerk {
    id:                    number
    type:                  PerkType
    available_for_dragons: AvailableForDragons
    name_tid:              string
    description_tid:       string
    abilities:             number[]
    max_perks:             MaxPerk[]
    asset:                 CustomForeground
    rarity_level:          number
    destroy_cost:          MultipleSellPriceElement[]
    store_cost:            CostElement[]
    offer_id?:             number
}

export interface AvailableForDragons {
    dragonId?: number
}

export interface MaxPerk {
    rarity: Rarity
    max:    number
}

export enum PerkType {
    Character = "character",
    Combat = "combat",
    SpecificDragonCombat = "specific_dragon_combat",
}

export interface PerksReward {
    id:      number
    reward:  HilariousReward[]
    type_id: number
}

export interface HilariousReward {
    perks: RewardPerk[]
}

export interface Slot {
    id:                    number
    type:                  PerkType
    available_for_dragons: AvailableForDragons
    asset:                 CustomForeground
    order:                 number
    offer_id?:             number
}

export interface PuzzleIsland {
    islands:    PuzzleIslandIsland[]
    symbols:    Symbol[]
    boards:     Board[]
    rewards:    PuzzleIslandReward[]
    missions:   PuzzleIslandMission[]
    parameters: FogIslandParameter[]
}

export interface Board {
    id:    number
    shape: Array<number[]>
}

export interface PuzzleIslandIsland {
    id:                          number
    start_ts:                    number
    end_ts:                      number
    boards:                      number[]
    moves_per_board:             number
    symbols:                     string[]
    top_reward_queue:            number[]
    top_reward_symbols:          string[]
    top_reward_goal_modifier:    number
    middle_reward_queue:         number[]
    middle_reward_symbols:       string[]
    middle_reward_goal_modifier: number
    bottom_reward_queue:         number[]
    bottom_reward_symbols:       string[]
    bottom_reward_goal_modifier: number
    mission_queue1:              number[]
    mission_queue2:              number[]
    mission_queue3:              number[]
    mission_queue4:              number[]
    free_moves_amount:           number
    free_moves_period:           number
    building_id:                 number
    building_position:           number[]
    zip_file:                    string
    vfx_asset:                   string
    canvas_url:                  CanvasBackground
    help_id:                     number
    featured_dragons:            number[]
    featured_rewards:            number[]
    sound_tag:                   string
}

export interface PuzzleIslandMission {
    id:              number
    activity_type:   ActivityType
    moves:           number
    required_amount: number
    loopable:        number
    skip_cost:       CostElement
    specific?:       ElementType[]
}

export enum ActivityType {
    BreedElements = "BREED_ELEMENTS",
    CollectFood = "COLLECT_FOOD",
    CollectGold = "COLLECT_GOLD",
    FeedDragon = "FEED_DRAGON",
    HatchElements = "HATCH_ELEMENTS",
    Leagues = "LEAGUES",
    PvpArenas = "PVP_ARENAS",
    TournamentMatch = "TOURNAMENT_MATCH",
}

export interface PuzzleIslandReward {
    id:              number
    required_pieces: number
    colors:          number
    reward:          AmbitiousReward
    loopable:        number
    new_badge:       number
}

export interface AmbitiousReward {
    chest?:                     number
    rarity_seeds?:              RewardRaritySeed[]
    egg?:                       number
    seeds?:                     Seed[]
    "album_pack.s"?:            number
    "album_pack.l"?:            number
    "album_pack.m"?:            number
    "album_pack_aces.generic"?: number
    "album_pack_aces.1"?:       number
    "album_pack_aces.2"?:       number
}

export interface Symbol {
    id:          number
    symbol_type: string
    effect:      string
    asset_name:  string
    probability: number
}

export interface RunnerIsland {
    islands:           RunnerIslandIsland[]
    sections:          Section[]
    parameters:        RunnerIslandParameter[]
    obstacles:         Obstacle[]
    level_chunks:      RunnerIslandLevelChunk[]
    level_rewards:     LevelReward[]
    missions:          HeroicRacesMission[]
    rewards:           RunnerIslandReward[]
    rewards_config:    DragonMasteryRewardsConfig[]
    rewards_tiers:     RewardsTier[]
    milestones:        Milestone[]
    milestone_rewards: MilestoneReward[]
    mission_pool:      MissionPool[]
}

export interface RunnerIslandIsland {
    id:                        number
    start_ts:                  number
    end_ts:                    number
    building_id:               number
    building_position:         number[]
    dragon_id:                 number
    dragon_offset:             number[]
    dragon_scale:              number
    runner_dragon_asset?:      string
    zip_file:                  ZipFile
    help_id:                   number
    run_cost:                  number
    sound_tag:                 FluffySoundTag
    mission_pool:              number[]
    sections:                  number[]
    building_tooltip_position: number[]
    building_timer_position:   number[]
    milestone_rewards:         number[]
}

export enum FluffySoundTag {
    Aquatic = "AQUATIC",
}

export enum ZipFile {
    MobileUIRunnerIslandsOceanRunnerIslandBZip = "/mobile/ui/runner_islands/ocean-runner-island_b.zip",
    MobileUIRunnerIslandsOceanRunnerIslandZip = "/mobile/ui/runner_islands/ocean-runner-island.zip",
    MobileUIRunnerIslandsRunnerIslandMrbeastZip = "/mobile/ui/runner_islands/runner-island-mrbeast.zip",
    MobileUIRunnerIslandsRunnerIslandTestDZip = "/mobile/ui/runner_islands/runner-island-test_d.zip",
    MobileUIRunnerIslandsSeaRunnerIslandCZip = "/mobile/ui/runner_islands/sea-runner-island_c.zip",
}

export interface RunnerIslandLevelChunk {
    id:     number
    lane_1: Lane[] | string
    lane_2: Lane[]
    lane_3: Lane[]
    length: number
}

export interface Lane {
    reward?:      RewardEnum
    position:     number
    jump?:        boolean
    obstacle_id?: number
}

export enum RewardEnum {
    Filler = "filler",
    Legacy = "legacy",
    Main = "main",
    ORB = "orb",
    Point = "point",
    Ro = "ro",
    Token = "token",
}

export interface LevelReward {
    id:              number
    resource_id:     number
    type:            RewardEnum
    custom_texture?: string
}

export interface MilestoneReward {
    id:          number
    points:      number
    reward_id:   number
    highlighted: number
    focused:     number
}

export interface Milestone {
    id:             number
    positionX:      number
    positionY:      number
    points:         number
    texture:        string
    animated_asset: string
}

export interface MissionPool {
    id:                number
    buy_all_discounts: number
    missions:          number[]
    price:             number
    price_increment:   number
}

export interface Obstacle {
    id:      number
    texture: string
    length:  number
    is_tall: boolean
}

export interface RunnerIslandParameter {
    id:    number
    name:  string
    value: Array<boolean | CostElement | number> | TentacledValue | number | string
}

export interface TentacledValue {
    ios?:          number[]
    android?:      number[]
    amazon?:       number[]
    windows?:      number[]
    position?:     number
    level_chunks?: number[]
}

export interface RunnerIslandReward {
    id:                    number
    reward:                CostsElement[]
    type_id:               number
    double_with_video_ad?: boolean
    premium_rewards?:      number[]
    new_badge?:            number[]
}

export interface Section {
    id:                number
    starting_point:    number
    speed:             number
    level_chunks:      SectionLevelChunk[]
    rewards:           number[]
    background_layers: BackgroundLayer[]
}

export interface BackgroundLayer {
    texture:   Texture
    speed:     number
    positionY: number
}

export enum Texture {
    RunnerIslandAssetsBgLvl1PNG = "runner_island/Assets/bg-lvl1.png",
    RunnerIslandAssetsBgLvl2PNG = "runner_island/Assets/bg-lvl2.png",
    RunnerIslandAssetsBgLvl3PNG = "runner_island/Assets/bg-lvl3.png",
    RunnerIslandAssetsGrParalaxLvl11PNG = "runner_island/Assets/gr-paralax-lvl1-1.png",
    RunnerIslandAssetsGrParalaxLvl12PNG = "runner_island/Assets/gr-paralax-lvl1-2.png",
    RunnerIslandAssetsGrParalaxLvl21PNG = "runner_island/Assets/gr-paralax-lvl2-1.png",
    RunnerIslandAssetsGrParalaxLvl22PNG = "runner_island/Assets/gr-paralax-lvl2-2.png",
    RunnerIslandAssetsGrParalaxLvl31PNG = "runner_island/Assets/gr-paralax-lvl3-1.png",
    RunnerIslandAssetsGrParalaxLvl32PNG = "runner_island/Assets/gr-paralax-lvl3-2.png",
    RunnerIslandAssetsGrPath1Lvl1PNG = "runner_island/Assets/gr_path1_lvl1.png",
    RunnerIslandAssetsGrPath1Lvl2PNG = "runner_island/Assets/gr_path1_lvl2.png",
    RunnerIslandAssetsGrPath1Lvl3PNG = "runner_island/Assets/gr_path1_lvl3.png",
    RunnerIslandAssetsGrPath2Lvl1PNG = "runner_island/Assets/gr_path2_lvl1.png",
    RunnerIslandAssetsGrPath2Lvl2PNG = "runner_island/Assets/gr_path2_lvl2.png",
    RunnerIslandAssetsGrPath2Lvl3PNG = "runner_island/Assets/gr_path2_lvl3.png",
    RunnerIslandAssetsGrPath3Lvl1PNG = "runner_island/Assets/gr_path3_lvl1.png",
    RunnerIslandAssetsGrPath3Lvl2PNG = "runner_island/Assets/gr_path3_lvl2.png",
    RunnerIslandAssetsGrPath3Lvl3PNG = "runner_island/Assets/gr_path3_lvl3.png",
}

export interface SectionLevelChunk {
    id:     number
    weight: number
}

export interface SanctuaryBreeding {
    upgrades_config: UpgradesConfig[]
    general_config:  GeneralConfig
}

export interface GeneralConfig {
    SHOW_AT_LEVEL:                number
    ACTIVATE_AT_LEVEL:            number
    PERCENT_OF_ACCUMULATED_GOLD:  number
    GOLD_FACTOR_LEVEL:            number
    GOLD_EXPONENT:                number
    GOLD_MULTIPLIER:              number
    GOLD_COEFICIENT:              number
    GOLD_DIVISOR:                 number
    INACTIVE_BUILDING:            number
    ANIMATED_BACKGROUND:          string
    ACTIVATE_HINT_SYSTEM:         number
    SHOW_TOOLTIP:                 number
    VISUAL_FLARES_MAP_ASSET:      string
    VISUAL_FLARES_BUILDING_ASSET: string
}

export interface UpgradesConfig {
    id:               number
    item_id:          number
    dragons_unlocked: number[]
    rebuild_cost:     number
    breeding_chances: number[]
    num_steps:        number
    multiplier:       number
}

export interface Skills {
    attacks:                SkillsAttack[]
    auras:                  Aura[]
    post:                   Post[]
    effects:                Effect[]
    skills:                 Skill[]
    passive:                Passive[]
    world_skills:           Skill[]
    world_effects:          WorldEffect[]
    level_based_parameters: LevelBasedParameter[]
}

export interface SkillsAttack {
    id:            number
    name:          string
    name_key:      string
    type:          AttackType
    element:       ElementType
    damage:        number
    ui_damage:     number
    effect_atk?:   string
    effect_def:    string
    effect_sfx:    number
    training_time: number
    button_style:  number
    special_icon:  number
    skill_id?:     number
}

export enum AttackType {
    Beauty = "beauty",
    Chaos = "chaos",
    Dark = "dark",
    Dream = "dream",
    Earth = "earth",
    Electric = "electric",
    Fire = "fire",
    Happy = "happy",
    Ice = "ice",
    Legend = "legend",
    Light = "light",
    Magic = "magic",
    Metal = "metal",
    Physical = "physical",
    Plant = "plant",
    Primal = "primal",
    Pure = "pure",
    Soul = "soul",
    Time = "time",
    War = "war",
    Water = "water",
    Wind = "wind",
}

export interface Aura {
    id:                      number
    type:                    AuraType
    parameters:              AuraParameters
    stacks:                  number
    active_turns:            number
    aura_vfx?:               string
    aura_center_mode:        AuraCenterMode
    level_based_parameters?: number
}

export enum AuraCenterMode {
    Side = "SIDE",
}

export interface AuraParameters {
    damageReduction?:    number
    criticalProtection?: boolean
    reflectDamage?:      number
    reflectionsPerTurn?: number
    deployText?:         string
    deployTextColor?:    DeployTextColor
    dodgeChance?:        number
    statusIcon?:         string
    effectName?:         Level1_EffectName
}

export interface DeployTextColor {
    r: number
    g: number
    b: number
    a: number
}

export enum Level1_EffectName {
    TidCritEffectDamageName = "tid_crit_effect_damage_name",
    TidCritEffectName = "tid_crit_effect_name",
}

export enum AuraType {
    Bunker = "BUNKER",
    CriticalChance = "CRITICAL_CHANCE",
    Evasion = "EVASION",
    Impaler = "IMPALER",
}

export interface Effect {
    id:                      number
    effect_type:             string
    target:                  Target
    hit_chance:              number
    parameters:              EffectParameters
    sfx_id?:                 number
    vfx_id?:                 string
    passive_trigger_type?:   string[]
    level_based_parameters?: number
    status_effect_data?:     StatusEffectData
}

export interface EffectParameters {
    damage?:                       number
    multiplier?:                   number
    minHits?:                      number
    maxHits?:                      number
    waitTime?:                     number
    percentRemovedLife?:           number
    selfDmgMultiplier?:            number
    lifeSteal?:                    number
    counterAttackEffectName?:      CounterAttackEffectName
    baseModifier?:                 number
    dmgTakenModifier?:             number
    playerEffectName?:             PlayerEffectName
    launchableSkills?:             number[]
    steps?:                        number
    protection?:                   number
    damageMultiplier?:             number
    effect_tid?:                   EffectTid
    healPercent?:                  number
    auraIds?:                      number[]
    perkId?:                       number
    percentRemainingLife?:         number
    attackId?:                     number
    extraDamagePercentage?:        number
    extraTurnMessageTid?:          string
    effectName?:                   PurpleEffectName
    counterMessageTid?:            string
    dodgeSkills?:                  AvoidSkillElement[]
    bg_vfx_node_name?:             BgVfxNodeName
    fg_vfx_node_name?:             FgVfxNodeName
    damage_multiplier?:            number
    max_kills?:                    number
    tid_damage_multiplier?:        TidDamageMultiplier
    benchDragonsDamagePercentage?: number
    bonusDamagePercentage?:        number
    maxBenchTargets?:              number
    benchTargetMode?:              BenchTargetMode
    fg_vfx_screen_effectname?:     FgVfxScreenEffectname
    vfx_text_effectname?:          VfxTextEffectname
    vfx?:                          Vfx
    statusIcon?:                   string
    percentageValue?:              number
    dragonLife?:                   DragonLife
    activeTurns?:                  number
    passiveIds?:                   number[]
    numPassives?:                  number
    passiveStacks?:                boolean
    addRandomly?:                  boolean
    dragonAnimation?:              DragonAnimation
    type?:                         string
    overrideModifiers?:            number[]
    numStacks?:                    number
    maxStacks?:                    number
    shieldMultiplier?:             number
    armorMultiplier?:              number
    carryDamage?:                  boolean
    avoidSkills?:                  AvoidSkillElement[]
    destroySkills?:                DestroySkill[]
    element?:                      ElementType
}

export enum AvoidSkillElement {
    Evasion = "EVASION",
    Shield = "SHIELD",
    Vengeful = "VENGEFUL",
}

export enum BenchTargetMode {
    Sequential = "sequential",
}

export enum BgVfxNodeName {
    BgBerserkVortex = "bg_berserk_vortex",
}

export enum CounterAttackEffectName {
    PlasmaSkillImpact = "plasma_skill_impact",
}

export enum DestroySkill {
    Bunker = "BUNKER",
    Shield = "SHIELD",
}

export enum DragonAnimation {
    Special1 = "special1",
}

export enum DragonLife {
    Receiver = "receiver",
}

export enum PurpleEffectName {
    PlasmaSkillMain = "plasma_skill_main",
    TidCritEffectName = "tid_crit_effect_name",
    TidSkillArmorEffectName = "tid_skill_armor_effect_name",
}

export enum EffectTid {
    TidSkillDescription250_Battlefield = "tid_skill_description_250_battlefield",
}

export enum FgVfxNodeName {
    FgBerserkVortex = "fg_berserk_vortex",
}

export enum FgVfxScreenEffectname {
    MegacritSpeedlines = "megacrit_speedlines",
}

export enum PlayerEffectName {
    EmergencyDamage = "emergency_damage",
}

export enum TidDamageMultiplier {
    DamageIncreased = "DAMAGE INCREASED!!!",
}

export enum Vfx {
    DoomMarkSkill = "doom-mark_skill",
    Empty = "",
    SilencedShield3 = "silenced_shield_3",
    TestVfx = "testVfx",
}

export enum VfxTextEffectname {
    MegacritSkill = "megacrit_skill",
}

export interface StatusEffectData {
    statusIcon:         string
    effectName:         StatusEffectDataEffectName
    effectDescription?: string
    dragonVfx?:         EffectVfxEnum
}

export enum EffectVfxEnum {
    GenericHiddenVfx = "generic_hidden_vfx",
    HighocculttitanShield = "highocculttitan_shield",
    SkillOverdrive = "skill_overdrive",
    SpineKarmaSkills = "spine_karma_skills",
    TitanShield = "titan_shield",
    VampireTitanShield = "vampire_titan_shield",
}

export enum StatusEffectDataEffectName {
    TidCritEffectName = "tid_crit_effect_name",
    TidDoomSkillEffectName = "tid_doom_skill_effect_name",
    TidSkillArmorEffectName = "tid_skill_armor_effect_name",
    TidSkillExhaustionEffectName = "tid_skill_exhaustion_effect_name",
}

export enum Target {
    AllyTeam = "ALLY_TEAM",
    Enemy = "ENEMY",
    EnemyRandom1 = "ENEMY_RANDOM_1",
    EnemyTeam = "ENEMY_TEAM",
    None = "NONE",
    Self = "SELF",
    SelfAlliesOnly = "SELF_ALLIES_ONLY",
}

export interface LevelBasedParameter {
    id:        number
    level_1:   Level1
    level_40?: Level40
    level_70?: Level70
}

export interface Level1 {
    turn_chances?:     TurnChance[]
    critical_chances?: CriticalChances
    statusIcon?:       string
    effectName?:       Level1_EffectName
    damage?:           number
    multiplier?:       number
    armor?:            Level1_Armor
}

export interface Level1_Armor {
    baseValue: number
}

export interface CriticalChances {
    chance?:            number
    damage_multiplier?: number
}

export interface TurnChance {
    chance: number
    turns:  number
}

export interface Level40 {
    turn_chances?: TurnChance[]
    armor?:        Level40_Armor
}

export interface Level40_Armor {
    baseValue:       number
    percentageValue: number
}

export interface Level70 {
    turn_chances?: TurnChance[]
    armor?:        Level70_Armor
}

export interface Level70_Armor {
    percentageValue: number
}

export interface Passive {
    id:              number
    name:            string
    name_key?:       string
    effect_vfx?:     EffectVfxEnum
    effect_sfx?:     number
    special_icon?:   number
    skill_id?:       number
    world_skill_id?: number
    can_share:       number
}

export interface Post {
    id:           number
    name:         Name
    name_key:     Name
    effect_vfx:   EffectVfxEnum
    special_icon: number
    skill_id:     number
}

export enum Name {
    OnKillBuff = "On Kill Buff",
    SoulExtraction = "Soul extraction",
}

export interface Skill {
    id:              number
    tid_name:        string
    tid_description: string
    cooldown?:       number
    effects:         number[]
}

export interface WorldEffect {
    id:            number
    effect_type:   string
    icon:          CustomForeground
    interval_time: number
    parameters:    WorldEffectParameters
}

export interface WorldEffectParameters {
    resource: ParametersResource
}

export interface ParametersResource {
    f: number
}

export interface ConfigSpecialBreeding {
    special_breeding: SpecialBreedingElement[]
    parameters:       SpecialBreedingParameter[]
}

export interface SpecialBreedingParameter {
    id:    number
    name:  string
    value: Array<number[] | number> | ValueClass | number
}

export interface SpecialBreedingElement {
    id:                 number
    group_id:           number
    condition1:         Condition
    condition2:         Condition
    result:             number
    maximum:            number
    availability:       TimerIntervalElement[]
    visible_from_hours: number
    visible_from:       number
}

export interface Condition {
    id: number[]
}

export interface TowerIsland {
    islands:     TowerIslandIsland[]
    floors:      Floor[]
    squares:     TowerIslandSquare[]
    rewards:     TowerIslandReward[]
    happy_hours: HappyHour[]
    parameters:  FogIslandParameter[]
    currencies:  Currency[]
    actions:     Action[]
}

export interface Floor {
    id:             number
    island_id:      number
    y:              number
    x_flip:         number
    floor_image:    FloorImage
    area:           number
    roll_die_price: CostClass
}

export enum FloorImage {
    Floor10PNG = "floor-10.png",
    Floor1PNG = "floor-1.png",
    Floor2PNG = "floor-2.png",
    Floor3PNG = "floor-3.png",
    Floor4PNG = "floor-4.png",
    Floor5PNG = "floor-5.png",
    Floor6PNG = "floor-6.png",
    Floor7PNG = "floor-7.png",
    Floor8PNG = "floor-8.png",
    Floor9PNG = "floor-9.png",
}

export interface HappyHour {
    id:           number
    availability: TimerIntervalElement
    island_id:    number
    discount:     number
}

export interface TowerIslandIsland {
    id:                                number
    analytics_id:                      string
    tid_name:                          string
    start_ts:                          number
    end_ts:                            number
    initial_square_id:                 number
    tutorial_id:                       number
    tutorial_die_result:               number
    pool_size:                         number
    pool_time:                         number
    initial_points:                    number
    currency_id:                       number
    min_level:                         number
    building_id:                       number
    building_position:                 number[]
    tower_size:                        number[]
    zip_file:                          string
    sound_tag:                         string
    canvas_assets_url:                 string
    mobile_first_floor_position:       number[]
    mobile_floor_height:               number
    mobile_interior_wall_margin:       number
    mobile_final_dragon_scale:         number[]
    mobile_final_dragon_position:      number[]
    mobile_final_dragon_info_position: number[]
    max_die_roll:                      number
    help_view_id:                      number
    active_platforms:                  ValueClass
}

export interface TowerIslandReward {
    id:               number
    dragon_reward_id: number
    last_piece_cost:  number
    num_pieces:       number
    show_new_badge:   number
    area:             number
    island_id:        number
}

export interface TowerIslandSquare {
    id:                              number
    type:                            PurpleType
    highlight:                       number
    x:                               number
    y:                               number
    island_id:                       number
    ixy:                             string
    rewards_array?:                  RewardsArrayElement[]
    wall?:                           Wall
    catapult_destination_square_id?: number
    piece_reward_id?:                number
}

export enum PurpleType {
    Catapult = "CATAPULT",
    Empty = "EMPTY",
    FinalDragonSquare = "FINAL_DRAGON_SQUARE",
    SingleDragonPiece = "SINGLE_DRAGON_PIECE",
    SingleReward = "SINGLE_REWARD",
}

export interface TreasureItem {
    id:               number
    name:             string
    name_key:         string
    image:            string
    price:            number
    type:             TreasureItemType
    display_order:    number
    badge:            number
    use_formula:      number
    active_platforms: ValueClass
    feature?:         Feature
    amount:           number
    badgeText?:       string
}

export enum Feature {
    MissingDragonRescue = "missing_dragon_rescue",
    PacksShop = "packs_shop",
}

export enum TreasureItemType {
    F = "f",
    G = "g",
    Keys = "keys",
    P = "p",
}

export interface TreeOfLife {
    parameters:           TreeOfLifeParameter[]
    rarity_summon_time:   SummonTime[]
    dragonid_summon_time: SummonTime[]
    rarity_seeds:         TreeOfLifeRaritySeed[]
}

export interface SummonTime {
    dragon_id?:                         number
    summon_time_seconds:                number
    summon_time_seconds_10:             number
    summon_time_seconds_40:             number
    summon_time_reawaken:               number
    summon_time_seconds_ngu_aggressive: number
    summon_time_seconds_ngu_soft:       number
    rarity?:                            Rarity
}

export interface TreeOfLifeParameter {
    id:    number
    name:  string
    value: number[] | ValueClass | number | string
}

export interface TreeOfLifeRaritySeed {
    id:               number
    rarity:           Rarity
    max_rarity_seeds: number
}

export interface TreeOfLifePowerup {
    parameters:          BattlesConfigElement[]
    animation:           AnimationElement[]
    grades_by_rarity:    GradesBy[]
    grades_by_dragon:    GradesBy[]
    visuals:             Visual[]
    multiplier_times:    MultiplierTime[]
    grade_master_points: GradeMasterPoint[]
    rarity_seeds:        TreeOfLifePowerupRaritySeed[]
    gold_boost:          GoldBoost[]
}

export interface AnimationElement {
    dragon_grade:          number
    background_color:      string
    dragon_particle_color: string
    star_particle_color:   string
    dragon_particle_size:  number
    star_particle_size:    number
    camera_shake:          number
    animation_duration:    number
}

export interface GoldBoost {
    id:           number
    rarity:       Rarity
    gold_boost_0: number
    gold_boost_1: number
    gold_boost_2: number
    gold_boost_3: number
    gold_boost_4: number
    gold_boost_5: number
    gold_boost_6: number
}

export interface GradeMasterPoint {
    id:                       number
    grade:                    number
    master_points_multiplier: number
}

export interface GradesBy {
    id:                  number
    dragon?:             number
    seeds_per_grade:     number[]
    stats_boost:         number
    master_points_boost: number
    rarity?:             Rarity
}

export interface MultiplierTime {
    id:              number
    grade:           number
    multiplier_time: number
}

export interface TreeOfLifePowerupRaritySeed {
    max_rarity_seeds_per_grade: number[]
    rarity:                     Rarity
}

export interface Visual {
    id:    number
    front: string
    back:  string
    type:  string
    grade: number
}

export interface TreeOfLifeRecall {
    parameters:       BattlesConfigElement[]
    recall_seeds:     { [key: string]: number }[]
    multiplier_times: MultiplierTime[]
}

