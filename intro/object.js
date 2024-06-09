"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "rohit",
    isActive: true,
};
var myUser = {
    _id: "3424",
    name: "ed",
    email: "fae",
    isActive: true
};
//we can modify the email but we cannot modify the _id as its readonly
myUser.email = "Fwfwe";
