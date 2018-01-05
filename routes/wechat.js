var express = require('express');
var wechat = require('wechat');

var config = require('../config/config');
var opwechat = require('../controller/wechat');

module.exports = function (app ) {
    opwechat.showMenu();

    app.post('/wechat', wechat(config, function (req, res, next) {
        var message = req.weixin;
        console.log(message);
    }));
    app.get('/wechat', wechat(config, function (req, res, next) {
        // 微信输入信息都在req.weixin上
        var message = req.weixin;
        console.log(message);

    }));
};
