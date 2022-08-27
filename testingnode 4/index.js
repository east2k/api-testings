const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000, () => console.log("Test Working"));
app.use(express.static('public'));
app.use(express.json({ 'limit': '1024kb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const dbItems = database.getAllData()
    database.insert({
        ...data,
        _id: dbItems.length
    });
    response.json({ data });
})

app.get('/api', (_, response) => {
    const dbItems = database.getAllData()
    response.json({ data: dbItems });
})

app.delete('/api', (request, response) => {
    const id = request.body;
    const dbItems = database.getAllData()
    console.log(id);
    database.remove({
        _id: id.id
    });
    response.json({ data: dbItems });
})

app.put('/api', (request, response) => {
    const data = request.body;
    const dbItems = database.getAllData();
    const id = data.id;
    const chosen = data.data;
    const updateInfo = data.updateInfo;
    console.log(id, chosen, updateInfo);
    database.update({ _id: id }, { $set: { [chosen]: updateInfo } });
    response.json({ data: dbItems });
})

// app.get('/api', (request, response) => {
// })
