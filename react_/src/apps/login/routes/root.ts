


import Router from '../../../assets/components/routes/index';

/*interface introRoutesConfig{
	path:string;
	redirect?:string;
	component?:Function;
	onEnter?:Function;
	onLeave?:Function;
	children?:Array<introRoutesConfig>
}*/
import test from './testT/index';
console.log(test);
export default class RouterRoot extends Router {
	constructor() {
		super();
		this.configureRouter([
			{
				path:"home",
				component: resolve=> { require.ensure(['./test/index'], resolve) }
			},
			{
				path:"user/:id",
				onEnter:()=>{console.log("a")},
				component: resolve=> { require.ensure(['./testT/index'], resolve) },
				children:[{
					path:"/:userId",
					onEnter:()=>{console.log("c")},
					component: resolve=> { require.ensure(['./testT/index'], resolve) }
				}]
			}
		])
	}
	/*configureRouter(){
		return [
			{
				path:"home",
				component: (callback) => { require.ensure(['./test/index'], callback) }
			},
			{
				path:"user/:id",
				component: (callback) => { require.ensure(['./testT/index'], callback) }
			}
		];
	}*/
}

