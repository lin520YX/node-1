// promise 都是基于回调模式

// 高阶函数 1如果你的函数参数是一个函数 2你的函数的返回的是一个函数

type Callback = ()=>void
type ReturnFn = (...args:any[])=>void
// declare global {
    interface Function{ //接口的合并
        before(fn:Callback):ReturnFn
    }
// }
Function.prototype.before = function(fn){
    return (...args)=>{
        fn();
        this(...args); //调用原有的core方法
    }
}
function core(...args){
    console.log(...args)
}
let fn = core.before(()=>{
    console.log('core.before')
})
fn(1,2,3);