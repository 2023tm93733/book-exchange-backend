import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoutes.js';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
