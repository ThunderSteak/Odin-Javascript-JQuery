$(document).ready(function(){
	addSquares();
	hoverLogic();
});


function hoverLogic(){
	$('span').hover(
		function(){
		$(this).css('background-color','black')}
		/*,
		function(){
		$(this).removeClass('black')
		}*/
		);	
}
function addSquares(){
	$('<span class="cell"></span>').appendTo('.container');


}