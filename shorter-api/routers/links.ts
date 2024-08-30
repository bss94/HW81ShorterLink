import express from 'express';
import mongoose from 'mongoose';
import {ILink, ILinkMutation} from '../types';
import Link from '../models/Link';

const linksRouter = express.Router();

linksRouter.post('/', async (req, res, next) => {
  try {
    const shorterUrls = async () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const result: string[] = [];
      for (let i = 0; i < 6; i++) {
        result.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      const findShorterUrls :ILink|null = await Link.findOne({shortUrl: result.join('')});
      if (!findShorterUrls) {
        return result.join('');
      } else {
        return await shorterUrls();
      }
    };

    const findOriginalUrl = await Link.findOne({originalUrl: req.body.originalUrl});
    if (!findOriginalUrl) {
      const shortUrl = await shorterUrls();
      const linkMutation: ILinkMutation = {
        shortUrl: shortUrl,
        originalUrl: req.body.originalUrl,
      };
      const link = new Link(linkMutation);
      await link.save();
      return res.send(link);
    } else {
      return res.send(findOriginalUrl);
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }
    return next(error);
  }
});

linksRouter.get('/:shortUrl', async (req, res, next) => {
  try {
    const link:ILink|null = await Link.findOne({shortUrl: req.params.shortUrl});
    if (link){
      return res.status(301).redirect(link.originalUrl);
    }else {
      return res.status(404).send('Not Found');
    }
  } catch (error) {
    next(error);
  }
});

export default linksRouter;