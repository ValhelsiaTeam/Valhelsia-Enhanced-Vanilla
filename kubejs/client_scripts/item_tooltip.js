// priority: 0

onEvent('item.tooltip', tooltip => {
  // Axes that can fell trees (FallingTree mod):
  tooltip.add([
    'additionaladditions:rose_gold_axe', 
    'minecraft:diamond_axe', 
    'minecraft:netherite_axe', 
    'dragonloot:dragon_axe', 
    'betterend:terminite_axe', 
    'betterend:aeternium_axe'
  ], ["", Text.translate('valhelsia.can_fell_tree_tooltip').green()])

  // Axes that can't fell trees (FallingTree mod):
  tooltip.add([
    'minecraft:wooden_axe', 
    'minecraft:stone_axe', 
    'minecraft:iron_axe',
    'minecraft:golden_axe', 
    'betterend:thallasium_axe', 
    'techreborn:bronze_axe', 
    'techreborn:ruby_axe', 
    'techreborn:peridot_axe', 
    'techreborn:sapphire_axe', 
    'ae2:nether_quartz_axe', 
    'ae2:certus_quartz_axe'
  ], ["", Text.translate('valhelsia.cannot_fell_tree_tooltip').red()])

  // Description of the Scarecrows (Mob Scarecrows mod):
  tooltip.add('mobscarecrow:scarecrow', [Text.translate("valhelsia.mob_scarecrow_tooltip")])

  tooltip.add('mobscarecrow:creeper_scarecrow', [Text.translate("valhelsia.creeper_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:creeper_scarecrow_statue', [Text.translate("valhelsia.creeper_scarecrow_statue_tooltip")])

  tooltip.add('mobscarecrow:skeleton_scarecrow', [Text.translate("valhelsia.skeleton_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:skeleton_scarecrow_statue', [Text.translate("valhelsia.skeleton_scarecrow_statue_tooltip")])

  tooltip.add('mobscarecrow:spider_scarecrow', [Text.translate("valhelsia.spider_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:spider_scarecrow_statue', [Text.translate("valhelsia.spider_scarecrow_statue_tooltip")])

  tooltip.add('mobscarecrow:zombie_scarecrow', [Text.translate("valhelsia.zombie_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:zombie_scarecrow_statue', [Text.translate("valhelsia.zombie_scarecrow_statue_tooltip")])

  tooltip.add('mobscarecrow:turtle_scarecrow', [Text.translate("valhelsia.turtle_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:turtle_scarecrow_statue', [Text.translate("valhelsia.turtle_scarecrow_statue_tooltip")])

  tooltip.add('mobscarecrow:endermite_scarecrow', [Text.translate("valhelsia.endermite_scarecrow_plushie_tooltip")])
  tooltip.add('mobscarecrow:endermite_scarecrow_statue', [Text.translate("valhelsia.endermite_scarecrow_statue_tooltip")])
})