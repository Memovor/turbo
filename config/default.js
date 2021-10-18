import { load } from '@mtfe/turbo/router';
/**
 * 配置文件
 * 
 * 开发建议: 
 * 1. 不要在配置文件中书写无意义内容
 * 2. default.js 中存放通用配置
 * 3. 环境配置(eg.: production) 尽可能简单
 * 
 * @docs http://turbo.sankuai.com/docs/configuration.md
 */
export default {
  // octo key, 很多服务(eg: bs,hlb)会默认使用它，尽可能统一
  appkey: 'com.your-app-key',
  // @docs http://turbo.sankuai.com/docs/router.md
  routes: load('server/routes.txt'),
  /**
   * 中间件
   * @docs http://turbo.sankuai.com/docs/middleware.md
   */
  middlewares: [
    'demo', // 仅做演示 线上务必去掉，避免无意义消耗，具体实现在 server/middlewares 中
    'proxy'
  ],
  sso: {
    appkey: 'fe-turbo',
    secret: 'd15b57b498d148266e1a42591252b94f'
  },
  proxy: {
    '/api/:path*': {
      // @docs at @mtfe/turbo/turbo/docs/middleware.md#proxy
      url: x => `http://portal-portm.meituan.com/${x.params.path}`,
    }
  }
};
