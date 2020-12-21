import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

import routes from './routes/routes';
import MongoDB from './db/config';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);





app.listen(3333);

export default app;