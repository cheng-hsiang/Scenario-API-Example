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


export const ExclusiveLock = async(req:Request, res:Response, next:NextFunction) => {
        const id = req.params.id

        const { name, price } = req.body
        try {
            // 取得排他鎖
            await dbClient.query('SELECT * FROM products WHERE id = ? FOR UPDATE', [id])
    
            // 實際修改資料
            await dbClient.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id])
    
            // 回應修改成功
            res.status(204).end()
        } catch (err) {
            next(err)
        } finally {
            // dbClient.release()
        }
    }

export default SharedLock