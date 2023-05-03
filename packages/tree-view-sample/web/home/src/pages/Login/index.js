"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("@src/store/userInfoSlice");
var apiMap_1 = require("@src/api/apiMap");
var request_1 = require("@src/api/request");
var FormItem = antd_1.Form.Item;
var InputStyle = { width: "240px" };
var Login = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var onFinish = function (values) {
        var payload = {
            token: "".concat(values["username"], "_").concat(values["password"]),
            userName: values["username"]
        };
        (0, request_1.post)(apiMap_1.default.login, {
            userName: values["username"],
            password: values["password"]
        });
        dispatch((0, userInfoSlice_1.updateUserInfo)(payload));
        console.log("Success:", values);
    };
    var onFinishFailed = function (errorInfo) {
        console.log("Failed:", errorInfo);
    };
    return (<antd_1.Card title="登录验证" style={{ width: "60%", margin: "20px auto" }}>
      <antd_1.Form name="normal_login" className="login-form" initialValues={{
            remember: true,
            username: "admin",
            password: "123456"
        }} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ width: 260, margin: "20px auto" }}>
        <FormItem name="username" style={InputStyle} rules={[{ required: true, message: "用户名必填" }]}>
          <antd_1.Input prefix={<icons_1.UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
        </FormItem>
        <FormItem name="password" style={InputStyle} rules={[{ required: true, message: "密码必填" }]}>
          <antd_1.Input prefix={<icons_1.LockOutlined className="site-form-item-icon"/>} type="password" placeholder="请输入密码"/>
        </FormItem>
        <FormItem>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <antd_1.Checkbox>记住密码</antd_1.Checkbox>
          </FormItem>
        </FormItem>

        <FormItem>
          <antd_1.Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </antd_1.Button>
        </FormItem>
      </antd_1.Form>
    </antd_1.Card>);
};
exports.default = Login;
//# sourceMappingURL=index.js.map