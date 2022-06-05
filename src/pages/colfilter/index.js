export const schema = {
  type: "page",
  body: [
    {
      type: "crud",
      api: "GET:/api/horus/colDesc/pageGroovyFilter?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "groovyCode",
          label: "脚本 code",
          fixed: "left",
        },
        {
          name: "metricsCode",
          label: "处理的指标 code",
          fixed: "left",
        },
        {
          name: "createTime",
          label: "创建时间",
          type: "date",
          format: "YYYY-MM-DD HH:mm:ss",
        },
        {
          name: "updateTime",
          label: "更新时间",
          type: "date",
          format: "YYYY-MM-DD HH:mm:ss",
        },
        {
          type: "operation",
          label: "操作",
          buttons: [
            {
              type: "button",
              label: "查看脚本",
              actionType: "dialog",
              dialog: {
                confirmMode: false,
                title: "groovy 脚本",
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
                  initApi: "GET:/api/horus/groovy/groovyDetail?groovyCode=${groovyCode}",
                  body: [
                    {
                      type: "json-editor",
                      language: "java",
                      name: "content",
                      disabled: true,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
