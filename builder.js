const Colume = require('./Colume');
const Condition = require('./Condition');
const Conditions = require('./Conditions');
const Row = require('./Row');
const Condition = require('./Condition');
/**
 * @summary return an sql insert statment.
 * @param {String} table the table name in the DB. 
 * @param {Row} row a row class variable with the Columes you want to insert, cant be undefined   
 * @returns sql insert statment as string, if data isn't correct return null.
 */
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

/**
 * @summary return an sql select statment.
 * @param {String} table the table name in the DB. 
 * @param {Row|undefined} row a set of columes that you want to extract data,
 * can be undefined,
 * if undefined return all Colume from table.
 * @param {Condition|Conditions|undefined} conditions Condition/Conditions ,
 * can be undefined,
 * if undefined return all rows in table.
 * @returns sql select statment as string, if data isn't correct return null.
 */
function select(table, row, conditions) {
    if(!row instanceof Row ||!conditions instanceof Conditions&&!conditions instanceof Condition)
        return null;
    if (row !== undefined)
        return `select ${row.columes_syntax()} from ${table} ${conditionSyntax(conditions)};`;
    else
        return `select * from ${table} ${conditionSyntax(conditions)};`;
}
/**
 * @summary return an sql update statment.
 * @param {String} table the table name in the DB. 
 * @param {Row} row a set of columes that you want to update,cant be undefined.
 * @param {Condition|Conditions|undefined} conditions Condition/Conditions ,if undefined updates all rows in table.
 * @returns sql update statment as string,
 * can be undefined
 *  if data isn't correct return null.
 */
function update(table, row, conditions) {
    var query=`update ${table} set ${row.update_syntax()}`;
    if (!row instanceof Row || row === undefined||!conditions instanceof Conditions&&!conditions instanceof Condition) return null;
    return query+` ${conditionSyntax(conditions)};`;
}
/**
 * @summary return an sql update statment.
 * @param {String} table the table name in the DB. 
 * @param {Condition|Conditions|undefined} conditions Condition/Conditions ,if undefined delete all rows in table.
 * @returns sql update statment as string,
 * can be undefined
 *  if data isn't correct return null.
 */
function _delete(table, conditions) {
    return `delete * from ${table} ${conditionSyntax(conditions)};`;
  }
module.exports = {
    insert,
    select,
    update,
    _delete
}