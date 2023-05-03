"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生成基础axios对象，并对请求和响应做处理
 * 前后端约定接口返回解构规范
 * {
 *    code:0,
 *    data:"成功",
 *    message:""
 * }
 */
var axios_1 = require("axios");
var antd_1 = require("antd");
// 创建一个独立的axios实例
var service = axios_1.default.create({
    // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
    baseURL: "/api",
    // 定义统一的请求头部
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    // 配置请求超时时间60s
    timeout: 60000,
    // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
    withCredentials: true
});
// 请求拦截
service.interceptors.request.use(function (config) {
    // 自定义header，可添加项目token
    var token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});
// 返回拦截
service.interceptors.response.use(function (response) {
    // 获取接口返回结果
    var res = response.data;
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (res.code === 0) {
        return res;
    }
    else if (res.code === 401) {
        // 401假设是未登录状态码
        antd_1.message.warning(res.message);
        // 也可使用router进行跳转
        window.location.href = "/#/login";
        return res;
    }
    else {
        // 错误显示可在service中控制，因为某些场景我们不想要展示错误
        // Message.error(res.message);
        return res;
    }
}, function () {
    antd_1.message.error("网络请求异常，请稍后重试!");
});
exports.default = service;
//# sourceMappingURL=interceptor.js.map