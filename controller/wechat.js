/**
 * Created by qy on 2018/1/5.
 */
var fs = require('fs');
var config = require ('../config/config');
var wechat = require('wechat');

var WechatAPI = require('wechat-api');

// var oauth = new wechat.OAuth(config.mp.appid, config.secret);

var api = new WechatAPI(config.appid, config.secret);

var opwechat = {};

opwechat.reply = wechat(config, wechat.text(function (message, req, res) {
    console.log(message);

}));