var ministryCtrl = require('../controllers/ministry.controller');
var devotionCtrl = require('../controllers/devotion.controller');
var userCtrl = require('../controllers/users.controller')

module.exports = function (express, app) {

	var router = express.Router();

	router.get('/', function (req, res) {
		res.json("API Home Page");
	})
	router.post('/api/v1/users/add', userCtrl.save);
	router.post('/api/v1/users/check', userCtrl.check); // changed it from post to get
	router.get('/api/v1/users', userCtrl.get);
	router.get('/api/v1/users/:email',userCtrl.findemail);
	router.get('/api/v1/users/id/:id',userCtrl.findById);
	router.post('/api/v1/ministry/add', ministryCtrl.save);
	router.get('/api/v1/ministries', ministryCtrl.get);
	router.get('/api/v1/ministries/:id', ministryCtrl.getById);
	router.delete('/api/v1/ministry/del/:id', ministryCtrl.deleteOne);
	router.get('/api/v1/devotion', devotionCtrl.get);
	router.get('/api/v1/devotion/:id', devotionCtrl.findOnes);
	router.get('/api/v1/devotion/date/:id', devotionCtrl.findDate);
	router.post('/api/v1/devotion/add', devotionCtrl.save);

	app.use('/', router);

}