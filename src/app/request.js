import { Request } from "@core/utils/request";
import { toast } from "amis";
import logger from "@core/utils/logger";

export const request = new Request();

const log = logger.getLogger("app:request");

var errors_1 = require("amis/lib/utils/errors");

// 请求失败的回调，没有返回值
request.onError = (response, option, error) => {
  var errorMsg = "未知异常！";
  if (response && response.data && response.data.msg && response.data.msg != "") {
    const tipMsg = toast["error"];
    if (tipMsg) {
      errorMsg = response.data.msg;
    }
  }
  log.warn("请求发送出现错误", { response, option }, error);
  throw new errors_1.ServerError(errorMsg, response);
}; // 可对错误请求统一处理
