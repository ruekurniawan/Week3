//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

// Code
function targetTerdekat(arr) {
  var posisiO = 0;
  var posisiX = 0;
  var jarak_terdekat_sementara = arr.length;
  for(var i =0 ; i < arr.length ; i++){
    if(arr[i] === "o"){
      posisiO = posisiO + i;
    }
  }
  for(var j = 0 ; j < arr.length ; j++){
    if(arr[j] === "x"){
      posisiX = posisiX + j;
      var jarak = Math.abs(posisiO - posisiX);
      posisiX = 0;
    }
    if (jarak_terdekat_sementara > jarak) {
      jarak_terdekat_sementara = jarak;
    }  
  }
  if(arr.indexOf("x")<0){
      return jarak_terdekat_sementara = 0;
    }
  return jarak_terdekat_sementara;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2