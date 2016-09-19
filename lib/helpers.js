'use strict';

exports.yell = function (msg) {
    return msg.toUpperCase();
};

exports.if_eq = function(str, cond) {
	console.log(str, "STRING");
	console.log(cond, "CONDITION");
}