import express, { Application } from 'express'
import cors from 'cors'

export default class App {
    public app: Application 
    constructor (
        private port: number,
        middleware: Array<any>,
        routes: Array<express.Router>
    ){
        this.app = express()
        this.useMiddlewares(middleware)
        this.addRouters(routes)
    }
    public useMiddlewares (middleware: Array<any>)
    {
        middleware.forEach(m => {
            this.app.use(m)
        });
    }
    public addRouters (routes: Array<express.Router>) {
        routes.forEach((r) => {
            this.app.use('/api', r);
        });
    }
    public listen () {
        this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`))
    }
}