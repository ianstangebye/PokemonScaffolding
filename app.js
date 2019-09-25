const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, resp)=> {
//     resp.send('I can has pokemon').end();
// });

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use((req, resp, next)=>{
//     let authenticated = true;

//     if(authenticated){
//         next();
//     } else {
//         res.json({
//             error: 'not authenticated'
//         })
//     }
// });

const PokemonRoutes = require('./routes/pokemon');

app.use('/api/v1/pokemon', PokemonRoutes);

app.listen(port, ()=> {
    console.log(`serveing runnin on port ${port}...`);
    
});