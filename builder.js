const Colume = require('./Colume');
const Condition = require('./Condition');
const Conditions = require('./Conditions');
const Row = require('./Row');

function insert(table, row) {
    console.log(typeof(row));
    return `insert into ${table} values(${row.values_syntax()});`;
}

function select(table, row, conditions) {
    if (row !== undefined)
        if (conditions !== undefined)
            return `select ${row.columes_syntax()} from ${table} where ${conditions.syntax()}`;
        else
            return `select ${row.columes_syntax()} from ${table};`;
    else if (conditions !== undefined)
        return `select * from ${table} where ${conditions.syntax()};`;
    else
        return `select * from ${table};`;
}

function update(table, row, conditions) {
    if (!row instanceof Row || row === undefined) return null;
    if (!conditions instanceof Conditions || row === undefined) return null;
    return `update ${table} set ${row.update_syntax()} where${conditions.syntax()};`;
}

function _delete(table, conditions) {
    if (conditions === undefined)
        return `delete from ${table};`;
    else
        return `delete from ${table} where${conditions.syntax()};`;
}

module.exports = {
    insert,
    select,
    update,
    _delete
}