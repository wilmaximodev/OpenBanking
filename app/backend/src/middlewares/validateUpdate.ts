import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ValidateClient {
  static inputClient(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(mapStatusHTTP('invalidData')).json({ message: 'Invalid input' });
    }

    return next();
  }
}
