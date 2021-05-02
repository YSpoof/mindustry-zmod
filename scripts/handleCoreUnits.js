Events.on(ContentInitEvent, () => {
  Vars.content.blocks().each(
    (coreBlock) => coreBlock instanceof CoreBlock,
    (coreBlock) => {
      let unit = coreBlock.unitType;

      // Allow respawn in above other units/turrets
      unit.coreUnitDock = true;

      // Un-nerf build damage
      unit.weapons.each((unitWeapon) => {
        unitWeapon.bullet.buildingDamageMultiplier = 1;
      });
    }
  );
});
