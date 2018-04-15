/**
 * Created by Zhanglizhao
 * ajax 二次封装 
 */



import config from "./config";
/*===========================
  interface
===========================*/

interface newJQueryAjaxSettings extends JQueryAjaxSettings {
	callback?: Function
}
/*===========================
  fun
===========================*/
/**
 * 
 * 
 * @param {newJQueryAjaxSettings} opt 
 */
const _ajaxBase = function (opt: newJQueryAjaxSettings) {
	var param = "";
	/*async = sync ? false : true;*/
	
	// ie8下报opt["dataType"]为空或不是对象错误，是webpack打包时配置混淆引起的
	var cache = (opt["dataType"] == "html") ? true : false;
	//使用 系统  环境变量
	if(brushTcl=="local"){
		opt. url="/"+opt. url
	}
	$.ajax({
		url: opt.url,
		type: opt.type,
		data: opt.data,
		cache: opt.cache,
		dataType: opt.dataType,
		async: opt.async,
		timeout: config.TIME_OUT,
		beforeSend: function (xhr) {
			xhr.overrideMimeType("text/plain; charset=utf-8");
		},
		success: function (data) {
			if (!data) {
				return;
			}
			if (opt.dataType == "html") {
				opt.callback(data, true);
				return;
			}
			try {
				//超时重定向至登陆页
				if (data.returnCode == 'BUSIOPER=RELOGIN') {
					//判断是否存在iframe
					window.location.href = config.LOCATIONHREF;
					return;
				}
			} catch (e) {
				alert("JSON Format Error:" + e.toString());
			}
			if (opt.callback && data) {
				var isSuc = (data.returnCode == config.reqCode.SUCC ? true : false);
				opt.callback(data || {}, isSuc);
			}
		},
		error: function (e) {
			var retErr = {};
			retErr['returnCode'] = "404";
			retErr['returnMessage'] = "网络异常或超时，请稍候再试！";
			opt.callback(retErr, false);
		},
		complete: function () { }
	});
}
/**
 * 
 * 
 * @param {newJQueryAjaxSettings} opt 
 * @returns 
 */
