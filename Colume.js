class Colume {
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