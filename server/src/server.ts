import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Aúncio 1'},
        { id: 2, name: 'Aúncio 2'},
        { id: 3, name: 'Aúncio 3'},
        { id: 4, name: 'Aúncio 4'},
        { id: 5, name: 'Aúncio 5'},
    ]);
})

app.listen(3333)