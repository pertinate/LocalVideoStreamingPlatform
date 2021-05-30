import express, { Request, Response } from "express";
import next from "next";
import router from "./router";
import fs from 'fs';
import './database/sqlite';
import { getDb } from "./database/sqlite";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

//check if home/Documents/ exist if no provided path?
if (fs.existsSync(`${require('os').homedir()}/Documents`)) {
    console.log('Documents exists');
}

getDb();

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.use(router);
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
