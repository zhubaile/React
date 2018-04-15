import matchPath from './matchPath';
import {routesConfig,introRoutesConfig,componentInterface} from './interface';
export default class Router {
	private hash: string;
	private $el:JQuery;
	private param:object;
	private routes: Array<routesConfig>;
	private matchRoute:any;
	constructor(el:JQuery,param?:object) {
		this.$el=el;
		this.param=param;
	}
	/**
	 * 循环传入的config配置，返回处理后的配置
	 * 
	 * @param {Array<introRoutesConfig>} routes 
	 * @param {routesConfig} [parent] 
	 * @returns {Array<routesConfig>} 
	 * @memberof Router
	 */
	mapIntroConfig(routes:Array<introRoutesConfig>,parent?:routesConfig):Array<routesConfig>{
		return routes.map((val,key)=>{
			let newVal: routesConfig = {
				path: (parent && parent.path) ? (parent.path + "/" + ((/^\//).test(val.path) ? val.path.slice(1) : val.path)) : val.path
			};
			newVal.onEnter = [].concat(parent && parent.onEnter ? parent.onEnter : [],val.onEnter?val.onEnter:[] );

			// if(val.onLeave){
			// 	newVal.onLeave=[].concat(parent&&parent.onLeave?parent.onLeave:[],val.onLeave);
			// }
			newVal.component = [].concat(parent && parent.component ? parent.component : [], val.component?val.component:[])
			if (val.children) {
				newVal.children = this.mapIntroConfig(val.children, newVal)
			} else {
				val.redirect && (newVal.redirect = (parent && parent.path) ? (parent.path + "/" + ((/^\//).test(val.redirect) ? val.path.slice(1) : val.redirect)) : val.redirect);
			}
			return newVal		
		});
	}
	/**
	 * 
	 * 循环处理后的配置，匹配hash
	 * @param {string} hash 
	 * @param {Array<routesConfig>} routes 
	 * @returns 
	 * @memberof Router
	 */
	mapConfig(hash: string,routes:Array<routesConfig>) {
		let route = [],matchHash;
		for (var i = 0; i < routes.length; i++) {
			if (routes[i].children){
				matchHash =this.mapConfig(hash,routes[i].children);
				if(matchHash){
					return matchHash
				}
			}else{
				matchHash =matchPath(hash, { path: routes[i].path});
				if(matchHash){
					return {matchHash,route:routes[i]}
				}
			};
		}
	}
	/**
	 * 处理hash
	 * 
	 * @private
	 * @param {string} hash 
	 * @memberof Router
	 */
	private handleUrl(hash: string) {
		this.hashchange(hash);
		let  matchRoute=this.mapConfig(hash,this.routes);
		if(matchRoute&&matchRoute.matchHash){
			this.routechange(hash);
			this.matchRoute=matchRoute;
			let matchRouteParam={};
			let route=matchRoute.route
			try {
				matchRouteParam = {
					param: this.matchRoute.matchHash.params,
					path: this.matchRoute.matchHash.path,
					url: this.matchRoute.matchHash.url,
				}
			} catch (error) {

			}
			if (route&&route.onEnter &&route.onEnter.length) {				
				for (let i = 0; i < route.onEnter.length; i++) {
					//执行 onEnter方法
					let isEnter=route.onEnter[i](matchRouteParam);
					if (!isEnter) {
						return false
					}
				}
			}			
			let newComponent=[].concat(matchRoute.route.component);
			new matchRoute.route.component[0]({
				$el: this.$el,
				props:$.extend({...this.param},{
					routing: matchRouteParam
				}),
				children: newComponent
			});
		}else{
			this.matchError(hash,this.routes)
		}
	}
	/**
	 * 
	 * 处理配置入口
	 * @param {Array<introRoutesConfig>} routes 
	 * @memberof Router
	 */
	configureRouter(routes:Array<introRoutesConfig>){
		this.routes=this.mapIntroConfig(routes);
		$(window).bind('hashchange', () => {
			this.handleUrl(window.location.hash.slice(1));
		});
		this.handleUrl(window.location.hash.slice(1));
	}
	/**
	 * 
	 * 
	 * @param {string} hash 
	 * @memberof Router
	 */
	routechange(hash: string){}
	/**
	 * 
	 * 
	 * @param {string} hash 
	 * @memberof Router
	 */
	hashchange(hash: string){}

	/**
	 * 
	 * 执行hash处理之前回调 返回为false则不执行对应路由处理
	 * @param {string} hash 
	 * @returns {bool}
	 * @memberof Router
	 */
	beforeChange(hash: string) {
		return true
	}
	matchError(hash:string,routes:any){
		
	}
}

export class Component{
	public $el:JQuery;
	public props:object;
	public children?:Function;
	public render:Function;
	public renderChildren:Function;
	constructor(obj:componentInterface) {
		this.$el=obj.$el;
		this.props=obj.props;
		let Children;
		if(obj.children&&obj.children.length){			
			Children=this.children=obj.children[0];
		}
		this.render = (html) => {
			let isRender = this.beforeRender();
			if (isRender) {
				this.$el.empty().append(html);
				this.afterRender()
			}
		};
		this.renderChildren=($el:JQuery,param?:object)=>{
			if(Children){
				new Children({
					$el:$el,
					props: $.extend(this.props,param)
				})
			}
		}
		return this;
	}
	beforeRender(){
		return true
	}
	afterRender(){
	}
	matchError(){}
}

export class Route{
	private $el:JQuery;
	private matchParam:object;
	constructor(ob) {
		this.$el=ob.$el
		this.matchParam=ob.matchRouteParam;
	}
	render(el:JQuery){

	}
}
