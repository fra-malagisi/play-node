import express from 'express';
import bodyParser from 'body-parser';

/**
 *  TODO:
 *  - add logger
 */

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
