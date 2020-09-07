const Colume = require('./Colume');
const Condition = require('./Condition');
const Conditions = require('./Conditions');
const Row = require('./Row');

function insert(table, row) {
    if(row===undefined||!row instanceof Row)return null;
    return `insert into ${table} values(${row.values_syntax()});`;
}
function conditionSyntax(condition){
    if(condition instanceof Condition)
        return `where ${condition.condition_syntax()}`;
    else if(condition instanceof Conditions)
        return `where${condition.syntax()}`;
    else
        return '';
}
function select(table, row, conditions) {
    if(!row instanceof Row ||!conditions instanceof Conditions&&!conditions instanceof Condition)
        return null;
    if (row !== undefined)
        return `select ${row.columes_syntax()} from ${table} ${conditionSyntax(conditions)};`;
    else
        return `select * from ${table} ${conditionSyntax(conditions)};`;
}

function update(table, row, conditions) {
    var query=`update ${table} set ${row.update_syntax()}`;
    if (!row instanceof Row || row === undefined||!conditions instanceof Conditions&&!conditions instanceof Condition) return null;
    return query+` ${conditionSyntax(conditions)};`;
}

function _delete(table, conditions) {
    return `delete * from ${table} ${conditionSyntax(conditions)};`;
  }

module.exports = {
    insert,
    select,
    update,
    _delete
}