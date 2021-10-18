module.exports = {
  host: '127.0.0.1',
  port: 3000,
  controller: {
    // 默认超时
    timeout: 1000,
    // 默认 HTTP header
    headers: {},
    // 各个 action 的配置
    actions: [
      {
        path: '/',  // 请求路径
        timeout: 2000,  // 超时
        request: {  // 请求配置
          method: 'GET',  // 请求方式
          headers: {},  // HTTP 头，和默认合并且优先级更高
        },
        response: {  // 响应测试，所有都匹配才认为请求成功，不设置则不检查
          status: 200,  // 响应码
          // headers: {},  // 响应头
          // body: '',  // 响应报文
        },
      },
    ]
  },
  // 客户端测试配置
  client: {
    // tell me the name of test framework you use
    // framework: 'jest',

    // default is false, I will handle coverage for you
    // for example, suppose you are using mocha, and set command below to ['mocha'], then I will run `nyc mocha`
    // nycEmbedded: false,

    // if you set nycEmbedded to true, you must tell me where your nycTempDir is,
    // and your coverage reporters must include json format,
    // then I will look for the file named with 'coverage-final.json'
    // default is '.nyc_output' in nyc
    nycTempDir: '.nyc_output',
    // 运行测试的命令
    command: ['npm', 'run', 'test'],
  },
  // 一次完整测试运行中，临时存放的代码覆盖率目录，类似 nyc 参数 --temp-dir
  coverageTempDir: '.turbo_temp_coverage',
  // 代码覆盖率结果输出目录，类似 nyc 参数 --report-dir
  coverageReportDir: '.turbo_test_coverage',
  // nyc 的 reporter，具体参考 nyc 文档
  coverageReporter: ['json', 'text', 'html'],
}