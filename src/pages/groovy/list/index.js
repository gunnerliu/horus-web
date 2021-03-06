export const schema = {
  type: "page",
  body: [
    {
      label: "新增脚本",
      type: "button",
      actionType: "dialog",
      level: "primary",
      className: "m-b-sm",
      dialog: {
        title: "新增脚本",
        size: "lg",
        body: {
          type: "form",
          api: "PUT:/api/horus/groovy/addGroovy",
          messages: {
            saveSuccess: "保存成功！",
          },
          body: [
            {
              type: "input-text",
              name: "groovyCode",
              label: "脚本 code",
              required: true,
            },
            {
              type: "select",
              label: "执行类型",
              name: "executeType",
              required: true,
              options: [
                {
                  label: "类加载",
                  value: "CLASS_LOAD",
                },
                {
                  label: "脚本",
                  value: "SCRIPT",
                },
              ],
            },
            {
              type: "json-editor",
              language: "java",
              name: "scriptContent",
            },
          ],
        },
      },
    },
    {
      type: "crud",
      api: "GET:/api/horus/groovy/pageGroovyInfo?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "groovyCode",
          label: "脚本 code",
          fixed: "left",
        },
        {
          name: "filePath",
          label: "脚本路径",
          fixed: "left",
        },
        {
          label: "执行类型",
          type: "mapping",
          name: "executeType",
          map: {
            CLASS_LOAD: "类加载",
            SCRIPT: "脚本",
            "*": "${executeType}",
          },
        },
        {
          name: "lastModTime",
          label: "最后修改时间",
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
              label: "查看",
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
            {
              type: "button",
              label: "执行",
              actionType: "dialog",
              level: "primary",
              dialog: {
                confirmMode: false,
                title: "groovy 脚本",
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
                  api: "POST:/api/horus/groovy/executeGroovy?groovyCode=${groovyCode}",
                  messages: {
                    saveSuccess: "执行成功！",
                  },
                  body: [
                    {
                      type: "json-editor",
                      language: "json",
                      name: "content",
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
