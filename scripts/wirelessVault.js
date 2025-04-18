const wirelessVault = extend(CoreBlock, "wireless-vault", {
  canReplace(other) {
    return (
      this.super$canReplace(other) ||
      (other instanceof StorageBlock && wirelessVault.size >= other.size) ||
      (other instanceof CoreBlock && wirelessVault.size >= other.size)
    );
  },
  canPlaceOn(tile, team) {
    if (tile == null) return false;
    let core = team.core();
    if (
      core == null ||
      (!Vars.state.rules.infiniteResources &&
        !core.items.has(wirelessVault.requirements))
    )
      return false;
    return (
      (tile.block() instanceof StorageBlock &&
        wirelessVault.size >= tile.block().size) ||
      (tile.block() instanceof CoreBlock &&
        wirelessVault.size >= tile.block().size)
    );
  },
});
