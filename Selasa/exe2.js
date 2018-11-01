var input ="Hello world!"
function balikString(){
	var tampung ="";
	var arrTamp = input.length;
	for(var i=0; i<arrTamp;i++)
	{
		tampung=input[i]+tampung;
	}
	return tampung;
}

console.log(balikString(input));