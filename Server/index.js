import express from 'express';
import mongoose from 'mongoose';


mongoose.connect("mongodb://127.0.0.1:27017/freelancer");

import postRouter from './Routers/post.js';
import authRouter from './Routers/auth.js';
import accountRouter from './Routers/authdns.js';
import jobRouter from './Routers/job.js';
import creatorRouter from './Routers/creator.js';
import PayMent from './Routers/payment.js';
import cookieParser from 'cookie-parser';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.use("/Server/posts", postRouter);
app.use("/Server/auth", authRouter);
app.use("/Server/accounts", accountRouter);
app.use("/Server/job", jobRouter);
app.use("/Server/creator", creatorRouter)
app.use("/Server/payment", PayMent)


app.listen(3001, () => {
  console.log('listening on port 3001');
});
