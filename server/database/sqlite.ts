import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

let db: Database<sqlite3.Database, sqlite3.Statement>;

const openDb = async () => {
    db = await open({
        filename: './test.db',
        driver: sqlite3.Database
    });
};

const populateDb = async () => {

};

export const getDb = async () => {
    if (!db) {
        await openDb();
    }
    return db;
};
