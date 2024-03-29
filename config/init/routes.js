/*

	Set all routes of the cmpe 280 application

*/

var userController = require('../../controllers/userController');
var errorController = require('../../controllers/errorController');
var baseurl = '';


module.exports = function(app, env) {
	app.get('/', userController.getRoot);
	
	// User routes
	app.post(baseurl + '/users', userController.postUser);
	app.get(baseurl + '/users/:user_id', userController.getUser);
	app.post(baseurl + '/login', userController.postLogin);

	// errors
	app.get(baseurl + '/errors', errorController.getErrors);
	app.get(baseurl + '/errors.json', errorController.getErrorsJson);

	// cpu status
	app.get(baseurl + '/cpu', errorController.getCpu);
	app.get(baseurl + '/cpu.json', errorController.getCpuJson);
	
}
