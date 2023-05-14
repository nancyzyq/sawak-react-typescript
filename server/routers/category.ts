import express, { Request, Response, NextFunction} from 'express'
import { CategoryController } from '../controllers/categoryController'

const categoryRouter = express.Router()
const path = '/category'
const categoryController = new CategoryController()

function getCategories (req: Request, res: Response, next: NextFunction) {
    categoryController.getCategories().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })
}

categoryRouter.get(path, getCategories)
export default categoryRouter