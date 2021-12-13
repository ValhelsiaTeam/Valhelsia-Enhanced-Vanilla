onEvent('player.logged_in', function (event) {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start')
    
    event.server.runCommandSilent(`/playerstats ${event.player.name} points 3`)

    event.player.tell(Text.translate('valhelsia.first_start_message'))
    event.player.tell(Text.translate('valhelsia.getting_started_guide').blue().underlined().click('https://wiki.valhelsia.net/modpacks/valhelsia-enhanced-vanilla/getting-started-guide'))
  }
})