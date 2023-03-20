import express from "npm:express@4.18.2";
import {SharedLock} from './controller.ts'
const Router = express.Router();



Router.get('/',SharedLock)

export default Router