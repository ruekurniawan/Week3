function hitungJumlahKata(kalimat) {
	var hitKata = 0;
	var kata = "";
	for(var i = 0; i <= kalimat.length ; i++){
		if(kalimat[i] !== " ")
		{
			kata = kata + kalimat[i];
		}
		
		else if(kata.length >0)
		{
			hitKata = hitKata + 1;
			kata = "";
		}
	}
	if(kata.length > 0)
	{
		hitKata= hitKata+1;
	}
	return hitKata;
}
// TEST CASES
console.log(hitungJumlahKata('I have a    dream')); // 4
console.log(hitungJumlahKata('Never eat     shredded    wheat or      cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5