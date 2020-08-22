const Colume = require('./Colume');
class Condition extends Colume {

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