const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000, () => console.log("All working"));
app.use(express.static('public'));
app.use(express.json({ 'limit': '1024kb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const dbItems = database.getAllData();
    database.insert({
        ...data,
        _id: dbItems.length
    });
    console.log(data);
    response.json({ data });
});

app.get('/api', (_, response) => {
    const dbItems = database.getAllData();
    response.json(dbItems);
})