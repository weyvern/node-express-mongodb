import express from 'express';
import users from './routes/users.js';
import 'dotenv/config.js';

const port = process.env.PORT || 5000;
const app = express();

app.use('/users', users);

app.listen(port, () => console.log(`Server running on port ${port}`));
