var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/forward2markit', function(req, res){

var callback = function (error, response, body) {
 	if (!error && response.statusCode == 200) {
    	console.log(body) // Print the google web page.
    	res.send(response)
  	}
}

	request('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=msft', callback)

})


/////////////////////////////
// var error = {lbah blah}
// var response = {stuff}  
// var body = {whatever}

// callback(error, response, body)
/////////////////////////////


module.exports = router;
