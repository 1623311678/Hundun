"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserInfo = exports.updateUserInfo = exports.userInfoSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.userInfoSlice = (0, toolkit_1.createSlice)({
    name: "userInfo",
    initialState: {
        token: localStorage.getItem("token"),
        userName: localStorage.getItem("name")
    },
    reducers: {
        updateUserInfo: function (state, action) {
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("name", action.payload.userName);
            state.token = action.payload.token;
            state.userName = action.payload.userName;
        },
        removeUserInfo: function (state) {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            state.token = null;
            state.userName = "";
        }
    }
});
// 每个 case reducer 函数会生成对应的 Action creators
exports.updateUserInfo = (_a = exports.userInfoSlice.actions, _a.updateUserInfo), exports.removeUserInfo = _a.removeUserInfo;
exports.default = exports.userInfoSlice.reducer;
//# sourceMappingURL=userInfoSlice.js.map