import prisma from '../prisma.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const token = generateToken(user.id);
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
export const registerUser = async (req, res) => {
    // const { email, password, name } = req.body;
    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const user = await prisma.user.create({
        //   data: { email, password: hashedPassword, name },
        // });
        res.status(201).json({});
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(400).json({ error: 'User registration qwe', message: errorMessage });
    }
};
