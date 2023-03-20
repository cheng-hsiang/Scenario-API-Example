import express from "npm:express@4.18.2";
// import client as dbClient from '.config/db.ts';
import router from './router.ts';

import { NextFunction, Request, Response } from "npm:express@4.18.2";
import print from './middlewares/print.ts';

const app = express();
app.use(print);
app.use('/api',router);

app.get("/", (req:Request, res:Response) => {
  res.send("Welcome to the Dinosaur API!");
});


export default app