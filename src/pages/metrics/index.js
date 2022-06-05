export const schema = {
  type: "page",
  body: [
    {
      label: "新增指标",
      type: "button",
      actionType: "dialog",
      level: "primary",
      className: "m-b-sm",
      dialog: {
        title: "新增指标",
        body: {
          type: "form",
          api: "PUT:/api/horus/metrics/addMetrics",
          messages: {
            saveSuccess: "保存成功！",
          },
          body: [
            {
              type: "input-text",
              name: "metricsCode",
              label: "指标 code",
              required: true,
            },
            {
              type: "input-text",
              name: "metricsName",
              label: "指标名",
              required: true,
            },
            {
              type: "select",
              label: "指标类型",
              name: "metricsType",
              required: true,
              options: [
                {
                  label: "计数",
                  value: "COUNTER",
                },
                {
                  label: "指标",
                  value: "METRICS",
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: "crud",
      api: "POST:/api/horus/metrics/pageQueryMetrics?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "metricsCode",
          label: "指标 code",
          fixed: "left",
        },
        {
          name: "taosStName",
          label: "超级表名",
          fixed: "left",
        },
        {
          name: "metricsName",
          label: "指标名",
          fixed: "left",
        },
        {
          label: "指标类型",
          name: "metricsType",
          type: "mapping",
          map: {
            COUNTER: "计数",
            METRICS: "指标",
            "*": "${metricsType}",
          },
        },
        {
          name: "createTime",
          type: "date",
          format: "YYYY-MM-DD HH:mm:ss",
          label: "创建时间",
        },
        {
          name: "updateTime",
          type: "date",
          format: "YYYY-MM-DD HH:mm:ss",
          label: "更新时间",
        },
        {
          type: "operation",
          label: "操作",
          buttons: [
            {
              label: "指标结构",
              type: "button",
              actionType: "dialog",
              level: "primary",
              dialog: {
                title: "指标结构",
                size: "lg",
                body: [
                  {
                    type: "button-group",
                    buttons: [
                      {
                        label: "添加列",
                        type: "button",
                        actionType: "dialog",
                        level: "primary",
                        className: "m-b-sm",
                        dialog: {
                          title: "新增列",
                          body: {
                            type: "form",
                            api: "PUT:/api/horus/metrics/addMetricsColumn",
                            messages: {
                              saveSuccess: "保存成功！",
                            },
                            body: [
                              {
                                type: "input-text",
                                name: "metricsCode",
                                label: "指标 code",
                                // visible: false,
                                required: true,
                              },
                              {
                                type: "input-text",
                                name: "columnName",
                                label: "列名",
                                required: true,
                              },
                              {
                                type: "input-text",
                                name: "columnCode",
                                label: "列 code",
                                required: true,
                              },
                              {
                                type: "select",
                                label: "列类型",
                                name: "columnType",
                                required: true,
                                options: [
                                  {
                                    label: "时间戳",
                                    value: "TIMESTAMP",
                                  },
                                  {
                                    label: "整型",
                                    value: "INT",
                                  },
                                  {
                                    label: "长整型",
                                    value: "BIGINT",
                                  },
                                  {
                                    label: "浮点型",
                                    value: "FLOAT",
                                  },
                                  {
                                    label: "双精度浮点型",
                                    value: "DOUBLE",
                                  },
                                  {
                                    label: "短整型",
                                    value: "SMALLINT",
                                  },
                                  {
                                    label: "单字节整型",
                                    value: "TINYINT",
                                  },
                                  {
                                    label: "布尔型",
                                    value: "BOOL",
                                  },
                                  {
                                    label: "字符串",
                                    value: "NCHAR",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      },
                      {
                        type: "button",
                        label: "查看实体类",
                        actionType: "dialog",
                        dialog: {
                          confirmMode: false,
                          title: "指标实体类",
                          size: "lg",
                          actions: [
                            {
                              type: "button",
                              actionType: "confirm",
                              label: "OK",
                              primary: true,
                            },
                          ],
                          body: {
                            type: "form",
                            initApi: "GET:/api/horus/metrics/genMetrics?metricsCode=${metricsCode}",
                            body: [
                              {
                                type: "json-editor",
                                language: "java",
                                name: "content",
                                disabled: true,
                                // value: "${content}",
                              },
                            ],
                          },
                        },
                      },
                    ],
                  },
                  {
                    type: "crud",
                    api: "GET:/api/horus/metrics/queryMetricsColumns?metricsCode=${metricsCode}",
                    messages: {
                      saveSuccess: "保存成功！",
                    },
                    columns: [
                      {
                        name: "id",
                        label: "主键",
                        fixed: "left",
                      },
                      {
                        name: "columnName",
                        label: "列名",
                        fixed: "left",
                      },
                      {
                        name: "columnCode",
                        label: "列 code",
                        fixed: "left",
                      },
                      {
                        label: "列类型",
                        name: "columnType",
                        type: "mapping",
                        map: {
                          TIMESTAMP: "时间戳",
                          INT: "整型",
                          BIGINT: "长整型",
                          FLOAT: "浮点型",
                          DOUBLE: "双精度浮点型",
                          SMALLINT: "短整型",
                          TINYINT: "单字节整型",
                          BOOL: "布尔型",
                          NCHAR: "字符串",
                          "*": "${columnType}",
                        },
                      },
                      {
                        name: "createTime",
                        type: "date",
                        format: "YYYY-MM-DD HH:mm:ss",
                        label: "创建时间",
                      },
                      {
                        name: "updateTime",
                        type: "date",
                        format: "YYYY-MM-DD HH:mm:ss",
                        label: "更新时间",
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
