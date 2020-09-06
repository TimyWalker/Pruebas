$(".submenu").click(function (){
	$(this).children("ul").slidetoggle();
})

$(".ul").click(function (prop){
	prop.stopPropagation();
})
