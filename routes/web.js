const router = require('express').Router();


//Require the controller
const webController = require('../app/controllers/WebController');
const newController = require('../app/controllers/NewController');


/**
 * 
 * Define the routes
 * 
 * 
 */


 //home routes

router.get('/', webController.list);
router.get('/view', webController.view);
router.post('/add', webController.save);
router.get('/update/:id', webController.edit);
router.post('/update/:id', webController.update);
router.get('/delete/:id', webController.delete);

// test route
router.get('/new', newController.index);

module.exports = router;