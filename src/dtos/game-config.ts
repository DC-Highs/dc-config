export interface GameConfigDto {
    game_data: {
        config: {
            chests: {
                chests: Array<{
                    id: number
                    type: string
                    rewards: Array<number>
                    img_name: string
                    chest_name_key: string
                    type_name_key: string
                    level_tiers: Array<number>
                    description_key?: string
                    default_reward: number
                    pool_size: number
                    gatcha_ids?: Array<number>
                    instant: any
                }>
                rewards: Array<{
                    id: number
                    reward: {
                        resource?: {
                            p_token?: number
                            f?: number
                            l_token?: number
                            g?: number
                            d_token?: number
                            c?: number
                            i_token?: number
                            pr_token?: number
                            pu_token?: number
                            wr_token?: number
                            e_token?: number
                            f_token?: number
                            w_token?: number
                            el_token?: number
                            m_token?: number
                            li_token?: number
                            ep?: number
                            x?: number
                        }
                        buildings?: Array<number>
                        eggs?: Array<number>
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        moves?: number
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        skin?: Array<number>
                        battleground_keys?: Array<{
                            battleground_id: number
                            key_id: number
                            amount: number
                        }>
                    }
                    tier_multi: number
                    weight: number
                }>
            }
            items: Array<{
                id: number
                name: string
                group_type: string
                animated?: number
                build_time?: number
                mobile_version: number
                android_version: number
                show_on_mobile?: number
                type?: string
                element_type?: string
                xp: number
                min_level?: number
                costs: any
                display_order: number
                boost_modifier: any
                gift_level: number
                giftable?: number
                cost_unit_cash?: number
                collect?: number
                collect_xp?: number
                category_id?: number
                subcategory_id?: number
                building_limit_same_id?: number
                in_store: number
                width?: number
                height?: number
                new_item: number
                img_name?: string
                img_name_mobile?: string
                img_name_android?: string
                activation?: number
                upgrades_to?: number
                collect_type: any
                velocity?: number
                description?: string
                properties?: {
                    bulldozable?: number
                    habitat?: number
                    capacity?: number
                    friend_assistable?: number
                    upgrade_from?: number
                    max_gold?: number
                    floating?: number
                    crosspromotion?: number
                    range?: number
                    fixed_position?: Array<number>
                    incubator?: number
                    is_fixed?: number
                    workingBuilding?: number
                    lost_item?: number
                    max_dragon_level?: number
                    habitat_pure?: number
                    required_items?: Array<number>
                    breeding?: number
                    breeding_factor?: number
                    ft_flying?: number
                    demolishable?: number
                    multiCollectable?: number
                }
                building_ownership_id?: number
                sell_price: any
                deco_seg_id?: number
                inventory_ids?: number
                elements?: Array<string>
                multiple_costs?: Array<{
                    g?: number
                    c?: number
                    d_token?: number
                    pu_token?: number
                }>
                costs_array?: Array<{
                    c: number
                }>
                sell_price_array?: Array<{
                    g: number
                }>
                multiple_sell_prices?: Array<{
                    g: number
                }>
                scale?: number
                animated_canvas?: string
                speed?: number
                hatching_time?: number
                breeding_time?: number
                lvl?: number
                starting_coins?: number
                coins_added?: number
                can_breed?: number
                breedable?: number
                deity_breeding?: number
                difficulty?: number
                category?: number
                rarity?: number
                dragon_rarity?: string
                attacks?: Array<number>
                attributes?: Array<string>
                trainable_attacks?: Array<number>
                upgrade_levels?: Array<number>
                background_vfx?: Array<number>
                foreground_vfx?: Array<number>
                in_store_min_level?: number
                flying_level?: number
                swim?: number
                seeds_to_summon?: number
                hatching_time_10?: number
                breeding_time_40?: number
                breeding_time_10?: number
                hatching_time_40?: number
                base_attack?: number
                base_life?: number
                in_store_ch?: number
                costs_ch_1?: {
                    c?: number
                    g?: number
                }
                costs_ch_2?: {
                    c?: number
                    g?: number
                }
                hatching_time_reawaken?: number
                breeding_time_reawaken?: number
                hatching_time_ngu_aggressive?: number
                breeding_time_ngu_aggressive?: number
                hatching_time_ngu_soft?: number
                breeding_time_ngu_soft?: number
                dragon_ownership_id?: number
                tags?: Array<string>
                speed_override?: number
                passive_skills?: Array<number>
                post_skills?: Array<number>
            }>
            levels: Array<{
                id: number
                level: number
                name: string
                xp_required: number
                reward: {
                    c: number
                }
                xp_needed: number
                offer_item: {
                    id: number
                    cost: {
                        c: number
                    }
                }
            }>
            treasure_items: {
                "1": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "2": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "3": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    badgeText: string
                    amount: number
                }
                "4": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    badgeText: string
                    amount: number
                }
                "5": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "6": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    badgeText: string
                    amount: number
                }
                "7": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "8": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "9": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "11": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    badgeText: string
                    amount: number
                }
                "23": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    amount: number
                }
                "24": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    amount: number
                }
                "25": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    badgeText: string
                    amount: number
                }
                "26": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    amount: number
                }
                "27": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    badgeText: string
                    amount: number
                }
                "34": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "35": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
                "36": {
                    id: number
                    name: string
                    name_key: string
                    image: string
                    price: number
                    type: string
                    display_order: number
                    badge: number
                    use_formula: number
                    active_platforms: {
                        canvas: Array<number>
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                    feature: string
                    amount: number
                }
            }
            sanctuary_breeding: {
                upgrades_config: Array<{
                    id: number
                    item_id: number
                    dragons_unlocked: Array<number>
                    rebuild_cost: number
                    breeding_chances: Array<number>
                    num_steps: number
                    multiplier: number
                }>
                general_config: {
                    SHOW_AT_LEVEL: number
                    ACTIVATE_AT_LEVEL: number
                    PERCENT_OF_ACCUMULATED_GOLD: number
                    GOLD_FACTOR_LEVEL: number
                    GOLD_EXPONENT: number
                    GOLD_MULTIPLIER: number
                    GOLD_COEFICIENT: number
                    GOLD_DIVISOR: number
                    INACTIVE_BUILDING: number
                    ANIMATED_BACKGROUND: string
                    ACTIVATE_HINT_SYSTEM: number
                    SHOW_TOOLTIP: number
                    VISUAL_FLARES_MAP_ASSET: string
                    VISUAL_FLARES_BUILDING_ASSET: string
                }
            }
            help_views: Array<{
                id: number
                assets_name?: string
                popup_type: string
                size: string
                title_localized_key: string
                slides: Array<{
                    header_localized_key?: string
                    content_localized_key?: string
                    image_url?: string
                    custom_title_localized_key?: string
                    slide_type: string
                    image_path?: string
                    custom_title_localized_tidkey?: string
                    animatedAssetName?: string
                    animationName?: string
                }>
            }>
            deity_world_dragons: {
                dragons: Array<{
                    id: number
                    name: string
                    name_tid: string
                    first_name: string
                    second_name: string
                    group_type: string
                    order: number
                    level: number
                    attributes: Array<string>
                    production_per_hour: {
                        p: number
                    }
                    summon_enabled: number
                    summon_min_level: number
                    summon_crystal_cost: {
                        "31"?: number
                        "32"?: number
                        "41"?: number
                        "42"?: number
                        "43"?: number
                        "33"?: number
                        "51"?: number
                        "52"?: number
                        "53"?: number
                        "12"?: number
                        "13"?: number
                        "34"?: number
                        "44"?: number
                        "54"?: number
                        "35"?: number
                        "14"?: number
                        "22"?: number
                        "23"?: number
                        "15"?: number
                        "24"?: number
                        "45"?: number
                        "55"?: number
                        "4"?: number
                        "5"?: number
                        "36"?: number
                        "25"?: number
                        "46"?: number
                        "56"?: number
                    }
                    summon_period: number
                    fusion_dragon_cost: {
                        "1234": number
                        "2412": number
                    }
                    fusion_dragon_gem_conversion: {
                        "1234": number
                        "2412": number
                    }
                    fusion_crystal_cost: {
                        "31"?: number
                        "32"?: number
                        "41"?: number
                        "42"?: number
                        "33"?: number
                        "43"?: number
                        "52"?: number
                        "34"?: number
                        "44"?: number
                        "53"?: number
                        "13"?: number
                        "12"?: number
                        "54"?: number
                        "14"?: number
                        "35"?: number
                        "45"?: number
                        "23"?: number
                        "24"?: number
                        "36"?: number
                        "55"?: number
                        "15"?: number
                        "46"?: number
                        "3"?: number
                        "16"?: number
                        "25"?: number
                        "56"?: number
                        "4"?: number
                        "5"?: number
                        "26"?: number
                        "37"?: number
                        "47"?: number
                        "6"?: number
                        "57"?: number
                        "17"?: number
                    }
                    fusion_xp_gain: number
                    fusion_next_id: number
                    breeding_base_chance: number
                    breeding_added_chance: number
                    store_price: number
                    img_name: string
                    img_name_mobile: string
                    img_name_android: string
                    summon_asset: string
                    summon_canvas_asset: string
                    fly: number
                    in_store: number
                    description: string
                    description_tid: string
                }>
            }
            news: {
                news: Array<any>
            }
            dragonarium: {
                config: Array<{
                    free_slots: number
                    max_slots: number
                }>
                prices: Array<{
                    slot: number
                    price: {
                        c: number
                    }
                }>
            }
            grid_island: {
                islands: Array<{
                    id: number
                    analytics_id: string
                    tid_name: string
                    tutorial_id: number
                    tutorial_claimable_cell_id: number
                    pool_points: number
                    pool_time: number
                    initial_points: number
                    start_ts: number
                    end_ts: number
                    currency_id: number
                    min_level: number
                    building_id: number
                    building_position: Array<number>
                    zip_file: string
                    sound_tag: string
                    canvas_assets_url: string
                    ui_configuration: {
                        cell_contents_config: {
                            blocked_dragon_position_offset: Array<number>
                            blocked_opacity: number
                            claimable_dragon_position_offset: Array<number>
                            default_dragon_scale: Array<number>
                            dragon_scale: Array<number>
                            dragon_scale_by_id: {
                                "1291": Array<number>
                                "1301": Array<number>
                                "1308": Array<number>
                                "1515": Array<number>
                                "1637": Array<number>
                            }
                            icon_position_offset: Array<number>
                            label_position_offset: Array<number>
                        }
                        cell_highlight_asset: string
                        cell_highlight_index: number
                        cell_size: Array<number>
                        cells_label_config: {
                            claimable: {
                                color: Array<number>
                                size: number
                                stroke_color: Array<number>
                                stroke_width: number
                            }
                            unclaimable: {
                                color: Array<number>
                                size: number
                                stroke_color: Array<number>
                                stroke_width: number
                            }
                        }
                        dragon_evolution: number
                        grey_scale_blocked_cells: boolean
                        island_title_config: {
                            down_color: Array<number>
                            size: number
                            small_stroke_color: Array<number>
                            small_stroke_width: number
                            upper_color: Array<number>
                        }
                        layers_z_indexes: {
                            additional_layer: number
                            cell_backgrounds: number
                            cell_contents: number
                            decorations: number
                            player_token: number
                            walls: number
                        }
                        origin_offset: Array<number>
                        tutorial_scroll_duration: number
                        tutorial_scroll_duration_base: number
                        tutorial_scroll_duration_factor: number
                    }
                    active_platforms: {
                        ios: number
                        canvas: string
                        android: number
                        amazon: number
                        windows: number
                    }
                    episodes: Array<number>
                    board_size: Array<number>
                    initial_square_id: number
                    backgrounds: Array<number>
                    background_plist: string
                    foregrounds: Array<any>
                    foregrounds_plists: Array<any>
                }>
                episodes: Array<{
                    id: number
                    island_id: number
                    board_size: Array<number>
                    initial_square_id: number
                    final_square_id: number
                    tid_title: string
                    mobile_begin_tutorial_id: number
                    mobile_end_tutorial_id: number
                    canvas_background: string
                    backgrounds: Array<string>
                    background_plist: string
                    foregrounds: Array<any>
                    foregrounds_plists: Array<any>
                    squares: Array<number>
                }>
                squares: Array<{
                    id: number
                    type: string
                    type_id?: number
                    highlight: number
                    x: number
                    y: number
                    island_id: number
                    episode_id: number
                    claim_cost: number
                    wall?: string
                    wall_suffix?: string
                }>
                decorations: Array<{
                    id: number
                    file: string
                    x: number
                    y: number
                    island_id: number
                    episode_id: number
                }>
                encounters: Array<{
                    id: number
                    enemies: Array<number>
                    speed_up_price_per_hour: number
                    fight_background: string
                    fight_background_id: string
                }>
                enemies: Array<{
                    id: number
                    dragon_ids: Array<number>
                    handicaps: Array<number>
                    view_type: string
                    elements_view_type: Array<any>
                    cooldown: number
                }>
                currencies: Array<{
                    id: number
                    tid_name: string
                    actions: Array<number>
                }>
                actions: Array<{
                    id: number
                    type: string
                    tid_name: string
                    image: string
                    pool_percent: number
                    max_points: number
                    extra_parameters?: {
                        max_time?: number
                        cooldown?: number
                        max_control_level?: number
                        max_production?: number
                        max_level?: number
                    }
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            dragon_book: {
                collection_numbers: Array<{
                    id: number
                    number: number
                    dragon_id: number
                    available_at: number
                    breedable_badge?: number
                    shop_badge?: number
                    card_badge?: number
                    breeding_sanctuary_badge?: number
                    quests_badge?: number
                    events_badge?: number
                    soulmates_badge?: number
                    dragonbook_collection_badge?: number
                    warrior_chest_badge?: number
                    pvp_arena_win_badge?: number
                    breeding_ancient_world_badge?: number
                    pvp_arena_promotion_badge?: number
                    alliance_chest_badge?: number
                    orb_shop_badge?: number
                }>
                badges_config: Array<{
                    id: number
                    name: string
                    value: number
                }>
            }
            dragon_tournaments: {
                tournaments: Array<{
                    id: number
                    name_key: string
                    matches: Array<number>
                    difficulty: string
                    order: number
                    mobile_background: string
                    canvas_background?: string
                    allow_island_tutorial?: number
                    show_reward_button: number
                    multiplier: number
                    min_level: number
                    ui_asset: string
                    category_id: number
                    availability?: {
                        from: number
                        to: number
                    }
                }>
                matches: Array<{
                    id: number
                    enemy1: {
                        dragonId: any
                        staticLevel?: number
                        grade?: number
                        level?: number
                    }
                    enemy2: {
                        dragonId: any
                        staticLevel?: number
                        grade?: number
                        level?: number
                    }
                    enemy3: {
                        dragonId: any
                        staticLevel?: number
                        grade?: number
                        level?: number
                    }
                    requirements1: {
                        level?: number
                        elements?: Array<string>
                        rarity?: string
                        dragonId: any
                        noRequirements?: boolean
                    }
                    requirements2: {
                        level?: number
                        rarity?: string
                        elements?: Array<string>
                        dragonId?: number
                        noRequirements?: boolean
                    }
                    requirements3: {
                        level?: number
                        rarity?: string
                        elements?: Array<string>
                        noRequirements?: boolean
                        dragonId?: number
                    }
                    battle_cooldown: number
                    speedup_cost_hour: number
                    reward: {
                        x?: number
                        egg?: number
                        chest?: number
                        elp?: number
                        ep?: number
                        f?: number
                        trade_tickets?: Array<{
                            rarity: string
                            amount: number
                            limit: boolean
                        }>
                        en_runner?: number
                        c?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        "rank_up_coin.mythical"?: number
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        skin?: number
                        n_token?: number
                        d_token?: number
                        "rank_up_coin.heroic"?: number
                        b: any
                        moves?: number
                        pr_token?: number
                        "album_pack.s"?: number
                        "album_pack.m"?: number
                        "album_pack.l"?: number
                        "album_pack.xl"?: number
                        l_token?: number
                        g?: number
                        "album_pack_aces.2"?: number
                        "album_pack_aces.4"?: number
                        wr_token?: number
                        e_token?: number
                        "album_pack_aces.1"?: number
                        "album_pack_aces.3"?: number
                        "album_pack_aces.generic"?: number
                        "rank_up_coin.legendary"?: number
                        p_token?: number
                        pu_token?: number
                        "album_pack.temp"?: number
                        w_token?: number
                    }
                    rewards_id: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                difficulties: Array<{
                    id: number
                    base_strength_range: Array<number>
                    easy_range: Array<number>
                    normal_range: Array<number>
                    hard_range: Array<number>
                    impossible_range: Array<number>
                }>
                categories: Array<{
                    id: number
                    name: string
                    tid: string
                    priority: number
                    ui_asset: string
                    layout: string
                    unlock_level: number
                    show_level: number
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        x?: number
                        egg?: number
                        chest?: number
                        en_runner?: number
                        f?: number
                        ep?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        c?: number
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        b: any
                        n_token?: number
                        l_token?: number
                        pu_token?: number
                        wd_token?: number
                        moves?: number
                        d_token?: number
                        el_token?: number
                        m_token?: number
                        wr_token?: number
                        skin?: number
                        li_token?: number
                        p_token?: number
                        pr_token?: number
                        elp?: number
                        e_token?: number
                        w_token?: number
                        trade_tickets?: Array<{
                            rarity: string
                            amount: number
                            limit: boolean
                        }>
                        g?: number
                        "rank_up_coin.common"?: number
                        "rank_up_coin.rare"?: number
                        "rank_up_coin.very_rare"?: number
                        "rank_up_coin.epic"?: number
                        "rank_up_coin.legendary"?: number
                        "rank_up_coin.mythical"?: number
                        "rank_up_coin.heroic"?: number
                        i_token?: number
                        perks?: Array<{
                            id: number
                            quantity: number
                        }>
                        "album_pack.s"?: number
                        "album_pack.m"?: number
                        "album_pack.xl"?: number
                        "album_pack.l"?: number
                        "album_pack_aces.4"?: number
                        "album_pack_aces.2"?: number
                        "album_pack_aces.1"?: number
                        "album_pack_aces.3"?: number
                        "album_pack_aces.generic"?: number
                        "album_pack.temp"?: number
                        "album_pack_aces.5"?: number
                    }>
                    type_id: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    description_tid: string
                    button_tid: string
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
            }
            fog_island: {
                islands: Array<{
                    id: number
                    analytics_id: string
                    tid_name: string
                    tutorial_id: number
                    tutorial_claimable_cell_id: number
                    board_size: Array<number>
                    cell_size: Array<number>
                    origin_offset: Array<number>
                    initial_square_id: number
                    pool_points: number
                    pool_time: number
                    initial_points: number
                    start_ts: number
                    end_ts: number
                    currency_id: number
                    min_level: number
                    building_id: number
                    building_position: Array<number>
                    zip_file: string
                    sound_tag: string
                    canvas_assets_url: string
                    background_plist: string
                    foregrounds_plists: Array<any>
                    particles_position: Array<number>
                    tutorial_claim_cells: Array<number>
                }>
                squares: Array<{
                    id: number
                    type: string
                    type_id?: number
                    highlight: number
                    x: number
                    y: number
                    island_id: number
                    claim_cost: number
                    come_back_cost: number
                    reward_id?: number
                }>
                currencies: Array<{
                    id: number
                    tid_name: string
                    actions: Array<number>
                }>
                rewards: Array<{
                    id: number
                    type: string
                    island_id: number
                    reward_id: number
                    last_piece_cost: number
                    num_pieces: number
                    show_new_badge: number
                }>
                actions: Array<{
                    id: number
                    type: string
                    tid_name: string
                    image: string
                    pool_percent: number
                    max_points: number
                    extra_parameters?: {
                        max_time?: number
                        cooldown?: number
                        max_control_level?: number
                        max_production?: number
                        max_level?: number
                    }
                }>
                hints: Array<{
                    id: number
                    type: string
                    tid_name: string
                    icon: string
                    price: {
                        ep: number
                    }
                    duration_time: number
                    area: number
                    square_selection: number
                    increment_price: number
                    tutorial_id: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            heroic_races: {
                islands: Array<{
                    id: number
                    active_platforms: {
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                        canvas: Array<number>
                    }
                    min_level: number
                    start_ts: number
                    end_ts: number
                    end_ts_threshold: number
                    secs_before_cache_freeze: number
                    min_qualifying_laps: number
                    laps: Array<number>
                    building_id: number
                    building_id_96: number
                    building_claim_id: number
                    building_free_spin_id: number
                    building_position: Array<number>
                    dragon_building_position: Array<number>
                    dragon_building_scale: number
                    zip_file: string
                    canvas_assets_url: string
                    island_title_tid: string
                    sound_tag: string
                    level_tiers: Array<number>
                    rewards: Array<number>
                    dragon_race_id: number
                    dragon_race_scale: number
                    dragon_race_offset: Array<number>
                    dragon_reward_scale: number
                    dragon_reward_offset: Array<number>
                    help_id: number
                    dragon_is_new: number
                    spinner_enabled: number
                    spin_rewards: Array<number>
                    spin_cooldown: number
                    buy_spin_price: number
                    notification_anim_remaining_time: number
                    notification_anim_per_day: number
                    notification_anim_duration: number
                    lap_completed_to_hide_notification: number
                }>
                rewards: Array<{
                    id: number
                    positions: Array<number>
                    rewards: Array<{
                        egg?: Array<number>
                        c?: number
                    }>
                }>
                laps: Array<{
                    id: number
                    nodes: Array<number>
                }>
                nodes: Array<{
                    id: number
                    buy_all_discount: number
                    missions: Array<number>
                }>
                nodes_position: Array<{
                    id: number
                    island_id: number
                    type: string
                    x: number
                    y: number
                }>
                missions: Array<{
                    id: number
                    type: string
                    goal_points: number
                    price: number
                    price_increment: number
                    pool_size: number
                    spawn_time: number
                    collect_chance: number
                    collect_chance_modifier: number
                    encounter?: number
                }>
                encounters: Array<{
                    id: number
                    enemies: Array<number>
                    speed_up_price_per_hour: number
                    fight_background_id: string
                }>
                enemies: Array<{
                    id: number
                    dragon_ids: Array<string>
                    handicaps: Array<number>
                    view_type: string
                    elements_view_type: Array<any>
                    cooldown: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                spin_rewards: Array<{
                    id: number
                    type: string
                    value: number
                    analytics_id: string
                    weight: number
                    image: string
                }>
                lap_rewards: Array<{
                    id: number
                    lap_rewards: {
                        "1": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "rank_up_coin.mythical"?: number
                                "album_pack.s"?: number
                                "pet_food_pack.s"?: number
                            }>
                            reward_cell_type: string
                        }
                        "2": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                b?: Array<number>
                                chest?: number
                            }>
                            reward_cell_type: string
                        }
                        "3": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "album_pack_aces.1"?: number
                                "album_pack.m"?: number
                            }>
                            reward_cell_type: string
                        }
                        "4": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "album_pack_aces.2"?: number
                                "album_pack.l"?: number
                            }>
                            reward_cell_type: string
                        }
                        "5": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                b?: Array<number>
                                chest?: number
                                "pet_food_pack.s"?: number
                            }>
                            reward_cell_type: string
                        }
                        "6": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest?: number
                                "album_pack.xl"?: number
                                "pet_food_pack.m"?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                chest: number
                            }>
                            multiplier?: number
                        }
                        "7": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest?: number
                                "pet_food_pack.m"?: number
                            }>
                            reward_cell_type: string
                        }
                        "8": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "album_pack_aces.3"?: number
                                "album_pack_aces.generic"?: number
                                "album_pack_aces.1"?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                "album_pack_aces.1": number
                            }>
                            multiplier?: number
                        }
                        "9": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                b?: Array<number>
                                "album_pack_aces.1"?: number
                                trade_tickets?: Array<{
                                    rarity: string
                                    amount: number
                                    limit: boolean
                                }>
                                "pet_food_pack.m"?: number
                                "album_pack_aces.2"?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                trade_tickets?: Array<{
                                    rarity: string
                                    amount: number
                                    limit: boolean
                                }>
                                b?: Array<number>
                            }>
                            multiplier?: number
                        }
                        "10": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest?: number
                                "pet_food_pack.l"?: number
                            }>
                            reward_cell_type: string
                        }
                        "11": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                b?: Array<number>
                                "album_pack_aces.2"?: number
                                "album_pack_aces.3"?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                b: Array<number>
                            }>
                            multiplier?: number
                        }
                        "12": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "album_pack_aces.4"?: number
                                "album_pack_aces.3"?: number
                            }>
                            reward_cell_type: string
                        }
                        "13": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                egg?: Array<number>
                                chest?: number
                                "pet_food_pack.l"?: number
                            }>
                            reward_cell_type: string
                            omit_if_winner?: number
                        }
                        "14": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                seeds?: Array<{
                                    id: number
                                    amount: number
                                }>
                                egg?: Array<number>
                            }>
                            reward_cell_type: string
                            omit_if_winner?: number
                        }
                        "15": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                "album_pack_aces.5"?: number
                                seeds?: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                seeds?: Array<{
                                    id: number
                                    amount: number
                                }>
                                "album_pack_aces.5"?: number
                            }>
                            multiplier?: number
                        }
                        "16": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest?: number
                                skin?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                chest: number
                            }>
                            multiplier?: number
                        }
                        "17": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                            limited_time: number
                            limited_reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            multiplier: number
                        }
                        "18": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest?: number
                                "album_pack_aces.4"?: number
                                "album_pack_aces.5"?: number
                            }>
                            reward_cell_type: string
                        }
                        "19": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                rarity_seeds?: Array<{
                                    rarity: string
                                    amount: number
                                }>
                                "album_pack_aces.5"?: number
                            }>
                            reward_cell_type: string
                            limited_time?: number
                            limited_reward?: Array<{
                                rarity_seeds: Array<{
                                    rarity: string
                                    amount: number
                                }>
                            }>
                            multiplier?: number
                        }
                        "20": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                            limited_time: number
                            limited_reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            multiplier: number
                        }
                        "21": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                        }
                        "22": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                        "23": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                        "24": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                rarity_seeds: Array<{
                                    rarity: string
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                            limited_time: number
                            limited_reward: Array<{
                                rarity_seeds: Array<{
                                    rarity: string
                                    amount: number
                                }>
                            }>
                            multiplier: number
                        }
                        "25": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                        "26": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                        "27": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                        "28": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                seeds: Array<{
                                    id: number
                                    amount: number
                                }>
                            }>
                            reward_cell_type: string
                        }
                        "29": {
                            id: number
                            island_id: number
                            claim_popup_id: number
                            lap: number
                            wait_until_race_ends: number
                            reward: Array<{
                                chest: number
                            }>
                            reward_cell_type: string
                        }
                    }
                }>
            }
            special_breeding: {
                special_breeding: Array<{
                    id: number
                    group_id: number
                    condition1: {
                        id: Array<number>
                    }
                    condition2: {
                        id: Array<number>
                    }
                    result: number
                    maximum: number
                    availability: Array<{
                        from: number
                        to: number
                    }>
                    visible_from_hours: number
                    visible_from: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            maze_island: {
                islands: Array<{
                    id: number
                    tid_name: string
                    name: string
                    availability: {
                        from: number
                        to: number
                    }
                    paths: Array<number>
                    happy_hours: Array<any>
                    currency_id: number
                    pool_size: number
                    pool_time: number
                    initial_points: number
                    clouds: Array<any>
                    cloud_radius: number
                    dragon_radius: number
                    min_level: number
                    building_id: number
                    mobile_tutorial_id: number
                    tutorial_path_id: number
                    tutorial_initial_camera_position: Array<number>
                    tutorial_initial_zoom: number
                    tutorial_final_zoom: number
                    zip_file: string
                    mobile_building_position: Array<number>
                    active_platforms: {
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        canvas: Array<number>
                        windows: Array<number>
                    }
                    help_view_id: number
                    sound_tag: string
                }>
                paths: Array<{
                    id: number
                    color: Array<number>
                    visibility: number
                    dragon_type: number
                    new_badge: number
                    mobile_dragon_scale: number
                    mobile_dragon_offset: Array<number>
                    nodes: Array<number>
                    availability?: {
                        from: number
                        to: number
                    }
                }>
                nodes: Array<{
                    id: number
                    position: Array<number>
                    cost?: {
                        ep: number
                    }
                    reward_id?: number
                    reward?: Array<{
                        chest?: number
                        b?: number
                        f?: number
                        g?: number
                    }>
                    highlighted?: boolean
                    key?: number
                    encounter?: number
                    encounter_skip_cost?: {
                        ep: number
                    }
                }>
                encounters: Array<{
                    id: number
                    enemies: Array<number>
                    speed_up_price_per_hour: number
                    fight_background_id: string
                }>
                enemies: Array<{
                    id: number
                    dragon_ids: Array<number>
                    handicaps: Array<number>
                    view_type: string
                    elements_view_type: Array<any>
                    cooldown: number
                }>
                happy_hours: Array<any>
                actions: Array<{
                    id: number
                    type: string
                    tid_name: string
                    image: string
                    pool_percent: number
                    max_points: number
                    extra_parameters?: {
                        max_time?: number
                        max_level?: number
                        max_production?: number
                        cooldown?: number
                        max_control_level?: number
                    }
                }>
                clouds: Array<{
                    id: number
                    position: Array<number>
                }>
                currencies: Array<{
                    id: number
                    tid_name: string
                    actions: Array<number>
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        g?: number
                        b?: number
                        chest?: number
                        f?: number
                    }>
                    type_id: number
                    double_with_video_ad?: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    title_show_tid: string
                    description_tid: string
                    description_show_tid: string
                    button_tid: string
                    button_claim_double_tid: string
                    animated_dragon: boolean
                    adult_dragon: boolean
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
            }
            tower_island: {
                islands: Array<{
                    id: number
                    analytics_id: string
                    tid_name: string
                    start_ts: number
                    end_ts: number
                    initial_square_id: number
                    tutorial_id: number
                    tutorial_die_result: number
                    pool_size: number
                    pool_time: number
                    initial_points: number
                    currency_id: number
                    min_level: number
                    building_id: number
                    building_position: Array<number>
                    tower_size: Array<number>
                    zip_file: string
                    sound_tag: string
                    canvas_assets_url: string
                    mobile_first_floor_position: Array<number>
                    mobile_floor_height: number
                    mobile_interior_wall_margin: number
                    mobile_final_dragon_scale: Array<number>
                    mobile_final_dragon_position: Array<number>
                    mobile_final_dragon_info_position: Array<number>
                    max_die_roll: number
                    help_view_id: number
                    active_platforms: {
                        ios: Array<number>
                        canvas: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        windows: Array<number>
                    }
                }>
                floors: Array<{
                    id: number
                    island_id: number
                    y: number
                    x_flip: number
                    floor_image: string
                    area: number
                    roll_die_price: {
                        ep: number
                    }
                }>
                squares: Array<{
                    id: number
                    type: string
                    highlight: number
                    x: number
                    y: number
                    island_id: number
                    ixy: string
                    rewards_array?: Array<{
                        chest?: number
                        egg?: number
                    }>
                    wall?: string
                    catapult_destination_square_id?: number
                    piece_reward_id?: number
                }>
                rewards: Array<{
                    id: number
                    dragon_reward_id: number
                    last_piece_cost: number
                    num_pieces: number
                    show_new_badge: number
                    area: number
                    island_id: number
                }>
                happy_hours: Array<{
                    id: number
                    availability: {
                        from: number
                        to: number
                    }
                    island_id: number
                    discount: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                currencies: Array<{
                    id: number
                    tid_name: string
                    actions: Array<number>
                }>
                actions: Array<{
                    id: number
                    type: string
                    tid_name: string
                    image: string
                    pool_percent: number
                    max_points: number
                    extra_parameters?: {
                        max_time?: number
                        cooldown?: number
                        max_control_level?: number
                        max_production?: number
                        max_level?: number
                    }
                }>
            }
            dragon_collections: {
                collections: Array<{
                    id: number
                    tid_name: string
                    dragons: Array<number>
                    num_dragons: number
                    order: number
                    is_new: number
                    reward: {
                        egg?: number
                        c?: number
                        g?: number
                        f?: number
                        x?: number
                        b?: number
                        d_token?: number
                        skin?: number
                    }
                    reward_grade0: Array<number>
                    image: {
                        remote: string
                    }
                    custom_background: {
                        local?: string
                        remote?: string
                    }
                    canvas_image: string
                    canvas_bg: string
                    custom_foreground?: {
                        remote: string
                    }
                    step_background?: Array<{
                        remote: string
                    }>
                    unknown_step_background?: Array<{
                        remote: string
                    }>
                    icon?: {
                        remote: string
                    }
                    tid_family_name?: string
                    availability: any
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                rewards: Array<{
                    id: number
                    reward: {
                        egg?: number
                        c?: number
                        g?: number
                        f?: number
                        x?: number
                        dcp?: number
                        b?: number
                        d_token?: number
                        skin?: number
                        "album_pack_aces.generic"?: number
                    }
                }>
            }
            event_island: {
                islands: Array<{
                    id: number
                    building_id: number
                    mobile_building_position: Array<number>
                    news_to_display_id: Array<number>
                    canvas_news_to_display_id: Array<number>
                    availability: {
                        from: number
                        to: number
                    }
                    timer_interval: Array<{
                        from: number
                        to: number
                    }>
                    timer_position_mobile: Array<number>
                    timer_scale_mobile: number
                    timer_position_canvas: Array<number>
                    timer_scale_canvas: number
                    min_level: number
                    active_platforms: {
                        ios?: Array<number>
                        canvas?: Array<number>
                        android?: Array<number>
                        amazon?: Array<number>
                        windows?: Array<number>
                    }
                    canvas_building_position?: Array<number>
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: {
                        ios: Array<number>
                        android: Array<number>
                        amazon: Array<number>
                        canvas: Array<number>
                        windows: Array<number>
                    }
                }>
            }
            skills: {
                attacks: Array<{
                    id: number
                    name: string
                    name_key: string
                    type: string
                    element: string
                    damage: number
                    ui_damage: number
                    effect_atk?: string
                    effect_def: string
                    effect_sfx: number
                    training_time: number
                    button_style: number
                    special_icon: number
                    skill_id?: number
                }>
                auras: Array<{
                    id: number
                    type: string
                    parameters: {
                        damageReduction?: number
                        criticalProtection?: boolean
                        reflectDamage?: number
                        reflectionsPerTurn?: number
                        deployText?: string
                        deployTextColor?: {
                            r: number
                            g: number
                            b: number
                            a: number
                        }
                        dodgeChance?: number
                        statusIcon?: string
                        effectName?: string
                    }
                    stacks: number
                    active_turns: number
                    aura_vfx?: string
                    aura_center_mode: string
                    level_based_parameters?: number
                }>
                post: Array<{
                    id: number
                    name: string
                    name_key: string
                    effect_vfx: string
                    special_icon: number
                    skill_id: number
                }>
                effects: Array<{
                    id: number
                    effect_type: string
                    target: string
                    hit_chance: number
                    parameters: {
                        damage?: number
                        multiplier?: number
                        minHits?: number
                        maxHits?: number
                        waitTime?: number
                        percentRemovedLife?: number
                        selfDmgMultiplier?: number
                        lifeSteal?: number
                        counterAttackEffectName?: string
                        baseModifier?: number
                        dmgTakenModifier?: number
                        playerEffectName?: string
                        launchableSkills?: Array<number>
                        steps?: number
                        protection?: number
                        damageMultiplier?: number
                        effect_tid?: string
                        healPercent?: number
                        auraIds?: Array<number>
                        perkId?: number
                        percentRemainingLife?: number
                        attackId?: number
                        extraDamagePercentage?: number
                        extraTurnMessageTid?: string
                        effectName?: string
                        counterMessageTid?: string
                        dodgeSkills?: Array<string>
                        bg_vfx_node_name?: string
                        fg_vfx_node_name?: string
                        damage_multiplier?: number
                        max_kills?: number
                        tid_damage_multiplier?: string
                        benchDragonsDamagePercentage?: number
                        bonusDamagePercentage?: number
                        maxBenchTargets?: number
                        benchTargetMode?: string
                        fg_vfx_screen_effectname?: string
                        vfx_text_effectname?: string
                        vfx?: string
                        statusIcon?: string
                        percentageValue?: number
                        dragonLife?: string
                        activeTurns?: number
                        passiveIds?: Array<number>
                        numPassives?: number
                        passiveStacks?: boolean
                        addRandomly?: boolean
                        type?: string
                    }
                    sfx_id?: number
                    vfx_id?: string
                    passive_trigger_type?: Array<string>
                    level_based_parameters?: number
                    status_effect_data?: {
                        statusIcon: string
                        effectName: string
                        effectDescription?: string
                    }
                }>
                skills: Array<{
                    id: number
                    tid_name: string
                    tid_description: string
                    cooldown: number
                    effects: Array<number>
                }>
                passive: Array<{
                    id: number
                    name: string
                    name_key?: string
                    effect_vfx?: string
                    effect_sfx?: number
                    special_icon?: number
                    skill_id?: number
                    world_skill_id?: number
                    can_share: number
                }>
                world_skills: Array<{
                    id: number
                    tid_name: string
                    tid_description: string
                    effects: Array<number>
                }>
                world_effects: Array<{
                    id: number
                    effect_type: string
                    icon: {
                        remote: string
                    }
                    interval_time: number
                    parameters: {
                        resource: {
                            f: number
                        }
                    }
                }>
                level_based_parameters: Array<{
                    id: number
                    level_1: {
                        turn_chances?: Array<{
                            chance: number
                            turns: number
                        }>
                        critical_chances?: {
                            chance?: number
                            damage_multiplier?: number
                        }
                        statusIcon?: string
                        effectName?: string
                        damage?: number
                        multiplier?: number
                        armor?: {
                            baseValue: number
                        }
                    }
                    level_40?: {
                        armor?: {
                            baseValue: number
                            percentageValue: number
                        }
                        turn_chances?: Array<{
                            chance: number
                            turns: number
                        }>
                    }
                    level_70?: {
                        armor?: {
                            percentageValue: number
                        }
                        turn_chances?: Array<{
                            chance: number
                            turns: number
                        }>
                    }
                }>
            }
            tree_of_life: {
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                rarity_summon_time: Array<{
                    rarity: string
                    summon_time_seconds: number
                    summon_time_seconds_10: number
                    summon_time_seconds_40: number
                    summon_time_reawaken: number
                    summon_time_seconds_ngu_aggressive: number
                    summon_time_seconds_ngu_soft: number
                }>
                dragonid_summon_time: Array<{
                    dragon_id: number
                    summon_time_seconds: number
                    summon_time_seconds_10: number
                    summon_time_seconds_40: number
                    summon_time_reawaken: number
                    summon_time_seconds_ngu_aggressive: number
                    summon_time_seconds_ngu_soft: number
                }>
                rarity_seeds: Array<{
                    id: number
                    rarity: string
                    max_rarity_seeds: number
                }>
            }
            tree_of_life_recall: {
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                recall_seeds: Array<{
                    id: number
                    grade: number
                    seeds_received_lv0: number
                    seeds_received_lv1: number
                    seeds_received_lv2: number
                    seeds_received_lv3: number
                    seeds_received_lv4: number
                    seeds_received_lv5: number
                    seeds_received_lv6: number
                    seeds_received_lv7: number
                    seeds_received_lv8: number
                    seeds_received_lv9: number
                    seeds_received_lv10: number
                    seeds_received_lv11: number
                    seeds_received_lv12: number
                    seeds_received_lv13: number
                    seeds_received_lv14: number
                    seeds_received_lv15: number
                    seeds_received_lv16: number
                    seeds_received_lv17: number
                    seeds_received_lv18: number
                    seeds_received_lv19: number
                    seeds_received_lv20: number
                    seeds_received_lv21: number
                    seeds_received_lv22: number
                    seeds_received_lv23: number
                    seeds_received_lv24: number
                    seeds_received_lv25: number
                    seeds_received_lv26: number
                    seeds_received_lv27: number
                    seeds_received_lv28: number
                    seeds_received_lv29: number
                    seeds_received_lv30: number
                    seeds_received_lv31: number
                    seeds_received_lv32: number
                    seeds_received_lv33: number
                    seeds_received_lv34: number
                    seeds_received_lv35: number
                    seeds_received_lv36: number
                    seeds_received_lv37: number
                    seeds_received_lv38: number
                    seeds_received_lv39: number
                    seeds_received_lv40: number
                    seeds_received_lv41: number
                    seeds_received_lv42: number
                    seeds_received_lv43: number
                    seeds_received_lv44: number
                    seeds_received_lv45: number
                    seeds_received_lv46: number
                    seeds_received_lv47: number
                    seeds_received_lv48: number
                    seeds_received_lv49: number
                    seeds_received_lv50: number
                    seeds_received_lv51: number
                    seeds_received_lv52: number
                    seeds_received_lv53: number
                    seeds_received_lv54: number
                    seeds_received_lv55: number
                    seeds_received_lv56: number
                    seeds_received_lv57: number
                    seeds_received_lv58: number
                    seeds_received_lv59: number
                    seeds_received_lv60: number
                    seeds_received_lv61: number
                    seeds_received_lv62: number
                    seeds_received_lv63: number
                    seeds_received_lv64: number
                    seeds_received_lv65: number
                    seeds_received_lv66: number
                    seeds_received_lv67: number
                    seeds_received_lv68: number
                    seeds_received_lv69: number
                    seeds_received_lv70: number
                    seeds_received_lv71: number
                    seeds_received_lv72: number
                    seeds_received_lv73: number
                    seeds_received_lv74: number
                    seeds_received_lv75: number
                    seeds_received_lv76: number
                    seeds_received_lv77: number
                    seeds_received_lv78: number
                    seeds_received_lv79: number
                    seeds_received_lv80: number
                }>
                multiplier_times: Array<{
                    id: number
                    grade: number
                    multiplier_time: number
                }>
            }
            tree_of_life_powerup: {
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                animation: Array<{
                    dragon_grade: number
                    background_color: string
                    dragon_particle_color: string
                    star_particle_color: string
                    dragon_particle_size: number
                    star_particle_size: number
                    camera_shake: number
                    animation_duration: number
                }>
                grades_by_rarity: Array<{
                    id: number
                    rarity: string
                    seeds_per_grade: Array<number>
                    stats_boost: number
                    master_points_boost: number
                }>
                grades_by_dragon: Array<{
                    id: number
                    dragon: number
                    seeds_per_grade: Array<number>
                    stats_boost: number
                    master_points_boost: number
                }>
                visuals: Array<{
                    id: number
                    front: string
                    back: string
                    type: string
                    grade: number
                }>
                multiplier_times: Array<{
                    id: number
                    grade: number
                    multiplier_time: number
                }>
                grade_master_points: Array<{
                    id: number
                    grade: number
                    master_points_multiplier: number
                }>
                rarity_seeds: Array<{
                    max_rarity_seeds_per_grade: Array<number>
                    rarity: string
                }>
                gold_boost: Array<{
                    id: number
                    rarity: string
                    gold_boost_0: number
                    gold_boost_1: number
                    gold_boost_2: number
                    gold_boost_3: number
                    gold_boost_4: number
                    gold_boost_5: number
                    gold_boost_6: number
                }>
            }
            habitat_tokens: {
                multipliers: Array<{
                    id: number
                    applicable_tokens: number
                    multiplier: number
                }>
            }
            max_dragon_levels: {
                max_levels_by_grade: Array<{
                    id: number
                    grade: number
                    max_level: number
                    empower_asset?: string
                }>
            }
            collectibles: {
                rewards: Array<{
                    id: number
                    reward: Array<{
                        chest?: number
                        c?: number
                        f?: number
                        egg?: number
                        b?: number
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                    }>
                    category: string
                    subcategory: number
                }>
            }
            puzzle_island: {
                islands: Array<{
                    id: number
                    start_ts: number
                    end_ts: number
                    boards: Array<number>
                    moves_per_board: number
                    symbols: Array<string>
                    top_reward_queue: Array<number>
                    top_reward_symbols: Array<string>
                    top_reward_goal_modifier: number
                    middle_reward_queue: Array<number>
                    middle_reward_symbols: Array<string>
                    middle_reward_goal_modifier: number
                    bottom_reward_queue: Array<number>
                    bottom_reward_symbols: Array<string>
                    bottom_reward_goal_modifier: number
                    mission_queue1: Array<number>
                    mission_queue2: Array<number>
                    mission_queue3: Array<number>
                    mission_queue4: Array<number>
                    free_moves_amount: number
                    free_moves_period: number
                    building_id: number
                    building_position: Array<number>
                    zip_file: string
                    vfx_asset: string
                    canvas_url: string
                    help_id: number
                    featured_dragons: Array<number>
                    featured_rewards: Array<number>
                    sound_tag: string
                }>
                symbols: Array<{
                    id: number
                    symbol_type: string
                    effect: string
                    asset_name: string
                    probability: number
                }>
                boards: Array<{
                    id: number
                    shape: Array<Array<number>>
                }>
                rewards: Array<{
                    id: number
                    required_pieces: number
                    colors: number
                    reward: {
                        chest?: number
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        egg?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        "album_pack.s"?: number
                        "album_pack.l"?: number
                        "album_pack.m"?: number
                        "album_pack_aces.generic"?: number
                        "album_pack_aces.1"?: number
                        "album_pack_aces.2"?: number
                    }
                    loopable: number
                    new_badge: number
                }>
                missions: Array<{
                    id: number
                    activity_type: string
                    moves: number
                    required_amount: number
                    loopable: number
                    skip_cost: {
                        c: number
                    }
                    specific?: Array<string>
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            dragon_skins: {
                dragon_skins: Array<{
                    id: number
                    dragon_id: number
                    img_name_mobile: string
                    spritesheet_id_canvas?: string
                    img_name_canvas?: string
                    skin_description_tid: string
                    skin_name_tid: string
                    skin_locked_description_tid: string
                    achievement?: {
                        type: string
                        goal: number
                    }
                    items_units_attribute_modifiers_ids?: Array<number>
                    cost?: {
                        c: number
                    }
                    start_ts?: number
                }>
                items_units_attribute_modifiers: Array<{
                    id: number
                    behaviour: string
                    attribute: string
                    value: any
                    only_if_equipped: boolean
                    index?: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            dragon_wars: {
                battles_config: Array<{
                    id: number
                    name: string
                    value: any
                }>
            }
            farm_crops: {
                farm_crops: Array<{
                    id: number
                    seconds: number
                    price: {
                        g: number
                    }
                    values: number
                    xp: number
                    order: number
                    alliance_available: number
                    icon: {
                        remote: string
                    }
                    image: {
                        remote: string
                    }
                    regrow_image: {
                        remote: string
                    }
                    tid_name: string
                    unlock_building_id: number
                    farm_level: number
                    available: number
                }>
            }
            breeding: {
                breeding: Array<{
                    id: number
                    element_one: string
                    element_two: string
                    dragon_id_1: number
                    empower_1: number
                    dragon_id_2: number
                    empower_2: number
                    dragon_id_3: number
                    empower_3: number
                    dragon_id_4?: number
                    empower_4?: number
                    dragon_id_5?: number
                    empower_5?: number
                    dragon_id_6?: number
                    empower_6?: number
                    dragon_id_7?: number
                    empower_7?: number
                }>
                incompatibilities: Array<{
                    id: number
                    element_one: string
                    element_two: string
                }>
                boost: Array<{
                    id: number
                    rarity: string
                    boost_0: number
                    boost_1: number
                    boost_2: number
                    boost_3: number
                    boost_4: number
                    boost_5: number
                    boost_6: number
                    category?: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                soulmates: Array<{
                    id: number
                    dragon_id: number
                    parent_1_id: number
                    parent_2_id: number
                    chance: number
                    level_parents: number
                }>
            }
            liveops_challenges: {
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                challenges: Array<{
                    id: number
                    availability: Array<{
                        from: string
                        to?: string
                        dur?: string
                    }>
                    goals: Array<number>
                    title_tid: string
                    hud_icon_tid: string
                    background: string
                    displayed_reward: number
                    title_color?: string
                    awning_color?: string
                    icon_color?: string
                    ribbon_color?: string
                    user_min_level: number
                    weight?: number
                }>
                goals: Array<{
                    id: number
                    collectibles: Array<number>
                    rewards: number
                    claim_limit: number
                    title_tid: string
                    next_in_chain?: number
                }>
                collectibles: Array<{
                    id: number
                    collectible_type: string
                    item_id: number
                    amount: number
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        b: any
                        chest?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        egg?: number
                        keys?: number
                        g?: number
                        seggs?: Array<{
                            id: number
                            grade: number
                            rank: number
                        }>
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        c?: number
                        f?: number
                        trade_tickets?: Array<{
                            rarity: string
                            amount: number
                            limit: boolean
                        }>
                        skin?: number
                        l_token?: number
                        d_token?: number
                        li_token?: number
                        n_token?: number
                        wd_token?: number
                        f_token?: number
                        p_token?: number
                        perks?: Array<{
                            id: number
                            quantity: number
                        }>
                        pr_token?: number
                        wr_token?: number
                        el_token?: number
                        w_token?: number
                        i_token?: number
                        m_token?: number
                        pu_token?: number
                        kg_token?: number
                        "rank_up_coin.legendary"?: number
                        e_token?: number
                        "rank_up_coin.very_rare"?: number
                        "rank_up_coin.heroic"?: number
                    }>
                    type_id: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    description_tid: string
                    button_tid: string
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
            }
            asset_versioning: {
                dragons: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                generics: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                attacks: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                buildings: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                chests: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                particles: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
                pets: Array<{
                    name: string
                    format: string
                    asset_version: number
                }>
            }
            battle_pass: {
                battle_pass: Array<{
                    id: number
                    type: string
                    availability: Array<{
                        from: string
                        to: string
                    }>
                    nodes: Array<number>
                    extra_node: number
                    daily_goals: Array<number>
                    weekly_goals: Array<number>
                    main_reward_node: number
                    iap_uid: string
                    iap_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur?: string
                            to?: string
                        }>
                    }>
                    webstore_iap_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur: string
                        }>
                    }>
                    iap_elite_uid: string
                    iap_elite_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur: string
                        }>
                    }>
                    webstore_iap_elite_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur: string
                        }>
                    }>
                    iap_elite_upgrade_uid: string
                    iap_elite_upgrade_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur: string
                        }>
                    }>
                    webstore_iap_elite_upgrade_discount_uid: Array<{
                        iap: string
                        availabilities: Array<{
                            from: string
                            dur: string
                        }>
                    }>
                    name_tid: string
                    season_tid: string
                    description_tid: string
                    icon_id: string
                    purchase_popup: number
                    elite_purchase_popup: number
                    asset: string
                    sound_tag: string
                    orbs_producing_habitat_id: number
                    elite_extra_reward: number
                    webstore_iap_uid?: string
                    webstore_iap_uid_product_id?: number
                    webstore_iap_uid_bonus_percentage?: number
                    webstore_iap_discount_uid_product_id?: number
                    webstore_iap_discount_uid_bonus_percentage?: number
                    webstore_iap_elite_uid?: string
                    webstore_iap_elite_uid_product_id?: number
                    webstore_iap_elite_uid_bonus_percentage?: number
                    webstore_iap_elite_discount_uid_product_id?: number
                    webstore_iap_elite_discount_uid_bonus_percentage?: number
                    webstore_iap_elite_upgrade_uid?: string
                    webstore_iap_elite_upgrade_uid_product_id?: number
                    webstore_iap_elite_upgrade_uid_bonus_percentage?: number
                    webstore_iap_elite_upgrade_discount_uid_product_id?: number
                    webstore_iap_elite_upgrade_discount_uid_bonus_percentage?: number
                }>
                purchase_popup: Array<{
                    id: number
                    main_reward_id: number
                    right_reward_id: number
                    small_left_reward_id: number
                    medium_left_reward_id: number
                    big_left_reward_id: number
                    use_right_reward_asset_bundle: number
                    use_big_left_reward_asset_bundle: number
                    table_reward_1_quantity: number
                    table_reward_2_quantity: number
                    table_reward_3_quantity: number
                    table_reward_4_quantity: number
                    table_reward_5_quantity: number
                    left_rewards_description_tid: string
                    main_title_style: string
                    description_elements_style: string
                    more_title_style: string
                    quantity_label_style: string
                    discount: number
                    offer_discount_percentage: number
                    show_on_startup: boolean
                    right_rewards_description_tid?: string
                    popup_frequency?: string
                }>
                purchase_popup_elite: Array<{
                    id: number
                    premium_reward_1_tid: string
                    premium_reward_2_tid: string
                    premium_reward_2_quantity?: number
                    premium_reward_3_tid: string
                    premium_reward_4_tid: string
                    premium_reward_5_tid: string
                    premium_reward_6_tid: string
                    elite_reward_1_tid: string
                    elite_reward_2_tid: string
                    elite_reward_3_tid: string
                    main_title_style: string
                    premium_rewards_description_style: string
                    premium_description_style: string
                    premium_price_style: string
                    premium_discount_price_style: string
                    elite_description_style: string
                    elite_reward_description_style: string
                    elite_price_style: string
                    elite_discount_price_style: string
                    offer_discount_percentage: number
                    badge_tid: string
                    show_on_startup: boolean
                }>
                nodes: Array<{
                    id: number
                    completion_score: number
                    premium_reward: number
                    free_reward?: number
                    limit_bp_discount?: boolean
                }>
                extra_nodes: Array<{
                    id: number
                    iteration_score: number
                    free_reward: number
                    premium_reward: number
                    elite_reward: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                elite_pass: Array<{
                    id: number
                    name: string
                    value: number
                }>
                goals: Array<{
                    id: number
                    collectible_actions: Array<number>
                    reward: number
                    eligibility?: {
                        week: number
                    }
                    icon_id: string
                }>
                collectible_actions: Array<{
                    id: number
                    amount: number
                    type: string
                    rules?: {
                        all_of_elements?: Array<string>
                        rarity?: string
                        level?: number
                        parents_elements?: Array<string>
                    }
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        b?: number
                        g?: number
                        chest?: number
                        pp?: number
                        egg?: number
                        c?: number
                        f?: number
                        "rank_up_coin.common"?: number
                        oph_token?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        perks?: Array<{
                            id: number
                            quantity: number
                        }>
                        w_token?: number
                        li_token?: number
                        i_token?: number
                        pr_token?: number
                        f_token?: number
                        wr_token?: number
                        p_token?: number
                        l_token?: number
                        wd_token?: number
                        e_token?: number
                        el_token?: number
                        d_token?: number
                        m_token?: number
                        pu_token?: number
                        n_token?: number
                        skin?: number
                        trade_tickets?: Array<{
                            rarity: string
                            amount: number
                            limit: boolean
                        }>
                        rarity_seeds?: Array<{
                            rarity: string
                            amount: number
                        }>
                        "album_pack.s"?: number
                        "album_pack.m"?: number
                        "album_pack.l"?: number
                        "album_pack.xl"?: number
                        "album_pack_aces.4"?: number
                        "album_pack_aces.1"?: number
                        "album_pack_aces.3"?: number
                        "album_pack_aces.2"?: number
                        "album_pack_aces.5"?: number
                        "album_pack_aces.generic"?: number
                        "rank_up_coin.legendary"?: number
                        "pet_food_pack.s"?: number
                        "pet_food_pack.m"?: number
                        "pet_food_pack.l"?: number
                    }>
                    type_id: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    description_tid: string
                    button_tid: string
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
            }
            dragon_mastery: {
                goals: Array<{
                    id: number
                    collectible_actions: Array<number>
                    rewards: number
                    master_points_earned: number
                    next_in_chain: number
                    title_tid: string
                    desc_tid: string
                    task_type: string
                    task_increase: string
                }>
                collectible_actions: Array<{
                    id: number
                    type: string
                    rules: {
                        rarity?: string
                        all_of_elements?: Array<string>
                        parents_elements?: Array<string>
                    }
                    amount: number
                }>
                loops: Array<{
                    id: number
                    loop: number
                    task_requirements: {
                        low: number
                        mid: number
                        high: number
                    }
                    point_increase: number
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        chest?: number
                        egg?: number
                    }>
                    type_id: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    title_show_tid: string
                    description_tid: string
                    description_show_tid: string
                    button_tid: string
                    button_claim_double_tid: string
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
            }
            runner_island: {
                islands: Array<{
                    id: number
                    start_ts: number
                    end_ts: number
                    building_id: number
                    building_position: Array<number>
                    dragon_id: number
                    dragon_offset: Array<number>
                    dragon_scale: number
                    runner_dragon_asset?: string
                    zip_file: string
                    help_id: number
                    run_cost: number
                    sound_tag: string
                    mission_pool: Array<number>
                    sections: Array<number>
                    building_tooltip_position: Array<number>
                    building_timer_position: Array<number>
                    milestone_rewards: Array<number>
                }>
                sections: Array<{
                    id: number
                    starting_point: number
                    speed: number
                    level_chunks: Array<{
                        id: number
                        weight: number
                    }>
                    rewards: Array<number>
                    background_layers: Array<{
                        texture: string
                        speed: number
                        positionY: number
                    }>
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                obstacles: Array<{
                    id: number
                    texture: string
                    length: number
                    is_tall: boolean
                }>
                level_chunks: Array<{
                    id: number
                    lane_1: any
                    lane_2: Array<{
                        reward?: string
                        position: number
                        jump?: boolean
                        obstacle_id?: number
                    }>
                    lane_3: Array<{
                        reward?: string
                        position: number
                        jump?: boolean
                        obstacle_id?: number
                    }>
                    length: number
                }>
                level_rewards: Array<{
                    id: number
                    resource_id: number
                    type: string
                    custom_texture?: string
                }>
                missions: Array<{
                    id: number
                    type: string
                    goal_points: number
                    price: number
                    price_increment: number
                    pool_size: number
                    spawn_time: number
                    collect_chance: number
                    collect_chance_modifier: number
                    energy: number
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        chest?: number
                        ep?: number
                        egg?: number
                        c?: number
                        seeds?: Array<{
                            id: number
                            amount: number
                        }>
                        f?: number
                        g?: number
                        en_runner?: number
                        f_token?: number
                        pu_token?: number
                        i_token?: number
                        wr_token?: number
                        el_token?: number
                        wd_token?: number
                        m_token?: number
                        w_token?: number
                        pr_token?: number
                        e_token?: number
                        d_token?: number
                        p_token?: number
                        li_token?: number
                        l_token?: number
                    }>
                    type_id: number
                    double_with_video_ad?: boolean
                    premium_rewards?: Array<number>
                    new_badge?: Array<number>
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    title_show_tid: string
                    description_tid: string
                    description_show_tid: string
                    button_tid: string
                    button_claim_double_tid: string
                    animated_dragon: boolean
                    adult_dragon: boolean
                }>
                rewards_tiers: Array<{
                    name: string
                    value: any
                }>
                milestones: Array<{
                    id: number
                    positionX: number
                    positionY: number
                    points: number
                    texture: string
                    animated_asset: string
                }>
                milestone_rewards: Array<{
                    id: number
                    points: number
                    reward_id: number
                    highlighted: number
                    focused: number
                }>
                mission_pool: Array<{
                    id: number
                    buy_all_discounts: number
                    missions: Array<number>
                    price: number
                    price_increment: number
                }>
            }
            perks: {
                abilities: Array<{
                    id: number
                    type: string
                    parameters: {
                        value: number
                        passiveSkillId?: number
                    }
                    asset: {
                        remote: string
                    }
                }>
                parameters: Array<{
                    id: number
                    name: string
                    value: any
                }>
                perks: Array<{
                    id: number
                    type: string
                    name_tid: string
                    description_tid: string
                    abilities: Array<number>
                    max_perks: Array<{
                        rarity: string
                        max: number
                    }>
                    asset: {
                        remote: string
                    }
                    rarity_level: number
                    destroy_cost: Array<{
                        g: number
                    }>
                    store_cost: Array<{
                        c: number
                    }>
                    offer_id?: number
                }>
                slots: Array<{
                    id: number
                    type: string
                    available_for_dragons: {}
                    asset: {
                        remote: string
                    }
                    offer_id?: number
                }>
                rewards: Array<{
                    id: number
                    reward: Array<{
                        perks: Array<{
                            id: number
                            quantity: number
                        }>
                    }>
                    type_id: number
                }>
                rewards_config: Array<{
                    id: number
                    background: string
                    title_tid: string
                    title_show_tid: string
                    description_tid: string
                    description_show_tid: string
                    button_tid: string
                    button_claim_double_tid: string
                    animated_dragon: boolean
                    adult_dragon: boolean
                }>
            }
        }
    }
}
