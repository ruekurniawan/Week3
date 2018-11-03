//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

// Code
function targetTerdekat(arr) {
  var cekO = 0;
  var cekX = 0;
  var tampungX = 0 ;
  for(var i = 0 ; i < arr.length ; i++)
  {
  	if(arr[i] === "o")
  	{
  		cekO = cekO+i;
  	}
  }
  
  for(var j = 0 ; j < arr.length ; j++)
  {
  	if(arr[j] === "x" && arr[j+1]=== " ")
  	{
  		cekX = cekX+j;
  		
   	}
  // 
  }
  return tampungX = cekX-cekO
  // console.log(arr.length)

  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2