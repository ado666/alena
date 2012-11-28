$(function(){
	$('.menu-item').mouseenter(function(){$(this).addClass('menu-item-mover')});
	$('.menu-item').mouseleave(function(){$(this).removeClass('menu-item-mover')});

	$('#chapter-info').click(function(){
		var content		= $.ajax('info').done(function(data){
			$('#content').html(data)
		});
	});

	$('#chapter-scools').click(function(){
		$('#content').html('scools')
	})

	$('#chapter-tools').click(function(){
//		var content		= $.ajax('')
		$('#content').html('tools')
	})

});

