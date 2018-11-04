function angkaPalindrome(num) {
  for(var i=1; 1 ; i++)
  {	num = num + 1;
  	var simpan = "";
  	var stringNum = String(num);
  	for(var j=0; j<stringNum.length;j++){
  		simpan = stringNum[j] + simpan ;
  	}
  	if (Number(simpan)===num) {
  		return num;
  	}
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

