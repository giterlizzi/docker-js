exports.print = function print(err, data) {
	if(err) 
	{
		console.log("Some error") 
		console.log(err) 
	}
	else 
	{
		console.log("success:") 
		console.log(data) 	
	}

}
