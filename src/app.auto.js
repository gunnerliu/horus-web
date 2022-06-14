/**
 * ovine 应用配置。文档：https://ovine.igroupes.com/org/docs/advance/configurations#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE
 * 路径别名映射:
 * '@core/*': '@core/*'
 * '～/*': '/src/*'
 */
import { env } from "./app/env";
import { entry } from "./app/entry";
import { request } from "./app/request";

const config = {
  request: request,
  env: env,
  constants: {
    routePrefix: "/horus-web/",
    rootLimitFlag: "/horus-web/",
  },
  entry: entry,
};

export default config;
