import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { corsUrl } from './config';
import { NotFoundError } from './core/ApiError';

/**
 *  TODO:
 *  - Add Logger
 */

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

/**
 *  TODO:
 *  - Add Routes
 */

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
