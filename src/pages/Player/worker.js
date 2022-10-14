const workercode = function () {
  this.onmessage = function (e) {
    console.time('worker');

    const workerResult = '我是猪 ' + e.data;
    console.log('接收主线程的消息 ', e.data);
    for (let index = 0; index < 1000_000; index++) {}
    this.postMessage(workerResult); // here it's working without self
    console.timeEnd('worker');
  };
};
// 把脚本代码转为string
let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);
module.exports = worker_script;
