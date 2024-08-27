import express from 'express'
import usecontroller from '../controller/assign.js' 
const router = express.Router()
router.get('/',usecontroller.getuser)
router.get('/:id',usecontroller.getuserByid)
router.post('/',usecontroller.adduser)
router.put('/:id',usecontroller.editUserById)
router.delete('/:id',usecontroller.deleteUserById)
export default router

