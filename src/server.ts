import express from 'express';
import config from './config';
import globalErrorHandler from './errors/globalErrorHandler';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get('/', (_req, res) => {
  res.send('Hello, TypeScript + Express!');
});
app.use('/api/v1', routes);

app.use(globalErrorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
