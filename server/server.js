import mongoose from 'mongoose';
import sources from './sources.js';
import express from 'express'
import useUserRoutes from './Routes/UserRoutes.js'

const app = express();

const SERVER_PATH = sources.SERVER_PATH
const DB_PATH = sources.DB_PATH

app.use('/api/users', useUserRoutes)

mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error(err);
});


app.listen(SERVER_PATH, () => {
    console.log(SERVER_PATH)
});
