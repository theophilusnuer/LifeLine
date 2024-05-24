import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRouter from './routes/users.routes.js';
import appointmentsRouter from './routes/appointments.routes.js';


dotenv.config({path: [".env.local"]});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes
app.use('/api/users',usersRouter);
app.use('/api/appointments', appointmentsRouter);

//mongoose connection to database
await mongoose.connect(process.env.MONGODB_URL);


//listening port
const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}!`);
});