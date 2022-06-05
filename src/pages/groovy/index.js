export const schema = {
  type: "page",
  body: [
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
          name: "groovyFileName",
          label: "文件名",
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
          ],
        },
      ],
    },
  ],
};
