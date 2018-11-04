function groupAnimals(animals) {
  animals.sort();
  var tampungKelompok = [];
  var banding = animals[0][0];
  var tampungHewan = [];
  for(var i = 0; i <animals.length; i++){
  	if(animals[i][0] === banding){
  		tampungHewan.push(animals[i])
  	}
  	else
  	{
  		tampungKelompok.push(tampungHewan);
  		tampungHewan = [];
  		banding = animals[i][0];
  		tampungHewan.push(animals[i])
  	}
  	if(i === animals.length-1){
  		tampungKelompok.push(tampungHewan);
  	}
  }
  return tampungKelompok;
  	
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]