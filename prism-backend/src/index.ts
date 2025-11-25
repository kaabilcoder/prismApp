import express from 'express';
import { connecDb, FRONTEND_URI } from './config/config';
import authRoute from './routes/auth.routes';
import contentRoute from './routes/content.routes';
import shareLinkRoute from './routes/shareLink.routes'
import dotenv from 'dotenv'
import  cors  from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT

connecDb();
app.use(express.json());
app.use(cors({
    origin: FRONTEND_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use('/api/v1', authRoute);

app.use("/api/v1", contentRoute);

app.use("/api/v1", shareLinkRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})