function dataHandling2(input)
{
	input.splice(2,1,"Provinsi Bandar Lampung");
	input.splice(4,1,"Pria", "SMA Internasional Metro");
	input.splice(1,1,"Roman Alamsyah Elsharawy")
	console.log(input);
	var tgl = input[3].split('/');
	var tgl2 = tgl[1];
	switch(tgl2){
		case "01" : {console.log("Januari");break;}
		case "02" : {console.log("February");break;}
		case "03" : {console.log("Maret");break;}
		case "04" : {console.log("April");break;}
		case "05" : {console.log("Mei");break;}
		case "06" : {console.log("Juni");break;}
		case "07" : {console.log("Juli");break;}
		case "08" : {console.log("Agustus");break;}
		case "09" : {console.log("September");break;}
		case "10" : {console.log("Oktober");break;}
		case "11" : {console.log("November");break;}
		case "12" : {console.log("Desember");break;}
		defarult : console.log("Bulan Invalid");
	}

	var tgl3 = tgl.sort(function(a,b){ return b-a});
	console.log(tgl3);
	
	console.log(input[3].split("/").join("-"));
	if(input[1]==="")
	console.log(input[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);