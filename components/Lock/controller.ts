import { NextFunction, Request, Response } from "npm:express@4.18.2";
import dbClient from '../../config/db.ts'

export const SharedLock = async(req:Request, res:Response, next:NextFunction)=>{
    const id = req.params.id
    try {
        // 取得共享鎖
        await dbClient.query('SELECT * FROM products WHERE id = ? FOR SHARE', [id])
        const result = await dbClient.query('SELECT * FROM products WHERE id = ?', [id])
        res.json(result[0])
    } catch (err) {
        next(err)
    } finally {
        // dbClient.release()
    }
}



// router.get('/products/:id', async (req, res, next) => {
//     const id = req.params.id
//     const conn = await db.getConnection()
//     try {
//         // 取得共享鎖
//         await conn.query('SELECT * FROM products WHERE id = ? FOR SHARE', [id])
//         const result = await conn.query('SELECT * FROM products WHERE id = ?', [id])
//         res.json(result[0])
//     } catch (err) {
//         next(err)
//     } finally {
//         conn.release()
//     }
// })

export default SharedLock