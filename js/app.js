$(document).ready(function(){
	$(document).scroll(function(){
		if($(document).scrollTop() > 100){
			$(".navbar-fixed-top").addClass("header-scroll");
			
		}else{
			$(".navbar-fixed-top").removeClass("header-scroll");
			
		}
	})
});