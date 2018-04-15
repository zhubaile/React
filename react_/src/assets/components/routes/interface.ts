
// matchPath 执行后返回接口
export interface matchPathReturn {
	path:string;
	url:string;
	isExact:boolean;
	params:object;
}
// matchPath 入参参数接口
export interface matchPathOption {
	path:string;
	strict?:boolean;
	exact?:boolean;
}
//compilePath 入参
export interface compilePathOption{
	end:boolean;
	strict:boolean;
}

//compilePath 入参
export interface introRoutesConfig{
	path:string;
	redirect?:string;
	component?:Function;
	onEnter?:Function;
	onLeave?:Function;
	children?:Array<introRoutesConfig>
}
//compilePath 入参
export interface routesConfig{
	path:string;
	redirect?:string;
	component?:Array<Function>;
	onEnter?:Array<Function>;
	onLeave?:Array<Function>;
	children?:Array<routesConfig>
}

export  interface componentInterface{
	$el:JQuery;
	props:object;
	children?:FunctionConstructor
}
