import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import validDoc from '../utils/validNumberDoc';

export default class ValidateClient {
  static inputClient(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, document } = req.body;

    if (!name || !email || !password || !document || password.length < 6) {
      return res.status(mapStatusHTTP('invalidData')).json({ message: 'Invalid input' });
    }

    if (!validDoc.validCPF(document) && !validDoc.validCNPJ(document)) {
      return res.status(mapStatusHTTP('invalidData'))
        .json({ message: 'Invalid document' });
    }

    return next();
  }
}
