function palindrome(kata) {
	var tampung ="";
	for(i = 0; i< kata.length ; i++){
		tampung= kata[i]+tampung;
	}
	if (tampung === kata) {
		return true;
	}else return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false