"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
//import Connection from 'mysql2/typings/mysql/lib/Connection';
function connect() {
    /*const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;*/
    (0, promise_1.createPool)({});
}
exports.connect = connect;
;
// Connection.connect()
//# sourceMappingURL=database.js.map