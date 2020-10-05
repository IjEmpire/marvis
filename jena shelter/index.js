function change () {
	
	var statements = [
	'giving our furry friends<br>a place to call home-Marvis Ijenwa',
	'Scratch a dog and you’ll<br>find a permanent job<br>-Franklin P. Jones',
	'You want a friend in<br>Washington Get a dog<br>-Harry S Truman',
	'No matter how you’re<br>feeling, a little dog<br>gonna love you.<br>–Waka Flocka Flame',
	'Money can buy you<br>a fine dog, but only love<br>can make him wag<br>his tail.<br>-Kinky Friedman',
	'You can tell by the<br>kindness of a dog how a<br>human should be.<br>–Captain Beefheart'
	]
	
	var text = document.getElementsByTagName("p");
	var changePtext = text[0].innerHTML = statements[Math.floor(Math.random() * statements.length)];
}

function home() {
	window.location.href = "index.html";
}
function petPage(){
	window.location.href = "pets.html";
}

function adoptPet () {
	alert("We will send you an Email tomorrow.Thank you!!!");
}

function adverts(){
	alert("send us an email about your business/product and we'll get back to you");
}



function submit() {
	var nameInput = document.getElementById("name").value;
	var visitorName = console.log(nameInput);
	
}