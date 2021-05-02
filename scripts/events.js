Events.on(WorldLoadEvent, (e) => {
  const rules = Vars.state.rules;
  rules.deconstructRefundMultiplier = 1;
  rules.waitEnemies = true;
  rules.enemyCoreBuildRadius = 320;
});
