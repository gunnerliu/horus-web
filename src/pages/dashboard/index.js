function initData(payload) {
  let xData = [];
  let yData = [];
  for (let item of payload.content) {
    xData.push(item.request_url);
    yData.push(item.req_count);
  }
  payload = {
    list: payload.content,
    xData: xData,
    yData: yData,
  };
  return payload;
}

export const schema = {
  type: "page",
  body: {
    type: "chart",
    api: {
      method: "post",
      url: "/api/horus/query/taosQuery",
      convertKeyToPath: false,
      data: {
        querySql:
          "select request_url,count(1) as req_count from metrics.api_monitor_st group by request_url",
      },
      adaptor: function (payload, response) {
        payload = initData(payload);
        console.log(response);
        response.data = payload;
        return {
          ...payload,
          status: response.status,
          data: {
            list: payload.list,
            xData: payload.xData,
            yData: payload.yData,
          },
        };
      },
    },
    // interval: 5000,
    config: {
      title: { text: "接口调用" },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: "${xData}",
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: "${yData}",
          type: "bar",
        },
      ],
    },
  },
};
