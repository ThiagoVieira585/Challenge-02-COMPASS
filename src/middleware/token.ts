import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';  

export function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const secret = "idjawodjawkdjlakdj231231";
    const decoded = jwt.verify(token, secret);

   
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
}
