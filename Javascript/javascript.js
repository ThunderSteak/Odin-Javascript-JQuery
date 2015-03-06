$(document).ready(function(){
	addSquares(16);
	
	$('button').click(function(){
		clearSquares();
		var numSquaresPerSide=prompt("Num squares/side");
		addSquares(numSquaresPerSide);
	});
});




function addSquares(numCols){
	var size=960/numCols;
	for (var i=0;i<numCols;i++){
		addRow(numCols);
	}
	$('.cell').height(size);
	$('.cell').width(size);
	hoverLogic();
}

function addRow(numCols){
	$('<div class="row"></div>').appendTo('.container');
	for (var i=0;i<numCols;i++){
		$('<div class="cell"></div>').appendTo('.row:last');
	}
}

function clearSquares(){
	$('div.container').remove();
	$('button').after('<div class="container"></div>');
}

function hoverLogic(){
	$('.cell').hover(
		function(){
		$(this).css('background-color','black')}
		/*,
		function(){
		$(this).removeClass('black')
		}*/
		);	
}