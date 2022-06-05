export const schema = {
  type: "page",
  body: [
    {
      label: "新增",
      type: "button",
      actionType: "dialog",
      level: "primary",
      className: "m-b-sm",
      dialog: {
        title: "新增定时任务",
        body: {
          type: "form",
          api: "PUT:/api/horus/schedule/addCronTask",
          data: {
            state: "ENABLED",
          },
          messages: {
            saveSuccess: "保存成功！",
          },
          body: [
            {
              type: "input-text",
              name: "jobCode",
              label: "定时任务编码",
              required: true,
            },
            {
              type: "input-text",
              name: "jobName",
              label: "定时任务名称",
              required: true,
            },
            {
              type: "input-text",
              name: "cornStr",
              label: "corn表达式",
              required: true,
            },
            {
              type: "select",
              name: "jobType",
              label: "定时任务类型",
              required: true,
              options: [
                {
                  label: "SpringBean",
                  value: "BEAN",
                },
                {
                  label: "脚本",
                  value: "SCRIPT",
                },
              ],
            },
            {
              type: "input-text",
              name: "jobExecuteId",
              label: "执行器",
              required: true,
            },
            {
              type: "input-text",
              name: "paramStr",
              label: "定时任务参数",
            },
            {
              type: "select",
              name: "state",
              label: "状态",
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
      api: "POST:/api/horus/schedule/pageQuery?pageIndex=${page}&pageSize=${perPage}",
      columns: [
        {
          name: "jobCode",
          label: "定时任务编码",
          fixed: "left",
        },
        {
          name: "jobName",
          label: "定时任务名称",
          fixed: "left",
        },
        {
          name: "cornStr",
          label: "corn表达式",
          fixed: "left",
        },
        {
          label: "定时任务类型",
          type: "mapping",
          name: "jobType",
          map: {
            BEAN: "SpringBean",
            SCRIPT: "脚本",
            "*": "其他：${jobType}",
          },
        },
        {
          label: "执行器",
          name: "jobExecuteId",
        },
        {
          name: "paramStr",
          label: "定时任务参数",
        },
        {
          name: "state",
          label: "状态",
          type: "mapping",
          map: {
            ENABLED: "<span class='label label-danger'>启用</span>",
            DISABLED: "<span class='label label-success'>禁用</span>",
            "*": "其他：${state}",
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
};
