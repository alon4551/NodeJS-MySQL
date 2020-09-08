
class Colume {
    /**
 * @summary A Colume in table.
 * @param {String} field the Field name in table.
 * @param {object} value the value , can be any field.
 */
    constructor(field, value) {
        this.field = field;
        this.value = value;
    }
    insert_syntax() {
        if (typeof(this.value) === 'string')
            return `'${this.value}'`;
        return this.value;
    }
    update_syntax() {
        if (typeof(this.value) === 'string')
            return `${this.field} = '${this.value}'`;
        return `${this.field} = ${this.value}`;
    }


}
module.exports = Colume;