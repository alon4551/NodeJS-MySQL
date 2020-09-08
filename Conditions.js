const Row = require('./Row');

class Conditions extends Row {
/**
 * @summary A Condition in sql table.
 * @param {Condition[]} Conditions the conditions list.
 * @param {String} sperate the word that sperate between condition can be :
 * And
 * Or.
 */
    constructor(columes, sperate) {
        super(columes);
        this.sperate = sperate;
    }
    syntax() {
        return this.columes.reduce((acc, item, index) => {
            if (index !== this.columes.length - 1)
                return `${acc} ${item.condition_syntax()} ${this.sperate}`;
            else
                return `${acc} ${item.condition_syntax()}`;
        }, '');
    }
}
module.exports = Conditions;