const _ajaxJsonp = function (opt: newJQueryAjaxSettings) {
	var param = "";
	//sync ? false : true
	if (!opt.url || opt.url === '') {
		// console.log('the url of param cann\'t equals null or empty of string');
		return false;
	}
	if (!opt.callback) {
		// console.log('you missed callback, it must be a function');
		return false;
	}
	if (!opt.data || opt.data === '') {
		// console.log('warn! your passed null or empty to cmd param, are you suer?');
	}
	$.ajax({
		url: opt.url,
		type: opt.type,
		data: opt.data,
		jsonpCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'jsonp',
		async: opt.async,
		timeout: config.TIME_OUT,
		beforeSend: function (xhr) {
			xhr.overrideMimeType("text/plain; charset=utf-8");
		},
		success: function (data) {
			if (!data) {
				return;
			}
			try {
				//超时重定向至登陆页
				if (data.returnCode == 'BUSIOPER=RELOGIN') {
					//判断是否存在iframe
					window.location.href = config.LOCATIONHREF;
					return;
				}
			} catch (e) {
				alert("JSON Format Error:" + e.toString());
			}
			if (opt.callback && data) {
				var isSuc = (data.returnCode == config.reqCode.SUCC ? true : false);
				opt.callback(data || {}, isSuc);
			}
		},
		error: function () {
			var retErr = {};
			retErr['returnCode'] = "404";
			retErr['returnMessage'] = "网络异常或超时，请稍候再试！";
			opt.callback(retErr, false);
		},
		complete: function () { }
	});
}
const ajaxAmd = {
	/**
	 * 
	 * 
	 * @param {JQueryAjaxSettings} options 
	 */
	ajax: function (options: JQueryAjaxSettings) {
		var opt = $.extend({
			type: 'post',
			dataType: 'json',
			timeout: 30000,
			beforeSend: function (xhr) {
				xhr.overrideMimeType("text/plain; charset=utf-8");
			}
		}, options);
		return $.ajax(opt);
	},
	/**
	 * 
	 * 
	 * @param {any} url 
	 * @param {any} cmd 
	 * @param {any} callback 
	 * @param {any} sync 
	 */
	getJson: function (url, cmd, callback, sync?: boolean) {
		if (sync && typeof (sync) == 'boolean') {
			sync = sync;
		} else if (callback) {
			if (typeof (callback) == 'function') {
				callback = callback
			} else if (typeof (callback) == 'boolean') {
				sync = callback;
				callback = '';
			}
		} else if (cmd) {
			if (typeof (cmd) == 'object' || typeof (cmd) == 'string') {
				cmd = cmd;
			} else if (typeof (cmd) == 'function') {
				callback = cmd;
				cmd = '';
			} else if (typeof (cmd) == 'boolean') {
				sync = cmd;
				cmd = '';
				callback = '';
			}
		} else {
			cmd = '';
			callback = '';
		}

		_ajaxBase({
			url, type: 'GET', data: cmd, dataType: config.data_type.JSON, callback, async: sync
		});
	},
	/**
	 * 
	 * 
	 * @param {any} url 
	 * @param {any} cmd 
	 * @param {any} callback 
	 * @param {any} sync 
	 */
	postJson: function (url, cmd, callback, sync: boolean = true) {
		if (sync && typeof (sync) == 'boolean') {
			sync = sync;
		} else if (callback) {
			if (typeof (callback) == 'function') {
				callback = callback
			} else if (typeof (callback) == 'boolean') {
				sync = callback;
				callback = '';
			}
		} else if (cmd) {
			if (typeof (cmd) == 'object' || typeof (cmd) == 'string') {
				cmd = cmd;
			} else if (typeof (cmd) == 'function') {
				callback = cmd;
				cmd = '';
			} else if (typeof (cmd) == 'boolean') {
				sync = cmd;
				cmd = '';
				callback = '';
			}
		} else {
			cmd = '';
			callback = '';
		}
		_ajaxBase({
			url, type: 'POST', data: cmd, dataType: config.data_type.JSON, callback, async: sync
		});
	},
	uuidFast: function () {
		var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
		var chars = CHARS, uuid = new Array(36), rnd = 0, r;
		for (var i = 0; i < 36; i++) {
			if (i == 8 || i == 13 || i == 18 || i == 23) {
				uuid[i] = '-';
			} else if (i == 14) {
				uuid[i] = '4';
			} else {
				if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
				r = rnd & 0xf;
				rnd = rnd >> 4;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
		return uuid.join('');
	},
	/**
	 * 
	 * 
	 * @param {any} url 
	 * @param {any} cmd 
	 * @param {any} callback 
	 * @param {any} sync 
	 */
	putJson: function (url, cmd, callback, sync?: boolean) {
		if (sync && typeof (sync) == 'boolean') {
			sync = sync;
		} else if (callback) {
			if (typeof (callback) == 'function') {
				callback = callback
			} else if (typeof (callback) == 'boolean') {
				sync = callback;
				callback = '';
			}
		} else if (cmd) {
			if (typeof (cmd) == 'object' || typeof (cmd) == 'string') {
				cmd = cmd;
			} else if (typeof (cmd) == 'function') {
				callback = cmd;
				cmd = '';
			} else if (typeof (cmd) == 'boolean') {
				sync = cmd;
				cmd = '';
				callback = '';
			}
		} else {
			cmd = '';
			callback = '';
		}
		_ajaxBase({
			url, type: 'PUT', data: cmd, dataType: config.data_type.JSON, callback, async: sync
		});
	},
	/**
	 * 
	 * 
	 * @param {any} url 
	 * @param {any} cmd 
	 * @param {any} callback 
	 * @param {any} sync 
	 */
	deleteJson: function (url, cmd, callback, sync?: boolean) {
		if (sync && typeof (sync) == 'boolean') {
			sync = sync;
		} else if (callback) {
			if (typeof (callback) == 'function') {
				callback = callback
			} else if (typeof (callback) == 'boolean') {
				sync = callback;
				callback = '';
			}
		} else if (cmd) {
			if (typeof (cmd) == 'object' || typeof (cmd) == 'string') {
				cmd = cmd;
			} else if (typeof (cmd) == 'function') {
				callback = cmd;
				cmd = '';
			} else if (typeof (cmd) == 'boolean') {
				sync = cmd;
				cmd = '';
				callback = '';
			}
		} else {
			cmd = '';
			callback = '';
		}
		_ajaxBase({
			url, type: 'DELETE', data: cmd, dataType: config.data_type.JSON, callback, async: sync
		});
	},
	/**
	 * 
	 * 
	 * @param {any} url 
	 * @param {any} cmd 
	 * @param {any} callback 
	 * @param {any} sync 
	 */
	getJsonp: function (url, cmd, callback, sync?: boolean) {
		_ajaxJsonp({ url, type: 'GET', data: cmd, callback, async: sync });
	},

	/*	cors: function (options) {
			//设置jquery 支持跨域
			$.support && ($.support.cors = true);
			var config = $.extend({
				type: 'post',
				dataType: 'json',
				crossDomain: true,
				timeout: config.TIME_OUT,
				contentType: "application/json; charset=utf-8",
				beforeSend: function (xhr) {
					xhr.overrideMimeType("text/plain; charset=utf-8");
				}
			}, options);
			if ($.support && $.support.msie) {
				//为ie浏览器时增加xhrFields配置
				config["xhrFields"] = { withCredentials: true };
			}
			$.ajax(config);
		}*/
}

export default ajaxAmd