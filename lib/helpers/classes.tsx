function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}
export default classes

//接收两个参数，两个参数分别在不同函数处理的情况下，使用高阶函数的方式
//高阶函数就是返回函数的函数
function scopedClassMaker(prefix: string) {
  return function scopedClass(name: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}
export { scopedClassMaker }