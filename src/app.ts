import express, {Application} from 'express'
import path from 'path'
import passport from 'passport'
import passportJwt, {ExtractJwt} from "passport-jwt";
import {apiRouter} from './routes'
import {ErrorMiddleware, JWT_TOKEN_SECRET} from "./config";

const app: Application = express();
const JwtStrategy = passportJwt.Strategy;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize())
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_TOKEN_SECRET
        },
        async (jwtPayload, done) => {
            try {
                done(null, jwtPayload);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

app.use('/api', apiRouter)

app.use(ErrorMiddleware)

const server = app.listen(8000, () => {
    console.log(`Server ready at: http://localhost:8000`)
})
