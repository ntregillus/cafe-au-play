

function dateTimeReviver(value) {
    let a;
    if (typeof value === 'string') {
        a = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z/.exec(value);
        if (a) {
            return new Date(a[0]);
        }
    }
    return value;
  }

module.exports = (value) => {
    return dateTimeReviver(value);
};