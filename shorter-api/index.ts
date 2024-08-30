import express from 'express';
import cors from 'cors';
import * as mongoose from 'mongoose';
import config from './config';
import linksRouter from './routers/links';
import {ILink} from './types';
import Link from './models/Link';

const app = express();
const port = 8000;

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(express.static('public'));
app.use('/links', linksRouter);

app.get('/:shortUrl', async (req, res, next) => {
  try {
    const link: ILink | null = await Link.findOne({shortUrl: req.params.shortUrl});
    if (link) {
      return res.status(301).redirect(link.originalUrl);
    } else {
      return res.status(404).send('Not Found');
    }
  } catch (error) {
    next(error);
  }
});

const run = async () => {
  await mongoose.connect('mongodb://localhost/links');

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

run().catch(console.error);