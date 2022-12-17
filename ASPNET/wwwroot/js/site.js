let c = 0;
let h = 0;
let x = 0;
let o = 0;

function NewGame() { window.location.href = window.location.href }

function P1Reg()
{	
	let person = prompt("Please enter your name:", "Player1");
	if (person == null || person == "") {
		document.getElementById("Player1").textContent = "Player1 (X)";
	} else {
			document.getElementById("Player1").textContent = person +" (X): " + x;
	}
}

function P2Reg() 
	{
		let person = prompt("Please enter your name:", "Player2");
		if (person == null || person == "") {
			document.getElementById("Player2").textContent = "Player2 (O)";
		} else {
			document.getElementById("Player2").textContent = person + " (O): " + o;
		}
	}


function SaveGame() {
	var background1 = document.getElementById('1-1').style.backgroundImage;
	var background2 = document.getElementById('1-2').style.backgroundImage;
	var background3 = document.getElementById('1-3').style.backgroundImage;
	var background4 = document.getElementById('2-1').style.backgroundImage;
	var background5 = document.getElementById('2-2').style.backgroundImage;
	var background6 = document.getElementById('2-3').style.backgroundImage;
	var background7 = document.getElementById('3-1').style.backgroundImage;
	var background8 = document.getElementById('3-2').style.backgroundImage;
	var background9 = document.getElementById('3-3').style.backgroundImage;
	localStorage.setItem('BackValue1', background1);
	localStorage.setItem('BackValue2', background2);
	localStorage.setItem('BackValue3', background3);
	localStorage.setItem('BackValue4', background4);
	localStorage.setItem('BackValue5', background5);
	localStorage.setItem('BackValue6', background6);
	localStorage.setItem('BackValue7', background7);
	localStorage.setItem('BackValue8', background8);
	localStorage.setItem('BackValue9', background9);

	var name1 = document.getElementById('1-1').name;
	var name2 = document.getElementById('1-2').name;
	var name3 = document.getElementById('1-3').name;
	var name4 = document.getElementById('2-1').name;
	var name5 = document.getElementById('2-2').name;
	var name6 = document.getElementById('2-3').name;
	var name7 = document.getElementById('3-1').name;
	var name8 = document.getElementById('3-2').name;
	var name9 = document.getElementById('3-3').name;
	localStorage.setItem('NameValue1', name1);
	localStorage.setItem('NameValue2', name2);
	localStorage.setItem('NameValue3', name3);
	localStorage.setItem('NameValue4', name4);
	localStorage.setItem('NameValue5', name5);
	localStorage.setItem('NameValue6', name6);
	localStorage.setItem('NameValue7', name7);
	localStorage.setItem('NameValue8', name8);
	localStorage.setItem('NameValue9', name9);

	//var lock1 = document.getElementById('1-1').disabled;
	//var lock2 = document.getElementById('1-2').disabled;
	//var lock3 = document.getElementById('1-3').disabled;	
	//var lock4 = document.getElementById('2-1').disabled;
	//var lock5 = document.getElementById('2-2').disabled;	
	//var lock6 = document.getElementById('2-3').disabled;	
	//var lock7 = document.getElementById('3-1').disabled;	
	//var lock8 = document.getElementById('3-2').disabled;	
	//var lock9 = document.getElementById('3-3').disabled;
	//localStorage.setItem('LockValue1', lock1);
	//localStorage.setItem('LockValue2', lock2);
	//localStorage.setItem('LockValue3', lock3);
	//localStorage.setItem('LockValue4', lock4);
	//localStorage.setItem('LockValue5', lock5);
	//localStorage.setItem('LockValue6', lock6);
	//localStorage.setItem('LockValue7', lock7);
	//localStorage.setItem('LockValue9', lock9);
	//localStorage.setItem('LockValue8', lock8);

}

