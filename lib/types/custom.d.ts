//处理svg文件ts不能加载的问题
declare module '*.svg' {
  const content: any;
  export default content;
}