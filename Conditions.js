const Row = require('./Row');

class Conditions extends Row {

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