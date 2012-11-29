$(function(){
	var manager			= new cManager();

	$('.menu-item').mouseenter(function(){$(this).addClass('menu-item-mover')});
	$('.menu-item').mouseleave(function(){$(this).removeClass('menu-item-mover')});

	$('#chapter-info').click(function(){manager.activateInfo()});
	$('#chapter-schools').click(function(){manager.activateSchools()})
	$('#chapter-tools').click(function(){manager.activateTools()})

});

