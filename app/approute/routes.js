var ministryCtrl = require('../controllers/ministry.controller');
var devotionCtrl = require('../controllers/devotion.controller');

module.exports = function (express, app) {

	var router = express.Router();

	router.get('/', function (req, res) {
		res.json("API Home Page");
	})
	router.post('/api/v1/ministry/add', ministryCtrl.save);
	router.get('/api/v1/ministries', ministryCtrl.get);
	router.delete('/api/v1/ministry/delete', ministryCtrl.delete);
	router.get('/api/v1/devotion', devotionCtrl.get);
	router.post('/api/v1/devotion/add', devotionCtrl.save);
	
	app.use('/', router);

}