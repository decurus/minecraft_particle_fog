import { world } from "mojang-minecraft";
export default class Utilities {
    static say(word) {
        let overworld = world.getDimension("overworld");
        overworld.runCommand("say " + word);
    }
}
