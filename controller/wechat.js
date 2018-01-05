/**
 * Created by qy on 2018/1/5.
 */
var fs = require('fs');
var config = require ('../config/config');
var wechat = require('wechat');
var menu = require('./menu');
var WechatAPI = require('wechat-api');

// var oauth = new wechat.OAuth(config.mp.appid, config.secret);
var api = new WechatAPI(config.appid, config.secret);

var opwechat = {};
opwechat.showMenu = function () {
    api.createMenu(menu, function (err, result) {
        console.log(result);
    });
};

module.exports = opwechat;