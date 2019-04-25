function randomFunction() {
	for(var i=0;i<9;i++){
		//do something
	}

	for(let j=0;j<9;j++){
		//do something
	}

	console.log(i); //will show the value as 9
	console.log(j);//will  show undefined as the scope of j is only within the for block
};

randomFunction();



