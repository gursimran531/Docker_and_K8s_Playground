const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = 'mongodb://admin:password@db:27017/';
const client = new MongoClient(mongoUrl);
let collection;

async function connectDb() {
  await client.connect();
  const db = client.db('todoDB');
  collection = db.collection('tasks');
}
connectDb().catch(console.error);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await collection.find().toArray();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = req.body;
  const result = await collection.insertOne(task);
  res.json(result);
});

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const result = await collection.deleteOne({ _id: require('mongodb').ObjectId(id) });
  res.json(result);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
