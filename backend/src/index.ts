import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router as leaveRouter } from './controllers/leaveController';
import { users } from './data';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({ ok: true, users }));

app.use('/leave', leaveRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server running on port', port));
