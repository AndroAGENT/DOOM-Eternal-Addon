import { world, Vector, ItemStack, MinecraftEntityTypes } from "@minecraft/server";

function firePlasma(player) {
  const plasma = world.getDimension("overworld").spawnEntity("dea:plasma", player.location);
  const viewVector = new Vector(player.viewVector.x, player.viewVector.y, player.viewVector.z);
  plasma.setVelocity(viewVector.scale(2));
}

world.events.beforeItemUse.subscribe((event) => {
  const player = event.source;
  const item = event.item;

  if (item.id === "minecraft:stick") { // Change to your custom item ID
    firePlasma(player);
  }
});