// function classes(...names: (string | undefined)[]) {
//   return names.filter(Boolean).join(' ')
// }
// export default classes

const prefix = "gsq";

function classes(componentName: string, ...args: any): string {
  const className = new Array<string>();
  args.forEach((arg: any) => {
    if (typeof arg === "string") {
      className.push(
        `${prefix}-${componentName.toLowerCase()}${arg && "-" + arg}`
      );
    } else if (arg instanceof Array) {
      arg.forEach(str => typeof str === "string" && className.push(str));
    } else if (typeof arg === "object" && !(arg instanceof Array)) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          className.push(key);
        }
      }
    }
  });
  return className.filter(Boolean).join(" ");
}

export default classes;


//接收两个参数，两个参数分别在不同函数处理的情况下，使用高阶函数的方式
//高阶函数就是返回函数的函数
function scopedClassMaker(prefix: string) {
  return function scopedClass(name: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}
export { scopedClassMaker }