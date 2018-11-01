function hitungJumlahKata(kalimat) {
	//console.log(kata);
	for(var i = 0; i <= kalimat.length ; i++){
		var hasKata = 1;
		var simpan = 0;
		if(kalimat.substring(i,i+1) === " "){
			hasKata = hasKata+1;
		}
		hasKata= hasKata+1 
	}return hasKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5