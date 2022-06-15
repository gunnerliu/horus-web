export const schema = {
  type: "page",
  body: [
    {
      label: "新增通道",
      type: "button",
      actionType: "dialog",
      level: "primary",
      className: "m-b-sm",
      dialog: {
        title: "新增通道",
        body: {
          type: "form",
          api: "PUT:/api/horus/reach/addReachChannel",
          messages: {
            saveSuccess: "保存成功！",
          },
          body: [
            {
              type: "input-text",
              name: "channelCode",
              label: "通道编码",
              required: true,
            },
            {
              type: "input-text",
              name: "channelName",
              label: "通道名称",
              required: true,
            },
            {
              type: "input-text",
              name: "categoryCode",
              label: "类别编码",
              required: true,
            },
            {
              type: "select",
              label: "启用状态",
              name: "enableState",
              required: true,
              options: [
                {
                  label: "启用",
                  value: "ENABLED",
                },
                {
                  label: "禁用",
                  value: "DISABLED",
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: "crud",
      api: "GET:/api/horus/reach/pageChannels?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "id",
          label: "ID",
          hidden: true,
        },
        {
          name: "channelCode",
          label: "通道编码",
          fixed: "left",
        },
        {
          name: "channelName",
          label: "通道名称",
          fixed: "left",
        },
        {
          name: "categoryCode",
          label: "类别编码",
          fixed: "left",
        },
        {
          label: "启用状态",
          type: "mapping",
          name: "enableState",
          map: {
            ENABLED: "启用",
            DISABLED: "禁用",
            "*": "${enableState}",
          },
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
              label: "查看接收人",
              actionType: "dialog",
              dialog: {
                confirmMode: false,
                title: "接收人列表",
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
