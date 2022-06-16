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
              children: [
                {
                  label: "脚本列表",
                  icon: "fa fa-bars",
                  nodePath: "list",
                },
                {
                  label: "脚本执行",
                  icon: "fa fa-magic",
                  nodePath: "exec",
                },
              ],
            },
            {
              label: "数据插件",
              icon: "fa fa-align-justify",
              nodePath: "colfilter",
            },
            {
              label: "消息触达",
              icon: "fa fa-comments-o",
              nodePath: "reach",
              children: [
                {
                  label: "触达通道",
                  icon: "fa fa-paper-plane-o",
                  nodePath: "channel",
                },
                {
                  label: "接收人",
                  icon: "fa fa-address-card",
                  nodePath: "receiver",
                },
                {
                  label: "消息发送",
                  icon: "fa fa-envelope",
                  nodePath: "sendmsg",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
