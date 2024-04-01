import * as SQLite from 'expo-sqlite';
import { Tables } from './Schemas'

SQLite.enablePromisse(true)

const database_name = 'FreshList.db'
const database_version = '1.0'
const database_displayname = 'SQLITE Fresh Lista Database'
const database_size = 20000;

let db;

export const initDB = () =>{
    return SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
    ).then((DB) =>{
        db = DB;

        for(const table in Tables){
            let fields = Tables[table];
            let sql = `CREATE TABLE IF NOT EXISTS
                ${table} (${fields.join(", ")});
            `;
            db.executeSql(sql).then(()=>{
                console.log(`Tabela '${table}' criada com sucesso`)
            }).catch((error) =>{
                console.error(error)
            });
        };
    }).catch((error) =>{
        console.error(error);
    });
}
