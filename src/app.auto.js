/**
 * ovine 应用配置。文档：https://ovine.igroupes.com/org/docs/advance/configurations#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE
 * 路径别名映射:
 * '@core/*': '@core/*'
 * '～/*': '/src/*'
 */
import { Request } from "@core/utils/request";
import { toast } from "amis";

var errors_1 = require("amis/lib/utils/errors");

const reqInstance = new Request();

// 请求失败的回调，没有返回值
reqInstance.onError = (response, option, error) => {
  var errorMsg = "未知异常！";
  if (response && response.data && response.data.msg && response.data.msg != "") {
    const tipMsg = toast["error"];
    if (tipMsg) {
      errorMsg = response.data.msg;
    }
  }
  throw new errors_1.ServerError(errorMsg, response);
}; // 可对错误请求统一处理

const config = {
  request: reqInstance,
  env: {
    default: {
      disableLimit: true,
      domains: {
        api: "http://127.0.0.1:9013",
      },
      logger: {
        // 日志配置
        moduleName: ".*", // 打印任何配置
        level: "log", // 打印 log 级别日志
      },
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
  },
  entry: [
    {
      type: "preset-route", // 路由组件
      path: "/login",
      pathToComponent: true,
    },
    {
      type: "private-route", // 私有路由
      path: "/",
      redirect: "/login",
      onAuth: () => {
        return true;
      },
      children: {
        type: "aside-layout",
        header: {
          showDevItem: false,
          brand: {
            logo: "/static/images/horus-eye.svg",
            title: "Horus",
            link: {
              title: "dashboard",
              href: "/",
            },
          },
          items: [
            {
              type: "item-setting",
              align: "right",
            },
          ],
        },
        routes: [
          // 应用内路由
          {
            nodePath: "/",
            label: "菜单目录",
            children: [
              {
                path: "/",
                label: "Dashboard",
                nodePath: "dashboard",
                exact: true,
                pathToComponent: "dashboard",
                sideVisible: false,
              },
              {
                label: "定时任务",
                icon: "fa fa-clock-o",
                nodePath: "schedules",
              },
              {
                label: "监控指标",
                icon: "fa fa-eye",
                nodePath: "metrics",
              },
              {
                label: "动态脚本",
                icon: "fa fa-bolt",
                nodePath: "groovy",
              },
              {
                label: "数据插件",
                icon: "fa fa-align-justify",
                nodePath: "colfilter",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default config;
