
import express, { Express, Request, Response } from 'express';
//import dotenv from 'dotenv';

// dotenv.config();
const app = express();

class App {

    init() {


        const app: Express = express();
        const port = 4000;

        app.get('/', (req: Request, res: Response) => {
            res.send('Express + TypeScript Server');
        });

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }

}


export default new App();