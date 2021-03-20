const prevBttn = document.querySelector('.prev');	
const nextBttn = document.querySelector('.next');
const branch= document.querySelectorAll('.branch');
let currentlySelected = 0;

prevBttn.addEventListener('click', function(){
	branch[currentlySelected].classList.remove(".active");
	currentlySelected--;
	branch[currentlySelected].classList.add(".active");
	nextBttn.disabled= false;

	if (currentlySelected === 0){
		prevBttn.disabled = true;
	}
});
nextBttn.addEventListener('click', function(){
	branch[currentlySelected].classList.remove(".active")
	currentlySelected++;
	branch[currentlySelected].classList.add(".active");
	prevBttn.disabled= false;

	if (branch.length=== currentlySelected+ 1){
		nextBttn.disabled = true;
	}
});