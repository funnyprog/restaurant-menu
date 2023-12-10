import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(`.env.${process.env.NODE_ENV}`)) {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
    console.log(`.env.${process.env.NODE_ENV} file has been found.`)
} else {
    console.log(process.env)
    console.error(`.env.${process.env.NODE_ENV} file not found.`);
}

const VARIABLES = {
    IS_DEV: process.env.NODE_ENV === 'development',
    IS_PROD: process.env.NODE_ENV === 'production',
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
};

export const {
    IS_DEV,
    IS_PROD,
    JWT_TOKEN_SECRET
} = VARIABLES;

