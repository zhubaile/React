interface pageOption {
	el?: JQuery
	param: any   //参数
	current_page?: number,//当前选中页码 默认1
	prev_text?: string //“前一页”分页按钮上显示的文字
	next_text?: string //“下一页”分页按钮上显示的文字
	items_per_page?: number//每页显示条数
	callback: Function  //回调
}

import page from "./page.hbs";
export default class pagination {
	private option: pageOption;
	private $el: JQuery;
	private totalNum: number;//总条数
	private totalPage: number;//总页数
	private current_page: number;
	private pageShowArr: Array<any>;
	private isFirstRender: boolean = true;
	constructor(opt?: pageOption) {
		if (!opt) {
			return this
		}
		return this.init(opt)
	}
	/**
	 * 初始化分页 
	 * @param {JQuery} el 
	 * @returns 
	 * @memberof pagination
	 */
	init(opt: pageOption) {
		this.option = Object.assign({
			items_per_page: 10,//每页显示条数
			current_page: 1,
			prev_text: "<span class='icon s-arrow-left'></span>",
			next_text: "<span class='icon s-arrow-right'></span>",
			param: {},
			callback: () => { }
		}, opt);
		this.pageShowArr = [];
		this.$el = this.option.el;
		if (!(this.$el && this.$el.length)) {
			return this
		}
		this.eventInit();
		this.renderPageByIndex(1);
		return this;
	}
	/**
	 * 根据搜索参数重置分页从第一页加载 
	 * @param {*} [param] 
	 * @memberof pagination
	 */
	reset(param?: any) {
		if ((this.$el && this.$el.length)) {
			this.renderPageByIndex(1, param)
		} else {
		}
		return this
	}
	/**
	 * 
	 * 触发用户回调执行
	 * @param {any} opt 
	 * @memberof pagination
	 */
	done(opt) {
		this.totalNum = opt.totalNum;
		this.totalPage = Math.ceil(opt.totalNum / this.option.items_per_page);
		if (opt.beans && opt.beans.length) {
			this.renderPage();
		} else {
			this.$el.html("")
		}

		// if (this.option.current_page != 1 || (opt.beans && opt.beans.length)) {

		// }
	}
	/**
	 * 
	 * html 渲染
	 * @memberof pagination
	 */
	renderPage() {
		this.$el.html(page({
			prevName: this.option.prev_text,
			nextName: this.option.next_text,
			current: this.option.current_page,
			totalPage: this.totalPage,
			totalNum: this.totalNum,
			page: this.totalNum ? this.getPageArr() : []
		}))
	}
	/**
	 * 
	 * 事件绑定
	 * @memberof pagination
	 */
	eventInit() {
		this.$el.unbind("click").on("click", ".pagination-page", (e) => {
			let $target = $(e.target || e.currentTarget);
			let index = this.$el.find(".pagination-page a").index($target);
			if (index != -1) {
				this.renderPageByIndex(this.pageShowArr[index])
			}
		})
			.on("click", ".pagination-submit", (e) => {
				let index = parseInt(this.$el.find(".pagination-input").val());
				index = (index && index != NaN) ? index : 1;
				this.renderPageByIndex(index)
			})
			.on("click", ".prev", (e) => {
				this.option.current_page > 1 ? this.renderPageByIndex(this.option.current_page - 1) : void 0
			})
			.on("click", ".next", (e) => {
				this.option.current_page < this.totalPage ? this.renderPageByIndex(this.option.current_page + 1) : void 0
			})
			.unbind("keyup").on("keyup", ".pagination-input", (e) => {
				if (e.keyCode == 13) {
					let index = parseInt(this.$el.find(".pagination-input").val());
					this.renderPageByIndex(index)
				}
			})
	}
	/**
	 * 
	 * 通过传入的index页码渲染页码index的数据
	 * @param {any} index 
	 * @param {*} [param] 
	 * @memberof pagination
	 */
	renderPageByIndex(index, param?: any) {
		index = parseInt(index);
		if (index > this.totalPage) {
			index = this.totalPage
		}
		if (index < 1) {
			index = 1
		}

		this.option.current_page = index;
		this.option.callback({
			param: param ? param : this.option.param,
			page: index,
			start: this.option.items_per_page * (index - 1),
			end: this.option.items_per_page * index
		}, this.done.bind(this));
	}
	/**
	 * 
	 * 获取分页页码，按数组排序
	 * @returns 
	 * @memberof pagination
	 */
	getPageArr() {
		let arr = [];
		this.pageShowArr = [];
		for (let i = 1; i <= this.totalPage; i++) {
			let dif = Math.abs(this.option.current_page - i)
			if (dif > 2 && (i - 1 > 2) && this.totalPage - i > 2) {
				if (arr[arr.length - 1] != '') {
					arr.push("")
				}
			} else {
				arr.push({ num: i, isCurrent: (i == this.option.current_page) });
				this.pageShowArr.push(i)
			}
		}
		return arr
	}
}

