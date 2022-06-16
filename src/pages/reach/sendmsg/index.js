export const schema = {
  type: "page",
  body: [
    {
      type: "form",
      title: "消息发送",
      api: "PUT:/api/horus/reach/sendMessage",
      messages: {
        saveSuccess: "发送成功！",
      },
      body: [
        {
          type: "input-text",
          name: "categoryCode",
          label: "消息类别",
          required: true,
        },
        {
          type: "input-text",
          name: "tag",
          label: "消息标签",
          required: true,
        },
        {
          type: "select",
          label: "消息等级",
          name: "level",
          required: true,
          options: [
            {
              label: "聚合消息",
              value: "AGGREGATION",
            },
            {
              label: "即时消息",
              value: "INSTANT",
            },
          ],
        },
        {
          type: "editor",
          language: "markdown",
          label: "消息内容(markdown)",
          name: "content",
          required: true,
        },
      ],
    },
  ],
};
