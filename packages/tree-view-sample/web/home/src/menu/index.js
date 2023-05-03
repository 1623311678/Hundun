"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var items = [
    {
        label: "菜单",
        key: "menu",
        icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>,
        children: [
            {
                label: "主页",
                key: "/",
                parentkey: ["menu"],
                icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>
            },
            {
                label: "子菜单项1",
                key: "/about",
                parentkey: ["menu"],
                icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>
            },
            {
                label: "子菜单项2",
                key: "/users",
                parentkey: ["menu"],
                icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>,
                children: [
                    {
                        label: "users1",
                        parentkey: ["menu", "/users"],
                        key: "/users/app1",
                        icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>
                    },
                    {
                        label: "users2",
                        parentkey: ["menu", "/users"],
                        key: "/users/app2",
                        icon: <icons_1.AppstoreOutlined></icons_1.AppstoreOutlined>
                    }
                ]
            }
        ]
    }
];
var LayoutMenu = function () {
    var history = (0, react_router_dom_1.useHistory)();
    var pathName = history.location.pathname;
    var _a = (0, react_1.useState)([]), openKeys = _a[0], setOpenKeys = _a[1];
    function handleClick(item) {
        history.push(item.key);
    }
    (0, react_1.useEffect)(function () {
        var getOpenKeys = function () {
            var openkeys = [];
            var interate = function (arr) {
                for (var i = 0; i < arr.length; i++) {
                    var current = arr[i];
                    var curKey = current["key"];
                    if (pathName === curKey) {
                        openkeys = current["parentkey"];
                    }
                    var children = current["children"];
                    if (children) {
                        interate(children);
                    }
                }
            };
            interate(items);
            return openkeys;
        };
        var openkeys = getOpenKeys();
        setOpenKeys(__spreadArray([], openkeys, true));
    }, [history]);
    return (<antd_1.Menu onClick={handleClick} style={{
            width: 256,
            height: "calc(100vh - ".concat(80, "px)"),
            background: "#fefefe"
        }} defaultSelectedKeys={[pathName]} openKeys={openKeys} 
    // 注意这个属性 `onOpenChange`
    onOpenChange={function (openKeys) {
            setOpenKeys(__spreadArray([], openKeys, true));
        }} mode="inline" items={items}/>);
};
exports.default = LayoutMenu;
//# sourceMappingURL=index.js.map