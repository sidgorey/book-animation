	
function Flip()
{	
	document.querySelector('.front').style.WebkitAnimation="rot 0.1s 1";//Chrome, Safari, Opera
	document.querySelector('.front').style.animation="rot 0.1s 1";//General
	document.querySelector('.front').style.visibility="hidden";
	document.querySelector('.anim').style.WebkitAnimation="rot 0.2s 100";
	document.querySelector('.anim').style.animation="rot 0.2s 100";
	document.querySelector('.anim2').style.WebkitAnimation="rot 0.4s 50";
	document.querySelector('.anim2').style.animation="rot 0.4s 50";
	document.querySelector('.anim3').style.WebkitAnimation="rot 0.8s 25";
	document.querySelector('.anim3').style.animation="rot 0.8s 25";
	document.querySelector('.anim4').style.WebkitAnimation="rot 1s 20";
	document.querySelector('.anim4').style.animation="rot 1s 20";
	document.querySelector('.anim5').style.WebkitAnimation="rot 2s 10";
	document.querySelector('.anim5').style.animation="rot 2s 10";

	
}	

var animat=document.querySelector('.anim');
animat.addEventListener("webkitAnimationEnd",Reset,false);
animat.addEventListener("animationend",Reset,false);
	
function Reset()
{
	document.querySelector('.front').style.visibility="visible";
	document.querySelector('.front').style.WebkitAnimation="null 0s 1";
	document.querySelector('.front').style.animation="null 0s 1";
	document.querySelector('.anim').style.WebkitAnimation="null 0s 1";
	document.querySelector('.anim').style.animation="null 0s 1";
	document.querySelector('.anim2').style.WebkitAnimation="null 0s 1";
	document.querySelector('.anim2').style.animation="null 0s 1";
	document.querySelector('.anim3').style.WebkitAnimation="null 0s 1";
	document.querySelector('.anim3').style.animation="null 0s 1";
	document.querySelector('.anim4').style.WebkitAnimation="null 0s 1";
	document.querySelector('.anim4').style.animation="null 0s 1";
	document.querySelector('.anim5').style.WebkitAnimation="null 0s 1";
	document.querySelector('.anim5').style.animation="null 0s 1";
}





