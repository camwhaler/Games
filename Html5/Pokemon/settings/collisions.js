FullScreenPokemon.FullScreenPokemon.settings.collisions = {
    "groupNames": ["Solid", "Character"],
    "keyGroupName": "groupType",
    "keyTypeName": "title",
    "globalCheckGenerators": {
        "Character": FullScreenPokemon.FullScreenPokemon.prototype.generateCanThingCollide,
        "Solid": FullScreenPokemon.FullScreenPokemon.prototype.generateCanThingCollide
    },
    "hitCheckGenerators": {
        "Character": {
            "Character": FullScreenPokemon.FullScreenPokemon.prototype.generateIsCharacterTouchingCharacter,
            "Solid": FullScreenPokemon.FullScreenPokemon.prototype.generateIsCharacterTouchingSolid
        }
    },
    "hitCallbackGenerators": {
        "Character": {
            "Solid": FullScreenPokemon.FullScreenPokemon.prototype.generateHitCharacterThing,
            "Character": FullScreenPokemon.FullScreenPokemon.prototype.generateHitCharacterThing
        }
    }
};