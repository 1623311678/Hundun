"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("@src/store/userInfoSlice");
var Header = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var name = (0, react_redux_1.useSelector)(function (state) {
        return state.userInfo.userName;
    });
    return (<div style={{
            height: 80,
            background: "black",
            display: "flex",
            alignItems: "center"
        }}>
      <div className="title" style={{
            color: "white",
            width: "200px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px"
        }}>
        混沌工程化
      </div>
      <antd_1.Dropdown overlay={<antd_1.Card title="退出登录">
            <antd_1.Button onClick={function () {
                dispatch((0, userInfoSlice_1.removeUserInfo)());
            }}>
              退出
            </antd_1.Button>
          </antd_1.Card>}>
        <div className="avtar" style={{
            width: "50px",
            height: "50px",
            minWidth: "50px",
            minHeight: "50px",
            background: "green",
            marginLeft: "80%",
            borderRadius: "25px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            overflow: "hidden"
        }}>
          {name}
        </div>
      </antd_1.Dropdown>
    </div>);
};
exports.default = Header;
//# sourceMappingURL=index.js.map