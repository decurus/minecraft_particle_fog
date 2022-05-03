import { BlockLocation, Location, MinecraftBlockTypes, MolangVariableMap, world, } from "mojang-minecraft";
import Utilities from "./Utilities.js";
const SPAWNRADIUS = 250;
const Y_FLOOR = 50;
const Y_CEILING = 100;
const FOGSPAWNDISTANCE = 5;
let isRaining = false;
let rainTime = 0;
let minRainTime = 120 * 20; // 120 seconds times 20 fps
function gameTick() {
    if (isRaining === true) {
        rainTime++;
    }
}
function onWeatherChanged(weather) {
    let overworld = world.getDimension("overworld");
    if (weather.raining === false && weather.lightning === false) {
        isRaining = false;
        if (rainTime > minRainTime)
            startFog();
    }
    else {
        isRaining = true;
        rainTime = 0;
    }
}
function onChatMessage(chatEvent) {
    if (chatEvent.message === "runfog") {
        startFog();
        chatEvent.sendToTargets = false;
    }
}
function startFog() {
    let overworld = world.getDimension("overworld");
    Utilities.say("fog is starting");
    for (let p of overworld.getPlayers()) {
        if (p.dimension !== overworld)
            continue;
        let center = p.location;
        let start_x = Math.floor(center.x - SPAWNRADIUS / 2);
        let end_x = Math.floor(center.x + SPAWNRADIUS / 2);
        let start_y = Y_FLOOR;
        let end_y = Y_CEILING;
        let start_z = Math.floor(center.z - SPAWNRADIUS / 2);
        let end_z = Math.floor(center.z + SPAWNRADIUS / 2);
        //Utilities.say(
        //  "Positions: sx" + start_x + " ex " + end_x + " sy " + start_y + " ey " + end_y + " sz " + start_z + " ez " + end_z
        //);
        for (let x = start_x; x < end_x; x++) {
            if (Math.abs(Math.floor(x % FOGSPAWNDISTANCE)) !== 0)
                continue;
            for (let z = start_z; z < end_z; z++) {
                if (Math.abs(Math.floor(z % FOGSPAWNDISTANCE)) !== 0)
                    continue;
                for (let y = start_y; y < end_y; y++) {
                    let block = overworld.getBlock(new BlockLocation(x, y, z));
                    if (block.type !== MinecraftBlockTypes.water)
                        continue;
                    let blockAbove = overworld.getBlock(new BlockLocation(x, y + 1, z));
                    if (blockAbove.type !== MinecraftBlockTypes.air)
                        continue;
                    overworld.spawnParticle("noisebytes:fog", new Location(x + Math.random() * 2, y + Math.random() * 2, z + Math.random() * 2), new MolangVariableMap());
                }
            }
        }
    }
}
world.events.tick.subscribe(gameTick);
world.events.weatherChange.subscribe(onWeatherChanged);
world.events.beforeChat.subscribe(onChatMessage);
