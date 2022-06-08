// ovine 编译配置 文档： https://ovine.igroupes.com/org/docs/advance/configurations
module.exports = {
  favicon: "/static/images/horus-eye.svg", // 页面 icon
  title: "Horus", // 页面标题
  publicPath: "/", // 所有的资源文件前缀
  envModes: ["localhost", "staging", "production"], // 对应的 env 的三个配置，可以自行添加，或者修改。
  dll: {
    useJsdelivr: true,
  },
  // UI 相关配套
  ui: {
    defaultTheme: "cxd", // 初始化主题
  },
};
