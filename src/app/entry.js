export const entry = [
  {
    type: "preset-route", // 路由组件
    path: "/login",
    pathToComponent: true,
  },
  {
    type: "private-route", // 私有路由
    path: "/",
    redirect: "/login",
    onAuth: () => {
      return true;
    },
    children: {
      type: "aside-layout",
      header: {
        showDevItem: false,
        brand: {
          logo: "/horus-web/static/images/horus-eye.svg",
          title: "Horus",
          link: {
            title: "dashboard",
            href: "/",
          },
        },
        items: [
          {
            type: "item-setting",
            align: "right",
          },
        ],
      },
      routes: [
        // 应用内路由
        {
          nodePath: "/",
          label: "菜单目录",
          children: [
            {
              path: "/",
              label: "Dashboard",
              nodePath: "dashboard",
              exact: true,
              pathToComponent: "dashboard",
              sideVisible: false,
            },
            {
              label: "定时任务",
              icon: "fa fa-clock-o",
              nodePath: "schedules",
            },
            {
              label: "监控指标",
              icon: "fa fa-eye",
              nodePath: "metrics",
            },
            {
              label: "动态脚本",
              icon: "fa fa-bolt",
              nodePath: "groovy",
            },
            {
              label: "数据插件",
              icon: "fa fa-align-justify",
              nodePath: "colfilter",
            },
            {
              label: "消息触达",
              icon: "fa fa-envelope",
              nodePath: "reach",
            },
          ],
        },
      ],
    },
  },
];
