$(document).ready(function () {

	var now = moment().format('MMMM Do YYYY, h:mm:ss a');
	$('time').html(now);

	//1. Create click event for form input

	//2. Take form input string, pass it into Lookup API

	//3. Upon successful Lookup, should have stock symbol, name, and exchange code

	//4. Insert into DOM so user can see 

	//5. Take form input string, pass it into Quote API

	//6. Upon successful Quote API access, should have name of company, ticker symbol, LastPrice, Change, Change Percent, High, Low, Open, Etc.

	//7. Insert these into DOM



	// $.ajax({
	// 	url: "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=AAPL&callback=myFunction",
	// 	success: function() {
	// 		console.log("sucess");
	// 	}
	// })
 //   	var invocation = new XMLHttpRequest();
	// var url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=MSFT";
   
	// function callOtherDomain() {
	//   if(invocation) {    
	//     invocation.open('GET', url, true);
	//     invocation.onreadystatechange = handler;
	//     invocation.send(); 
	//   }
	// }

   $.ajax({
        // url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Quote?symbol=msft",
        url: "/forward2markit",
        dataType: "json",
        
        success: function (Quote) {
        	console.log(Quote);
        }
    });
	



});