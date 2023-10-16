let igre = ["Fifa-23", "CoD MW", "Nba2k23", "Assasin Creed Origins", "Naruto"];

function ispisiIgrice(niz) {
	for (let i = 0; i < niz.length; i++) {
		console.log(niz[i]);
	}
}

function daLiJePunoletan(godine) {
	if (godine >= 18) {
		return true;
	} else {
		return false;
	}
}

function pokreniIgru() {
	alert("kliknuli ste na dugme pokreni igru");

	let ime = document.getElementById("ime").value;
	let godine = document.getElementById("godine").value;

	
	if (daLiJePunoletan(godine)) {
		console.log("Dobrodosao/la " + ime + "!");
	} else {
		console.log("Zao nam je " + ime + ", morate biti punoletni za igranje ovih igrica.");
	}

	
		ispisiIgrice(igre);
	
}

function promeniBoju(element) {
    element.style.backgroundColor = "red";
    }
    
    function vratiBoju(element) {
    element.style.backgroundColor = "yellow";
    }


