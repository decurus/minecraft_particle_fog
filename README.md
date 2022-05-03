# minecraft_particle_fog

Fog particle effects for Minecraft

![fog_1](https://user-images.githubusercontent.com/25495079/166561036-379c942b-c8a3-4240-b137-601161f963c9.PNG)
![fog_2](https://user-images.githubusercontent.com/25495079/166561039-f9dd3ba5-26b3-4507-b3e8-03025001cebc.PNG)
![fog_3](https://user-images.githubusercontent.com/25495079/166561041-82b5cf00-0d84-44ff-acba-c1b1f0cccd2b.PNG)

Note: This is just a fun side project. No garantue for updates, bugfixes or whatever. I will work on it, when I work on it. Plus: Its open source.
If you have any suggestions, feel free to reach out.

## How to install
All Add-Ons are located in:

> C:\Users\---username---\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang

1. Copy the folder fog_behavior into the folder behavior_packs
2. Copy the folder fog_resources into the folder resource_packs
3. In your world, enable experimental features
4. Now enable GameTest-Framework and Molang-Functions
5. Add the behavior pack to your world from the menu (the resource pack should be added automatically)

When you want to use the addon you have to enable the GameTest-Framework and Molang-Functions in experimental features.
Now you can add the behaviour pack, the resource pack should be added automatically.

## What does it do?
Every time the rain stops after going on for at least two minutes, the fog will start.
The fog only starts in the proximity of the players and only on water directly exposed to air.
The fog will last for about 2 minutes and small bodies of water may not be affected.

## Can I start it manually?
Yes, just type "runfog" in chat. 
This is not a registered command, so dont use the "/".
This is because by the time of writing it does not seem like you can register custom commands.

## But what does it do exactly?
As soon as the script starts, it iterates throu all players. 
Then it checks every 5 block in a 125 block radius on a high level between 50 and 100 blocks for water (this restriction is to save computing resources).
If it finds water, it checks wether directly above it there is air. 
If so, then the particle effect will be started within a radius of approximately 3 blocks.

