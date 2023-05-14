import express, { Request, Response, NextFunction } from 'express'
import MenuItemController from '../controllers/menuItemController'

const menuitemRouter = express.Router()
const path = '/menuitem'
const menuItemController = new MenuItemController()

function getMenuItems (req: Request, res: Response, next: NextFunction) {
    menuItemController.getMenuItems().then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        res.status(500).send(error)
    })
}

menuitemRouter.get(path, getMenuItems)
export default menuitemRouter