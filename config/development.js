import defaults from './default';
/**
 * 开发环境 配置文件
 * @docs http://turbo.sankuai.com/docs/configuration.md
 */
export default {
  logger: [
    [ 'console', { level: 'debug' } ]
  ],
  middlewares: (defaults.middlewares || []).concat([
    'debug'
  ]),
  sso: {
    // SSO 线下登录跳转地址
    sso: 'http://sso.it.beta.sankuai.com',
    // SSO 线下测试接口
    api: 'http://sso.it.beta.sankuai.com',
  }
};
