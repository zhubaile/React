import Router from '../../../assets/components/routes/index';

// import find from './find/find';
import login from './login/login';
// import info from './info/info'
// import register from './register/register';
// import reset from './reset/reset';
// import agreement from './agreement/agreement';

export default class RouterRoot extends Router {
	constructor(self) {
		super(self);
		this.configureRouter([
			{
				path: "",
				component: login
			},
			// {
			// 	path: "info",
			// 	component: info
			// },
			// {
			// 	path: 'register',
			// 	component: register
			// },
			// {
			// 	path: 'find',
			// 	component: find
			// },
			// {
			// 	path: 'reset',
			// 	component: reset
			// },
			// {
			// 	path: 'agreement',
			// 	component: agreement
			// }
		])
	}
	matchError(hash) {
		window.location.hash = ""
	}
}