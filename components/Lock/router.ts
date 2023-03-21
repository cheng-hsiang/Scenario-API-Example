import express from "npm:express@4.18.2";
import {SharedLock,ExclusiveLock} from './controller.ts'
const Router = express.Router();



Router.post('/SharedLock/:id',SharedLock)
Router.patch('ExclusiveLock/:id',ExclusiveLock)

export default Router