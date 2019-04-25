requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        cart: 'cart',//second para will be taken as cart.js from baseurl
        paymentService: 'paymentService'//second para: paymentService.js
    }
});



requirejs(['cart','paymentService'], function(cart, paymentService){
	//this is a call back function that will be called once allthe dependencies are
	//loaded
	var cart = new cart();//loads a cart for future use
	var paymentService = new paymentService();

});