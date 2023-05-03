"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var userInfoSlice_1 = require("./userInfoSlice");
exports.default = (0, toolkit_1.configureStore)({
    reducer: { userInfo: userInfoSlice_1.default }
});
//# sourceMappingURL=index.js.map