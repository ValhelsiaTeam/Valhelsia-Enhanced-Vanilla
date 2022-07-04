// priority: 0
// Valhelsia: Enhanced Vanilla

/**
 * @file REI Blacklist for Valhelsia: Enhanced Vanilla.
 * 
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *  
 */

/**
 * REI Item Hiding Event Handler
 */
onEvent('rei.hide.items', event => {
  event.hide([
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'minecraft:debug_stick',
    'decorative_blocks:rocky_dirt',
    'goblintraders:apple_cape',
    'thonkutil:minecon_2011_cape',
    'thonkutil:minecon_2012_cape',
    'thonkutil:minecon_2013_cape',
    'thonkutil:minecon_2015_cape',
    'thonkutil:minecon_2016_cape',
    'thonkutil:bacon_cape',
    'thonkutil:one_millionth_cape',
    'thonkutil:dannybstyle_cape',
    'thonkutil:julian_clark_cape',
    'thonkutil:mrmessiah_cape',
    'thonkutil:prismarine_cape',
    'thonkutil:birthday_cape',
    'thonkutil:translator_cape',
    'thonkutil:chinese_translator_cape',
    'thonkutil:japanese_translator_cape',
    'thonkutil:scrolls_champion_cape',
    'thonkutil:cobalt_cape',
    'thonkutil:mojira_moderator_cape',
    'thonkutil:mapmaker_cape',
    'thonkutil:turtle_cape',
    'thonkutil:migration_cape',
    'thonkutil:founders_cape',
    'thonkutil:pan_cape',
    'thonkutil:hero_cape',
    'thonkutil:christmas_2010_cape',
    'thonkutil:new_year_2011_cape',
    'thonkutil:first_birthday_cape',
    'thonkutil:optifine_cape',
    'thonkutil:better_optifine_cape',
    'thonkutil:animated_christmas_2010_cape',
    'thonkutil:animated_christmas_2010_cape',
    'thonkutil:mojang_classic_cape',
    'thonkutil:mojang_cape',
    'thonkutil:mojang_studios_cape',
    'kubejs:dummy_fluid_item',
    'immersive_portals:portal_helper',
    Item.of('immersive_portals:command_stick', '{command:"/portal delete_portal",descriptionTranslationKeys:["imm_ptl.command_desc.delete_portal"],nameTranslationKey:"imm_ptl.command.delete_portal"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal remove_connected_portals",descriptionTranslationKeys:["imm_ptl.command_desc.remove_connected_portals"],nameTranslationKey:"imm_ptl.command.remove_connected_portals"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal eradicate_portal_cluster",descriptionTranslationKeys:["imm_ptl.command_desc.eradicate_portal_cluster"],nameTranslationKey:"imm_ptl.command.eradicate_portal_cluster"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal complete_bi_way_bi_faced_portal",descriptionTranslationKeys:["imm_ptl.command_desc.complete_bi_way_bi_faced_portal"],nameTranslationKey:"imm_ptl.command.complete_bi_way_bi_faced_portal"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal complete_bi_way_portal",descriptionTranslationKeys:["imm_ptl.command_desc.complete_bi_way_portal"],nameTranslationKey:"imm_ptl.command.complete_bi_way_portal"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal set_portal_nbt {bindCluster:true}",descriptionTranslationKeys:["imm_ptl.command_desc.bind_cluster"],nameTranslationKey:"imm_ptl.command.bind_cluster"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal move_portal 0.5",descriptionTranslationKeys:["imm_ptl.command_desc.move_portal_front"],nameTranslationKey:"imm_ptl.command.move_portal_front"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal move_portal -0.5",descriptionTranslationKeys:["imm_ptl.command_desc.move_portal_back"],nameTranslationKey:"imm_ptl.command.move_portal_back"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal move_portal_destination 0.5",descriptionTranslationKeys:["imm_ptl.command_desc.move_portal_destination_front"],nameTranslationKey:"imm_ptl.command.move_portal_destination_front"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal move_portal_destination -0.5",descriptionTranslationKeys:["imm_ptl.command_desc.move_portal_destination_back"],nameTranslationKey:"imm_ptl.command.move_portal_destination_back"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal rotate_portal_rotation_along x 15",descriptionTranslationKeys:["imm_ptl.command_desc.rotate_x"],nameTranslationKey:"imm_ptl.command.rotate_x"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal rotate_portal_rotation_along y 15",descriptionTranslationKeys:["imm_ptl.command_desc.rotate_y"],nameTranslationKey:"imm_ptl.command.rotate_y"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal rotate_portal_rotation_along z 15",descriptionTranslationKeys:["imm_ptl.command_desc.rotate_z"],nameTranslationKey:"imm_ptl.command.rotate_z"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal set_portal_nbt {unbreakable:true}",descriptionTranslationKeys:["imm_ptl.command_desc.make_unbreakable"],nameTranslationKey:"imm_ptl.command.make_unbreakable"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal set_portal_nbt {fuseView:true}",descriptionTranslationKeys:["imm_ptl.command_desc.make_fuse_view"],nameTranslationKey:"imm_ptl.command.make_fuse_view"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal set_portal_nbt {doRenderPlayer:false}",descriptionTranslationKeys:["imm_ptl.command_desc.disable_rendering_yourself"],nameTranslationKey:"imm_ptl.command.disable_rendering_yourself"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal debug isometric_enable 50",descriptionTranslationKeys:["imm_ptl.command_desc.enable_isometric"],nameTranslationKey:"imm_ptl.command.enable_isometric"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal debug isometric_disable",descriptionTranslationKeys:["imm_ptl.command_desc.disable_isometric"],nameTranslationKey:"imm_ptl.command.disable_isometric"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal create_connected_rooms roomSize 6 4 6 roomNumber 5",descriptionTranslationKeys:["imm_ptl.command_desc.create_5_connected_rooms"],nameTranslationKey:"imm_ptl.command.create_5_connected_rooms"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal debug accelerate 50",descriptionTranslationKeys:["imm_ptl.command_desc.accelerate50"],nameTranslationKey:"imm_ptl.command.accelerate50"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal debug accelerate 200",descriptionTranslationKeys:["imm_ptl.command_desc.accelerate200"],nameTranslationKey:"imm_ptl.command.accelerate200"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal set_portal_nbt {teleportChangesGravity:true}",descriptionTranslationKeys:["imm_ptl.command_desc.enable_gravity_change"],nameTranslationKey:"imm_ptl.command.enable_gravity_change"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal goback",descriptionTranslationKeys:["imm_ptl.command_desc.goback"],nameTranslationKey:"imm_ptl.command.goback"}'),
    Item.of('immersive_portals:command_stick', '{command:"/portal wiki",descriptionTranslationKeys:["imm_ptl.command_desc.show_wiki"],nameTranslationKey:"imm_ptl.command.show_wiki"}'),
    'decorative_blocks:blockstate_copy_item',
    'bedspreads:decorated_bed',

    // Architect's Palette
    'architects_palette:charcoal_block',

    // Additional Additions
    'additionaladditions:gilded_netherite_helmet',
    'additionaladditions:gilded_netherite_chestplate',
    'additionaladditions:gilded_netherite_leggings',
    'additionaladditions:gilded_netherite_boots',
    'additionaladditions:gilded_netherite_sword',
    'additionaladditions:gilded_netherite_pickaxe',
    'additionaladditions:gilded_netherite_axe',
    'additionaladditions:gilded_netherite_shovel',
    'additionaladditions:gilded_netherite_hoe',
    'additionaladditions:gold_ring',

    // Better End
    'betterend:charcoal_block',

    // Blockus
    'blockus:amethyst_bricks',
    'blockus:amethyst_brick_stairs',
    'blockus:amethyst_brick_slab',
    'blockus:amethyst_brick_wall',
    'blockus:chiseled_amethyst',
    'blockus:ice_bricks',
    'blockus:ice_brick_wall',
    'blockus:polished_amethyst',
    'blockus:polished_amethyst_stairs',
    'blockus:polished_amethyst_slab',
    'blockus:snow_bricks',
    'blockus:snow_brick_stairs',
    'blockus:snow_brick_slab',
    'blockus:snow_brick_wall',
    'blockus:ender_block',
    'blockus:legacy_bricks',
    'blockus:legacy_coal_block',
    'blockus:legacy_cobblestone',
    'blockus:legacy_crying_obsidian',
    'blockus:legacy_diamond_block',
    'blockus:legacy_explosion_proof_gold_block',
    'blockus:legacy_first_cobblestone',
    'blockus:legacy_first_grass_block',
    'blockus:legacy_glowing_obsidian',
    'blockus:legacy_glowstone',
    'blockus:legacy_gold_block',
    'blockus:legacy_grass_block',
    'blockus:legacy_gravel',
    'blockus:legacy_iron_block',
    'blockus:legacy_lapis_block',
    'blockus:legacy_leaves',
    'blockus:legacy_log',
    'blockus:legacy_mossy_cobblestone',
    'blockus:legacy_nether_reactor_core',
    'blockus:legacy_planks',
    'blockus:legacy_sapling',
    'blockus:legacy_sponge',
    'blockus:legacy_stonecutter',

    // Farmer's Delight
    'farmersdelight:tree_bark',

    // Harvest Scythes
    'harvest_scythes:creative_machete',
    'harvest_scythes:creative_scythe',

    // Oxidized
    'oxidized:copper_nugget',
    'oxidized:rose_gold_sword',
    'oxidized:rose_gold_pickaxe',
    'oxidized:rose_gold_axe',
    'oxidized:rose_gold_shovel',
    'oxidized:rose_gold_hoe',

    // Twigs
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
  ]);
});

/**
 * REI Fluid Hiding Event Handler
 */
onEvent('rei.hide.fluids', event => {
  // Hide Fluids.
  //event.hide([
  // // Placeholder - none for now.
  //]);
});