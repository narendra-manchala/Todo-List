//checkoff specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//remove the task on clicking delete

$("ul").on('click',"span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

//add new todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class='fa fa-trash' aria-hidden='true'></i> </span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").slideToggle(500);
});