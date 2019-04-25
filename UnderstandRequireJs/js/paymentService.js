//the user module has a define()function provided by require js which has to return
//something which will be forwarded to the callback function. In this case the 
//call back function will look in to the file in js/paymentService which has a 
//define function inside which we have provided the second parameter as following
//this will return the paymentService back.
define([],function (){
	var paymentService = function(){
		var name = "paymentService";
		this.getPaymentmethods = function(){
			console.log("getting payment methods : 1,2 ,3");
		}
	};
	
	return paymentService;
}
);