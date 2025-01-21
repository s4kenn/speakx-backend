import express from 'express';
// import client from './client.js';
import dotenv from 'dotenv';
import questionRoutes from './routes/routes.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", questionRoutes);

app.listen(process.env.PORT, () => {
    console.log("Express server is running on port 5555");
});
