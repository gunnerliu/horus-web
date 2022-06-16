export const schema = {
  type: "page",
  body: [
    {
      label: "新增接收人",
      type: "button",
      actionType: "dialog",
      level: "primary",
      className: "m-b-sm",
      dialog: {
        title: "新增接收人",
        size: "lg",
        body: {
          type: "form",
          api: "PUT:/api/horus/reach/addReceiver",
          messages: {
            saveSuccess: "保存成功！",
          },
          body: [
            {
              type: "input-text",
              name: "receiverName",
              label: "接收人名称",
              required: true,
            },
            {
              type: "select",
              label: "消息推送方式",
              name: "reacher",
              required: true,
              options: [
                {
                  label: "钉钉",
                  value: "DING_TALK",
                },
                {
                  label: "企业微信",
                  value: "WORK_WX",
                },
                {
                  label: "飞书",
                  value: "FEI_SHU",
                },
                {
                  label: "电子邮件",
                  value: "EMAIL",
                },
              ],
            },
            {
              type: "input-text",
              name: "mobile",
              label: "手机号码",
              required: true,
              validations: {
                isPhoneNumber: true,
              },
            },
            {
              type: "input-email",
              name: "email",
              label: "电子邮箱",
              required: true,
            },
            {
              type: "input-text",
              name: "webHook",
              label: "群机器人webhook",
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
      api: "GET:/api/horus/reach/pageReceivers?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "id",
          label: "ID",
          hidden: true,
        },
        {
          name: "receiverName",
          label: "接收人名称",
          fixed: "left",
        },
        {
          name: "reacher",
          label: "消息推送方式",
          fixed: "left",
        },
        {
          name: "mobile",
          label: "手机号码",
          fixed: "left",
        },
        {
          name: "email",
          label: "电子邮箱",
          fixed: "left",
        },
        {
          name: "webHook",
          label: "webHook",
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
              label: "删除",
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
