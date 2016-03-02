window.onload = function() {

	var answer1 = " It's Ontario for $6,086 then Nova Scotia for $6,002 and New Brunswick for $5,606!";
	var answer2 = "The lowest is Quebec for $2,281 then Newfoundland and Labrador for $2,624 and Manitoba for $3,494!";
	var anw = document.getElementById("anw");
	var anw2 = document.getElementById("anw2");

	document.getElementById("answer1").onclick = function () {
		anw.innerHTML = answer1;
		anw.style.color ="#990000";
	}; 

	document.getElementById("answer2").onclick = function () {
		anw2.innerHTML = answer2;
		anw2.style.color ="#990000";
	}; 

}

