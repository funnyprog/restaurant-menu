import express from 'express'
import path from 'path'
import router from './routes/index'
import userRouter from './routes/users'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/users', userRouter);

const server = app.listen(8000, () =>
    console.log(`
🚀 Server ready at: http://localhost:8000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
