export const corsConfig = {
  origin: process.env.FRONTEND_URL || [
    'http://localhost:3000',
    'http://localhost:4000',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
