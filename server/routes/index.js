/* SONG MALISA SE, student number: 301233051, 26 oct 2022 */


let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);


/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* Post Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* Get Route to perform Logout */
router.get('/logout', indexController.performLogout); 

module.exports = router;