function LoadGame() {
	var Poga1 = localStorage.getItem("BackValue1");
	document.getElementById('1-1').style.backgroundImage = Poga1;
	var Poga2 = localStorage.getItem("BackValue2");
	document.getElementById('1-2').style.backgroundImage = Poga2;
	var Poga3 = localStorage.getItem("BackValue3");
	document.getElementById('1-3').style.backgroundImage = Poga3;
	var Poga4 = localStorage.getItem("BackValue4");
	document.getElementById('2-1').style.backgroundImage = Poga4;
	var Poga5 = localStorage.getItem("BackValue5");
	document.getElementById('2-2').style.backgroundImage = Poga5;
	var Poga6 = localStorage.getItem("BackValue6");
	document.getElementById('2-3').style.backgroundImage = Poga6;
	var Poga7 = localStorage.getItem("BackValue7");
	document.getElementById('3-1').style.backgroundImage = Poga7;
	var Poga8 = localStorage.getItem("BackValue8");
	document.getElementById('3-2').style.backgroundImage = Poga8;
	var Poga9 = localStorage.getItem("BackValue9");
	document.getElementById('3-3').style.backgroundImage = Poga9;

	var PogaName1 = localStorage.getItem("NameValue1");
	document.getElementById('1-1').name = PogaName1;
	var PogaName2 = localStorage.getItem("NameValue2");
	document.getElementById('1-2').name = PogaName2;
	var PogaName3 = localStorage.getItem("NameValue3");
	document.getElementById('1-3').name = PogaName3;
	var PogaName4 = localStorage.getItem("NameValue4");
	document.getElementById('2-1').name = PogaName4;
	var PogaName5 = localStorage.getItem("NameValue5");
	document.getElementById('2-2').name = PogaName5;
	var PogaName6 = localStorage.getItem("NameValue6");
	document.getElementById('2-3').name = PogaName6;
	var PogaName7 = localStorage.getItem("NameValue7");
	document.getElementById('3-1').name = PogaName7;
	var PogaName8 = localStorage.getItem("NameValue8");
	document.getElementById('3-2').name = PogaName8;
	var PogaName9 = localStorage.getItem("NameValue9");
	document.getElementById('3-3').name = PogaName9;

	//var PogaLock1 = localStorage.getItem("LockValue1");
	//document.getElementById('1-1').disabled = PogaLock1;
	//var PogaLock2 = localStorage.getItem("LockValue2");
	//document.getElementById('1-2').disabled = PogaLock2;
	//var PogaLock3 = localStorage.getItem("LockValue3");
	//document.getElementById('1-3').disabled = PogaLock3;
	//var PogaLock4 = localStorage.getItem("LockValue4");
	//document.getElementById('2-1').disabled = PogaLock4;
	//var PogaLock5 = localStorage.getItem("LockValue5");
	//document.getElementById('2-2').disabled = PogaLock5;
	//var PogaLock6 = localStorage.getItem("LockValue6");
	//document.getElementById('2-3').disabled = PogaLock6;
	//var PogaLock7 = localStorage.getItem("LockValue7");
	//document.getElementById('3-1').disabled = PogaLock7;
	//var PogaLock8 = localStorage.getItem("LockValue8");
	//document.getElementById('3-2').disabled = PogaLock8;
	//var PogaLock9 = localStorage.getItem("LockValue9");
	//document.getElementById('3-3').disabled = PogaLock9;
	KrestikLock();
	NolikLock();
	
}


//function uzvaraso()
//{
//	o = o + 1;
//	document.getElementById("Player2").textContent = person + " (O): " + o;
//}



function Lock() {
	var controls = document.querySelectorAll("button");
	for (var c of controls) {
		c.disabled = true;
	}
}

function UnLockNew() {
	var controls = document.querySelectorAll('[name="NewGame"]');
	for (var c of controls) {
		c.disabled = false;
	}
}

function KrestikLock() {
	var controls = document.querySelectorAll('[name="krestik"]');
	for (var c of controls) {
		c.disabled = true;
	}
}

function NolikLock() {
	var controls = document.querySelectorAll('[name="nolik"]');
	for (var c of controls) {
		c.disabled = true;
	}
}


function WinCheck() {
	if (((document.getElementById("1-1").name) === (document.getElementById("1-2").name)) && ((document.getElementById("1-1").name) === (document.getElementById("1-3").name))) {
		Lock();
		if ((c & 1) == 0) {
			o = o + 1;
			setTimeout(() => alert("Noliki WINS!!!"));
			
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}


	else if (((document.getElementById("2-1").name) == (document.getElementById("2-2").name)) && ((document.getElementById("2-1").name) == (document.getElementById("2-3").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}
	else if (((document.getElementById("3-1").name) == (document.getElementById("3-2").name)) && ((document.getElementById("3-1").name) == (document.getElementById("3-3").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}

	else if (((document.getElementById("1-1").name) == (document.getElementById("2-1").name)) && ((document.getElementById("1-1").name) == (document.getElementById("3-1").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}

	else if (((document.getElementById("1-2").name) == (document.getElementById("2-2").name)) && ((document.getElementById("1-2").name) == (document.getElementById("3-2").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}

	else if (((document.getElementById("1-3").name) == (document.getElementById("2-3").name)) && ((document.getElementById("1-3").name) == (document.getElementById("3-3").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}

	else if (((document.getElementById("1-1").name) == (document.getElementById("2-2").name)) && ((document.getElementById("1-1").name) == (document.getElementById("3-3").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}

	else if (((document.getElementById("1-3").name) == (document.getElementById("2-2").name)) && ((document.getElementById("1-3").name) == (document.getElementById("3-1").name))) {
		Lock();
		if ((c & 1) == 0) {
			setTimeout(() => alert("Noliki WINS!!!"));
		}
		else setTimeout(() => alert("Krestiki WINS!!!"));
	}
	else if (h >= 9) {
		Lock();
		setTimeout(() => alert("NEIZŠĶIRTS!!!"));
	}

	UnLockNew()
}


function getClickID(clickID) {
	const button = document.getElementById(event.target.id);

	c = c + 1;
	h = h + 1;

	if ((c & 1) == 0) {
		button.style.backgroundImage = "url('nolik.jpg')";
		button.name = "nolik";
		document.getElementById(event.target.id).disabled = true;
		
	}
	else {
		button.style.backgroundImage = "url('krestik.jpg')";
		button.name = "krestik";
		document.getElementById(event.target.id).disabled = true;

	}

	WinCheck();


}
