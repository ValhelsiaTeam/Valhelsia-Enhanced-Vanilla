onEvent('player.logged_in', function (event) {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start')
    
    event.server.runCommandSilent(`/playerstats ${event.player.name} points 5`)
  }
})