export const env = {
  default: {
    disableLimit: true,
    domains: {
      api: "http://127.0.0.1:9013",
    },
    // logger: {
    //   // 日志配置
    //   moduleName: ".*", // 打印任何配置
    //   level: "log", // 打印 log 级别日志
    // },
  },
  // 本地开发
  localhost: {
    domains: {
      api: "http://127.0.0.1:9013",
    },
  },
  // 测试环境
  staging: {
    domains: {
      api: "http://192.168.31.106",
    },
  },
  // 生产环境
  production: {
    domains: {
      api: "http://192.168.31.106",
    },
  },
};
