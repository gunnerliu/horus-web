export const schema = {
  type: "page",
  body: [
    {
      type: "form",
      title: "groovy 脚本",
      // api: "PUT:/api/horus/groovy/addGroovy",
      messages: {
        saveSuccess: "保存成功！",
      },
      body: [
        {
          type: "json-editor",
          language: "java",
          name: "scriptContent",
        },
      ],
    },
  ],
};
