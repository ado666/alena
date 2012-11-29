$(function(){
	var manager			= new cManager();

	$('.menu-item').mouseenter(function(){$(this).addClass('menu-item-mover')});
	$('.menu-item').mouseleave(function(){$(this).removeClass('menu-item-mover')});

	$('#chapter-info').click(function(){manager.activateInfo()});
	$('#chapter-courses').click(function(){manager.activateCourses()})
	$('#chapter-contacts').click(function(){manager.activateContacts()})

});

