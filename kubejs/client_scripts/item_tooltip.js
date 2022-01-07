// priority: 0

onEvent('item.tooltip', tooltip => {
  tooltip.add(['additionaladditions:rose_gold_axe', 'minecraft:diamond_axe', 'minecraft:netherite_axe', 'dragonloot:dragon_axe', 'betterend:terminite_axe', 'betterend:aeternium_axe'], ["", Text.of(" Allow to cut the whole tree ✓").green()]),
  tooltip.add(['minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe', 'minecraft:golden_axe', 'betterend:thallasium_axe', 'techreborn:bronze_axe', 'techreborn:ruby_axe', 'techreborn:peridot_axe', 'techreborn:sapphire_axe', 'ae2:nether_quartz_axe', 'ae2:certus_quartz_axe'], ["", Text.of(" Don't allow to cut the whole tree ✗").red()])
})