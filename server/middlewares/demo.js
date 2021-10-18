/**
 * 中间件 示例
 * @docs http://turbo.sankuai.com/docs/middleware.md
 */
export default (
  turbo   /* Turbo Engine 实例 */,
  options /* 在配置文件中的配置信息，默认为: null */
) => {
  // 这里可以放置一些初始化代码
  // 如果返回 Function 会被当作 Middleware 调用
  return async (ctx, next) => { // 兼容 Koa@2.x 规范
    await next();
  };
};
