const Colume = require('./Colume');

class Condition extends Colume {
/**
 * @summary A Condition in sql table.
 * @param {String} field the field name.
 * @param {object} value the value you want to compare.
 * @param {String} condition the Condition that you want to ask, can be 
 * =
 * !=
 * >
 * <
 * >=
 * <=
 *  .
 */
    constructor(field, value, con) {
        super(field, value);
        this.condition = con;
    }
    condition_syntax() {
        if (typeof(this.value) === 'string')
            return `${this.field} ${this.condition} '${this.value}'`;
        return `${this.field} ${this.condition} ${this.value}`;
    }
}
module.exports = Condition;