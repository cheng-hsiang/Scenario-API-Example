import express from "npm:express@4.18.2";
import Lock from './components/Lock/router.ts'


const router = express.Router();


router.use('/lock',Lock)

export default router

