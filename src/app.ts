import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { corsUrl } from './config';
/**
 *  TODO:
 *  - add logger
 */

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
