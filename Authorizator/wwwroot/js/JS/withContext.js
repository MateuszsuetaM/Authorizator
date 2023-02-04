var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import Context from "./Context";
var withContext = function (WrappedComponent) {
    var WithHOC = function (props) {
        return (React.createElement(Context.Consumer, null, function (context) { return React.createElement(WrappedComponent, __assign({}, props, { context: context })); }));
    };
    return WithHOC;
};
export default withContext;
