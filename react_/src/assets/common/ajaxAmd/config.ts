/**
 * Created by Zhanglizhao 
 */
const config = {
	/**
	 * 请求状态码
	 * @type {Object}
	 */
	reqCode: {
		/**
		 * 成功返回码 1
		 * @type {Number} 1
		 * @property SUCC
		 */
		SUCC: 1
	},
	/**
	 * 请求的数据类型
	 * @type {Object}
	 * @class reqDataType
	 */
	data_type: {
		/**
		 * 返回html类型
		 * @type {String}
		 * @property HTML
		 */
		HTML: "html",
		/**
		 * 返回json类型
		 * @type {Object}
		 * @property JSON
		 */
		JSON: "json",
		/**
		 * 返回text字符串类型
		 * @type {String}
		 * @property TEXT
		 */
		TEXT: "text"
	},
	/**
	 * 超时,默认超时30000ms
	 * @type {Number} 10000ms
	 * @property TIME_OUT
	 */
	TIME_OUT: 60000,
	/**
	 * 显示请求成功信息
	 * 
	 * @type {Boolean} false
	 * @property SHOW_SUCC_INFO
	 */
	SHOW_SUCC_INFO: false,
	/**
	 * 显示请求失败信息
	 * 
	 * @type {Boolean} false
	 * @property SHOW_ERROR_INFO
	 */
	SHOW_ERROR_INFO: false,
	/**
	 * 登录失败后跳转到登录页面页面地址
	 * 
	 * @type {Boolean} false
	 * @property SHOW_ERROR_INFO
	 */
	LOCATIONHREF:"login.html"
};

export default config;