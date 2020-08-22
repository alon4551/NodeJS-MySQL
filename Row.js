class Row {
    constructor(columes) {

        this.columes = columes;
    }
    values_syntax() {
        return this.columes.reduce((acc, item, index) => {
            if (index !== this.columes.length - 1)
                return `${acc}${item.insert_syntax()},`;
            else
                return `${acc}${item.insert_syntax()}`;
        }, '');
    }
    columes_syntax() {
        return this.columes.reduce((acc, item, index) => {
            if (index !== this.columes.length - 1)
                return `${acc}${item.field},`;
            else
                return `${acc}${item.field}`;
        }, '');
    }
    update_syntax() {
        return this.columes.reduce((acc, item, index) => {
            if (index !== this.columes.length - 1)
                return `${acc} ${item.update_syntax()},`;
            else
                return `${acc} ${item.update_syntax()}`;
        }, '')
    }
}
module.exports = Row;