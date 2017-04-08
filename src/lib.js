const {EventEmitter} = require("events");
const events = new EventEmitter();

const methods = [
    "all",
    "delete",
    "get",
    "param",
    "post",
    "put",
    "render"
];

const registerEvent = (expressApp, method, path, handler) => {
    events.on(`${method}!${path}`, handler);
    expressApp[method](path, (...args) => {
        events.emit(`${method}!${path}`, ...args);
    });
};

module.exports = (expressApp) => {
    expressApp.$on = (...args) => {
        if(args.length === 1 && typeof args[0] === "object") {
            const [obj] = args;
            Object.keys(obj).forEach((method) => {
                if(methods.indexOf(method) === -1) return;

                Object.keys(obj[method]).forEach((path) => {
                    registerEvent(expressApp, method, path, obj[method][path]);
                });
            });
        }
        else if(args.length === 2) {
            const [event, handler] = args;
            if(typeof event === "string" && typeof handler === "function") {
                const [method, path] = event.split("!");
                registerEvent(expressApp, method, path, handler);
            }
        }
    };
    return expressApp;
};