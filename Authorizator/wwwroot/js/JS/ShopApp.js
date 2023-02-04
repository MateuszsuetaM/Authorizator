var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';
var Context = require("./Context");
//import Context from "./Context";
var Appp = /** @class */ (function (_super) {
    __extends(Appp, _super);
    function Appp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: null,
            cart: {},
            products: []
        };
        _this.routerRef = React.createRef();
        return _this;
    }
    Appp.prototype.render = function () {
        var _this = this;
        return (React.createElement(Context.Provider, { value: __assign(__assign({}, this.state), { removeFromCart: this.removeFromCart, addToCart: this.addToCart, login: this.login, addProduct: this.addProduct, clearCart: this.clearCart, checkout: this.checkout }) },
            React.createElement(Router, { ref: this.routerRef },
                React.createElement("div", { className: "App" },
                    React.createElement("nav", { className: "navbar container", role: "navigation", "aria-label": "main navigation" },
                        React.createElement("div", { className: "navbar-brand" },
                            React.createElement("b", { className: "navbar-item is-size-4 " }, "ecommerce"),
                            React.createElement("label", { role: "button", class: "navbar-burger burger", "aria-label": "menu", "aria-expanded": "false", "data-target": "navbarBasicExample", onClick: function (e) {
                                    e.preventDefault();
                                    _this.setState({ showMenu: !_this.state.showMenu });
                                } },
                                React.createElement("span", { "aria-hidden": "true" }),
                                React.createElement("span", { "aria-hidden": "true" }),
                                React.createElement("span", { "aria-hidden": "true" }))),
                        React.createElement("div", { className: "navbar-menu " + (this.state.showMenu ? "is-active" : "") },
                            React.createElement(Link, { to: "/products", className: "navbar-item" }, "Products"),
                            this.state.user && this.state.user.accessLevel < 1 && (React.createElement(Link, { to: "/add-product", className: "navbar-item" }, "Add Product")),
                            React.createElement(Link, { to: "/cart", className: "navbar-item" },
                                "Cart",
                                React.createElement("span", { className: "tag is-primary", style: { marginLeft: "5px" } }, Object.keys(this.state.cart).length)),
                            !this.state.user ? (React.createElement(Link, { to: "/login", className: "navbar-item" }, "Login")) : (React.createElement(Link, { to: "/", onClick: this.logout, className: "navbar-item" }, "Logout")))),
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: "/", component: ProductList }),
                        React.createElement(Route, { exact: true, path: "/login", component: Login }),
                        React.createElement(Route, { exact: true, path: "/cart", component: Cart }),
                        React.createElement(Route, { exact: true, path: "/add-product", component: AddProduct }),
                        React.createElement(Route, { exact: true, path: "/products", component: ProductList }))))));
    };
    return Appp;
}(Component));
export default Appp;
