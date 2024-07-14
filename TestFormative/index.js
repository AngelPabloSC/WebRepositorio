import express from 'express';
import cors from 'cors';

import config from './config.js';
import userRoute from './routers/userRouter.js';
import articleRoute from './routers/userRouter.js';
import comentsArticlesRouter from './routers/comentsArticlesRouter.js';
//import uploadRouter from './routers/uploadRouter.js';

const app = express();

app.use(cors());
app.use(express.json());
//Rout
app.use('/user', userRoute);
app.use('/article', articleRoute);
app.use('/comentarticles', comentsArticlesRouter);
//app.use('/upload', uploadRouter);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
