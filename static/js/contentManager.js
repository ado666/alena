cManager			= function(){
};

cManager.prototype	= {
	activateInfo	: function(){
		this.removeActive();
		this.setActive('info');
		var content		= $.ajax('info').done(function(data){
			$('#content').html(data);
		});
	},
	activateSchools	: function(){
		this.removeActive();
		this.setActive('schools');
		$('#content').html('scools');
	},
	activateTools	: function(){
		this.removeActive();
		this.setActive('tools');
		$('#content').html('tools');
	},
	removeActive	: function(){
		$('#chapter-info').removeClass('menu-item-active');
		$('#chapter-schools').removeClass('menu-item-active');
		$('#chapter-tools').removeClass('menu-item-active');
	},
	setActive		: function(chapter){
		$('#chapter-'+chapter).addClass('menu-item-active');
	}
}
