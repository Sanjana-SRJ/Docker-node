const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    return res.json({message: "Hi my name is Sanjana new"})
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})