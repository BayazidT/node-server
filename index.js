import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.get('/', (req, res) => {
  res.send('Hello to music app');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
