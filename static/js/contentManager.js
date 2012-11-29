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
	activateCourses	: function(){
		this.removeActive();
		this.setActive('courses');
		var content		= $.ajax('courses').done(function(data){
			$('#content').html(data);
		});
	},
	activateContacts: function(){
		this.removeActive();
		this.setActive('contacts');
		var content		= $.ajax('contacts').done(function(data){
			$('#content').html(data);
		});
	},
	removeActive	: function(){
		$('#chapter-info').removeClass('menu-item-active');
		$('#chapter-courses').removeClass('menu-item-active');
		$('#chapter-contacts').removeClass('menu-item-active');
	},
	setActive		: function(chapter){
		$('#chapter-'+chapter).addClass('menu-item-active');
	}
}
