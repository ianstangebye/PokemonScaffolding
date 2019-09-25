const ApiResponse = require('./api-response')

const pikachu = {
    pokemonId: 1,
    name: "Pichu",
    species: "Tiny Mouse Pokémon",
    height: "0.3 m",
    weight: "2.0 kg",
    abilities: ["Static", "Lightning Rod"],
    type: "ELECTRIC",
    sprites: [{
        url: "https://img.pokemondb.net/sprites/sun-moon/shiny/pichu.png",
        name: "Shiny"
    },{
        url: "https://img.pokemondb.net/sprites/sun-moon/normal/pichu.png",
        name: "Normal"
    }],
    baseStats: {
        HP: 20,
        Attack: 40,
        Defense: 15,
        SpAtk: 35,
        SpDef: 35,
        Speed: 60,
        Total: 205
    }
}


class Pokemon{

    getPokemon(){
        const apiResp = new ApiResponse;
        // apiResp.setData(['Bulbasaur', 'Pikachu', 'Charmander', 'Squirtle']);
        apiResp.setData([pikachu]);
        return apiResp;
    }

    addPokemon(){

    }

    updatePokemon(){

    }

    deletePokemon(){

    }
}



module.exports = new Pokemon();