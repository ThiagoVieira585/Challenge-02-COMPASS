import { Request, Response, NextFunction  } from "express"
import jwt from "jsonwebtoken";

export async function checkToken(req: Request, res: Response, next: NextFunction ){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado' })
    }
    try {
        
        const secret = "da98dj8219ijkklmkasmdlaJD892km9d3293i90";
        jwt.verify(token, secret)

        next();
        
    } catch (error) {
        return res.status(400).json({ msg: 'Token inválido.' })
    }


}