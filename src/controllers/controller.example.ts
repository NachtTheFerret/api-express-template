import type { Request, Response } from 'express';

export default {
  say: (_req: Request, res: Response) => {
    res.status(200).json('hello world');
  },
};
