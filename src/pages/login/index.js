/**
 * 登录页面
 */

import LoginBg from "~/components/login_bg";

import loginCss from "./styled";

export const schema = {
  type: "page",
  css: loginCss,
  body: [
    {
      type: "container",
      body: {
        component: LoginBg,
      },
    },
    {
      type: "wrapper",
      className: "login-wrapper b r",
      body: [
        {
          type: "html",
          html: `
          <h6 class="login-title">
            <img src="/static/images/horus-eye.svg" />
            <p>Horus 监控平台</p>
          </h6>
        `,
        },
        {
          $preset: "forms.loginForm",
        },
      ],
    },
  ],
  preset: {
    apis: {
      login: {
        url: "POST ovapi/user/login",
        onError: () => {},
        onSuccess: (source) => {
          return { data: source };
        },
      },
    },
    forms: {
      loginForm: {
        type: "form",
        className: "login-form",
        title: "",
        mode: "horizontal",
        horizontal: {
          left: "col-sm-2",
          right: "col-sm-9",
        },
        wrapWithPanel: false,
        autoFocus: false,
        api: "$preset.apis.login",
        redirect: "/",
        controls: [
          {
            type: "text",
            name: "username",
            required: true,
            placeholder: "请输入用户名",
            label: "用户名",
            size: "full",
          },
          {
            type: "password",
            name: "password",
            label: "密码",
            required: true,
            placeholder: "请输入密码",
            size: "full",
          },
          {
            type: "submit",
            size: "lg",
            level: "primary",
            label: "登录",
            inputClassName: "w-full",
            horizontal: {
              left: "col-sm-2",
              right: "col-sm-9",
            },
          },
        ],
      },
    },
  },
};
