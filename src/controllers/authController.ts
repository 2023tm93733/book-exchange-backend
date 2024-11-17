import { Request, RequestHandler, Response } from 'express';
import prisma from '../prisma.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';

export const loginUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export const registerUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  // const { email, password, name } = req.body;
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await prisma.user.create({
    //   data: { email, password: hashedPassword, name },
    // });
    res.status(201).json({  });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ error: 'User registration qwe', message: errorMessage });
  }
};


