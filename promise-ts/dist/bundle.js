'use strict';

// promise 都是基于回调模式
Function.prototype.before = function (fn) {
    return (...args) => {
        fn();
        this(...args); //调用原有的core方法
    };
};
function core(...args) {
    console.log(...args);
}
let fn = core.before(() => {
    console.log('core.before');
});
fn(1, 2, 3);
