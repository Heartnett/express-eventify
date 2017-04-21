
const Describe = (description, callback) => {
    return new Promise((resolve, reject) => {
        describe(description, () => {
            try {
                callback();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    });
};

const It = (description, callback) => {
    return new Promise((resolve, reject) => {
        it(description, (done) => {
            try {
                callback();
                done();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    });
};

module.exports = {
    Describe,
    It
};