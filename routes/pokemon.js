const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemonModel');


router.get('/', (req, resp)=>{
    // const apiResp = new ApiResponse;
    // apiResp.setData(['Bulbasaur', 'Pikachu', 'Charmander', 'Squirtle']);
    const apiResp = pokemon.getPokemon();
    resp.json(apiResp).end();
});

router.post('/add', (req, resp)=>{
    resp.send('adding a pokemon');
});

router.put('/update', (req, resp)=>{
    resp.send('updating a pokemon');
});

router.delete('/delete', (req, resp)=>{
    resp.send('deleting a pokemon');
});

module.exports = router;