export var funcs;
(function (funcs) {
    function hello() {
        var message = 'Hello world!';
        console.log(message);
    }
    funcs.hello = hello;
})(funcs || (funcs = {}));
