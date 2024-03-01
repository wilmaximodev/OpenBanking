import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default function validateClient(req: Request, res: Response, next: NextFunction) {
  const { name, email, password, documentNumber } = req.body;
  if (!name || !email || !password || !documentNumber) {
    return res.status(mapStatusHTTP('invalidData')).json({ message: 'Invalid client' });
  }
  return next();
}
