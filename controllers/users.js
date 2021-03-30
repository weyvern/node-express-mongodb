import client, { ObjectId } from '../db/mongo.js';
client.connect();

export const getAllUsers = async (req, res) => {
  try {
    const results = await client.db('wd012').collection('users').find().limit(100).toArray();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await client
      .db('wd012')
      .collection('users')
      .findOne({ _id: { $eq: ObjectId(id) } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const results = await client.db('wd012').collection('users').insertOne({
      cat: 'Felix'
    });
    res.json(results.ops[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
