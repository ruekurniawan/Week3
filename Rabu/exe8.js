function pasanganTerbesar(num) {
  var array = String(num).split("");
  var simpan = [];
  for(var i = 0; i < array.length-1; i++){
    Number(simpan[i] = array[i]+array[i+1]);
  }
  var tampung = simpan[0];
  for(var j = 1; j < simpan.length; j++){
    if(simpan[j] > tampung){
      tampung = simpan[j];
    }
  }return Number(tampung);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99