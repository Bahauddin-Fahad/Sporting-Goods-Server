import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
  }),
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Sporting Goods');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
